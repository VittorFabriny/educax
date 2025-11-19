import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Button } from './button';

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
      {/* Logo */}
      <Link href="/" className="flex items-end gap-2 text-2xl font-bold font-poppins">
        <BookOpen className="h-8 w-8 text-(--primary-color)" />
        <span>EducaX</span>
      </Link>

      {/* Navbar */}
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-(--color-text-muted)">
        <Link href="/cursos">Cursos</Link>
        <Link href="/sobre">Sobre</Link>
        <a
          href="https://www.linkedin.com/in/vittorfabriny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </a>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Button variant="secondary" title="Login" />
        <Button variant="primary" title="Cadastrar" />
      </div>
    </header>
  );
}
