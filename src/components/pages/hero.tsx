import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../../../public/headshot.jpg"; // Remember to replace headshot.jpg in your public folder!
import { AuroraBackground } from "../ui/aurora-background";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen justify-center lg:justify-start sticky top-0 "
    >
      <AuroraBackground
        className="absolute inset-0 -z-10"
        showRadialGradient={true}
      />

      <div className="flex flex-col justify-center items-center md:flex-row gap-0 md:gap-4  lg:px-[15%]  content-center  ">
        <Image
          src={profilePhoto}
          alt="Karan Upadhyay Profile Photo"
          className="rounded-full flex-shrink-0 w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover"
          width={512}
          height={512}
          priority={true}
        />

        <div className="flex-col flex  justify-center">
          <div className="flex-row  justify-center md:justify-start flex gap-4 order-last md:order-first pt-5 md:pt-0">
            <Link
              href="https://github.com/secretJod" // Update with your GitHub
              target="_blank"
              className="social-link"
              aria-label="Visit Karan Upadhyay's GitHub profile"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/karan-upadhyay-13ab1628b/" // Update with your LinkedIn
              target="_blank"
              className="social-link"
              aria-label="Visit Karan Upadhyay's LinkedIn profile"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="mailto:secret91750@gmail.com" // Update with your email
              target="_blank"
              className="social-link"
              aria-label="Send Karan Upadhyay an email"
            >
              <Mail width={24} height={24} />
            </Link>
          </div>
          <h1 className="text-7xl md:pt-4 lg:pt-8 font-serif text-center md:text-left text-primary">
            <span>Karan</span>
            <span className="block lg:inline text-primary"> Upadhyay</span>
          </h1>
          <p className="font-serif text-xl pt-4 lg:pt-9 text-muted-foreground">
            AI Engineer & Software Developer
          </p>
        </div>
      </div>
    </section>
  );
}
