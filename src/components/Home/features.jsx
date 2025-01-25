import { FEATURES_DATA } from "../../data/data";
import { motion } from "framer-motion";
import useGradientUpdater from "../../hooks/useGradientUpdater";

const Features = () => {
  const gradientRefs = useGradientUpdater();

  return (
    <section className="px-4 lg:py-[65px] py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-1 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4">
          {FEATURES_DATA?.map(({ id, title, image }, index) => {
            return (
              <div className=" flex flex-col justify-between items-center h-full">
                  <img
                    className={`px-4 ${index === 1 && "mb-5"} ${
                      index === 2 && "mb-8"
                    }`}
                    src={image}
                    alt=""
                  />
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;