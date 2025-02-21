import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";
import { SearchProps } from "../../../types/SajeonTypes";

type LayoutProps = {
  params: SearchProps["params"];
  children: React.ReactNode;
};

const decodeSlug = (slug: string) => {
  try {
    return decodeURIComponent(slug);
  } catch (error) {
    console.error("Error decoding URI:", error);
    return slug;
  }
};

export async function generateMetadata({
  params,
}: {
  params: SearchProps["params"];
}) {
  const { slug } = await params;
  let decodedSlug = decodeSlug(slug);

  return {
    title: `Korean Dictionary Search Results For "${decodedSlug}"`,
    openGraph: {
      images: [`/api/og?description=Search Results For - ${decodedSlug}`],
    },
    twitter: {
      title: `Korean Dictionary Search Results For "${decodedSlug}"`,
      image: [`/api/og?description=Search Results For - ${decodedSlug}`],
      card: "summary_large_image",
      creator: "@learnsajeon",
      creatorId: "1826159268351062016",
      description:
        "Explore more results online with Sajeon, a sleek, responsive, and beautiful dictionary.",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  let { slug } = await params;
  let decodedSlug = decodeSlug(slug);
  return (
    <div>
      <h1 className="sajeon-branded-text mb-4 text-center">Sajeon</h1>
      <SajeonSearch formAction={formAction} inputValue={decodedSlug} />
      {children}
    </div>
  );
}
