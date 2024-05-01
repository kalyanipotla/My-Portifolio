import React from "react";
import kalyani from "./Images/kalyani.png";
import Typewriter from "typewriter-effect";

const Home = () => {
   const handleDownload = () => {
    // Replace 'cv.pdf' with the filename of your CV file
    const cvFile = process.env.PUBLIC_URL + '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="main">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-32 mt-5 md:mt-5 lg:mt-4 sm:mt-3">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-3xl lg:text-4xl sm:text-2xl font-bold mt-20">
            Hi, I'M Kalyani Potla
          </h1>
          <h1 className="text-3xl text-[#ff0080] font-bold leading-[60px] mt-5">
            <Typewriter
              options={{
                strings: [
                  "I'm a <br/>Software Developer",
                  "I'm a <br/>Web Developer",
                  "I'm a <br/>FrontEnd Developer"
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 50
              }}
            />
          </h1>
          <p className="text-sm md:text-sm lg:text-lg mt-3 leading-6">
            I built interactive websites that run across platforms & devices.
            Helping companies to reach their goal by connecting all dots between
            design & code.
          </p>
          <button type="button" style={{  width:"110px"}} onClick={handleDownload} className="mt-10 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Download
</button>

        </div>
        <div>
          <img src={kalyani} alt="images" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
