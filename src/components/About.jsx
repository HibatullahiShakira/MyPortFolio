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
                    I am a Machine Learning Engineer and Software Engineer with a strong foundation in Economics, quantitative analysis, and financial data systems. My experience includes contributing to Nigeria’s first open-source multilingual LLM, deploying ASR/TTS services at scale, and building production machine learning pipelines for fintech and risk modelling applications.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    I specialize in end-to-end systems — from data collection and preprocessing to model training, backend services, inference APIs, and cloud deployment. My background spans backend engineering (Java, Python, Django, FastAPI), distributed ETL pipelines, financial data modelling, and production-grade event-driven architectures built for real-world reliability, not prototypes.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    I enjoy working at the intersection of research and engineering, translating complex algorithms into scalable, maintainable software. I have a strong track record of independently researching solutions, designing system architecture, and owning projects end-to-end from schema design to deployment.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Outside of work, I mentor aspiring engineers, contribute to open-source AI and language model projects, and keep up with advances in machine learning and distributed systems. I am interested in senior engineering roles where I can design systems, lead projects, and mentor teams.
                </motion.p>
            </div>
        </div>
    </section>
);

export default About