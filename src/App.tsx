
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MinimalistVariant from "./pages/variants/MinimalistVariant";
import NotFound from "./pages/NotFound";
import OrganisatieontwikkelingPage from "./pages/services/OrganisatieontwikkelingPage";
import LeiderschapsontwikkelingPage from "./pages/services/LeiderschapsontwikkelingPage";
import ExecutiveCoachingPage from "./pages/services/ExecutiveCoachingPage";
import CultuurveranderingPage from "./pages/cases/CultuurveranderingPage";
import SamenwerkingConflicthanteringPage from "./pages/cases/SamenwerkingConflicthanteringPage";
import HerijkingVisieStrategiePage from "./pages/cases/HerijkingVisieStrategiePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MinimalistVariant />} />
          <Route path="/variant-minimalist" element={<Navigate to="/" replace />} />
          <Route path="/diensten/organisatieontwikkeling" element={<OrganisatieontwikkelingPage />} />
          <Route path="/diensten/leiderschapsontwikkeling" element={<LeiderschapsontwikkelingPage />} />
          <Route path="/diensten/executive-coaching" element={<ExecutiveCoachingPage />} />
          <Route path="/cases/cultuurverandering" element={<CultuurveranderingPage />} />
          <Route path="/cases/samenwerking-conflicthantering" element={<SamenwerkingConflicthanteringPage />} />
          <Route path="/cases/herijking-visie-strategie" element={<HerijkingVisieStrategiePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
