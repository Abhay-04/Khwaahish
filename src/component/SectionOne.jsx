import React from "react";

const SectionOne = () => {
  return (
    <div className="section-1 grid  xl:grid-cols-2 my-12 px-4 md:pr-16 md:pl-20">
      <div className="left justify-self-center xl:justify-self-start ">
        <h2 className=" text-center xl:text-start text-3xl mb-20 leading-normal ">
          Khwaahish <br></br>
          means <span className="text-[#B2872D]">Desire</span>
        </h2>

        <img src="https://emcgtdx36wv.exactdn.com/wp-content/uploads/2022/02/desire-sec-single-img.jpg?lossy=0&webp=90&avif=90&ssl=1" />
      </div>
      <div className="right lg:w-[90%]  text-[#757575] text-sm  sm:text-base font-[400]">
        <p className="mb-6 mt-10 xl:mt-0 leading-loose ">
          Our brand represents our desire to create exquisite, beautiful and
          high-quality diamond jewellery that is as special as you.
        </p>
        <p className="mb-6 leading-loose">
          Khwaahish Diamond Jewellery has established a name synonymous with
          Quality, Design Excellence and High Standards. Since 2003, Khwaahish
          has created trendsetting jewellery that caters to individual taste and
          modern fashion, while keeping in mind key traditional elements in
          every piece of jewellery we create.
        </p>
        <p className="mb-6 leading-loose">
          Khwaahish is a jewellery boutique that combines innovation and style
          to craft stunning diamond jewellery. Using only pure natural diamonds,
          Khwaahish creates exquisite pieces of diamond jewellery, the likes of
          which you can never find anywhere else. We combine uniqueness and
          innovation into our designs, always striving to push the bar on
          perfect.
        </p>

        <div className="grid grid-cols-12 mb-4">
          <h4 className="col-span-12 sm:col-span-2 mb-3 text-xl font-semibold">
            Values
          </h4>
          <p className="col-span-10 leading-loose">
            At Khwaahish, we pride ourselves on the stellar quality of all our
            products. Our passion and innovation make sure every unique piece is
            crafted with love and expertise. Our focus on transparency empowers
            our consumers to make informed choices. The Khwaahish team works as
            a cohesive unit round the clock to give our customers only the very
            best.
          </p>
        </div>

        <div className="grid grid-cols-12 mb-6">
          <h4 className=" col-span-12 sm:col-span-2 text-xl mb-3 font-semibold">
            Mission
          </h4>
          <p className="col-span-10 leading-loose">
            We aim to provide distinctive, beautiful pieces that enhance the
            wearer's beauty. We strive to continue as trailblazers in the making
            of diamond jewellery and offer our customers the utmost satisfaction
            through quality service.
          </p>
        </div>
        <p className="leading-loose">
          We have left a trail of satisfied customers who tend towards us often
          for their jewellery requirements. We pride ourselves on being a family
          jeweller that is non-compromising on our standards and high-quality to
          ensure every piece of jewellery in Khwaahish is as magnificent as can
          be.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
