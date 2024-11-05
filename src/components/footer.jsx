import Logo from "../asset/megadel-logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 place-items-start bg-custom-blue-200 p-[4rem] gap-y-[3rem] items-start lg:grid-cols-4 lg:gap-x-[4rem] xl:p-[8rem]">
      <div className="col-span-4 flex flex-col gap-[2rem] lg:col-span-1 xl:gap-[4rem]">
        <div className="flex items-start justify-start">
          <img
            src={Logo}
            alt="megadel logo image"
            className="block translate-y-[-1.2rem]"
          />
        </div>
        <div className="flex items-center gap-[4rem] lg:gap-[3rem]">
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
      <div className="flex flex-col gap-[2rem]">
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
      <div className="flex flex-col gap-[2rem]">
        <h4 className="font-semibold text-custom-blue-500">Resources</h4>
        <p>
          <Link href="privacy-policy">Privacy Policy</Link>
        </p>
        <p>
          <Link href="terms&conditions">Terms & Conditions</Link>
        </p>
      </div>
      <div className="flex flex-col gap-[2rem] col-span-4 lg:col-span-1">
        <p>44 Commercial Avenue, Sabo, Yaba, Lagos State.</p>
        <p>
          <Link href="mailto:hello@megadelafrica.com">
            hello@megadelafrica.com
          </Link>
        </p>
        <p>+234 813 918 8935</p>
      </div>
      <p className="col-start-2 col-end-4 text-left text-custom-blue-500 text-[1.5rem] place-items-center lg:text-center lg:self-center">
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
