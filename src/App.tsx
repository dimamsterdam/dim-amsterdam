
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Index";
import NotFound from "./pages/NotFound";
import MinimalistVariant from "./pages/variants/MinimalistVariant";
import ModernVariant from "./pages/variants/ModernVariant";
import CreativeVariant from "./pages/variants/CreativeVariant";
import DarkVariant from "./pages/variants/DarkVariant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/variant-minimalist" element={<MinimalistVariant />} />
          <Route path="/variant-modern" element={<ModernVariant />} />
          <Route path="/variant-creative" element={<CreativeVariant />} />
          <Route path="/variant-dark" element={<DarkVariant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
