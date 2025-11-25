import Link from 'next/link';

import { Logo } from '../../components/logo';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox';

import { CheckIcon } from 'lucide-react'

export default function SignIn() {
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
          <form className='flex flex-col w-full'>
            <Input label='Nome completo' id="text" type='text' placeholder='Seu nome'/>
            <Input label='Email' id="email" type='email' placeholder='seu@email.com'/>
            <Input label='Senha' id='password' type='password' placeholder='******' />
            <Input label='Confirme sua senha' id='password' type='password' placeholder='******' />
           
          </form>

          <footer className="flex flex-col items-center gap-8 mt-10">
            <Button title="Criar conta" variant="primary" className='w-full justify-center' />
            <Link href="/login" className='focus:outline-(--primary-color)'>
              <p className="text-sm">
                Já possui uma conta ? <span className="text-(--primary-color)">Fazer login</span>
              </p>
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
