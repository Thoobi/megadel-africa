import headerImg from "../asset/hero-img-desktop.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center py-16 px-8 min-h-[90vh] lg:gap-40 md:px-20 lg:flex-row lg:px-72 lg:py-16">
      <div className="w-full flex flex-col gap-8 lg:w-1/2">
        <h1 className="text-custom-blue-500 font-semibold text-22 lg:text-40 xl:text-50">
          <span className="text-custom-blue-100">
            Empowering Global Innovation
          </span>
          <span className="text-orange-500">
            | your MVP journey starts here.
          </span>
        </h1>
        <p className="text-16 xl:text-22">
          From Idea to Impact: Transform Your Vision into Reality
        </p>
        <button className="text-white bg-custom-blue-100 rounded-lg self-start px-6 py-3 text-16 lg:px-10 lg:py-4">
          Get Started Now
        </button>
      </div>
      <figure className="flex justify-center items-center lg:w-1/2 h-auto">
        <img src={headerImg} alt="header image" className="w-full h-full" />
      </figure>
    </header>
  );
}
