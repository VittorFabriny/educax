import { Button } from '@/components/button';

import Image from 'next/image';

import { CheckCircle } from 'lucide-react';

export function CallToAction() {
  return (
    <main className="flex p-20">
      <section className="w-full grid lg:grid-cols-2 gap-12 items-center bg-[var(--primary-color)]/5 p-10 rounded-2xl">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">Junte-se a milhares de alunos</h1>
          <p className="mt-3">
            Crie sua conta grátis e comece hoje mesmo sua jornada de aprendizado.
          </p>

          <ul className="space-y-3 mt-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[var(--secondary-color)]" />
              Acesso vitalício aos cursos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[var(--secondary-color)]" />
              Certificados reconhecidos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[var(--secondary-color)]" />
              Suporte direto com professores
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-[var(--secondary-color)]" />
              Comunidade exclusiva de alunos
            </li>
          </ul>

          <div className="flex gap-4 mt-12">
            <Button variant="primary" title="Cadastrar grátis " />
            <Button variant="secondary" title="Fazer Login" />
          </div>
        </div>
        <Image
          src="/placeholder.png"
          alt="Placeholder"
          width={400}
          height={400}
          className="rounded-2xl oject-cover shadow-2xl w-full h-auto"
        />
      </section>
    </main>
  );
}
