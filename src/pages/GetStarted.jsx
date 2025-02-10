import Navbar from "../components/navbar";

const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 px-10 gap-5">
        <h1 className="text-black text-7xl font-bold">
          Get Started with Megadel
        </h1>
        <p className="text-black text-5xl font-light">
          We are a team of experienced professionals who are dedicated to
          providing the best possible service to our clients.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
