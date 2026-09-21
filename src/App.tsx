import React, { useState } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { GlassNav, NavTarget } from './components/common/GlassNav';
import { Footer } from './components/common/Footer';
import { ContactSuggestionSection } from './components/home/ContactSuggestionSection';
import { MethodologyModal } from './components/common/MethodologyModal';
import { HeroSection } from './components/hero/HeroSection';
import { StorySection_ScatteredEvidence } from './components/storytelling/StorySection_ScatteredEvidence';
import { StorySection03_EntityRes } from './components/storytelling/StorySection03_EntityRes';
import { StorySection04_Duplicates } from './components/storytelling/StorySection04_Duplicates';
import { StorySection05_Conflict } from './components/storytelling/StorySection05_Conflict';
import { StorySection06_Aspects } from './components/storytelling/StorySection06_Aspects';
import { ResearchPipelineModal } from './components/search/ResearchPipelineModal';
import { ResultsDashboard } from './components/results/ResultsDashboard';
import { EvidenceGraphModal } from './components/graph/EvidenceGraphModal';
import { EvidenceDrawer } from './components/drawer/EvidenceDrawer';
import { EntityDetailPage } from './components/entity/EntityDetailPage';
import { CompareView } from './components/compare/CompareView';
import { FullMapPage } from './components/map/FullMapPage';
import { ResearchHistoryPage } from './components/history/ResearchHistoryPage';
import { SourcesStatusPage } from './components/sources/SourcesStatusPage';
import { MethodologyPage } from './components/methodology/MethodologyPage';
import { PrivacyPolicyPage } from './components/legal/PrivacyPolicyPage';
import { TermsPage } from './components/legal/TermsPage';
import { NotFoundPage } from './components/common/NotFoundPage';
import { CookieNotice } from './components/common/CookieNotice';
import { genericEducationDemoData } from './data/genericDemoData';
import { generateResearchReportForQuery, parseQueryConstraints } from './data/mockGenerator';
import { fetchResearchReport } from './api/reviewLens';
import { ResearchQuery, EntityReport } from './types/evidence';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { tactileAudio } from './utils/audio';

export function App() {
  const [activeView, setActiveView] = useState<NavTarget>('hero');
  const [searchQueryString, setSearchQueryString] = useState<string>(genericEducationDemoData.query);
  const [researchData, setResearchData] = useState<ResearchQuery>(genericEducationDemoData);
  const [isResearching, setIsResearching] = useState<boolean>(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState<boolean>(false);
  const [isDirectGraphOpen, setIsDirectGraphOpen] = useState<boolean>(false);

  // Deep view selections
  const [selectedEntityForDetail, setSelectedEntityForDetail] = useState<EntityReport | null>(null);
  const [compareEntities, setCompareEntities] = useState<EntityReport[]>([]);

  // Evidence drawer state (for Map & full drawer interactions)
  const [selectedDrawerEntity, setSelectedDrawerEntity] = useState<EntityReport | null>(null);
  const [drawerAspect, setDrawerAspect] = useState<string>('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const pendingReportRef = React.useRef<Promise<{ data: ResearchQuery; isFromBackend: boolean }> | null>(null);

  // Trigger search pipeline
  const handleStartSearch = (query: string) => {
    setSearchQueryString(query);
    setIsResearching(true);
    pendingReportRef.current = fetchResearchReport(query);
  };

  // When pipeline finishes
  const handlePipelineComplete = async () => {
    let report: ResearchQuery;
    try {
      if (pendingReportRef.current) {
        const res = await pendingReportRef.current;
        report = res.data;
      } else {
        const res = await fetchResearchReport(searchQueryString);
        report = res.data;
      }
    } catch {
      report = generateResearchReportForQuery(searchQueryString);
    }

    setResearchData(report);
    setIsResearching(false);
    setActiveView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hash routing listener for direct URL loading
  React.useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['map', 'compare', 'history', 'sources', 'methodology', 'privacy', 'terms'].includes(hash)) {
        setActiveView(hash as NavTarget);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'research' || hash === 'results') {
        setActiveView('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'contact') {
        setActiveView('hero');
        setTimeout(() => {
          document.getElementById('contact-suggestion-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash === '404') {
        setActiveView('404');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  // Nav routing coordinator
  const handleNavClick = (target: NavTarget) => {
    if (target === 'graph') {
      setIsDirectGraphOpen(true);
      return;
    }

    setActiveView(target);

    if (target === 'hero' || target === 'results' || target === 'map' || target === 'compare' || target === 'history' || target === 'sources' || target === 'methodology' || target === 'privacy' || target === 'terms' || target === '404') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (target === 'hero') {
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        window.location.hash = target;
      }
    } else if (target === 'story') {
      setActiveView('hero');
      setTimeout(() => {
        const storyElement = document.getElementById('storytelling-container');
        storyElement?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (target === 'contact') {
      setActiveView('hero');
      window.location.hash = 'contact';
      setTimeout(() => {
        const contactElement = document.getElementById('contact-suggestion-section');
        contactElement?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const parsedConstraints = parseQueryConstraints(searchQueryString);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] relative selection:bg-[#6B7CFF]/15 selection:text-[#2A37A5] overflow-x-hidden">
      {/* Precision Micro Magnetic Cursor */}
      <CustomCursor />

      {/* Skip to Main Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999] px-4 py-2 bg-[#18181B] text-white rounded-xl text-xs font-mono-code shadow-xl focus:outline-none focus:ring-2 focus:ring-[#4A5CD8]"
      >
        Skip to main content
      </a>

      {/* Floating Glass Navigation Header */}
      <GlassNav
        onNavClick={handleNavClick}
        activeView={activeView}
        onOpenSearch={() => {
          setActiveView('hero');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Primary Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Primary Views Coordinator */}
        {activeView === 'results' ? (
          <ResultsDashboard
            researchQuery={researchData}
            onBackToHero={() => {
              setActiveView('hero');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          onOpenEntityDetail={(entity) => {
            setSelectedEntityForDetail(entity);
            setActiveView('entity');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenComparePage={(entities) => {
            setCompareEntities(entities);
            setActiveView('compare');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenFullMapPage={() => {
            setActiveView('map');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'entity' && selectedEntityForDetail ? (
        <EntityDetailPage
          entity={selectedEntityForDetail}
          allEntities={researchData.results}
          onBack={() => {
            setActiveView('results');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectEntity={(entity) => {
            setSelectedEntityForDetail(entity);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onCompare={(entity) => {
            const others = researchData.results.filter((e) => e.id !== entity.id);
            setCompareEntities([entity, ...(others.slice(0, 1))]);
            setActiveView('compare');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'compare' ? (
        <CompareView
          entities={compareEntities}
          allAvailableEntities={researchData.results}
          onBack={() => {
            setActiveView('results');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectEntityDetail={(entity) => {
            setSelectedEntityForDetail(entity);
            setActiveView('entity');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'map' ? (
        <FullMapPage
          entities={researchData.results}
          onBack={() => {
            setActiveView('results');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenEntityDetail={(entity) => {
            setSelectedEntityForDetail(entity);
            setActiveView('entity');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenEvidenceDrawer={(entity) => {
            setSelectedDrawerEntity(entity);
            setDrawerAspect('All');
            setIsDrawerOpen(true);
          }}
        />
      ) : activeView === 'history' ? (
        <ResearchHistoryPage
          onBack={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectRun={(runData) => {
            if (runData?.results) {
              setResearchData(runData);
            }
            setActiveView('results');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onRerunQuery={(queryText) => {
            handleStartSearch(queryText);
          }}
        />
      ) : activeView === 'sources' ? (
        <SourcesStatusPage
          onBack={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'methodology' ? (
        <MethodologyPage
          onBack={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'privacy' ? (
        <PrivacyPolicyPage
          onBack={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'terms' ? (
        <TermsPage
          onBack={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === '404' ? (
        <NotFoundPage
          onHome={() => {
            setActiveView('hero');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          {/* Hero Section with 2D Honest Evidence Source Cards & Reference Background */}
          <HeroSection onSearch={handleStartSearch} />

          {/* Editorial Storytelling Scroll Experience */}
          <div id="storytelling-container">
            <StorySection_ScatteredEvidence onExploreResearch={() => handleStartSearch(genericEducationDemoData.query)} />
            <StorySection03_EntityRes />
            <StorySection04_Duplicates />
            <StorySection05_Conflict />
            <StorySection06_Aspects />
          </div>

          {/* Bottom Call-to-Action Stage (Luxury Daylight Editorial) */}
          <section className="py-24 border-t border-zinc-200/80 bg-[#F6F3ED]/80 backdrop-blur-xs relative text-center overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3444B8] text-xs font-mono-code font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#4A5CD8]" />
                <span className="tracking-wider uppercase">READY TO AUDIT THE EVIDENCE?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] leading-tight">
                Inspect multi-source public evidence
                <br />
                <span className="italic editorial-gradient">
                  in one traceable intelligence report.
                </span>
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base font-light max-w-xl mx-auto">
                Explore how multiple entities compare across community discussions, conflicting public signals, and domain-specific factors.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    handleStartSearch(genericEducationDemoData.query);
                  }}
                  data-cursor="pointer"
                  className="px-6 py-3.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white font-medium text-xs tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Launch Demonstration Intelligence Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    setIsDirectGraphOpen(true);
                  }}
                  data-cursor="graph"
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-[#18181B] font-mono-code text-xs transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-purple-600" />
                  <span>Inspect Evidence Graph</span>
                </button>
              </div>
            </div>
          </section>

          {/* Editorial Community Contact & Suggestion Section */}
          <ContactSuggestionSection />
        </>
      )}
      </main>

      {/* Editorial Luxury Footer */}
      <Footer onNavClick={handleNavClick} githubUrl="https://github.com/17rajsal/ReviewLens" />

      {/* Local Storage & Privacy Notice */}
      <CookieNotice onOpenPrivacy={() => handleNavClick('privacy')} />

      {/* Cinematic Research Pipeline Loading Modal */}
      <ResearchPipelineModal
        isOpen={isResearching}
        query={searchQueryString}
        constraints={parsedConstraints}
        onComplete={handlePipelineComplete}
      />

      {/* Standalone Evidence Drawer (from Map or Deep Views) */}
      <EvidenceDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        entity={selectedDrawerEntity}
        initialAspectFilter={drawerAspect}
      />

      {/* Methodology Transparency Modal */}
      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />

      {/* Global Standalone Evidence Graph Modal */}
      {isDirectGraphOpen && (
        <EvidenceGraphModal
          isOpen={isDirectGraphOpen}
          onClose={() => setIsDirectGraphOpen(false)}
          entity={researchData.results[0] || genericEducationDemoData.results[0]}
          allEntities={researchData.results.length > 0 ? researchData.results : genericEducationDemoData.results}
          onSelectEntity={(ent) => {
            setSelectedEntityForDetail(ent);
          }}
        />
      )}
    </div>
  );
}

export default App;
