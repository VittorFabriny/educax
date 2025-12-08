import { SectionCards } from './section-cards';

const feedbackData = [
  {
    rating: 5,
    description:
      '"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."',
    user: 'Ana Silva',
    userRole: 'Desenvolvedora Front-end',
    userImageUrl: '/professional-woman-smiling-headshot.png',
    classname: 'leading-relaxed',
  },
  {
    rating: 5,
    description:
      '"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."',
    user: 'Carlos Santos',
    userRole: 'Data Scientist',
    userImageUrl: '/professional-man-smiling-headshot.png',
  },
  {
    rating: 5,
    description:
      '"Graças à plataforma consegui um emprego na área de tecnologia em 3 meses. Os cursos são muito práticos e atualizados."',
    user: 'Mariana Costa',
    userRole: 'UX Designer',
    userImageUrl: '/professional-woman-designer-smiling-headshot.jpg',
  },
];

export function Feedback() {
  return (

    <main className='flex items-center justify-center bg-(--color-bg-alt)/50'>
      <div className='w-full mx-5 lg:mx-20 max-w-444 py-20'>
        <div className='flex flex-col gap-20'>
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-3xl lg:text-4xl font-bold font-poppins">O que nossos alunos dizem</h1>
            <p className="text-(--color-text-muted)">Histórias reais de transformação profissional</p>
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
