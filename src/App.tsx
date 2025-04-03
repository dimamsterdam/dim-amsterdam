
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MinimalistVariant from "./pages/variants/MinimalistVariant";
import NotFound from "./pages/NotFound";
import OrganisatieontwikkelingPage from "./pages/services/OrganisatieontwikkelingPage";
import LeiderschapsontwikkelingPage from "./pages/services/LeiderschapsontwikkelingPage";
import ExecutiveCoachingPage from "./pages/services/ExecutiveCoachingPage";
import CultuurveranderingPage from "./pages/cases/CultuurveranderingPage";
import SamenwerkingConflicthanteringPage from "./pages/cases/SamenwerkingConflicthanteringPage";
import HerijkingVisieStrategiePage from "./pages/cases/HerijkingVisieStrategiePage";
import LeiderschapsprogrammaPage from "./pages/cases/LeiderschapsprogrammaPage";
import IntervisieStrategischLeiderschapPage from "./pages/cases/IntervisieStrategischLeiderschapPage";
import TeamontwikkelingPage from "./pages/cases/TeamontwikkelingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ReferencesPage from "./pages/ReferencesPage";
import PrivacyPage from "./pages/PrivacyPage";

// ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MinimalistVariant />} />
          <Route path="/variant-minimalist" element={<Navigate to="/" replace />} />
          <Route path="/diensten/organisatieontwikkeling" element={<OrganisatieontwikkelingPage />} />
          <Route path="/diensten/leiderschapsontwikkeling" element={<LeiderschapsontwikkelingPage />} />
          <Route path="/diensten/executive-coaching" element={<ExecutiveCoachingPage />} />
          <Route path="/cases/cultuurverandering" element={<CultuurveranderingPage />} />
          <Route path="/cases/samenwerking-conflicthantering" element={<SamenwerkingConflicthanteringPage />} />
          <Route path="/cases/herijking-visie-strategie" element={<HerijkingVisieStrategiePage />} />
          <Route path="/cases/leiderschapsprogramma" element={<LeiderschapsprogrammaPage />} />
          <Route path="/cases/intervisie-strategisch-leiderschap" element={<IntervisieStrategischLeiderschapPage />} />
          <Route path="/cases/teamontwikkeling" element={<TeamontwikkelingPage />} />
          <Route path="/referenties" element={<ReferencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
