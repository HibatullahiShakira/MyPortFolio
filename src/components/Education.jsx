import { motion } from 'framer-motion';

const Education = () => {
    const entries = [
        {
            degree: 'Diploma in Software Engineering (Data Science & ML)',
            institution: 'Semicolon Africa',
            dates: '2025',
            notes: 'Women in Tech Award – Best Graduating Female Student. Coursework: OOP, SDLC, TDD, Backend Architecture, ML Engineering, Cloud Infrastructure.'
        },
        {
            degree: "B.Sc. Economics",
            institution: 'Lead City University',
            dates: '2023',
            notes: 'CGPA: 4.26/5.0 (Top 5%) | Best Graduating Student – Taxation & Fiscal Policy. Relevant coursework: Econometrics, Financial Modeling, Statistics, Calculus, Microeconomics, Derivatives.'
        },
        {
            degree: 'Diploma in Business Management and Entrepreneurship',
            institution: 'Henley Business School, University of Reading',
            dates: '',
            notes: ''
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Education
                </h2>

                <div className="space-y-8">
                    {entries.map((e, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-6 rounded-xl"
                        >
                            <h3 className="text-2xl font-semibold text-cyan-400">
                                {e.degree}
                            </h3>
                            <p className="text-gray-300 font-medium">
                                {e.institution} {e.dates && `| ${e.dates}`}
                            </p>
                            {e.notes && <p className="mt-2 text-gray-300">{e.notes}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
