
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageRoute } from './types';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTopButton } from './components/BackToTopButton';
import { AIChatbot } from './components/AIChatbot';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';

const Layout: React.FC = () => {
  const { dir } = useLanguage();
  return (
    <div dir={dir} className="min-h-screen flex flex-col bg-brand-deep font-sans selection:bg-brand-primary selection:text-brand-deep transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <AIChatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={PageRoute.ABOUT} element={<About />} />
              <Route path={PageRoute.SERVICES} element={<Services />} />
              <Route path={PageRoute.PRODUCTS} element={<Products />} />
              <Route path={PageRoute.PORTFOLIO} element={<Portfolio />} />
              <Route path={PageRoute.CONTACT} element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
