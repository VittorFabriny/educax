import Link from 'next/link';
import { Button } from './button';
import { Logo } from './logo';

export function Header() {
  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        h-16 px-5 md:px-14
        flex items-center justify-between
        bg-(--color-bg)/60 backdrop-blur-xl
        border-b border-gray-200
        transition-all
      "
    >
      <Logo path="/" />

      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-(--color-text-muted)">
        <Link href="/">Home</Link>
        <Link href="/cursos">Cursos</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>

      <div className="flex gap-4 items-center">
        <Button href='/login' variant="secondary" title="Login" />
        <Button href='/signin' variant="primary" title="Cadastrar" />
      </div>
    </header >
  );
}
