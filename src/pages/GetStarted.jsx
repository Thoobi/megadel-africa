import Navbar from "../components/navbar";
import construction2 from "../asset/construction1.png";

const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 px-10 gap-5 w-full h-screen">
        <img src={construction2} alt="construction" />
      </div>
    </div>
  );
};

export default GetStarted;
