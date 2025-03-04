import { FEATURES_GRID_DATA} from "../../data/data"
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { motion } from "framer-motion";

const FeaturesGrid = () => {
  const gradientRefs = useGradientUpdater();

  const featuredSettings = [
    {
      cardImgPadding: "px-5 pt-5",
      cardContentPadding: "px-6 pb-10",
      cardColSpan: "lg:col-span-1 col-span-full",
      cardFlexCol: "flex-col",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[200px] before:h-[200px] before:-bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
    },
    {
      cardImgPadding: "px-12 pt-6",
      cardContentPadding: "px-6 pb-10",
      cardColSpan: "lg:col-span-2 col-span-full",
      cardFlexCol: "flex-col",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[217px] after:h-[217px] after:-top-[10%] after:-right-[5%] after:blur-[30px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[270px] before:h-[270px] before:bottom-0 before:-left-[10%] before:blur-[30px] before:rounded-full",
    },
    {
      cardImgPadding: "pt-5 px-7",
      cardContentPadding: "px-4 pb-9",
      cardColSpan: "lg:col-span-1 col-span-full",
      cardFlexCol: "flex-col",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-right-[10%] after:blur-[40px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[213px] before:h-[213px] before:top-[20%] before:-left-[15%] before:blur-[30px] before:rounded-full",
    },
    {
      cardImgPadding: "",
      cardContentPadding: "px-4 pt-7",
      cardColSpan: "lg:col-span-1 col-span-full",
      cardFlexCol: "flex-col-reverse",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[213px] after:h-[213px] after:top-[35%] after:-right-[30%] after:blur-[30px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[200px] before:h-[200px] before:top-[-10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
    },
    {
      cardImgPadding: "pt-8 px-12",
      cardContentPadding: "px-4 pb-9",
      cardColSpan: "lg:col-span-1 col-span-full",
      cardFlexCol: "flex-col",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[213px] after:h-[213px] after:top-[40%] after:-right-[25%] after:blur-[30px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[200px] before:h-[200px] before:-top-[10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
    },
    {
      cardImgPadding: "px-5 pt-5",
      cardContentPadding: "px-6 pb-10",
      cardColSpan: "lg:col-span-1 col-span-full",
      cardFlexCol: "flex-col",
      cardGradientAfter: "after:content-[''] after:  after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full",
      cardGradientBefore: "before:content-[''] before:  before:absolute before:w-[200px] before:h-[200px] before:-bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
    },
  ]

  return (
    <section className="py-[65px] text-black px-4">
      <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-montserrat max-w-[986px] mx-auto">
        Features
      </h2>
      <h4 className="text-center lg:text-lg md:text-md text-xs font-montserrat max-w-[986px] mx-auto">Never waste more than a day handing over design requirements with these
      features:</h4>
      <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
        <div className="grid grid-cols-3 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
          {FEATURES_GRID_DATA?.map(
            ({ id, title, description, image }, index) => {
              return (
                <div
                    className={`rounded-3xl overflow-hidden bg-jet flex relative ${featuredSettings[index].cardFlexCol} ${featuredSettings[index].cardGradientAfter} ${featuredSettings[index].cardGradientBefore} justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4`}
                  >
                    <img className={`z-10 relative ${featuredSettings[index].cardImgPadding}`} src={image} alt="" />
                    <div className={`gap-y-2 flex flex-col items-center text-center relative z-10 ${featuredSettings[index].cardContentPadding}`}>
                      <h4 className="lg:text-2xl md:text-xl text-lg text-black font-montserrat text-center font-semibold">
                        {title}
                      </h4>
                      <p className="text-black lg:text-base tet-sm">
                        {description}
                      </p>
                    </div>
                  </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;