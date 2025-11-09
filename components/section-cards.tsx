import Image from 'next/image';

import { Button } from './button';

import { Star, Users, Clock } from 'lucide-react';

type CardProps = {
  variant: `popular` | `feedback` | `default`;
  description: string;

  title?: string;
  rating?: number;
  imageurl?: string;
  views?: number;
  duration?: number;
  price?: string;
  classname?: string;
  user?: string;
  userImageUrl?: string;
  userRole?: string;
  icon?: React.ElementType;
};

export function SectionCards(props: CardProps) {
  return (
    <main className="flex flex-col gap-6 rounded-xl py-20">
      {props.variant === 'popular' && (
        <div className="h-full shadow-2xl rounded-xl">
          <Image
            src={props.imageurl!}
            alt="Capa do curso"
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
          <section className="flex flex-col p-8 gap-8">
            <h1 className="text-lg font-semibold text-balance leading-tight">{props.title}</h1>
            <p className="text-sm">{props.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                <span>{props.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{props.views}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{props.duration}h</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-bold text-[var(--primary-color)]">{props.price}</span>
              <Button title="Saiba mais" />
            </div>
          </section>
        </div>
      )}

      {props.variant === 'feedback' && (
        <div className="h-full shadow-2xl rounded-xl">
          <section className="flex flex-col p-8 gap-10">
            <div className="flex space-x-1">
              {[...Array(props.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
            </div>
            <p className="text-sm">{props.description}</p>
            <div className='flex items-centers gap-4 mt-6'>
              <div>
                <Image
                  src={props.userImageUrl!}
                  alt={props.user!}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mb-4"
                />
              </div>
              <div>
                <h1>
                  {props.user}
                </h1>
                <p>{props.userRole}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
