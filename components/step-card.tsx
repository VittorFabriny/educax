import { ReactElement } from "react";

type StepProps = {
    title: string;
    icon: React.ElementType;
    description: string;
    variant: "primary" | "secondary" | "accent" ;
    stepNumber?: number;
    className?: string;
};

const variants = {

primary: {
    bg: "bg-white",
    bgLight: "bg-(--primary-color)/10",
    text: "text-(--primary-color)",
    color: "var(--primary-color)",
    hover: "hover:border-[var(--primary-color)]/30",
},

secondary: {
    bg: "bg-white",
    bgLight: "bg-(--secondary-color)/10",
    text: "text-(--secondary-color)",
    color: "var(--secondary-color)",
    hover: "hover:border-[var(--secondary-color)]/30",
},

accent: {
    bg: "bg-white",
    bgLight: "bg-(--color-accent)/10",
    text: "text-(--color-accent)",
    hover: "hover:border-[var(--color-accent)]/30",
}

} as const;

export function StepCard({ icon: Icon, title, description, variant, className, stepNumber }: StepProps) {

    const colors = variants[variant];

    return (
        <div className={`relative flex flex-col w-full gap-4 items-center px-8 py-10 shadow-xl hover:shadow-2xl text-center rounded-2xl border border-black/10 ${colors.hover} ${colors.bg} ${className}`}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${colors.bgLight}`}>
                <Icon size={40} className={colors.text} />
            </div>

            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="max-w-sm">{description}</p>

            {stepNumber ? (
                <div className="absolute right-4 top-4 w-10 h-10 bg-(--primary-color) rounded-full text-white flex items-center justify-center font-semibold">{stepNumber}</div>) : null}
        </div>
    );
}