import { Award, Monitor, Search } from 'lucide-react';

import { StepCard } from "@/components/step-card"


const guideSteps = [
  {
    title: "Escolha o curso",
    description: "Navegue por nossa biblioteca com mais de 200 cursos em diversas áreas.",
    stepNumber: 1,
    icon: Search,
    variant: "primary",
  },
  {
    title: "Estude online",
    description: "Aprenda no seu ritmo com videoaulas, exercícios práticos e suporte.",
    icon: Monitor,
    stepNumber: 2,
    variant: "primary",
  },
  {
    title: "Receba certificado",
    description: "Conquiste seu certificado reconhecido e impulsione sua carreira.",
    icon: Award,
    stepNumber: 3,
    variant: "primary",
  },
] as const;

export function HowItWorks() {
  return (

    <section className='flex items-center justify-center bg-(--color-bg-alt)/50'>
      <div className='w-full mx-5 lg:mx-20 max-w-444 py-20'>
        <div>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">Como funciona</h2>
            <p className="text-xl">Três passos simples para transformar sua carreira</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-fit flex flex-col lg:flex-row items-center justify-center gap-8">
              {guideSteps.map((course) => (
                <StepCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
