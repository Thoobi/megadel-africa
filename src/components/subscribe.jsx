export default function Subscribe() {
  return (
    <section className="flex flex-col items-stretch text-center justify-center text-custom-blue-500 p-12 gap-4 sm:p-16 lg:items-center xl:p-32">
      <h2 className="font-medium text-32">
        Stay up to date with Megadel Africa
      </h2>
      <p className="font-medium lg:mb-8 text-18">
        Subscribe to our newsletter for latest news, projects and updates
      </p>
      <form className="flex flex-col items-stretch rounded-xl gap-8 mt-4 w-2/6 lg:gap-0 lg:mt-0 lg:flex-row lg:border-2">
        <input
          type="text"
          name="text"
          placeholder="We saved a nice spot for your email"
          className="py-6 px-6 border-2 outline-none flex-1 text-16 lg:border-0"
          required
        />
        <button
          type="submit"
          className="bg-custom-blue-100 text-white rounded-xl py-6 px-12 text-16"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
