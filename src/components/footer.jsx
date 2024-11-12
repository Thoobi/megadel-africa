import Logo from "../asset/megadel-logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 place-items-start bg-custom-blue-200 p-16 gap-y-12 items-start lg:grid-cols-4 lg:gap-x-16 xl:p-32">
      <div className="col-span-4 flex flex-col gap-8 lg:col-span-1 xl:gap-16">
        <div className="flex items-start justify-start">
          <img
            src={Logo}
            alt="megadel logo image"
            className="block -translate-y-5"
          />
        </div>
        <div className="flex items-center gap-16 lg:gap-12">
          <Link>
            <FaTwitter
              className="text-custom-blue-500 hover:text-custom-blue-100"
              size={22}
            />
          </Link>
          <Link>
            <FaInstagram
              className="text-custom-blue-500 hover:text-custom-blue-100"
              size={22}
            />
          </Link>
          <Link>
            <FaFacebook
              className="text-custom-blue-500 hover:text-custom-blue-100"
              size={22}
            />
          </Link>
          <Link>
            <FaLinkedin
              className="text-custom-blue-500 hover:text-custom-blue-100"
              size={22}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 text-16">
        <h4 className="font-semibold text-custom-blue-500">Company</h4>
        <p>
          <Link href="/about-us">About Us</Link>
        </p>
        <p>
          <Link href="/contact-us">Contact Us</Link>
        </p>
        <p>
          <Link href="/faqs">FAQs</Link>
        </p>
      </div>
      <div className="flex flex-col gap-8 text-16">
        <h4 className="font-semibold text-custom-blue-500">Resources</h4>
        <p>
          <Link href="privacy-policy">Privacy Policy</Link>
        </p>
        <p>
          <Link href="terms&conditions">Terms & Conditions</Link>
        </p>
      </div>
      <div className="flex flex-col gap-8 col-span-4 text-16 lg:col-span-1">
        <p>44 Commercial Avenue, Sabo, Yaba, Lagos State.</p>
        <p>
          <Link
            href="mailto:hello@megadelafrica.com"
            className="underline hover:underline-offset-2"
          >
            hello@megadelafrica.com
          </Link>
        </p>
        <p>+234 813 918 8935</p>
      </div>
      <p className="col-start-1 col-end-5 text-left text-custom-blue-500 text-14 place-items-center w-full mt-8 lg:text-center lg:self-center">
        © 2023{" "}
        <span className="text-custom-blue-500 font-semibold">
          Megadel Africa:{" "}
        </span>
        We help business owners with the required knowledge to build a
        structured and thriving business.
      </p>
    </footer>
  );
}
