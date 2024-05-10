import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Heading from "../Heading";
import ContactForm from "./ContactForm";

export default function Contact({
  page = "",
  showLine = true,
}: {
  page?: string;
  showLine?: boolean;
}) {
  // styles for the contact information links
  const link =
    "flex gap-2 items-center py-2 hover:text-purple/90 hover:scale-105 hover:underline ease-linear transition-colors duration-200";
  return (
    <div id="contact" className="flex flex-col">
      <Heading value="contact-me" showLine={showLine} position="right" />
      <p
        className="  self-center md:self-start md:max-w-[50rem]"
        style={{ lineHeight: 2 }}
      >
        If you require a developer&#39;s expertise or are interested in
        establishing a connection for potential collaboration, please don&#39;t
        hesitate to reach out. Whether it&#39;s about joint projects, shared
        ideas, or simply networking, I&#39;m open to exploring opportunities.
        Let&#39;s connect and see where our paths might lead!
      </p>

      <section className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-full py-5 md:py-10">
        <div className="border-b border-r w-fit px-4 self-center mt-5 py-5 rounded-md shadow-ml md:self-start">
          <h3 className="text-white py-3 capitalize text-lg font-bold">{`contact information`}</h3>

          <Link
            href="mailto:efezinoeidisi@gmail.com"
            className={link}
            target="_blank"
          >
            <HiOutlineMail className={"text-xl"} />
            <span>efezinoeidisi@gmail.com</span>
          </Link>

          <Link
            href="https://wa.me/23408169209097"
            className={link}
            target="_blank"
          >
            <FaWhatsapp className={"text-xl"} />
            <span>+23408169209097</span>
          </Link>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
