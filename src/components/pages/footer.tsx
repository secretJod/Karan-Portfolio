import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
// You can use a generic code icon or add a leetcode.svg to your public folder
import { Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 md:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <p className="text-xs text-muted-foreground order-last md:order-first">
        © {new Date().getFullYear()} Developed and designed by Karan Upadhyay.
      </p>
      <nav className="md:ml-auto flex items-center gap-4 md:gap-6">
        {/* GitHub */}
        <Link
          href="https://github.com/secretJod"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Karan Upadhyay's GitHub profile"
        >
          <Image
            src={GithubIcon}
            alt="GitHub"
            className="invert-0 dark:invert transition-all duration-300"
            width={20}
            height={20}
          />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/karan-upadhyay-13ab1628b/"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Karan Upadhyay's LinkedIn profile"
        >
          <Image
            src={LinkedinIcon}
            alt="LinkedIn"
            className="invert-0 dark:invert transition-all duration-300"
            width={20}
            height={20}
          />
        </Link>

        {/* LeetCode - Adding this because of your high ranking */}
        <Link
          href="https://leetcode.com/u/secretGod/"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Karan Upadhyay's LeetCode profile"
        >
          <Code2 className="w-5 h-5" />
          <span className="sr-only">LeetCode</span>
        </Link>
      </nav>
    </footer>
  );
}
