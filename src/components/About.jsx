import { motion } from 'framer-motion';

const About = () => (
    <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                About Me
            </h2>

            <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    I am a Machine Learning Engineer and Software Engineer with a strong foundation in Economics, quantitative analysis, and financial data systems. My path into this field started with an Economics degree focused on taxation, fiscal policy, and econometrics — which is where my interest in quantitative finance actually comes from, not the other way around. That background now shows up directly in my engineering work: I build systems that model financial uncertainty and decision-making, not just systems that move data around.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    My experience includes contributing to Nigeria's first open-source multilingual LLM, deploying ASR/TTS services at scale, and building production machine learning pipelines for fintech, payroll analytics, and risk modelling applications. I specialize in end-to-end systems — from data collection and preprocessing to model training, backend services, inference APIs, and cloud deployment.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    The clearest expression of where economics and engineering meet for me is AMSS Enterprise, a financial intelligence platform I designed and built independently: an autonomous agent that reasons about loan decisions using Real Options Theory and Prospect Theory, forecasts cash flow with an ensemble of Prophet and LSTM models calibrated to Nigerian macroeconomic conditions, and runs Monte Carlo simulations to quantify uncertainty rather than hide it. It's the project I'd point to as evidence that I can operate at the intersection of quantitative finance and applied ML, not just describe the intersection.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    I enjoy working at the boundary of research and engineering, translating complex algorithms into scalable, maintainable software, and I have a strong track record of independently researching solutions, designing system architecture, and owning projects end-to-end from schema design to deployment.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Outside of work, I mentor aspiring engineers, contribute to open-source AI and language model projects, and keep up with advances in machine learning and distributed systems. I'm interested in senior engineering roles where I can design systems, lead projects, and mentor teams.
                </motion.p>
            </div>
        </div>
    </section>
);

export default About