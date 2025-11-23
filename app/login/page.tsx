// Logo [-]
// Label
// Input
// Button [-]
// Borderless Button

import Link from 'next/link';

import { Logo } from '../../components/logo';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

type loginProps = {};

export default function Login(props: loginProps) {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center justify-center p-8 shadow-xl rounded-xl ">
        <header className="pb-8">
          <Logo path="#" />
        </header>

        <section>
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <h1 className="text-2xl">Crie sua conta</h1>
            <p className="text-sm">Preencha seus dados para começar sua jornada</p>
          </div>
          <form className="flex flex-col">
            <Input />
          </form>
          <footer className="flex flex-col items-center gap-4">
            <Button title="Criar conta" variant="primary" />
            <Link href="#">
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
