import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "AMSS Enterprise — Autonomous Financial Intelligence Platform",
            problem: "Nigerian and emerging-market SMEs lack integrated financial decision-support — recording, forecasting, and advisory are treated as separate tools.",
            solution: "Architected a LangGraph autonomous agent grounded in Real Options Theory and Prospect Theory, with multi-step reasoning for loan decisions. Built an ensemble cash-flow forecasting layer combining Prophet and LSTM calibrated for Nigerian macroeconomic dynamics. Implemented a Monte Carlo uncertainty engine and Lambda architecture.",
            impact: "Achieved <12% MAPE on 6-month cash-flow projections; system simulates repayment probability under macro uncertainty, computes opportunity cost, and produces auditable, plain-language recommendations.",
            tools: ["LangGraph", "LangChain", "Prophet", "LSTM (PyTorch)", "Monte Carlo", "Django", "PostgreSQL", "Docker", "AWS", "MLflow"],
            details: "An AI-native financial decision-support platform that records, predicts, and advises simultaneously. The forecasting layer is calibrated for naira volatility, CBN monetary policy cycles, and informal-economy patterns. Uses a Lambda architecture separating real-time event processing from batch analytics and ML training."
        },
        {
            title: "IPPIS Payroll Insights",
            problem: "Raw government payroll exports (IPPIS SoftSUITE nominal rolls and bulk payslip PDFs) are unstructured and unsearchable.",
            solution: "Built a full-stack application that parses, queries, and analyzes payroll data — bulk ingestion for Excel nominal rolls and PDF payslip batches, automatically extracting employee records, earnings, and deductions into a relational schema.",
            impact: "Analytics dashboard surfacing salary trends, department-level payroll costs, Grade Level distributions, and top deduction categories. CI/CD pipeline running backend tests and frontend builds on every push.",
            tools: ["React", "Vite", "Recharts", "Flask", "SQLAlchemy", "Flask-JWT-Extended", "PyPDF2", "GitHub Actions"],
            details: "Implemented an employee directory with search/filter by department, IPPIS number, and Grade Level, plus individual payslip generation and download. Set up a GitHub Actions CI/CD pipeline running backend tests and frontend builds on every push to main."
        },
        {
            title: "N-ATLAS — Nigeria's First Open-Source Multilingual LLM",
            problem: "Nigeria had no open-source LLM that actually understood its languages — most models treated Yoruba, Hausa, Igbo, and Nigerian-accented English as an afterthought.",
            solution: "N-ATLAS (Llama-3 8B base, 400M tokens) was built to close that gap. Engineered an ASR pipeline using a fine-tuned Whisper architecture with custom phoneme lexicon development and 50K+ hours of curated audio preprocessing.",
            impact: "Achieved <15% WER on low-resource Nigerian languages; cut TTS latency by 30%; deployed on AWS with auto-scaling handling 10K+ daily transcription requests. Launched at UNGA80 and open-sourced on HuggingFace.",
            tools: ["PyTorch", "HuggingFace", "Llama-3", "Whisper", "FastAPI", "Docker", "AWS (Lambda/EC2/S3)"],
            details: "Built production TTS inference APIs with FastAPI + Docker, cutting latency from 2.1s to 1.5s to support real-time multilingual voice applications for government service interfaces. Collaborated with linguistics teams to build culturally accurate data collection protocols rather than treating dialect variation as noise."
        },
        {
            title: "DataExtractor — AI Document Intelligence System",
            problem: "Extracting structured data from unstructured source documents using brittle template matching is fragile and unmaintainable.",
            solution: "Built a FastAPI backend integrating the Claude Vision API for document field extraction, paired with a React frontend for review and correction. Vision-based AI extraction rather than template matching.",
            impact: "31 unit tests covering extraction and API logic to keep field-mapping regressions from silently breaking output. Containerized and deployed on Railway.",
            tools: ["Python", "FastAPI", "React", "Claude Vision API", "Docker"],
            details: "A document-intelligence tool built at I&M Engineering Limited — the same underlying problem as the German construction-order pipeline, solved as a standalone, testable service with a reproducible Docker build and a real deployment target."
        },
        {
            title: "Credit Risk Scoring System for Alternative Lending",
            problem: "Alternative lenders serving SMEs often don't have reliable credit models — the applicants they're trying to serve are exactly the ones traditional scoring methods weren't built for.",
            solution: "Developed a credit scoring pipeline combining logistic regression and XGBoost on 10K+ loan applications. Engineered 30+ financial and behavioral features to support instant credit decisioning.",
            impact: "Achieved 82% classification accuracy and 0.78 AUC-ROC; real-time scoring REST API with <200ms response time.",
            tools: ["Scikit-learn", "XGBoost", "Flask", "PostgreSQL", "Docker"],
            details: "Built a scoring pipeline suited to the data reality of alternative lending — relying on engineered financial and behavioral features rather than a handful of traditional bureau fields. The Flask API makes the model usable in an actual lending workflow rather than a notebook-only result."
        },
        {
            title: "Silent Speech Interface for Accessibility",
            problem: "Speech-impaired users need real-time text output, not a system that processes their input in batches after the conversation has moved on.",
            solution: "Engineered a real-time silent speech-to-text system using a Java/Spring Boot backend with WebSocket streaming.",
            impact: "Achieved <500ms latency, keeping the system usable for live conversation rather than delayed transcription.",
            tools: ["Java", "WebSockets", "NLP", "Spring Boot"],
            details: "Built to address a real communication gap: the system prioritizes low-latency streaming to keep up with live conversation pace."
        },
        {
            title: "PrepAI Exam Prep Platform",
            problem: "Manual question generation for WAEC/JAMB exams was time consuming",
            solution: "Developed AI service using fine-tuned LLMs and RAG for automatic question creation and evaluation",
            impact: "Cut generation from hours to seconds and supported 200+ student assignments during pilot",
            tools: ["HuggingFace", "LangChain", "Flask", "PostgreSQL"],
            details: "Architected API with automated grading and mentored 45 students through curriculum."
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