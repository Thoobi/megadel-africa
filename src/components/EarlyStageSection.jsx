import { Link } from "react-router-dom";
import smallBusinessDesktop from "../asset/small-business-desktop-img.svg";
import blueCheckMark from "../asset/blue-checkbox.svg";

import { smallBusiness } from "../utils/util";

export default function EarlyStage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-20 px-12 py-24 sm:py-32 sm:px-24 xl:gap-60 xl:items-center xl:flex-row xl:p-64">
      <div className="order-1 xl:order-[-1] xl:w-1/2">
        <img
          src={smallBusinessDesktop}
          alt="small businesses image"
          className="inline-block w-full h-3/5"
        />
      </div>
      <div className="text-18 flex flex-col gap-12 text-custom-blue-500 xl:w-1/2">
        <h2 className="font-semibold mb-4 xl:mb-0 text-32">
          For Aspiring Entrepreneurs and Early-Stage Founders
        </h2>
        <p className="font-medium text-24 xl:text-22">
          Kickstart your venture with our support
        </p>
        <ul className="flex flex-col justify-center gap-8 font-light text-22 xl:text-18 xl:font-medium">
          {smallBusiness.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <img src={blueCheckMark} alt="list check mark" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="learn more"
          className="bg-custom-blue-100 text-white rounded-lg font-medium self-start px-10 py-3 text-22 xl:text-18"
        >
          Join Our Community
        </Link>
      </div>
    </section>
  );
}
