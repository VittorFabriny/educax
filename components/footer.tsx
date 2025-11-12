import { BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-(--color-text-secondary) text-white p-4">
      <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 mt-10">
        <div className="flex flex-col gap-6 mb-10">
          <a className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-(--primary-color)" />
            <span className="text-2xl font-bold">EducaX</span>
          </a>
          <p className="max-w-100">
            Transformando vidas através da educação online. Aprenda novas habilidades e impulsione
            sua carreira com os melhores cursos do mercado.
          </p>
          <div className="flex gap-4">
            <a href="" className="rounded-full bg-(--color-bg)/10 p-3">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-(--primary-color)" />
            </a>
            <a href="" className="rounded-full bg-(--color-bg)/10 p-3">
              <Twitter className="h-6 w-6 cursor-pointer hover:text-(--primary-color)" />
            </a>
            <a
              href="https://www.instagram.com/vittorfabriny/"
              className="rounded-full bg-(--color-bg)/10 p-3"
            >
              <Instagram className="h-6 w-6 cursor-pointer hover:text-(--primary-color)" />
            </a>
            <a
              href="https://www.linkedin.com/in/vittorfabriny/"
              className="rounded-full bg-(--color-bg)/10 p-3"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-(--primary-color)" />
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col py-8 lg:flex-row justify-evenly">
          <ul className="flex flex-col gap-2 mb-8 text-white/70">
            <span className="text-white font-bold">Plataforma</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>

          <ul className="flex flex-col gap-2 mb-8 text-white/70">
            <span className="text-white font-bold">Empresa</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>

          <ul className="flex flex-col gap-2 mb-8 text-white/70">
            <span className="text-white font-bold">Suporte</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>
        </div>
      </div>
      <div className="p-5 flex items-center justify-center lg:justify-between lg:px-20 text-center lg:text-start  text-white/40 border-t border-white/40">
        <p className="">© 2025 EducaX. Todos os direitos reservados.</p>

        <ul className="hidden lg:flex items-center gap-4">
          <li>Termos de Uso</li>
          <li>Política de Privacidade</li>
          <li>Cookies</li>
          <li>LGPD</li>
        </ul>
      </div>
    </footer>
  );
}
