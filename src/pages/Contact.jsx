import mail from "../asset/contact/contact-mail.svg";
import phone from "../asset/contact/contact-phone.svg";
import location from "../asset/contact/contact-location.svg";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import Section from "../components/Section";

export default function Contact() {
  return (
    <>
      <main>
        <Section classname="flex-col bg-custom-blue-500 text-white text-center px-12 sm:px-24 py-24">
          <h1 className="text-32 sm:text-50 mb-8 font-medium">
            Get in touch with us
          </h1>
          <p className="text-18 sm:text-24 font-light">
            Experiencing problem? Talk to us about it and we will get right on
            it.
          </p>
        </Section>

        <section className="px-12 lg:px-24 py-24 lg:py-24 flex flex-col lg:flex-row items-stretch lg:items-start justify-center bg-custom-blue-200">
          <div className="bg-custom-blue-500 text-white px-8 sm:px-20 py-16 lg:py-12 rounded-t-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl">
            <h3 className="mb-8 text-24 sm:text-32 font-medium">
              Support Service
            </h3>
            <ul className="flex flex-col items-start gap-12">
              <li className="flex items-center gap-4 w-full">
                <img
                  src={mail}
                  alt="mail icon"
                  className="inline-block w-10 h-10"
                />
                <span className="inline-block flex-1 text-16 sm:text-18">
                  megadelafrica@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src={phone}
                  alt="phone icon"
                  className="inline-block w-10 h-10"
                />
                <span className="inline-block flex-1 text-16 sm:text-18">
                  (+234) 813-918-8935
                </span>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src={location}
                  alt="location icon"
                  className="inline-block w-10 h-10"
                />
                <span className="inline-block flex-1 text-16 sm:text-18">
                  Nigeria
                </span>
              </li>
            </ul>
          </div>
          <div className="p-12 sm:px-20 sm:py-24 bg-white rounded-b-2xl lg:rounded-tr-2xl">
            <form
              action=""
              method="post"
              className="flex flex-col gap-3 text-16"
            >
              <label htmlFor="full-name" className="text-custom-blue-500">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Enter full name"
                className="border-2 rounded-lg px-6 py-4 outline-none lg:w-[45rem] mb-8"
              />

              <label htmlFor="phone-number" className="text-custom-blue-500">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
                className="border-2 rounded-lg px-4 py-6 outline-none lg:w-[45rem] mb-8"
              />

              <label htmlFor="mail" className="text-custom-blue-500">
                Email Address
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter address"
                className="border-2 rounded-lg px-4 py-6 outline-none lg:w-[45rem] mb-8"
              />

              <label className="text-custom-blue-500">
                What are you making enquiry on?
              </label>
              <div className="grid grid-flow-col auto-cols-max sm:flex sm:items-center gap-4 mt-4">
                <input
                  type="checkbox"
                  name="Training"
                  id="training"
                  value="training"
                />
                <label htmlFor="training" className="mr-8">
                  Training
                </label>

                <input
                  type="checkbox"
                  name="partnership"
                  id="partnership"
                  value="partnership"
                  className="row-start-2 col-start-1"
                />
                <label htmlFor="partnership" className="mr-8">
                  Partnership
                </label>

                <input
                  type="checkbox"
                  name="general enquiry"
                  id="general enquiry"
                  value="general enquiry"
                  className="row-start-3 col-start-1"
                />
                <label htmlFor="general enquiry">General Enquiry</label>
              </div>
              <textarea
                name=""
                placeholder="Message"
                className="border-2 block resize-none h-40 mt-4 px-4 py-6 rounded-xl outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-custom-blue-100 self-end px-16 py-5 rounded-xl text-white mt-4 text-18"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
