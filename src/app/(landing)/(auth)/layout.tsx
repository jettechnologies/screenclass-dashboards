export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        className="absolute left-0 top-0 z-10 h-full w-full bg-[rgb(7,103,174,0.15)] lg:w-3/5"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 100% 100%, 0% 100%)",
        }}
      />
      <div className="relative z-30 min-h-screen w-full">{children}</div>
    </div>
  );
}
