export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Korean Dictionary Search Results For "${params.slug}"`,
    openGraph: {
      images: [`/api/og?description=Search Results For - ${params.slug}`],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
