import { Award, Monitor, Search } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="p-5 lg:px-20 py-20 bg-(--color-bg-alt)/50">
      <div className="title flex flex-col items-center mb-16 ">
        <h1 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">Como funciona</h1>
        <p className="text-xl lg:text4xl">Três passos simples para transformar sua carreira</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
        <div className="relative">
          <div className="flex flex-col gap-4 items-center px-8 py-30 shadow-xl hover:shadow-2xl text-center rounded-b-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-(--primary-color)/10 rounded-full">
              <Search size={40} className="text-(--primary-color)" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Escolha o Curso</h2>
            <p>Navegue por nossa biblioteca com mais de 200 cursos em diversas áreas.</p>
          </div>
          <div>
            <div className="absolute right-10 top-26 w-10 h-10 bg-(--primary-color) rounded-full text-white flex items-center justify-center">
              1
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-4 items-center px-8 py-30 shadow-xl hover:shadow-2xl text-center rounded-b-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-(--primary-color)/10 rounded-full">
              <Monitor size={40} className="text-(--primary-color)" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Estude online</h2>
            <p>Aprenda no seu ritmo com videoaulas, exercícios práticos e suporte.</p>
          </div>

          <div className="absolute right-10 top-26 w-10 h-10 bg-(--primary-color) rounded-full text-white flex items-center justify-center">
            2
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-4 items-center px-8 py-30 shadow-xl hover:shadow-2xl text-center rounded-b-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-(--primary-color)/10 rounded-full">
              <Award size={40} className="text-(--primary-color)" />
            </div>
            <h2 className="text-xl font-semibold">Receba certificado</h2>
            <p>Conqueste seu certificado reconhecido e impulsione sua carreira</p>
          </div>
          <div className="absolute right-10 top-26 w-10 h-10 bg-(--primary-color) rounded-full text-white flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
