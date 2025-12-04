import { SectionCards } from './section-cards';

const popularCourses = [
  {
    title: 'Desenvolvimento Web Completo',
    description: 'Aprenda HTML, CSS, Javascript, React e Node.js do zero ao avançado.',
    rating: 4.9,
    views: 12500,
    duration: 40,
    price: 'R$ 197',
    imageurl: '/blog-web-development.png',
  },
  {
    title: 'Data Science',
    description: 'Domine análise de dados, machine learning e visualização com Python.',
    rating: 4.8,
    views: 8300,
    duration: 35,
    price: 'R$ 247',
    imageurl: '/data-science-python-programming-charts-graphs.jpg',
  },
  {
    title: 'Design UX/UI Profissional',
    description: 'Crie interfaces incríveis e experiências de usuário memoráveis.',
    rating: 4.7,
    views: 9800,
    duration: 30,
    price: 'R$ 167',
    imageurl: '/ux-ui-design-mockups-wireframes-creative-workspace.jpg',
  },
  {
    title: 'Marketing Digital Avançado',
    description: 'Estratégias completas de marketing digital e growth hacking.',
    rating: 4.6,
    views: 15200,
    duration: 25,
    price: 'R$ 127',
    imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
  },
];

export function Popular() {
  return (

    <main className='flex items-center justify-center'>
      <div className='w-full mx-5 lg:mx-20 max-w-444 py-20 '>
        <div>
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold">Cursos em Destaque</h2>
            <p className="text-lg text-black/70">Os cursos mais procurados pelos nossos alunos</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {popularCourses.map((course) => (
              <SectionCards key={course.title} variant="popular" {...course} />
            ))}
          </div>

        </div>
      </div>
    </main>










    // <section className="">
    //   <div className="flex flex-col items-center text-center gap-4 mb-10">
    //     <h2 className="text-3xl lg:text-4xl font-bold">Cursos em Destaque</h2>
    //     <p className="text-lg text-black/70">Os cursos mais procurados pelos nossos alunos</p>
    //   </div>

    //   <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    //     {popularCourses.map((course) => (
    //       <SectionCards key={course.title} variant="popular" {...course} />
    //     ))}
    //   </div>
    // </section>
  );
}
