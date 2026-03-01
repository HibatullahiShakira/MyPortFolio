import { motion } from 'framer-motion';
// import Shakirah from '../assets/Shakirah.JPG'
const Hero = () => (
    <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
            >
                {/* Text Content */}
                <div>
                    <h1 className="text-5xl font-bold mb-6 text-cyan-100">
                        Hibatullahi Shakira
                    </h1>
                    <h2 className="text-3xl mb-8 font-light text-cyan-400">
                        Software & Machine Learning Engineer
                    </h2>
                    <div className="space-y-6 text-lg mb-12 text-gray-300 max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Machine Learning and Software Engineer with a foundation in economics 
                            and a track record of shipping production-grade AI systems.
                            I design end-to-end ML pipelines, scalable backends, and cloud-ready 
                            architectures that drive measurable impact in fintech, NLP/ASR, 
                            and enterprise applications.
                            Specialising in financial intelligence systems and production-grade,
                            event-driven architectures, with a background in backend engineering 
                            (Java, Python), distributed ETL, and applied machine learning.
                        </motion.p>
                    </div>
                    <div className="flex space-x-6">
                        {/* Links to the contact section */}
                        <a
                            href="#contact"
                            className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>

            
                    </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative group inline-block max-w-md overflow-hidden p-4"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />

                    {/* Your Image */}
                    <img
                        // current asset still Shakirah.JPG; replace or rename to update
                        src={new URL('../assets/Shakirah.JPG', import.meta.url).href}
                        alt="Hibatullahi Shakira"
                        className="relative rounded-3xl w-full max-w-md max-h-[32rem] h-auto object-contain object-center border-2 border-cyan-500/20"
                    />
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Hero;