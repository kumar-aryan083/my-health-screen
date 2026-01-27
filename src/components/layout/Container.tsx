import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function Container({ children, size = "lg" }: Props) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
  };

  return <div className={`${sizes[size]} mx-auto px-6`}>{children}</div>;
}
