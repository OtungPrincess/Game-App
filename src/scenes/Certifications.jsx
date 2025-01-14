import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Certifications = () => {
    const certificationStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
        justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
    return (
        <section id="certifications" className="pt-32 pb-16">
            {/* HEADING */}
            <motion.div
                  className="md:w-1/3 text-center md:text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                        CERTIFICATIONS
                    </p>
                    <LineGradient width="mx:auto w-2/4" />
                    <p className="mt-10">
                        Welcome to my certification page, 
                        a testament to the culmination of my doctoral journey. 
                        Explore the credentials, expertise, and achievements that 
                        define my dedication to advancing knowledge in Material Science and Engineering."
                    </p>
            </motion.div>

            {/* CERTIFICATIONS */}
            <div className="md:flex md:justify-between gap-8">
            <motion.div
                  className={`bg-blue ${certificationStyles} before:content-person1`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                >
                    <p className="font-playfair text-6xl">"</p>
            </motion.div>

            </div>
        </section>
    )
}

export default Certifications;