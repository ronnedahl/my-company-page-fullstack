import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@/lib/icons";
import ContactForm from "./ContactForm";

const contactDetails = [
  { icon: faEnvelope, text: "hej@vaxtkraftwebb.se" },
  { icon: faPhone, text: "070-123 45 67" },
  { icon: faLocationDot, text: "Karlstad, Sverige" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-start">
          <div>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-4">
              Kontakta Oss
            </h2>
            <p className="text-gray-text mb-8">
              Har du frågor eller vill komma igång? Fyll i formuläret så hör vi
              av oss inom 24 timmar.
            </p>
            <ul className="flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <li
                  key={detail.text}
                  className="flex items-center gap-3 text-gray-text text-[0.95rem]"
                >
                  <FontAwesomeIcon
                    icon={detail.icon}
                    className="text-accent-green w-5 text-center"
                  />
                  {detail.text}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
