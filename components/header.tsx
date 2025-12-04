"use client";

import { useContext, useState } from 'react';
import { AuthContext } from "../app/context/authContext";

import { useAuth } from "../app/context/authContext";

import { } from 'react';
import Link from 'next/link';
import Image from 'next/image';


import { Menu, X } from 'lucide-react';

import { Button } from './button';
import { Logo } from './logo';

type HeaderProps = {
  // userAuth: boolean;
};


export function Header(props: HeaderProps) {
  const auth = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  
  const { isAuthenticated, login, logout } = useAuth();


  return (
    <header className='flex items-center justify-center fixed inset-x-0 top-0 z-50 bg-(--color-bg)/60 backdrop-blur-lg transition-all'>
      <div className='w-full max-w-444 '>

        <div className='w-full border-b border-gray-200'>
          <div className='flex items-center justify-between p-5 lg:mx-20'>
            <Logo path="/" />
            <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-(--color-text-muted)">
              <Link href="/">Home</Link>
              <Link href="/cursos">Cursos</Link>
              <Link href="/sobre">Sobre</Link>
            </nav>

            {!isAuthenticated ? (
              <div className="hidden md:flex gap-4 items-center">
                <Button variant="secondary" title="Login" onClick={login} />
                <Button href='/signin' variant="primary" title="Cadastrar" />
              </div>
            ) : (
              <div className='hidden md:flex items-center gap-4'>
                <Button variant="secondary" title="Sair" onClick={logout} />
                <div className='rounded-full'>
                  <Image src="https://avatars.githubusercontent.com/VittorFabriny" width={40} height={40} alt="Imagem de Perfil" className='rounded-full' />
                </div>
              </div>)
            }

            <div className='md:hidden'>
              <div className='cursor-pointer'>
                {open ? <X className="md:hidden w-8 h-8 text-(--color-text-muted)" onClick={() => setOpen(!open)} /> : (
                  <Menu className="md:hidden w-8 h-8 text-(--color-text-muted)" onClick={() => setOpen(!open)} />)}
              </div>
            </div>

          </div>
        </div>

        <div className={`${!open ? "hidden" : "w-full h-screen"}`}>
          <div className={`mx-10`}>
            <div className='flex flex-col gap-8 mt-10 mb-20 text-lg font-medium text-(--color-text-muted)'>
              <Link href="/" className='border-b border-gray-300 pb-2'>Home</Link>
              <Link href="/cursos" className='border-b border-gray-300 pb-2'>Cursos</Link>
              <Link href="/sobre" className='border-b border-gray-300 pb-2'>Sobre</Link>

              {!isAuthenticated ? (<Link href="#" className='border-b border-gray-300 pb-2' onClick={login}>Login</Link>) : (<Link href="#" className='border-b border-gray-300 pb-2' onClick={logout}>Sair</Link>)}

              {!isAuthenticated ? (<Link href="/signin" className='border-b border-gray-300 pb-2'>Cadastrar</Link>) : null}

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
