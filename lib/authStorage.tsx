export type StoredUser = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
};

const USERS_KEY = "educax_users_v1";
const CURRENT_KEY = "educax_current_user_v1";

function simpleHash(str: string) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return (hash >>> 0).toString(16);
}

function isClient() {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getUsers(): StoredUser[] {
    if (!isClient()) return [];
    try {
        const raw = localStorage.getItem(USERS_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as StoredUser[];
    } catch {
        return [];
    }
}

export function saveUsers(users: StoredUser[]) {
    if (!isClient()) return;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByEmail(email: string): StoredUser | undefined {
    const users = getUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: Omit<StoredUser, "createdAt">) {
    const users = getUsers();
    const now = new Date().toISOString();
    const toStore: StoredUser = { ...user, createdAt: now };
    users.push(toStore);
    saveUsers(users);
    return toStore;
}

export function setCurrentUser(user: StoredUser | null) {
    if (!isClient()) return;
    if (!user) {
        localStorage.removeItem(CURRENT_KEY);
    } else {
        localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    }
}

export function getCurrentUser(): StoredUser | null {
    if (!isClient()) return null;
    try {
        const raw = localStorage.getItem(CURRENT_KEY);
        if (!raw) return null;
        return JSON.parse(raw) as StoredUser;
    } catch {
        return null;
    }
}

export function makeUserId(): string {
    return "u_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function hashPassword(password: string) {
    return simpleHash(password);
}