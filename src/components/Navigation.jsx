import { motion } from 'framer-motion';
import { Linkedin, Github} from 'lucide-react';

const Navigation = () => (
    <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-slate-800/80 backdrop-blur-sm z-50 shadow-xl"
    >
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-cyan-400">HS</span>
                <div className="flex items-center gap-8 text-gray-300">
                    {["About", "Education", "Leadership", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"
                    >
                        Resume
                    </a>
                    <div className="flex gap-4 ml-4">
                        <a href="https://www.linkedin.com/in/shakira-hibatullahi-333126293/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                        <a href="https://github.com/HibatullahiShakira" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.nav>
);

export default Navigation;