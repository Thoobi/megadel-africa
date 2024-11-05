import checkIcon from "../asset/check.svg";
import cancelIcon from "../asset/cancel-icon.svg";
import { websitePlan } from "../utils/util";
import { Link } from "react-router-dom";

export default function CardPlan() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-16 px-6 sm:px-8 lg:p-32 xl:gap-32">
      <div className="text-center text-custom-blue-500">
        <h2 className="font-semibold text-32 xl:mb-[2rem]">
          Choose A Website Plan
        </h2>
        <p className="font-light text-22">
          Select the Plan That&apos;s Right for You
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-20 w-11/12 sm:w-3/4 lg:w-auto lg:flex-row lg:gap-12">
        {websitePlan.map((plan) => (
          <div
            key={plan.title}
            className="cards flex flex-col items-center border-2 border-gray-200 rounded-4 bg-white text-custom-blue-500 gap-12 p-12 rounded-2xl w-full"
          >
            <h3 className="font-semibold text-12 lg:text-22">{plan.title}</h3>
            <h4 className="font-semibold text-24 lg:text-18">Features:</h4>
            <ul className="flex flex-col gap-8 text-22 lg:text-16">
              {plan.features.map((feature) => (
                <li key={feature.value} className="flex items-center gap-4">
                  <img
                    src={feature.status ? checkIcon : cancelIcon}
                    alt="icon to show features offered"
                  />
                  <span>{feature.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link className="bg-custom-blue-100 px-10 py-5 text-white text-16">
        Sign Up Now
      </Link>
    </section>
  );
}
