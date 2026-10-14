import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailView } from './components/ProjectDetailView';
import { WebDevInquirySection } from './components/WebDevInquirySection';
import { InquiriesDashboardModal } from './components/InquiriesDashboardModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssetGuideModal } from './components/AssetGuideModal';
import { TourModal } from './components/TourModal';
import { PROPERTIES } from './data/properties';
import { PropertyProject } from './types/property';
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
  const [tourModalOpen, setTourModalOpen] = useState<boolean>(false);
  const [tourModalProject, setTourModalProject] = useState<PropertyProject | null>(null);
  const [dashboardModalOpen, setDashboardModalOpen] = useState<boolean>(false);

  // Routing / Project Detail State
  const [selectedProject, setSelectedProject] = useState<PropertyProject | null>(null);
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

  // Listen to hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '');
        const found = PROPERTIES.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      
      if (!hash || hash === '#' || hash === '#home') {
        setSelectedProject(null);
        setCurrentSection('home');
      } else if (hash === '#projects') {
        setSelectedProject(null);
        setCurrentSection('projects');
      } else if (hash === '#website-development') {
        setSelectedProject(null);
        setCurrentSection('website-development');
      } else if (hash === '#inquiries') {
        setSelectedProject(null);
        setDashboardModalOpen(true);
      } else if (hash === '#about') {
        setSelectedProject(null);
        setCurrentSection('about');
      } else if (hash === '#contact') {
        setSelectedProject(null);
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
  }, [selectedProject]);

  const handleSelectProject = (project: PropertyProject) => {
    setSelectedProject(project);
    window.location.hash = `#project/${project.slug}`;
  };

  const handleBackToCatalog = () => {
    setSelectedProject(null);
    window.location.hash = '#projects';
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    setSelectedProject(null);
    setCurrentSection(sectionId);

    if (sectionId === 'featured-villa') {
      const flagship = PROPERTIES.find((p) => p.featuredInHeroVideo) || PROPERTIES[0];
      handleSelectProject(flagship);
      return;
    }

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

  const handleBookTour = (project: PropertyProject) => {
    setTourModalProject(project);
    setTourModalOpen(true);
  };

  const handleCustomFileSelected = async (file: File) => {
    try {
      const objectUrl = await saveVideoBlob(file);
      setVideoSource(objectUrl);
      setIsCustomFileLoaded(true);
      setCustomFileName(file.name);
      setGuideModalOpen(false);
      
      setSelectedProject(null);
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
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f2ee] flex flex-col font-sans selection:bg-[#2563eb] selection:text-white">
      {/* Client-Facing Navigation Header */}
      <Navbar
        onNavigate={handleNavigate}
        currentSection={selectedProject ? 'projects' : currentSection}
      />

      <main className="flex-1">
        {selectedProject ? (
          /* Dedicated Project Detail Page */
          <ProjectDetailView
            project={selectedProject}
            onBack={handleBackToCatalog}
            onBookTour={handleBookTour}
          />
        ) : (
          /* Full Homepage Showcase */
          <>
            {/* Cinematic Hero Section */}
            <HeroVideo
              videoSource={videoSource}
              onExploreProjects={() => handleNavigate('projects')}
              onContactUs={() => handleNavigate('contact')}
              isAdminMode={isAdminMode}
              onOpenVideoGuide={() => setGuideModalOpen(true)}
            />

            {/* Curated Projects Section */}
            <ProjectsSection
              projects={PROPERTIES}
              onSelectProject={handleSelectProject}
            />

            {/* Modern Client Inquiry Form for Website Development */}
            <WebDevInquirySection
              onOpenDashboard={() => setDashboardModalOpen(true)}
            />

            {/* About Pankaj Property Section */}
            <AboutSection />

            {/* Contact & Private Consultation Section */}
            <ContactSection />
          </>
        )}
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

      {/* Schedule Tour & Inquire Modal */}
      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        project={tourModalProject}
      />

      {/* Client Inquiries Management Dashboard Modal */}
      <InquiriesDashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
      />
    </div>
  );
}
