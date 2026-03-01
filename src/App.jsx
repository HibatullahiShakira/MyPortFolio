import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contacts.jsx';
import About from './components/About.jsx';
import ContactInfo from "./components/ContactInfo.jsx";
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Leadership from './components/Leadership.jsx';

const App = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-gray-100">
            <Navigation />
            <Hero />
            <About/>
            <Education />
            <Leadership />
            <Skills />
            <Projects />
            <Experience />
            <ContactInfo/>
            <Contact />
        </div>
    );
};

export default App;