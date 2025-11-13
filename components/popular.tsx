import { SectionCards } from './section-cards';

export function Popular() {
  return (
    <main className="p-5 md:px-20 py-20 bg-(--color-bg-color)">
      <section className="flex flex-col align-center text-center gap-4 ">
        <h1 className="text-3xl lg:text-4xl font-bold">Cursos em Destaque</h1>
        <p>Os Cursos mais procurados pelos nossos alunos</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SectionCards
          variant="popular"
          title="Desenvolvimento Web Completo"
          description="Aprenda HTML, CSS, Javascript, React e Node.js do zero ao avançado."
          rating={4.9}
          views={12500}
          duration={40}
          price="R$ 197"
          imageurl="/blog-web-development.png"
        />

        <SectionCards
          variant="popular"
          title="Data Science"
          description="Domine análise de dados, machine learning e visualização com Python."
          rating={4.8}
          views={8300}
          duration={35}
          price="R$ 247"
          imageurl="/data-science-python-programming-charts-graphs.jpg"
        />

        <SectionCards
          variant="popular"
          title="Design UX/UI Profissional"
          description="Crie interfaces incríveis e experiências de usuário memoráveis."
          rating={4.7}
          views={9800}
          duration={30}
          price="R$ 167"
          imageurl="/ux-ui-design-mockups-wireframes-creative-workspace.jpg"
        />

        <SectionCards
          variant="popular"
          title="Marketing Digital Avançado"
          description="Estratégias completas de marketing digital e growth hacking."
          rating={4.6}
          views={15200}
          duration={25}
          price="R$ 127"
          imageurl="/digital-marketing-social-media-analytics-dashboard.jpg"
        />
      </section>
    </main>
  );
}
