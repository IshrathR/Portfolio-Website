import { useTheme } from './hooks/useTheme';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Qualifications from './components/sections/Qualifications';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

export default function App() {
    const { isDark, toggle } = useTheme();

    return (
        <Layout isDark={isDark} toggleTheme={toggle}>
            <Hero />
            <About />
            <Skills />
            <Qualifications />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
        </Layout>
    );
}
