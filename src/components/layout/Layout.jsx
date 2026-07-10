import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, isDark, toggleTheme }) {
    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
