export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-surface py-6 px-10">
      {children}
    </div>
  );
}