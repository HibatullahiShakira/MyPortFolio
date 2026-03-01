import { motion } from 'framer-motion';

const Leadership = () => {
    const items = [
        {
            role: 'AI Curriculum Co-Creator & Mentor',
            organisation: 'CcHub Lekki & East Africa (Kenya/Rwanda)',
            dates: '2025'
        },
        {
            role: 'AI Developer Selection Panel Member',
            organisation: 'Nigerian Communications Commission Digital Innovation Park',
            dates: '2025'
        },
        {
            role: 'Featured Alumni',
            organisation: 'Semicolon Africa (3× featured)',
            dates: '2024 – 2025'
        },
        {
            role: 'Mentor',
            organisation: 'Semicolon Women in Tech Initiative',
            dates: '2024 – Present'
        }
    ];

    return (
        <section id="leadership" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Leadership & Recognition
                </h2>

                <div className="space-y-8">
                    {items.map((i, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-6 rounded-xl"
                        >
                            <h3 className="text-2xl font-semibold text-cyan-400">
                                {i.role}
                            </h3>
                            <p className="text-gray-300 font-medium">
                                {i.organisation} {i.dates && `| ${i.dates}`}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
