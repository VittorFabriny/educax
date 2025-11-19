import { Award, Monitor, Search } from 'lucide-react';

type StepProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: number;
};

function StepCard({ icon: Icon, title, description, stepNumber }: StepProps) {
  return (
    <div className="relative flex flex-col gap-4 items-center px-8 py-10 shadow-xl hover:shadow-2xl text-center rounded-b-2xl bg-white">
      <div className="flex items-center justify-center w-16 h-16 bg-(--primary-color)/10 rounded-full">
        <Icon size={40} className="text-(--primary-color)" />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p>{description}</p>

      <div className="absolute right-4 top-4 w-10 h-10 bg-(--primary-color) rounded-full text-white flex items-center justify-center font-semibold">
        {stepNumber}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="p-5 lg:px-20 py-20 bg-(--color-bg-alt)/50">
      <header className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">Como funciona</h2>
        <p className="text-xl">Três passos simples para transformar sua carreira</p>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <StepCard
          icon={Search}
          title="Escolha o curso"
          description="Navegue por nossa biblioteca com mais de 200 cursos em diversas áreas."
          stepNumber={1}
        />
        <StepCard
          icon={Monitor}
          title="Estude online"
          description="Aprenda no seu ritmo com videoaulas, exercícios práticos e suporte."
          stepNumber={2}
        />
        <StepCard
          icon={Award}
          title="Receba certificado"
          description="Conquiste seu certificado reconhecido e impulsione sua carreira."
          stepNumber={3}
        />
      </div>
    </section>
  );
}
