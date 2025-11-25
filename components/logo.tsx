import Link from 'next/link';
import { BookOpen } from 'lucide-react';

type LogoProps = {
  path: string;
};

export function Logo(props: LogoProps) {
  return (
    <>
      <Link href={props.path} className="flex items-end gap-2 text-2xl font-bold font-poppins focus:outline-(--primary-color)">
        <BookOpen className="h-8 w-8 text-(--primary-color)" />
        <span>EducaX</span>
      </Link>
    </>
  );
}
