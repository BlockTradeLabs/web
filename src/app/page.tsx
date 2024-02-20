import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-full sm:before:w-[300px] sm:before:h-[250px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full sm:after:w-[180px] sm:after:h-[150px] md:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[240px] after:lg:h-[90px] z-[-1]">
        <Image
          // margin right 20px
          className="mr-3 sm:mr-5 md:mr-7"
          src="/logo.png"
          alt="BlockTrade Logo"
          width={180}
          height={37}
          priority
        />
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br dark:from-sky-100 dark:to-white">
          Block
        </span>
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br dark:from-sky-100 dark:to-white">
          Trade
        </span>
      </div>

      <div className="lg:w-full lg:mb-0">
        <footer className="mt-auto pt-6 sm:pt-8 md:pt-10">
          <div className="flex items-center justify-center gap-2 sm:gap-4 px-4 text-center md:gap-6 md:px-6 lg:gap-10">
            <div className="flex flex-1 max-w-sm space-x-2 sm:space-x-4 justify-center">
              <SocialLink href="#" icon={<TwitterIcon />} label="Twitter" />
              <SocialLink href="#" icon={<GithubIcon />} label="GitHub" />
              <SocialLink href="#" icon={<YoutubeIcon />} label="YouTube" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 text-center md:gap-6 md:px-6 lg:gap-10">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {/* get todays date */}
              &copy; {new Date().getFullYear()} BlocktradeLabs
            </p>
          </div>
        </footer>
      </div>
    </main>
  );

  function SocialLink({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: JSX.Element;
    label: string;
  }) {
    return (
      <Link href={href}>
        {icon}
        <span className="sr-only">{label}</span>
      </Link>
    );
  }

  function GithubIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  function TwitterIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    );
  }

  function YoutubeIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    );
  }
}
