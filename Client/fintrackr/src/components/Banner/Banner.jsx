import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../Shared/Button";
const Banner = () => {
  return (
    <div className="text-white p-4 place-items-center">
      <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center gap-1 md:gap-6 lg:gap-7 xl:gap-9  2xl:gap-20 text-center ">
        <div className="text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl">
          <h1>
            Track. Save. Grow. <br />
            <span className="text-xs md:text-base lg:text-xl 2xl:text-2xl">
              Empower Your <span className="text-primary">Financial</span>{" "}
              Journey!
            </span>
          </h1>
        </div>
        <div>
          <DotLottieReact
            src="https://lottie.host/acc399bf-8a99-4411-b1d7-65f12240bab4/xqVkZSi3Ax.lottie"
            autoplay
            loop
            height={400}
            width={640}
          />
        </div>
      </div>
      <Button
        variant="secondary"
        className="flex w-auto items-center relative transform transition-all duration-500 hover:translate-x-2"
      >
        <span className="mr-7">Get Start</span>
        <span className="absolute top-0 right-0">
          <DotLottieReact
            src="https://lottie.host/493b480b-b607-4bab-9777-8ae62e61d164/XbcTL1mM7Q.lottie"
            autoplay
            loop
            height={40}
            width={50}
          />
        </span>
      </Button>
    </div>
  );
};

export default Banner;
