import React from "react";

const OurValues = () => {
  return (
    <div className="bg-[#f3f3f3] md:py-20 md:px-24 py-10 px-6">
      <div>
        <h2 className="text-center text-3xl text-[#DAB877] font-semibold mb-6 ">
          Our Values
        </h2>
      </div>

      <div className="grid gap-16 xl:grid-cols-2 md:my-12 px-4 ">
        <div className="md:w-[95%] ">
          <h3 className="text-2xl ">Quality</h3>
          <p className="leading-relaxed py-4 text-lg text-[#757575]">
            Quality is at the epicenter of Khwaahish. We strongly believe that
            quality is a non-compromising aspect in all that we do at Khwaahish.
            The highest quality checks are implemented to ensure perfection in
            every element of our business, from the artisans to the designers,
            the products, and the showroom that sells them. Khwaahish will
            always be committed to delighting a customer every time with its
            superior creations.
          </p>
        </div>
        <div className="md:w-[95%]">
          <h3 className="text-2xl ">Innovation</h3>
          <p className="leading-relaxed py-4 text-lg text-[#757575]">
            Innovation is our strength. A large share of our success comes from
            not only our willingness to adapt to a changing environment but also
            to strive to stay a few steps ahead. This makes us consistently
            bring out products with a lot of creativity – be it in design, a
            manufacturing technique, or a finishing detail.
          </p>
        </div>
        <div className="md:w-[95%]">
          <h3 className="text-2xl ">Passion</h3>
          <p className="leading-relaxed py-4 text-lg text-[#757575]">
            We measure our jewellery by what it represents. We are passionate
            about what we do, and this is reflected in our creations. This keeps
            our customers coming back to us, and we hope to continue to delight
            them.
          </p>
          <p className="leading-relaxed py-4 text-lg text-[#757575]">
            What drives us at Khwaahish is our genuine love for what we do. We
            are committed to providing nothing less than 100% and are willing to
            go that extra mile for the sake of our customers. All this is
            possible with our close-knit team, the Khwaahish family, the
            powerhouse of our business.
          </p>
        </div>
        <div className="md:w-[95%]">
          <h3 className="text-2xl ">Transparency</h3>
          <p className="leading-relaxed py-4 text-lg text-[#757575]">
            At Khwaahish, we provide an unparalleled retail experience with
            honesty and genuine sincerity with all our designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
