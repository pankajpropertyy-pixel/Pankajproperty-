import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { SunCityPlotsSection } from './components/SunCityPlotsSection';
import { WallfortMangalamSection } from './components/WallfortMangalamSection';
import { ShreeShyamViharSection } from './components/ShreeShyamViharSection';
import { WebDevInquirySection } from './components/WebDevInquirySection';
import { InquiriesDashboardModal } from './components/InquiriesDashboardModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssetGuideModal } from './components/AssetGuideModal';
import { saveVideoBlob, loadSavedVideo } from './utils/videoStorage';

export default function App() {
  // Video Source Management
  const [videoSource, setVideoSource] = useState<string>('/assets/hero-video.mp4.mp4');
  const [isCustomFileLoaded, setIsCustomFileLoaded] = useState<boolean>(false);
  const [customFileName, setCustomFileName] = useState<string | null>(null);

  // Admin / Owner Mode: only active if ?admin=true is in the query or toggled by owner
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => {
    return window.location.search.includes('admin=true');
  });

  // Modals state
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState<boolean>(false);

  // Routing State
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Load saved video from IndexedDB on startup if available
  useEffect(() => {
    loadSavedVideo().then((saved) => {
      if (saved) {
        setVideoSource(saved.url);
        setIsCustomFileLoaded(true);
        setCustomFileName(saved.fileName);
      }
    });
  }, []);

  // Keyboard shortcut (Alt+V or Ctrl+Shift+V) for owner to open video guide privately; Alt+D for Inquiries Dashboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key.toLowerCase() === 'v') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'v')) {
        e.preventDefault();
        setIsAdminMode(true);
        setGuideModalOpen(true);
      } else if (e.altKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setDashboardModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen to hash changes for smooth in-page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (!hash || hash === '#' || hash === '#home') {
        setCurrentSection('home');
      } else if (hash === '#suncity-plots') {
        setCurrentSection('suncity-plots');
      } else if (hash === '#wallfort-mangalam') {
        setCurrentSection('wallfort-mangalam');
      } else if (hash === '#shree-shyam-vihar') {
        setCurrentSection('shree-shyam-vihar');
      } else if (hash === '#website-development') {
        setCurrentSection('website-development');
      } else if (hash === '#inquiries') {
        setDashboardModalOpen(true);
      } else if (hash === '#about') {
        setCurrentSection('about');
      } else if (hash === '#contact') {
        setCurrentSection('contact');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update canonical link in DOM
  useEffect(() => {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = window.location.origin + window.location.pathname + window.location.hash;
  }, []);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);

    if (sectionId === 'inquiries') {
      setDashboardModalOpen(true);
      return;
    }

    window.location.hash = `#${sectionId}`;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCustomFileSelected = async (file: File) => {
    try {
      const objectUrl = await saveVideoBlob(file);
      setVideoSource(objectUrl);
      setIsCustomFileLoaded(true);
      setCustomFileName(file.name);
      setGuideModalOpen(false);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Failed to create and save object URL for video:', err);
      const memoryUrl = URL.createObjectURL(file);
      setVideoSource(memoryUrl);
      setIsCustomFileLoaded(true);
      setCustomFileName(file.name);
      setGuideModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f2ee] flex flex-col font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Client-Facing Navigation Header */}
      <Navbar
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      <main className="flex-1">
        {/* Cinematic Hero Section using uploaded MP4 video */}
        <HeroVideo
          videoSource={videoSource}
          onExploreProjects={() => handleNavigate('suncity-plots')}
          onContactUs={() => handleNavigate('contact')}
          isAdminMode={isAdminMode}
          onOpenVideoGuide={() => setGuideModalOpen(true)}
        />

        {/* 🏡 Sun City – Residential Plots in Durg Showcase */}
        <SunCityPlotsSection />

        {/* 🏡 Wallfort Mangalam City – Premium Residential Plots Showcase */}
        <WallfortMangalamSection />

        {/* 🏡 Shree Shyam Vihar – Residential Plots in Durg Showcase */}
        <ShreeShyamViharSection />

        {/* Modern Client Inquiry Form for Website Development */}
        <WebDevInquirySection
          onOpenDashboard={() => setDashboardModalOpen(true)}
        />

        {/* About Pankaj Property & Construction Section */}
        <AboutSection />

        {/* Contact & Office Consultation Section (Junwani Road, Bhilai) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOwnerGuide={() => setGuideModalOpen(true)}
        isAdminMode={isAdminMode}
      />

      {/* Hero Video Asset Management Modal (Owner Only) */}
      <AssetGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
        onFileSelected={handleCustomFileSelected}
        activeVideoSource={videoSource}
        isCustomFileLoaded={isCustomFileLoaded}
        customFileName={customFileName}
      />

      {/* Client Inquiries Management Dashboard Modal */}
      <InquiriesDashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
      />
    </div>
  );
}
