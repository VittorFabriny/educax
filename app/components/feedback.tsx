import { SectionCards } from './section-cards';

const feedbackData = [
  {
    rating: 5,
    description:
      '"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."',
    user: 'Ana Silva',
    userRole: 'Senior Backend Developer',
    userImageUrl: 'https://avatars.githubusercontent.com/neliocaa',
    classname: 'leading-relaxed',
  },
  {
    rating: 5,
    description:
      '"A qualidade do ensino é excepcional. Os professores são especialistas e sempre disponíveis para tirar dúvidas."',
    user: 'Kassio Eduardo',
    userRole: 'Senior Fullstack Developer',
    userImageUrl: 'https://avatars.githubusercontent.com/kassiogluten',
  },
  {
    rating: 5,
    description:
      '"Mudei completamente de carreira aos 35 anos. O suporte da EducaX foi fundamental para minha transição."',
    user: 'Joseph Oliveira',
    userRole: 'Senior Frontend Developer',
    userImageUrl: 'https://avatars.githubusercontent.com/josepholiveira',
  },
];

export function Feedback() {
  return (
    <main className="flex items-center justify-center bg-(--color-bg-alt)/50">
      <div className="w-full mx-5 lg:mx-20 max-w-444 py-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-3xl lg:text-4xl font-bold font-poppins">
              O que nossos alunos dizem
            </h1>
            <p className="text-(--color-text-muted)">
              Histórias reais de transformação profissional
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {feedbackData.map((feedback) => (
              <SectionCards key={feedback.user} variant="feedback" {...feedback} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
