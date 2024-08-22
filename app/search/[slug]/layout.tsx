import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";

type LayoutProps = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Korean Dictionary Search Results For "${decodeURIComponent(
      params.slug,
    )}"`,
    openGraph: {
      images: [`/api/og?description=Search Results For - ${params.slug}`],
    },
    twitter: {
      title: `Korean Dictionary Search Results For "${decodeURIComponent(
        params.slug,
      )}"`,
      image: [`/api/og?description=Search Results For - ${params.slug}`],
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <div>
      <h1 className="sajeon-branded-text mb-4 text-center">Sajeon</h1>
      <SajeonSearch
        formAction={formAction}
        inputValue={decodeURIComponent(params.slug)}
      />
      {children}
    </div>
  );
}
