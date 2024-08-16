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
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
