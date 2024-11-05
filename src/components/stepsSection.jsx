import applySteps from "../asset/apply-steps-img.svg";

export default function Steps() {
  return (
    <section className="flex flex-col justify-between items-center p-12 gap-14 lg:gap-0 lg:flex-row lg:p-24 xl:p-32">
      <div className="flex flex-col text-custom-blue-500 font-semibold lg:gap-[2rem] xl:gap-3 xl:w-1/2">
        <h2 className="text-center text-32 lg:text-left lg:text-40">
          Have You Decided? <br /> Follow These{" "}
          <br className="hidden lg:block" />
          Simple Steps:
        </h2>

        <p className="text-22">Choose Your Path to Success</p>

        <button className="hidden text-white bg-custom-blue-100 rounded-2xl self-start text-16 lg:block lg:px-16 lg:py-6">
          Get Started
        </button>
      </div>

      <div className="flex items-center justify-center lg:w-1/2">
        <img
          src={applySteps}
          alt="image for the application process"
          className="inline-block w-full h-auto"
        />
      </div>

      <button className="text-white bg-custom-blue-100 rounded-2xl px-4 py-4 lg:hidden">
        Get Started
      </button>
    </section>
  );
}
