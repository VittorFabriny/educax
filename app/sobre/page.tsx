import Image from "next/image";

import { Target, Eye, Heart, Clock, Award, Users, Headphones, RefreshCcw, Mail } from "lucide-react";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { StepCard } from "@/app/components/step-card";

const aboutValues = [
    {
        title: "Missão",
        description: "Tornar o aprendizado acessível a todos, em qualquer lugar, democratizando o conhecimento através da tecnologia.",
        icon: Target,
        variant: "primary",
    },
    {
        title: "Visão",
        description: "Ser a principal referência em educação digital no país, inspirando transformações na vida de milhões de pessoas.",
        icon: Eye,
        variant: "secondary",
    },
    {
        title: "Valores",
        description: "Compromisso, transparência, acessibilidade e inovação guiam todas as nossas decisões e ações.",
        icon: Heart,
        variant: "accent",
    },
] as const;

const aboutDifferentials = [
    {
        title: "Aprendizado no seu ritmo",
        description: "Estude quando e onde quiser, sem pressão. Você define o seu cronograma.",
        icon: Clock,
        variant: "primary",
    },
    {
        title: "Certificados reconhecidos",
        description: "Receba certificados válidos ao concluir os cursos e impulsione sua carreira.",
        icon: Award,
        variant: "primary",
    },
    {
        title: "Instrutores especialistas",
        description: "Aprenda com profissionais experientes e reconhecidos no mercado.",
        icon: Heart,
        variant: "secondary",
    },
    {
        title: "Comunidade ativa",
        description: "Conecte-se com outros alunos, troque experiências e cresça junto.",
        icon: Users,
        variant: "secondary",
    },
    {
        title: "Suporte ao aluno",
        description: "Conte com nossa equipe para tirar dúvidas e te ajudar em sua jornada.",
        icon: Headphones,
        variant: "accent",
    },
    {
        title: "Aulas atualizadas",
        description: "Conteúdo sempre atual, acompanhando as tendências do mercado.",
        icon: RefreshCcw,
        variant: "accent",
    },
] as const;

export default function Sobre() {
    return (
        <>
            <Header />
            <section className="px-5 lg:px-20 py-28 bg-(--color-bg)" >
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
                            Sobre nós
                        </h1>

                        <div>
                            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                                Conheça a história por trás da nossa plataforma de educação online.
                            </p>
                        </div>

                    </div>
                </div>
            </section >

            {/* Values */}
            <div className="flex justify-center bg-black/1 py-20">
                <div className="mx-5 lg:mx-20 max-w-250">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                        {aboutValues.map((values) => (
                            <StepCard key={values.title} {...values} className="lg:items-start lg:text-left h-80" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="flex items-center justify-center ">
                <div className="w-full mx-5 lg:mx-20 py-20 max-w-444 ">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-4xl font-bold text-balance mb-4">Nossa história</h1>
                            <p>A EducaX nasceu em 2020 com uma missão clara: tornar a educação de qualidade acessível para todos. Percebemos que muitas pessoas enfrentavam barreiras para desenvolver novas habilidades, seja por falta de tempo, recursos ou acesso a instituições tradicionais.
                            </p>
                            <p>
                                Com uma equipe apaixonada por educação e tecnologia, começamos a desenvolver uma plataforma que permitisse que qualquer pessoa, em qualquer lugar, pudesse aprender no seu próprio ritmo. Desde então, já impactamos a vida de milhares de estudantes.
                            </p>
                            <p>
                                Hoje, a EducaX oferece mais de 50 cursos em diversas áreas do conhecimento, contando com instrutores especialistas e uma comunidade ativa de mais de 12 mil alunos. Nossa jornada é impulsionada pelo compromisso de transformar vidas através da educação.
                            </p>
                        </div>
                        <Image src="/diverse-online-learners.png" alt="Imagem nossa historia" width={400} height={400} className="object-cover rounded-2xl shadow-xl w-full" />
                    </div>
                </div>
            </div>

            {/* Differentials */}
            <section className="px-5 lg:px-20 py-28 bg-(--color-bg)" >
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
                            O que nos torna diferentes
                        </h1>

                        <div>
                            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                                Combinamos tecnologia, qualidade e experiência para oferecer a melhor jornada de aprendizado

                            </p>
                        </div>

                    </div>
                </div>
            </section >
            <div className="flex justify-center bg-black/1 py-20">
                <div className="mx-5 lg:mx-20 max-w-250">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex-row items-center justify-center gap-8">
                        {aboutDifferentials.map((differentials) => (
                            <StepCard key={differentials.title} {...differentials} className="lg:items-start lg:text-left h-80" />
                        ))}
                    </div>
                </div>
            </div>

            <section>
                <div className="mx-5 lg:mx-20 py-20">
                    <div className="flex flex-col items-center justify-center gap-4 bg-(--secondary-color)/5 py-10 border border-black/5 rounded-3xl">
                        <div className="rounded-full w-fit p-5 bg-(--primary-color)/10 text-(--primary-color)">
                            <Mail size={30} />
                        </div>
                        <h1 className="text-3xl font-bold mt-4">Entre em contato</h1>
                        <p className="mx-5">Tem alguma dúvida ou sugestão? Estamos sempre prontos para ouvir você e melhorar a sua experiência.</p>
                        <a href="https://www.linkedin.com/in/vittorfabriny/" className="text-(--primary-color)">fabrinyvittor@gmail.com</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}