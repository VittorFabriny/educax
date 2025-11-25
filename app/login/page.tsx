import Link from 'next/link';

import { Logo } from '../../components/logo';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox';

import { CheckIcon } from 'lucide-react'

export default function Login() {
  return (
    <main className="flex items-center justify-center w-screen h-screen p">

      <div className="flex flex-col items-center justify-center max-w-md w-full p-8 shadow-xl rounded-xl border border-black/5">
        <header className="pb-8">
          <Logo path="#" />
        </header>

        <section className='w-full'>
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h1 className="text-2xl font-semibold">Acesse sua conta</h1>
            <p className="text-sm">Entre com suas credenciais para continuar</p>
          </div>
          <form className='flex flex-col w-full'>
            <Input label='Email' id="email" type='email' placeholder='seu@email.com' className='mb-6'/>
            <Input label='Senha' id='password' type='password' placeholder='******' />
            <div className='flex gap-5 justify-between mt-8'>
              <Checkbox label='Lembrar de mim' icon={CheckIcon} />
              <Link href="#" className='text-sm text-(--primary-color) focus:outline-(--primary-color)'> Esqueci minha senha</Link>
            </div>
          </form>

          <footer className="flex flex-col items-center gap-8 mt-10">
            <Button title="Entrar" variant="primary" className='w-full justify-center' />
            <Link href="/signin" className='focus:outline-(--primary-color)'>
              <p className="text-sm">
                Ainda não tem conta ? <span className="text-(--primary-color)">Criar conta</span>
              </p>
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
