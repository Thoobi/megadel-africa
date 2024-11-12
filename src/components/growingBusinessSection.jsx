import { Link } from "react-router-dom";
import { growingBusiness } from "../utils/util";

import blueCheckMark from "../asset/blue-checkbox.svg";
import growingBusinessDesktop from "../asset/growing-business-desktop-img.svg";

export default function GrowingBusiness() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-custom-blue-200 px-10 py-12 sm:p-20 xl:gap-40 xl:justify-between xl:flex-row xl:px-72 xl:py-20">
      <div className="flex flex-col gap-4 sm:gap-8 text-custom-blue-500 leading-relaxed xl:w-1/2">
        <h2 className="font-semibold text-22 sm:text-32">
          For Emerging Startups
        </h2>
        <p className="font-semibold text-14 sm:text-18">
          Scale your Business with Confidence
        </p>

        <p className="text-14 sm:text-16 lg:mt-8">Leverage our expertise for</p>
        <ul className="flex flex-col justify-center gap-3 text-16 xl:gap-4">
          {growingBusiness.map((item) => (
            <li key={item} className="flex items-center gap-4 font-medium">
              <img src={blueCheckMark} alt="list check mark" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="learn more"
          className="bg-custom-blue-100 text-white font-medium self-start px-6 py-3 rounded-lg text-14 xl:text-16"
        >
          Learn more
        </Link>
      </div>
      <div className="flex items-center justify-center w-full h-auto xl:w-1/2">
        <img
          src={growingBusinessDesktop}
          alt="growing business image"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
