import { FaPlus } from "react-icons/fa";
import Section from "../components/Section";
import { faqs } from "../utils/util";

export default function Faq() {
  return (
    <>
      <main>
        <Section classname="flex-col bg-custom-blue-500 text-white text-center px-12 sm:px-24 py-24">
          <h1 className="text-32 sm:text-50 mb-8 font-medium">
            Frequently Asked Questions
          </h1>
          <p className="text-18 sm:text-24 font-light">
            Got a question? Someone&apos;s probably asked it before.
          </p>
        </Section>

        <Section classname="flex-col gap-8">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-full bg-gray-300 p-10 text-18"
            >
              {faq.title}
              <span>
                <FaPlus />
              </span>
            </div>
          ))}
        </Section>
      </main>
    </>
  );
}
