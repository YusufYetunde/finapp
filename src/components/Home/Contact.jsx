import { Images } from "../../assets/images";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-[65px] text-black px-4">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <motion.div
          className="max-w-[584px] flex flex-col items-center lg:items-start text-center lg:text-start"
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold font-montserrat">
            Try our New Release Web3 Software
          </h3>
          <p className="mt-3 mb-10 font-source-sans lg:text-xl md:text-lg text-base">
          Transform your digital landscapes with automated AI-powered strategies for seamless optimization and innovation.
          </p>
          <button
            type="submit"
            className="bg-risd-blue text-white rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap md:text-base text-sm px-5 font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Try it Now For Free
          </button>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <img src={Images.process_map} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;