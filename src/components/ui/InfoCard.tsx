import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/50 p-8 backdrop-blur-xl">
      <h3 className="mb-6 text-2xl font-semibold text-[#1e1e1e]">{title}</h3>

      <div className="space-y-6">{children}</div>
    </div>
  );
}

export default InfoCard;
