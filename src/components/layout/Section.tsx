import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "default" | "soft" | "white";
  center?: boolean;
};

export default function Section({
  children,
  variant = "default",
  center,
}: Props) {
  const variants = {
    default: "bg-backgroundSoft",
    soft: "bg-primarySoft",
    white: "bg-white",
  };

  return (
    <section
      className={`${variants[variant]} py-16 md:py-24 ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </section>
  );
}
