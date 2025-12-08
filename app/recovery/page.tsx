import Link from 'next/link';

import { Logo } from '../components/logo';
import { Input } from '../components/input';
import { Button } from '../components/button';

import { ArrowLeft } from 'lucide-react'

export default function Recovery() {
  return (
    <main className="flex items-center justify-center w-screen h-screen p">

      <div className="flex flex-col items-center justify-center max-w-md w-full p-8 shadow-xl rounded-xl border border-black/5">
        <header className="pb-8">
          <Logo path="#" />
        </header>

        <section className='w-full'>
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h1 className="text-2xl font-semibold">Recuperar senha</h1>
            <p className="text-sm text-center">Insira seu email e enviaremos um link para redefinir sua senha</p>
          </div>
          <form className='flex flex-col w-full'>
            <Input label='Email' id="email" type='email' placeholder='seu@email.com' />
          </form>

          <footer className="flex flex-col items-center gap-8 mt-10">
            <Button title="Enviar link de recuperação" variant="primary" className='w-full justify-center' />
            <Link href="/login" className='flex items-center justify-center gap-2 focus:outline-(--primary-color)'>
              <ArrowLeft size={20} className='text-black/20' />
              <p className="text-sm text-black/50">Voltar para o login</p>
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
