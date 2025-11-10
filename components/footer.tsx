import { BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-(--color-text-secondary) text-white p-4">
      <div className="flex justify-between px-20 mt-10">
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

        <div className="w-full flex justify-evenly">
          <ul className="flex flex-col gap-2 text-white/70">
            <span className="text-white font-bold">Plataforma</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>

          <ul className="flex flex-col gap-2 text-white/70">
            <span className="text-white font-bold">Empresa</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>

          <ul className="flex flex-col gap-2  text-white/70">
            <span className="text-white font-bold">Suporte</span>
            <li>Cursos</li>
            <li>Professores</li>
            <li>Certificados</li>
            <li>Preços</li>
          </ul>
        </div>
      </div>
      <div className="px-20 py-5 pb-5 text-white/40 flex items-center justify-between border-t border-white/40">
        <p className="">© 2025 EducaX. Todos os direitos reservados.</p>

        <ul className="flex items-center gap-4">
          <li>Termos de Uso</li>
          <li>Política de Privacidade</li>
          <li>Cookies</li>
          <li>LGPD</li>
        </ul>
      </div>
    </footer>
  );
}
