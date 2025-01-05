import React from "react";

const OurPromoters = () => {
  return (
    <div className="md:py-20 lg:px-24 py-10 px-6">
      <div>
        <h2 className="text-center  text-3xl text-[#DAB877] font-semibold mb-8 ">
          Our Promoters
        </h2>
      </div>

      <div className="grid gap-16">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-6 text-center lg:text-start order-2 lg:order-1">
            <h4 className="text-xl font-semibold mb-2">Pankajj Chetan</h4>
            <h3 className="text-md text-[#757575] mb-3">
              Founder & Creative Head
            </h3>
            <p className="lg:w-[90%] text-md text-[#757575] mb-3 leading-loose">
              Hailing from a family of jewellery businessmen, Pankajj Kamal
              Chetan brought in his unique creativity and his inherent love for
              diamonds to set up Khwaahish Diamonds, a one-of-a-kind diamond
              jewellery showroom in Chennai. Certified in Gemmology from the
              revered International Gemmological Institute (IGI) in Dubai,
              Pankajj tirelessly strives to elevate Khwaahish into the most
              preferred jewellery shopping destination.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 justify-self-center order-1 lg:order-2">
            <img
              className="size-64"
              src="https://emcgtdx36wv.exactdn.com/wp-content/uploads/2023/09/Pankaj-Chetan.jpg?lossy=0&webp=90&avif=90&ssl=1"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 justify-center ">
          <div className="col-span-12 lg:col-span-6 justify-self-center">
            <img
              className="size-64 rounded-full"
              src="https://emcgtdx36wv.exactdn.com/wp-content/uploads/2023/02/gulz_collection_potrait.jpg?lossy=0&webp=90&avif=90&ssl=1"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 text-center lg:text-start">
            <h4 className="text-xl font-semibold mb-2">Gulan Chetan </h4>
            <h3 className="text-md text-[#757575] mb-3">
              Founder & Director Sales{" "}
            </h3>
            <p className="lg:w-[90%] text-md text-[#757575] mb-3 leading-loose">
              Gulan Pankajj Chetan, is the co-founder of Khwaahish. Gulan brings
              her expertise and intrinsic design sensibilities to understand,
              interpret and deliver high-level customized jewellery to
              discerning customers. Under her supervision, every piece of
              jewellery is originally sketched and crafted by in-house
              professionals to ensure each one is a masterpiece.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 justify-center">
          <div className="col-span-12 lg:col-span-6 text-center lg:text-start order-2 lg:order-1">
            <h4 className="text-xl font-semibold mb-2">Ashwin Chetan</h4>
            <h3 className="text-md text-[#757575] mb-3">Managing Director</h3>
            <p className="lg:w-[90%] text-md text-[#757575] mb-3 leading-loose">
              Armed with a degree in Finance, Ashwin Kamal Chetan is the
              backbone of Khwaahish, managing the financial details and
              operations of Khwaahish. With his keen attention to detail, he
              critically analyzes and constantly improves every minute detail
              that has a bearing on the running of the business, including the
              highest quality resources and stellar customer experience.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 justify-self-center order-1 lg:order-2">
            <img
              className="size-64"
              src="https://emcgtdx36wv.exactdn.com/wp-content/uploads/2023/10/Ashwin-Chetan.jpg?lossy=0&webp=90&avif=90&ssl=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromoters;
