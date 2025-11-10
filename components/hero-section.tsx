import Image from 'next/image';
import { Button } from './button';

export function HeroSection() {
  return (
    <main className="mx-20 my-20 bg-[var(--color-bg)]">
      <div className="sectionwrapper flex flex-col items-center justify-center gap-20 md:flex-row">
        <section className="flex flex-col gap-6 pt-20">
          <h1 className="text-4xl font-bold font-poppins max-w-200 lg:text-6xl leading-tight ">
            Aprenda de qualquer lugar com os{' '}
            <span className="text-[var(--primary-color)]">melhores cursos</span> online.
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] text-pretty leading-relaxed">
            Domine novas habilidades no seu ritmo, com suporte de especialistas.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" title="Comece agora grátis" />
            <Button variant="secondary" title="Ver demonstração" />
          </div>

          <div className="flex items-center gap-10 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[var(--primary-color)]">50k+</span>
              <span className="text-sm">Alunos ativos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[var(--primary-color)]">200+</span>
              <span className="text-sm">Cursos disponíveis</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[var(--primary-color)]">95%</span>
              <span className="text-sm">Satisfação</span>
            </div>
          </div>
        </section>
        <section className="w-auto mt-10 p-12 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 rounded-4xl">
          <Image
            src="/hero-image.jpg"
            alt="Imagem ilustrativa de uma pessoa estudando em um laptop"
            width={632}
            height={632}
            className="rounded-4xl shadow-2xl"
          />
        </section>
      </div>
    </main>
  );
}
