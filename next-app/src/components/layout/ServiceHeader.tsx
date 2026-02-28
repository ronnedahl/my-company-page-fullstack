import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@/lib/icons";

export default function ServiceHeader() {
  return (
    <header className="sticky top-0 z-[1000] bg-bg/95 backdrop-blur-sm py-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-webb.png"
              alt="Växtkraft Webb"
              width={150}
              height={40}
              className="h-8 md:h-10 w-auto logo-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-text hover:text-text flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Tillbaka till startsidan
          </Link>
        </nav>
      </div>
    </header>
  );
}
