import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/app/components/button';

const benefits = [
  'Acesso vitalício aos cursos',
  'Certificados reconhecidos',
  'Suporte direto com professores',
  'Comunidade exclusiva de alunos',
];

export function CallToAction() {
  return (

    <main className='flex items-center justify-center'>
      <div className='w-full mx-5 lg:mx-20 max-w-444 py-20'>
        <div className='bg-(--primary-color)/5 p-10 rounded-3xl'>
          <div>
            <div className='flex flex-col xl:flex-row items-center justify-center '>
              <div className='w-full flex flex-col justify-center py-10 lg:p-10'>
                <h1 className="text-3xl lg:text-4xl font-bold">Junte-se a milhares de alunos</h1>

                <p className="mt-3 text-(--color-text-muted)">
                  Crie sua conta grátis e comece hoje mesmo sua jornada de aprendizado.
                </p>

                <ul className="space-y-3 mt-6">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-(--secondary-color) w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-12">
                  <Button href='/signup' variant="primary" title="Cadastrar grátis" />
                  <Button href='login' variant="secondary" title="Fazer Login" />
                </div>
              </div>

              <Image
                src="/certificate.png"
                alt="Certificado"
                width={400}
                height={400}
                className="rounded-2xl object-cover shadow-2xl w-full h-auto"
              />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
