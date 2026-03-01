import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Languages & Frameworks": [
            "Python", "Java (Spring Boot)", "JavaScript", "SQL", "React", "FastAPI", "Django REST"
        ],
        "Data & ML Engineering": [
            "ETL Pipelines (Mage)", "GCP BigQuery", "PostgreSQL", "Event Sourcing",
            "Feature Engineering", "Scikit-learn", "Forecasting Models"
        ],
        "Cloud & Infrastructure": [
            "AWS (ECS Fargate, SQS, S3, RDS, Cognito)", "GCP", "Docker", "Kubernetes",
            "LangGraph", "MLOps", "SageMaker"
        ],
        "Financial Domain": [
            "Double-Entry Accounting", "ERP Data Modelling", "Semantic Layers",
            "Monte Carlo Simulation", "Nigerian Tax Law", "IFRS Depreciation",
            "Credit Risk Modelling"
        ],
        "Architecture & Design": [
            "Microservices", "Event-Driven Systems", "Multi-Tenant SaaS",
            "RAG", "LLM Orchestration", "System Design", "SOLID Principles"
        ]
    };

    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-700 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-slate-600 px-3 py-1 rounded-full text-sm"
                                    >
                    {skill}
                  </motion.span>
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