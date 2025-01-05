import React from "react";

const OurLogo = () => {
  return (
    <div className="grid xl:grid-cols-2  px-6 py-16 md:px-24">
      <div className="left lg:w-[90%] text-[#757575] text-sm sm:text-base font-[400] order-2 xl:order-1">
        <p className="mt-10 xl:mt-0 text-xl text-[#DAB877] font-medium leading-loose">
          Our Logo
        </p>
        <p className="mb-4 leading-normal text-3xl text-black">
          The Story of the <br />
          Dancing Peacock
        </p>
        <p className="leading-loose mb-2 text-lg">
          The peacock personifies grace and dignity, like that of royalty. It
          brings together a stunning array of colours, depicting the delight of
          freedom and self-expression in a uniquely regal style. The unfolding
          of the peacock's tail feathers is as elegant as a ballet dancer,
          beautiful and captivating in every nuance and move.
        </p>
        <p className="leading-loose mb-4 text-lg">
          The peacock is a gorgeous messenger telling a story of romance,
          attraction and allure. It invokes the elements of infinite
          possibility, leading you to secretly believe that anything you dream
          is possible and sets you into action with this fire.
        </p>
        <p className="leading-loose text-lg font-semibold">
          We love the expression "Proud as a Peacock," faithfully <br />{" "}
          representative of the exquisite motto of a peacock, 'If you've got it
          – <br /> flaunt it!'
        </p>
      </div>
      <div className="right self-auto order-1 xl:order-2">
        <img src="https://emcgtdx36wv.exactdn.com/wp-content/uploads/2022/03/logo-without-text.jpg?lossy=0&webp=90&avif=90&ssl=1" />
      </div>
    </div>
  );
};

export default OurLogo;
