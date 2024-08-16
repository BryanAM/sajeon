import SajeonTitle from "@/components/SajeonTitle/SajeonTitle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


export default function BuiltWithCards() {
  return (
    <div className="flex justify-between pt-8 pb-8">
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className={` ${buttonVariants({
            variant: "link",
            size: "bare",
          })}`}
          target="_blank"
          rel="noopener"
          href="https://nextjs.org"
        >
          Next.JS
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                  size: "bare",
                })}`}
                target="_blank"
                rel="noopener"
                href="https://nextjs.org"
              >
                @nextjs
              </Link>
            </h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className={` ${buttonVariants({
            variant: "link",
            size: "bare",
          })}`}
          target="_blank"
          rel="noopener"
          href="https://ui.shadcn.com"
        >
          shadcn/ui
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                  size: "bare",
                })}`}
                target="_blank"
                rel="noopener"
                href="https://github.com/shadcn"
              >
                @shadcn
              </Link>
            </h4>
            <p className="text-sm">
              The creator of shadcn-ui. Also, owns a computer.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className={` ${buttonVariants({
            variant: "link",
            size: "bare",
          })}`}
          target="_blank"
          rel="noopener"
          href="https://www.radix-ui.com"
        >
          Radix UI
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              alt="@radix-ui"
            />
            <AvatarFallback>RX</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                  size: "bare",
                })}`}
                target="_blank"
                rel="noopener"
                href="https://www.radix-ui.com"
              >
                @radix-ui
              </Link>
            </h4>
            <p className="text-sm">
              An open source component library optimized for fast
              development, easy maintenance, and accessibility.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className={` ${buttonVariants({
            variant: "link",
            size: "bare",
          })}`}
          target="_blank"
          rel="noopener"
          href="https://lucide.dev"
        >
          Lucide Icons
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src="https://lucide.dev/logo.light.svg"
              alt="@radix-ui"
            />
            <AvatarFallback>RX</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                  size: "bare",
                })}`}
                target="_blank"
                rel="noopener"
                href="https://github.com/lucide-icons/lucide"
              >
                @lucide_icons
              </Link>
            </h4>
            <p className="text-sm">
              Beautiful & consistent icons Made by the community.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className={` ${buttonVariants({
            variant: "link",
            size: "bare",
          })}`}
          target="_blank"
          rel="noopener"
          href="https://tailwindcss.com"
        >
          TailwindCSS
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"
              alt="@tailwindcss"
            />
            <AvatarFallback>TW</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                  size: "bare",
                })}`}
                target="_blank"
                rel="noopener"
                href="https://tailwindcss.com"
              >
                @tailwindcss
              </Link>
            </h4>
            <p className="text-sm">
              A utility-first CSS framework packed with classes that can be
              composed to build any design, directly in your markup.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
  )
}