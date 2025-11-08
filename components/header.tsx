import { BookOpen } from "lucide-react";

import { Button } from "./button";

export function Header() {
  return (

    <header className="w-full h-16 py-4 px-14 flex justify-between items-center bg[var(--color-bg)] border-b border-gray-200">
        
        <a href="#" className="flex items-end gap-2 text-2xl font-bold font-poppins">
          <BookOpen className="h-8 w-8 text-[var(--primary-color)]" />
          <span>EducaX</span>

        </a>
        
        <div className="nav flex gap-8 items-center text-sm font-medium text-[var(--color-text-muted)]">
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </div>

        <div className="login flex gap-4 items-center">
          <a href="#" className="text-sm font-medium text-[var(--color-text-secondary)]">Login</a>
          <Button title="Cadastrar"/>
        </div>


    </header>

  );

}