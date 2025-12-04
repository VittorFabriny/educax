import { Instagram, Linkedin } from 'lucide-react';

import { Logo } from "@/components/logo"

const footerSocialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/vittorfabriny/', target: '_blank' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vittorfabriny/', target: '_blank' },
];

const legalLinks = ['Termos de Uso', 'Política de Privacidade', 'Cookies', 'LGPD'];

export function Footer() {
  return (

    <footer className='flex flex-col items-center justify-center bg-(--color-text-secondary) text-white p-4'>
      <div className='w-full mx-5 lg:mx-20 max-w-444 py-5'>
        <div className='flex flex-col gap-10'>
          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex flex-col gap-4 items-center justify-center '>
              <Logo path='/' />
              <p className='hidden md:block text-pretty max-w-100'>Transformando vidas através da educação online. Aprenda novas habilidades e impulsione sua carreira com os melhores cursos do mercado.</p>
            </div>

            <div className='w-full flex flex-col gap-4'>
              <div className="w-full flex items-center justify-center gap-4">
                {footerSocialLinks.map(({ icon: Icon, href, target }) => (
                  <a
                    key={href || Icon.displayName}
                    href={href}
                    target={target}
                    className="rounded-full bg-(--color-bg)/10 p-3 hover:bg-(--color-bg)/20 hover:text-(--primary-color) transition"
                  >
                    <Icon className="h-6 w-6 cursor-pointer transition" />
                  </a>
                ))}
              </div>
              <span className='flex justify-center text-white/20'>Vittor Fabriny</span>
            </div>
          </div>

          <div className="w-full pt-5 flex items-center justify-center xl:justify-between text-center xl:text-start text-white/40 border-t border-white/40">
            <p className='lg:mx-20'>© 2025 EducaX. Todos os direitos reservados.</p>

            <ul className="hidden xl:flex items-center gap-4">
              <li className='hover:text-white transition cursor-pointer'>Termos de uso</li>
              <li className='hover:text-white transition cursor-pointer'>Política de Privacidade</li>
              <li className='hover:text-white transition cursor-pointer'>Cookies</li>
              <li className='hover:text-white transition cursor-pointer'>LGPD</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
