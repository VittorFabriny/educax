"use client";

import Link from 'next/link';

import { useAuth } from '@/context/authContext';
import { useState } from 'react';

import { Logo } from '../components/logo';
import { Input } from '../components/input';
import { Button } from '../components/button';

export default function SignUp() {

  const { register, authLoading, error } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await register(form.name, form.email, form.password);
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen p">

      <div className="flex flex-col items-center justify-center max-w-md w-full p-8 shadow-xl rounded-xl border border-black/5">
        <header className="pb-8">
          <Logo path="#" />
        </header>

        <section className='w-full'>
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h1 className="text-2xl font-semibold">Crie sua conta</h1>
            <p className="text-sm">Preencha os dados para começar sua jornada</p>
          </div>

          <form className='flex flex-col w-full gap-2' onSubmit={handleSubmit}>

            <Input
              label='Nome completo'
              type='text'
              placeholder='Seu nome'
              className='mb-3'
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <Input
              label='Email'
              type="email"
              placeholder='seu@email.com'
              className='mb-3'
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <Input
              label='Senha'
              type='password'
              placeholder='******'
              className='mb-3'
              onChange={e => setForm({ ...form, password: e.target.value })}
            />

            <Input
              label='Confirme sua senha'
              type='password'
              placeholder='******'
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
            />

            {error && (
              <p className="text-center text-red-500 text-sm mt-5">
                {error}
              </p>
            )}

            <div className="flex flex-col items-center gap-8 mt-5">

              <Button
                type="submit"
                title={authLoading ? "Criando..." : "Criar conta"}
                variant="primary"
                className='w-full justify-center'
                disabled={authLoading}
              />

              <Link href="/login" className='focus:outline-(--primary-color)'>
                <p className="text-sm">
                  Já possui uma conta ? <span className="text-(--primary-color)">Fazer login</span>
                </p>
              </Link>

            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
