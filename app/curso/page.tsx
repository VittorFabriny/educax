'use client';

import Image from 'next/image';

import { useState } from 'react';

import {
  Play,
  Heart,
  Clock,
  BookOpen,
  SignalHigh,
  Globe,
  Infinity,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  Check,
} from 'lucide-react';

import { Header } from '../components/header';
import { Button } from '../components/button';
import { StepCard } from '../components/step-card';
import { Footer } from '../components/footer';

export default function curso() {
  const moduleContents = [
    {
      title: 'Módulo 1 : Fundamentos do React',
      description: 'Introdução aos conceitos básicos do React e JSX',
      modules: [
        'Introdução',
        'Componentes e Props',
        'State e Lifecycle',
        'Eventos em React',
        'Renderização Condicional',
        'Listas e Keys',
      ],
    },

    {
      title: 'Módulo 2 : React Hooks',
      description: 'Aprenda a usar os principais hooks do React',
      modules: [
        'useState e useEffect',
        'useContext e useReducer',
        'useMemo e useCallback',
        'Custom Hooks',
        'Regras dos Hooks',
      ],
    },

    {
      title: 'Módulo 3 : Next.js Fundamentos',
      description: 'Conceitos essenciais do framework Next.js',
      modules: [
        'Introdução ao Next.js',
        'Roteamento de Páginas',
        'Server Side Rendering (SSR)',
        'Static Site Generation (SGP)',
        'API Routes',
        'Otimizações de Performance',
      ],
    },
    {
      title: 'Módulo 4: Estilização e UI',
      description: 'Técnicas modernas de estilização',
      modules: [
        'CSS Modules',
        'Styled Components',
        'Tailwind CSS',
        'Responsividade',
        'Temas e Dark Mode',
      ],
    },
    {
      title: 'Módulo 5: Projeto Final',
      description: 'Construa uma aplicação completa do zero',
      modules: [
        'Planejamento do Projeto',
        'Setup e Arquitetura',
        'Desenvolvimento do Frontend',
        'Integração com APIs',
        'Testes',
        'Deploy em Produção',
      ],
    },
  ];

  const studentReview = [
    {
      name: 'Nelio Alcantara',
      description:
        'Curso excepcional! O professor explica de fomra clara e os projetos práticos ajudaram muito no aprendizado.',
      rating: 5,
    },

    {
      name: 'Kassio Alcantara',
      description:
        'Melhor curso de React que já fiz. Consegui meu primeiro emprego como dev após concluir este curso!',
      rating: 5,
    },

    {
      name: 'Joseph Valente',
      description:
        'Muito bom! Conteúdo completo e atualizado. Recomendo para quem quer aprender React de verdade.',
      rating: 4,
    },
  ];

  const maxStars = 5;

  const faqs = [
    {
      question: 'Preciso ter experiência prévia em programação ?',
      answer:
        'Sim, é recomendado ter conhecimentos básicos de HTML, CSS e JavaScript antes de começar este curso. Não é necessário ser expert, mas saber os fundamentos ajudará muito.',
    },
    {
      question: 'O curso oferece certificado de conclusão ?',
      answer:
        'Sim! Ao concluir 100% das aulas e atividades práticas, você receberá automaticamente um certificado digital de conclusão que pode ser compartilhado no LinkedIn.',
    },
    {
      question: 'Por quanto tempo terei acesso ao conteúdo',
      answer:
        'O acesso é vitalício! Você poderá assistir às aulas quantas vezes quiser, para sempre, incluindo futuras atualizações de conteúdo.',
    },
    {
      question: 'Há suporte para tirar dúvidas ?',
      answer:
        'Sim! Você terá acesso à nossa comunidade exclusiva no Discord onde poderá tirar dúvidas com o instrutor e outros alunos.',
    },
    {
      question: 'Preciso pagar alguma mensalidade ?',
      answer:
        'Não! É um pagamento único com acesso vitalício. Sem mensalidades ou taxas adicionais.',
    },
  ];

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [modsOpen, setModsOpen] = useState<number | null>(null);

  function toggleMODS(mIndex: number) {
    setModsOpen(modsOpen === mIndex ? null : mIndex);
  }

  function toggleFAQ(i: number) {
    setFaqOpen(faqOpen === i ? null : i);
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mx-5 lg:mx-20 py-20 mt-20">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="w-full flex flex-col gap-6">
              <span className="rounded-full w-fit px-2 py-1 text-xs font-medium bg-(--primary-color)/10 text-(--primary-color)">
                Desenvolvimento Web
              </span>
              <h1 className="text-3xl lg:text-3xl font-bold font-poppins text-balance">
                Desenvolvimento Web Completo com React e Next.js
              </h1>
              <p className="text-lg text-pretty">
                Aprenda a criar aplicações web modernas do zero até o deploy em produção
              </p>

              <div className="flex items-center gap-5">
                <Button title="Começar Agora" variant="primary" icon={Play} href="/signup" />
                <Button title="Adicionar à minha lista" variant="secondary" icon={Heart} />
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl w-full overflow-hidden shadow-xl cursor-pointer">
              <Image
                src="/react-programming-code.jpg"
                alt="Capa do curso"
                width={800}
                height={450}
                className="w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-center ">
                <div className="flex items-center absolute text-white bottom-5 left-5 gap-4">
                  <Play />
                  <p>Preview do Curso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex flex-col items-center justify-center gap-4 py-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <StepCard
                variant="primary"
                title="42 horas"
                description="Carga horária"
                icon={Clock}
              />
              <StepCard
                variant="primary"
                title="156 aulas"
                description="Conteúdo"
                icon={BookOpen}
              />
              <StepCard
                variant="primary"
                title="Intermediário"
                description="Nível"
                icon={SignalHigh}
              />
              <StepCard variant="primary" title="Português" description="Idioma" icon={Globe} />
            </div>
            <div className="w-full">
              <StepCard
                variant="primary"
                title="Acesso Vitalício"
                description="Sem mensalidades"
                icon={Infinity}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex items-center justify-center">
        <div className="mx-5 max-w-444 lg:mx-20 w-full">
          <div className="pb-20 w-full">
            <div>
              <h1 className="text-3xl font-bold mb-8">Conteúdo do curso</h1>
            </div>
            <div className="mt-4 ">
              <div className="flex flex-col justify-center gap-4 border border-black/10 rounded-2xl p-6">
                {moduleContents.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center border border-black/5 rounded-2xl "
                  >
                    <div
                      className="hover:bg-black/5 p-5 pb-5 rounded-t-2xl cursor-pointer"
                      onClick={() => toggleMODS(index)}
                    >
                      <h2 className="font-semibold">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>

                    {modsOpen === index ? (
                      <div className="mx-5 mt-3 mb-5">
                        <ul className="flex flex-col gap-2">
                          {item.modules.map((mod, mIndex) => (
                            <div key={mIndex} className="flex gap-2">
                              <div>
                                <Check className="text-(--secondary-color)" />
                              </div>
                              <li>{mod}</li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professor */}
      <div className="flex items-center justify-center">
        <div className="mx-5 lg:mx-20 w-full max-w-444 py-20">
          <div>
            <div>
              <h1 className="text-3xl font-bold font-poppins mb-8">Sobre o professor</h1>
            </div>

            <div>
              <div className="border border-black/10 rounded-2xl p-5">
                <div className="flex items-center justify-center gap-5">
                  <Image
                    src="https://avatars.githubusercontent.com/VittorFabriny"
                    alt="Foto do Professor"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold font-poppins">Vittor Fabriny</h2>
                    <span className="text-(--color-text-muted)">
                      Full Stack Developer & Tech Lead
                    </span>
                    <p className="text-sm text-pretty leading-relaxed pt-2">
                      Desenvolvedor com mais de 10 anos de experiência em startups e grandes
                      empresas. Especialista em React, Next.js e arquitetura de aplicações web
                      modernas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificado */}
      <div className="flex items-center justify-center">
        <div className="py-20 mx-5 lg:mx-20 max-w-444 w-full">
          <StepCard
            variant="primary"
            title="Certificado de Conclusão"
            icon={Award}
            description="Ao concluir este curso, voce receberá um certificado digital de conclusão que pode ser compartilhado no LinkedIn e em seu portfólio profissional"
            className="bg-linear-to-r from-(--primary-color)/10 to-(--secondary-color)/10"
          />
        </div>
      </div>

      {/* Avaliações */}
      <div className="flex items-center justify-center">
        <div className="mx-5 max-w-444 lg:mx-20 w-full">
          <div className="w-full">
            <div>
              <h1 className="font-bold">Avaliações dos alunos</h1>
            </div>
            <div className="flex flex-col justify-center gap-6 mt-4">
              {studentReview.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-6 p-5 border  border-black/10 rounded-2xl "
                >
                  <div className="flex gap-1">
                    {Array.from({ length: maxStars }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-pretty leading-relaxed">{item.description}</p>
                  <h2 className="font-semibold text-sm border-t border-black/10 pt-2">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="flex items-center justify-center">
        <div className="mx-5 lg:mx-20 max-w-444 py-20 w-full">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
            </div>

            <div>
              <div className="relative flex flex-col gap-6 py-8 border border-black/10 p-6 rounded-2xl">
                {faqs.map((item, i) => (
                  <div
                    className=" flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="w-full flex flex-col justify-between border-b border-black/10">
                      <div key={i} className="pb-4 font-semibold">
                        {item.question}
                      </div>
                      {faqOpen === i ? (
                        <div className="py-2 pb-4">
                          <p>{item.answer}</p>
                        </div>
                      ) : null}
                    </div>
                    <div>{faqOpen === i ? <ChevronDown /> : <ChevronRight />}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center bg-linear-to-r from-(--primary-color)/10 to-(--secondary-color)/10">
        <div className="mx-5 lg:mx-20 max-w-444 py-20 w-full">
          <div className="">
            <div className="flex flex-col items-center gap-10 justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-balance">
                Pronto para começar este curso?
              </h1>
              <p className="text-lg text-(--color-text-muted) text-pretty">
                Junte-se a milhares de alunos que já transformaram suas carreiras com este curso.
              </p>
              <Button href="/signup" title="Iniciar agora" variant="primary" icon={Play} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
