import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faArrowLeft } from "@/lib/icons";

export default function ServiceHeader() {
  return (
    <header className="sticky top-0 z-[1000] bg-bg/95 backdrop-blur-sm py-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="font-extrabold text-[1.2rem] flex items-center gap-2.5"
          >
            <FontAwesomeIcon icon={faShapes} className="text-lg" />
            Växtkraft Webb
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
