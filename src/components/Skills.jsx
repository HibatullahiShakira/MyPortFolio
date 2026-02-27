import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Languages & Frameworks": [
            "Python", "Java", "JavaScript", "SQL", "TypeScript",
            "Flask", "Django", "FastAPI", "Spring Boot", "React"
        ],
        "ML/AI Stack": [
            "PyTorch", "TensorFlow", "HuggingFace Transformers", "Scikit-learn",
            "OpenCV", "Whisper", "Llama-3", "SARIMA/ARIMA", "XGBoost"
        ],
        "NLP & Speech": [
            "ASR/TTS architectures", "NLTK", "SpaCy", "fine-tuning LLMs (LoRA)",
            "prompt engineering", "Whisper", "Whisper", "speech preprocessing"
        ],
        "MLOps & Cloud": [
            "Docker", "Kubernetes", "AWS (Lambda, SageMaker, EC2, S3)",
            "CI/CD (GitHub Actions)", "MLflow"
        ],
        "Data Engineering": [
            "PostgreSQL", "BigQuery", "ETL (Mage)", "Pandas", "NumPy",
            "large-scale preprocessing"
        ],
        "Software Engineering": [
            "REST API design", "microservices", "OOP", "SDLC", "TDD",
            "Git", "WebSockets", "real-time systems"
        ],
        "Frontend": [
            "HTML", "CSS", "JavaScript", "React", "responsive design"
        ]
    };

    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-slate-700 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-600 px-3 py-1 rounded-full text-sm"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;