import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "N-ATLAS Multilingual LLM",
            problem: "Lack of open-source LLMs supporting Nigerian languages",
            solution: "Built an 8B‑parameter Llama‑3 based model trained on 400M tokens covering Yoruba, Hausa, Igbo and Nigerian English",
            impact: "Launched at UNGA80 and open‑sourced; foundation for downstream NLP tools in Nigeria",
            tools: ["PyTorch", "HuggingFace", "Llama-3", "NLP"],
            details: "Co‑authored data collection protocols, trained model and managed release on HuggingFace (NCAIR1/N-ATLaS)."
        },
        {
            title: "ASR/TTS Pipeline for Nigerian Languages",
            problem: "High word error rates on low-resource Nigerian speech data",
            solution: "Fine‑tuned Whisper ASR with custom phoneme lexicons and built FastAPI inference endpoints for TTS",
            impact: "Achieved <15% WER; deployed on AWS auto‑scaling infrastructure serving 10K+ daily requests",
            tools: ["Whisper", "FastAPI", "Docker", "AWS Lambda"],
            details: "Reduced TTS latency by 30% and open‑sourced models.",
        },
        {
            title: "PrepAI Exam Prep Platform",
            problem: "Manual question generation for WAEC/JAMB exams was time consuming",
            solution: "Developed AI service using fine‑tuned LLMs and RAG for automatic question creation and evaluation",
            impact: "Cut generation from hours to seconds and supported 200+ student assignments during pilot",
            tools: ["HuggingFace", "LangChain", "Flask", "PostgreSQL"],
            details: "Architected API with automated grading and mentored 45 students through curriculum."
        },
        {
            title: "Nigerian SME Accounting & ERP System",
            problem: "Manual financial tracking impeding SME growth",
            solution: "Full‑stack accounting software with forecasting models and RBAC",
            impact: "Handled 10K+ transactions; forecasts with <12% MAPE on 6‑month revenue",
            tools: ["Flask", "Django", "PostgreSQL", "SARIMA"],
            details: "Designed REST APIs and integrated SARIMA/ARIMA models for budget predictions."
        },
        {
            title: "Credit Risk Scoring System",
            problem: "Lack of reliable credit models for alternative lending",
            solution: "Logistic regression + XGBoost pipeline exposed via real‑time scoring API",
            impact: "82% accuracy and sub‑200ms response, enabling instant credit decisions",
            tools: ["Scikit-learn", "XGBoost", "Flask", "Docker"],
            details: "Engineered features from 30+ variables and containerized for horizontal scaling."
        },
        {
            title: "Silent Speech Interface for Accessibility",
            problem: "Communication barriers for speech‑impaired users",
            solution: "Real‑time silent speech‑to‑text service using Java and WebSockets",
            impact: "Delivered <500ms latency enabling accessible applications",
            tools: ["Java", "WebSockets", "NLP", "Spring Boot"],
            details: "Integrated intent recognition and managed end‑to‑end streaming."
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-6 rounded-xl cursor-pointer hover:bg-slate-600/50 transition-all"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.problem}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="bg-slate-600 px-2 py-1 rounded-full text-xs"
                                    >
                    {tool}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;