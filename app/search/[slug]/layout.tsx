import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";

type LayoutProps = {
  params: { slug: string };
  children: React.ReactNode;
};

const decodeSlug = (params: { slug: string }) => {
  try {
    return decodeURIComponent(params.slug);
  } catch (error) {
    console.error("Error decoding URI:", error);
    return params.slug;
  }
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  let decodedSlug = decodeSlug(params);

  return {
    title: `Korean Dictionary Search Results For "${decodedSlug}"`,
    openGraph: {
      images: [`/api/og?description=Search Results For - ${params.slug}`],
    },
    twitter: {
      title: `Korean Dictionary Search Results For "${decodedSlug}"`,
      image: [`/api/og?description=Search Results For - ${params.slug}`],
      card: "summary_large_image",
      description:
        "Explore more results online with Sajeon, a sleek, responsive, and beautiful dictionary.",
    },
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  let decodedSlug = decodeSlug(params);
  return (
    <div>
      <h1 className="sajeon-branded-text mb-4 text-center">Sajeon</h1>
      <SajeonSearch formAction={formAction} inputValue={decodedSlug} />
      {children}
    </div>
  );
}
