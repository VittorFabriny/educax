'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { useState } from 'react';
import { useAuth } from '@/context/authContext';

import { Logo } from '../components/logo';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { LoadingDots } from '../components/loadingDots';

export default function Recovery() {
  const [email, setEmail] = useState('');

  const { success, setSuccess, recovery, error } = useAuth();

  async function handleRecovery(e: React.FormEvent) {
    e.preventDefault();
    await recovery(email);
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen p">
      <div className="flex flex-col items-center justify-center max-w-md w-full p-8 shadow-xl rounded-xl border border-black/5">
        <header className="pb-8">
          <Logo path="#" />
        </header>

        {success ? (
          <section className="w-full">
            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <h1 className="text-2xl font-semibold">Email enviado com sucesso</h1>
            </div>
            <div className="flex items-center justify-center py-3">
              <LoadingDots />
            </div>
            <p className="text-center mt-8 text-sm">Confira sua caixa de entrada</p>
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 mt-8 focus:outline-(--primary-color) "
              onClick={() => setSuccess(false)}
            >
              <ArrowLeft size={20} className="text-black/20" />
              <p className="text-sm text-black/50">Voltar para o login</p>
            </Link>
          </section>
        ) : (
          <section className="w-full">
            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <h1 className="text-2xl font-semibold">Recuperar senha</h1>
              <p className="text-sm text-center">
                Insira seu email e enviaremos um link para redefinir sua senha
              </p>
            </div>
            <form className="flex flex-col w-full" onSubmit={handleRecovery}>
              <Input
                label="Email"
                id="email"
                type="email"
                placeholder="seu@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex flex-col items-center gap-8 mt-8">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <Button
                  title="Enviar link de recuperação"
                  variant="primary"
                  className="w-full justify-center"
                  type="submit"
                />
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 focus:outline-(--primary-color)"
                >
                  <ArrowLeft
                    size={20}
                    className="text-black/20"
                    onClick={() => setSuccess(false)}
                  />
                  <p className="text-sm text-black/50">Voltar para o login</p>
                </Link>
              </div>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}
