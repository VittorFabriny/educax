import { SectionCards } from './section-cards';

export function Feedback() {
  return (
    <main className="w-full py-20 bg-(--color-bg-alt)/50">
      <div className="px-5 lg:px-20 flex flex-col items-center gap-8">
        <div className="flex flex-col text-center gap-4">
          <h1 className="font-3xl lg:text-4xl font-bold font-poppins">O que nossos alunos dizem</h1>
          <p>Histórias reais de transformação profissional</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <SectionCards
            variant="feedback"
            rating={5}
            description='"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."'
            user="Ana Silva"
            userRole="Desenvolvedora Front-end"
            userImageUrl="/professional-woman-smiling-headshot.png"
            classname="leading-relaxed"
          />
          <SectionCards
            variant="feedback"
            rating={5}
            description='"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."'
            user="Carlos Santos"
            userRole="Data Scientist"
            userImageUrl="/professional-man-smiling-headshot.png"
          />
          <SectionCards
            variant="feedback"
            rating={5}
            description='"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."'
            user="Mariana Costa"
            userRole="UX Designer"
            userImageUrl="/professional-woman-designer-smiling-headshot.jpg"
          />
        </div>
      </div>
    </main>
  );
}
