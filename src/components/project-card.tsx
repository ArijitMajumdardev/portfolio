import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden border rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-background dark:bg-[#111]",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-44 object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-44 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </Link>

      <CardHeader className="px-4 pt-4 space-y-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {link && (
          <p className="text-xs text-muted-foreground underline truncate">
            {link.replace("https://", "").replace("www.", "").replace("/", "")}
          </p>
        )}
      </CardHeader>

      <CardContent className="px-4 pb-2">
        <Markdown className="prose max-w-full text-sm text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="rounded-full px-2 py-0.5 text-[11px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {links && links.length > 0 && (
  <CardFooter className="px-4 pb-4 mt-auto">
    <div className="flex flex-wrap gap-2">
      {links.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            className="flex items-center gap-2 rounded-full px-3 py-1 text-[11px] dark:bg-white hover:dark:text-white hover:dark:bg-black text-white dark:text-black border border-border shadow-sm hover:bg-muted hover:text-foreground transition"
          >
            {link.icon}
            {link.type}
          </Badge>
        </Link>
      ))}
    </div>
  </CardFooter>
)}

    </Card>
  );
}
