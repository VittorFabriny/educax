import { BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerSocialLinks = [
  { icon: Facebook, href: '' },
  { icon: Twitter, href: '' },
  { icon: Instagram, href: 'https://www.instagram.com/vittorfabriny/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vittorfabriny/', target: '_blank' },
];

const footerSections = [
  {
    title: 'Plataforma',
    items: ['Cursos', 'Professores', 'Certificados', 'Preços'],
  },
  {
    title: 'Empresa',
    items: ['Sobre nós', 'Carreiras', 'Blog', 'Imprensa'],
  },
  {
    title: 'Suporte',
    items: ['Central de Ajuda', 'Contato', 'Status', 'Comunidade'],
  },
];

const legalLinks = ['Termos de Uso', 'Política de Privacidade', 'Cookies', 'LGPD'];

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
            {footerSocialLinks.map(({ icon: Icon, href, target }) => (
              <a
                key={href || Icon.displayName}
                href={href}
                target={target}
                className="rounded-full bg-(--color-bg)/10 p-3 hover:bg-(--color-bg)/20 transition"
              >
                <Icon className="h-6 w-6 hover:text-(--primary-color) cursor-pointer transition" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col py-8 lg:flex-row justify-evenly">
          {footerSections.map(({ title, items }) => (
            <ul key={title} className="flex flex-col gap-2 mb-8 text-white/70">
              <span className="text-white font-bold">{title}</span>
              {items.map((item) => (
                <li key={item} className="hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="p-5 lg:px-20 flex items-center justify-center lg:justify-between text-center lg:text-start text-white/40 border-t border-white/40">
        <p>© 2025 EducaX. Todos os direitos reservados.</p>

        <ul className="hidden lg:flex items-center gap-4">
          {legalLinks.map((link) => (
            <li key={link} className="hover:text-white transition cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
