import { formAction } from "@/app/actions";
import SajeonSearch from "@/components/SajeonSearch/SajeonSearch";

type LayoutProps = {
  params: { slug: string };
  children: React.ReactNode;
};

export default function RootLayout({ children, params }: LayoutProps) {
  return <div>{children}</div>;
}
