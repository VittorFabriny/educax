import { Search, TrendingUp, Award, ArrowLeft, Sparkles } from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/button"
import { StepCard } from "@/components/step-card"
import { Footer } from "@/components/footer"

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

export default function Cursos() {
    return (
        <>
            <Header />
            <main>

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
                    <div className="mx-5 lg:mx-20 pb-20 flex flex-col lg:flex-row items-center justify-center gap-8">
                        {courseStat.map((course) => (
                            <StepCard key={course.title} {...course} />
                        ))}
                    </div>
                </div>

                {/* Courses */}
                <section>
                    <main>
                        <header className="my-20 h-50 flex items-center justify-center bg-(--secondary-color)/5">


                            <div className="relative w-full mx-5 lg:mx-20 p-10 flex items-center justify-between bg-white border border-black/10 rounded-2xl shadow-sm">
                                <div className="absolute left-10 rounded-full bg-(--secondary-color)/10 text-(--secondary-color)/50 p-3">
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

                        </header>
                    </main>
                </section>


                <Footer />
            </main>

        </>
    )
}