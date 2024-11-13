import Button from "./Button";

export default function Subscribe() {
  return (
    <section className="flex flex-col items-stretch text-center justify-center text-custom-blue-500 px-10 py-6 gap-4 sm:p-16 lg:items-center xl:p-32">
      <h2 className="font-medium text-22 lg:text-32">
        Stay up to date with Megadel Africa
      </h2>
      <p className="font-medium text-14 lg:mb-8 lg:text-18">
        Subscribe to our newsletter for latest news, updates and insights
      </p>
      <form className="flex flex-col items-stretch rounded-xl gap-8 mt-4 w-full lg:w-2/6 lg:gap-0 lg:mt-0 lg:flex-row lg:border-2">
        <input
          type="text"
          name="text"
          placeholder="We saved a nice spot for your email"
          className="py-6 px-6 border-2 outline-none flex-1 text-14 rounded-lg lg:text-16 lg:border-0"
          required
        />
        <Button classname="rounded-xl">Subscribe</Button>
      </form>
    </section>
  );
}
