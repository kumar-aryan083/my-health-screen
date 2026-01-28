import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export default function Card({
  children,
  className = "",
  padded = true,
}: CardProps) {
  return (
    <div
      className={[
        "bg-white border border-borderSoft shadow-card transition",
        padded ? "p-6 rounded-xl" : "rounded-3xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
