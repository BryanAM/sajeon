export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-auto flex max-w-5xl flex-col">{children}</div>;
}
