import Image from 'next/image';
import { Button } from './button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="px-5 lg:px-20 py-28 bg-(--color-bg)">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl xl:text-6xl font-bold font-poppins leading-tight">
            Aprenda de qualquer lugar com os
            <span className="text-(--primary-color)"> melhores cursos</span> online.
          </h1>

          <p className="text-lg lg:text-lg text-(--color-text-muted) leading-relaxed">
            Domine novas habilidades no seu ritmo, com suporte de especialistas.
          </p>

          <div className="flex gap-4 mt-4">
            <Button href='/signin' variant="primary" title="Comece agora grátis" icon={ArrowRight} />
            <Button variant="secondary" title="Ver demonstração" icon={Play} />
          </div>

          <div className="flex gap-10 mt-8">
            {[
              { value: '50k+', label: 'Alunos ativos' },
              { value: '200+', label: 'Cursos disponíveis' },
              { value: '95%', label: 'Satisfação' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-(--primary-color)">{item.value}</span>
                <span className="text-sm text-(--color-text-muted)">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-12 rounded-4xl bg-linear-to-br from-(--primary-color)/5 to-(--secondary-color)/5">
          <Image
            src="/hero-image.jpg"
            alt="Pessoa estudando em um laptop"
            width={632}
            height={632}
            className="rounded-4xl shadow-2xl"
          />

          <div className="absolute right-6 top-6 bg-(--color-accent) p-2 px-4 rounded-full shadow-lg">
            <p className="text-sm font-medium">✨ Novo curso disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
}
