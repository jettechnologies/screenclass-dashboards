export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-bg-index-two bg-cover bg-center bg-no-repeat">
      <div className="bg-bg-auth-bg-2 absolute left-0 top-0 z-10 h-full w-full bg-cover bg-center bg-no-repeat lg:w-3/5 lg:bg-bg-auth-bg" />
      <div className="relative z-30 min-h-screen w-full">{children}</div>
    </div>
  );
}
