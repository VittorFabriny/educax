"use client";

import Link from 'next/link';
import { useState } from "react";

import { useAuth } from '@/context/authContext';

import { Logo } from '../components/logo';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

import { CheckIcon } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, setSuccess } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen">

      <div className="flex flex-col items-center justify-center max-w-md w-full p-8 shadow-xl rounded-xl border border-black/5">
        <header className="pb-8">
          <Logo path="#" />
        </header>


        <section className='w-full'>
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h1 className="text-2xl font-semibold">Acesse sua conta</h1>
            <p className="text-sm">Entre com suas credenciais para continuar</p>
          </div>

          <form className='flex flex-col w-full' onSubmit={handleSubmit}>

            <Input
              label='Email'
              name="email"
              id="email"
              type="email"
              placeholder='seu@email.com'
              className='mb-6'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label='Senha'
              name="password"
              id='password'
              type='password'
              placeholder='******'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex gap-5 justify-between mt-8'>
              <Checkbox label='Lembrar de mim' icon={CheckIcon} />
              <Link href="/recovery" className='text-sm text-(--primary-color) focus:outline-(--primary-color)'> Esqueci minha senha</Link>
            </div>

            {error && (
              <p className='text-red-500 text-center mt-7 '>{error}</p>
            )}

            <Button type='submit' variant='primary' title='Entrar' className='w-full mt-8 flex items-center justify-center' />

            <Link href="/signup" className='focus:outline-(--primary-color) flex self-center mt-4'>
              <p className="text-sm">
                Ainda não possui uma conta ? <span className="text-(--primary-color)">Cadastrar</span>
              </p>
            </Link>
          </form>

        </section>

      </div>
    </main>
  );
}
