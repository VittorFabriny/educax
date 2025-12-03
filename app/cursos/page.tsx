import { Search, TrendingUp, Award, ArrowLeft, Sparkles } from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/button"
import { StepCard } from "@/components/step-card"
import { Input } from "@/components/input"
import { Footer } from "@/components/footer"
import { SectionCards } from "@/components/section-cards"

const courseStat = [
    {
        title: "50+",
        description: "Cursos disponíveis",
        icon: Search,
        variant: "primary",
    },
    {
        title: "12k+",
        description: "Alunos ativos",
        icon: TrendingUp,
        variant: "secondary",
    },
    {
        title: "95%",
        description: "Taxa de conclusão",
        icon: Award,
        variant: "accent",
    },
] as const;

const popularCourses = [
    {
        title: 'Fundamentos do React',
        description: 'Aprenda os conceitos fundamentais do React do zero, incluindo componentes, hooks e estado.',
        rating: 4.9,
        views: 12500,
        duration: 8,
        imageurl: '/blog-web-development.png',
    },
    {
        title: 'UI/UX Design Moderno',
        description: 'Domine os princípios de design de interface e experiência do usuário com projetos práticos.',
        rating: 4.8,
        views: 8300,
        duration: 35,
        imageurl: '/data-science-python-programming-charts-graphs.jpg',
    },
    {
        title: 'Python para Ciência de Dados',
        description: 'Explore análise de dados, visualização e machine learning usando Python e suas bibliotecas.',
        rating: 4.7,
        views: 9800,
        duration: 30,
        imageurl: '/ux-ui-design-mockups-wireframes-creative-workspace.jpg',
    },
    {
        title: 'Marketing Digital Avançado',
        description: 'Estratégias completas de marketing digital, SEO, mídias sociais e análise de resultados.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'JavaScript Avançado',
        description: 'Conceitos avançados de JavaScript: closures, promises, async/await e design patterns.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Figma do Zero ao Avançado',
        description: 'Crie designs profissionais e protótipos interativos usando a ferramenta mais popular do mercado.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'SQL e Banco de Dados',
        description: 'Domine SQL, modelagem de dados e administração de bancos relacionais e NoSQL.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Gestão de Projetos Ágeis',
        description: 'Aprenda metodologias ágeis, Scrum, Kanban e ferramentas de gestão de projetos.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Next.js e React Avançado',
        description: 'Construa aplicações full-stack com Next.js, SSR, SSG e as melhores práticas.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Photoshop e Edição de Imagens',
        description: 'Técnicas profissionais de edição, manipulação e criação de arte digital no Photoshop.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Excel Avançado para Negócios',
        description: 'Fórmulas avançadas, dashboards, macros e análise de dados profissional no Excel.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
    {
        title: 'Node.js e APIs REST',
        description: 'Desenvolva APIs robustas e escaláveis com Node.js, Express e bancos de dados.',
        rating: 4.6,
        views: 15200,
        duration: 25,
        imageurl: '/digital-marketing-social-media-analytics-dashboard.jpg',
    },
];


export default function Cursos() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full">

                {/* Hero */}
                <div>
                    <section className="px-5 lg:px-20 py-28 bg-(--color-bg)" >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                            <div className="flex flex-col gap-6 text-center">
                                <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
                                    Encontre o curso ideal <span className="text-(--primary-color)">para você</span>
                                </h1>

                                <div>
                                    <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                                        Aprenda no seu ritmo com conteúdos preparados por especialistas.
                                    </p>

                                    <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                                        Mais de 50 cursos disponíveis nas áreas mais buscadas do mercado.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section >

                    {/* Stats */}
                    <div className="w-full pb-20 flex flex-col lg:flex-row items-center justify-center gap-8">
                        {courseStat.map((course) => (
                            <StepCard key={course.title} {...course} />
                        ))}
                    </div>
                </div>

                {/* Courses */}
                <section className="w-full">

                    <header className="w-full bg-(--secondary-color)/5 py-10">
                        <div className="mx-5 lg:mx-20">
                            <div className="w-full p-10 flex items-center justify-between bg-white border border-black/10 rounded-2xl shadow-sm">
                                <div className="absolute left-28 rounded-full bg-(--secondary-color)/10 text-(--secondary-color)/50 p-3">
                                    <Sparkles />
                                </div>
                                <div className="ml-18 flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold font-poppins text-foreground">Você viu alguns cursos em destaque na landing page
                                    </h2>
                                    <p className="">Aqui está a lista completa de todos os nossos cursos disponíveis.
                                    </p>
                                </div>

                                <Button title="Voltar para Home" variant="secondary" icon={ArrowLeft} />
                            </div>
                        </div>
                    </header>

                    {/* Input Nav */}
                    <section className="pb-4 border-b border-black/10 py-6">
                        <div className="mx-5">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-full">
                                    <Input label="" type="search" placeholder="Buscar cursos..." />
                                </div>
                                <div className="w-full flex gap-2">
                                    <Input label="" type="select" placeholder="Categoria" />
                                    <Input label="" type="select" placeholder="Duração" />
                                    <Input label="" type="select" placeholder="Nível" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Grid */}
                    <section>
                        <div className="mx-5 mt-20">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {popularCourses.map((course) => (
                                            <SectionCards key={course.title} variant="popular" {...course} />
                                        ))}
                                    </div>
                                </div>

                                <Button title="Carregar mais cursos" variant="secondary" className="m-20" />
                            </div>
                        </div>
                    </section>


                </section>

                <Footer />
            </main>

        </>
    )
}