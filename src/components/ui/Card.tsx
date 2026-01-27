import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-xl border border-borderSoft shadow-card hover:shadow-lg transition p-6 ${className}`}
    >
      {children}
    </div>
  );
}
