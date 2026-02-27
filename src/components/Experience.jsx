import { motion } from 'framer-motion';

const Experience = () => {
    const roles = [
        {
            title: 'Software Engineer (ML-Focused)',
            company: 'National Centre for Artificial Intelligence & Robotics',
            location: 'Abuja, Nigeria',
            dates: 'Sept 2025 – Present',
            bullets: [
                'Contributor to N-ATLAS v1, Nigeria’s first open-source multilingual LLM (Llama-3 8B base). Launched at UNGA80.',
                'Engineered ASR pipeline with fine-tuned Whisper; achieved <15% WER on low-resource languages.',
                'Built production TTS inference APIs with FastAPI + Docker, reducing latency by 30%.',
                'Deployed speech models on AWS (EC2/S3/Lambda) with auto-scaling handling 10K+ daily requests.',
                'Collaborated with linguistics departments to establish culturally accurate data collection protocols.'
            ]
        },
        {
            title: 'Machine Learning Engineering Intern',
            company: 'Publica AI',
            location: 'Lagos, Nigeria',
            dates: 'May 2025 – Sept 2025',
            bullets: [
                'Architected PrepAI exam prep platform using fine-tuned LLMs and RAG pipelines for automated question generation.',
                'Built question generation & evaluation API (Flask + PostgreSQL) with real-time feedback for 200+ student assignments.',
                'Mentored 45 students across three cohorts and helped adapt curriculum for East Africa expansion.',
                'Selected to AI Developer Panel (NCC) evaluating 120+ candidates for national AI training programs.'
            ]
        },
        {
            title: 'Software Engineer Facilitator (Part-Time)',
            company: 'Eyinmofe/Mofemart',
            location: 'Lagos, Nigeria',
            dates: 'Aug 2024 – Aug 2025',
            bullets: [
                'Delivered 200+ hours of software engineering curriculum to beginners (Java/Python, OOP, backend fundamentals).',
                'Mentored students to build 15+ functional projects; maintained 92% course completion rate.',
                'Conducted 300+ code reviews emphasizing clean code, testing, and documentation.',
                'Developed assessment rubrics and capstone projects simulating real-world development workflows.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Experience
                </h2>
                <div className="space-y-12">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-semibold text-cyan-400">
                                {role.title}
                            </h3>
                            <p className="text-gray-300">
                                {role.company} – {role.location} ({role.dates})
                            </p>
                            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                                {role.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
