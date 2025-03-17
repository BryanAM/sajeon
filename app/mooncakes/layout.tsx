import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="border-indigo-300 p-4">
      <div className="grid grid-cols-4">
        <h1 className="col-span-4 mb-4 text-4xl font-extrabold text-shadow-inverted md:col-span-4">
          Contributing to Sajeon
        </h1>
        <h2 className="text-md col-span-4 mb-6 text-muted-foreground md:col-span-3 md:text-lg">
          Welcome to the mooncakes editor. Here, you can search, add, edit, and
          manage words in our Korean-English dictionary, helping to refine and
          expand our database. Your contributions make this resource more
          accurate and valuable for language learners and enthusiasts alike.
        </h2>
      </div>
      <nav>
        <ul className="flex gap-2 py-4">
          <li>
            <Link href="/mooncakes">Dashboard</Link>
          </li>
          <li>
            <Link href="/mooncakes">Edit Words</Link>
          </li>
          <li>
            <Link href="/mooncakes">Feedback</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
