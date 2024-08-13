import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeamMemberType } from "@/types/SajeonTypes";

export default function TeamMember({
  name,
  role,
  avatarURL,
  avatarAlt,
  avatarFallback,
  intro,
  linkedinURL,
  githubURL,
  websiteURL,
  websiteTag,
}: TeamMemberType) {
  return (
    <Card className="flex flex-1 flex-col justify-between">
      <CardHeader>
        <Avatar>
          <AvatarImage src={avatarURL} alt={avatarAlt} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="self-start">
        <p>{intro}</p>
      </CardContent>
      <CardFooter>
        <ul className="flex flex-wrap">
          <li>
            <Link
              className={` ${buttonVariants({
                variant: "link",
              })}`}
              href={linkedinURL}
              target="_blank"
              rel="noopener"
            >
              <LinkedInLogoIcon />
              <span className="px-2">Linkedin</span>
            </Link>
          </li>
          {githubURL && (
            <li>
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                })}`}
                href={githubURL}
                target="_blank"
                rel="noopener"
              >
                <GitHubLogoIcon />
                <span className="px-2">Github</span>
              </Link>
            </li>
          )}
          {websiteURL && websiteTag && (
            <li>
              <Link
                className={` ${buttonVariants({
                  variant: "link",
                })}`}
                href={websiteURL}
                target="_blank"
                rel="noopener"
              >
                <span className="px-2">{websiteTag}</span>
              </Link>
            </li>
          )}
        </ul>
      </CardFooter>
    </Card>
  );
}
