import { SearchProps } from "../../types/SajeonTypes";
import { MooncakesNavigation } from "./mooncakes-navigation";

type LayoutProps = {
  children: React.ReactNode;
  params: SearchProps["params"];
};

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <div className="m-auto max-w-[90rem]">
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
      <div className="border-1 rounded-md border-[1px]  px-4 pb-4">
        <MooncakesNavigation />
        {children}
      </div>
    </div>
  );
}
