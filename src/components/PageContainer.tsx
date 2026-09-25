export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20">{children}</div>;
}
