'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import {
  getUsers,
  findUserByEmail,
  addUser,
  setCurrentUser,
  getCurrentUser,
  makeUserId,
  hashPassword,
  StoredUser,
} from '../lib/authStorage';

type PublicUser = {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
};

type AuthContextType = {
  user: PublicUser | null;
  initializing: boolean;
  authLoading: boolean;
  error: string | null;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getAllUsers: () => PublicUser[];
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  recovery: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<PublicUser | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const stored = getCurrentUser();
    setUser(
      stored
        ? {
            id: stored.id,
            name: stored.name,
            email: stored.email,
            createdAt: stored.createdAt,
          }
        : null
    );
    setInitializing(false);
  }, []);

  function syncUserFromStorage() {
    const stored = getCurrentUser();
    setUser(
      stored
        ? {
            id: stored.id,
            name: stored.name,
            email: stored.email,
            createdAt: stored.createdAt,
          }
        : null
    );
  }

  async function register(name: string, email: string, password: string, confirmPassword: string) {
    setError(null);
    setAuthLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      setAuthLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Senha deve ter ao menos 6 caracteres.');
      setAuthLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Confirmação de senha incorreta.');
      setAuthLoading(false);
      return;
    }

    const existing = findUserByEmail(email);
    if (existing) {
      setError('E-mail já cadastrado.');
      setAuthLoading(false);
      return;
    }

    const id = makeUserId();
    const toSave = {
      id,
      name,
      email,
      passwordHash: hashPassword(password),
    };

    const saved = addUser(toSave);

    setAuthLoading(false);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      router.push('/login');
    }, 5000);
  }

  async function login(email: string, password: string) {
    setError(null);

    if (!email || !password) {
      setError('Preencha todos os campos.');
      setAuthLoading(false);
      return;
    }

    const found = findUserByEmail(email);
    if (!found || found.passwordHash !== hashPassword(password)) {
      setError('Usuário ou senha incorretos.');
      setAuthLoading(false);
      return;
    }
    setCurrentUser(found);
    syncUserFromStorage();

    setAuthLoading(false);

    router.push('/cursos');
  }

  async function recovery(email: string) {
    setAuthLoading(true);
    setError(null);

    const found = findUserByEmail(email);

    if (!found) {
      setError('Email não cadastrado');
      setAuthLoading(false);
      return;
    }
    setAuthLoading(false);
    setSuccess(true);
  }

  function logout() {
    setError(null);
    setAuthLoading(true);

    setCurrentUser(null);
    syncUserFromStorage();

    setAuthLoading(false);
  }

  function getAllUsers() {
    return getUsers().map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      createdAt: u.createdAt,
    }));
  }

  const value: AuthContextType = {
    user,
    initializing,
    authLoading,
    error,
    register,
    login,
    logout,
    getAllUsers,
    success,
    recovery,
    setSuccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
