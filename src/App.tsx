import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import DiscordBadge from "./components/DiscordBadge";
import DiscordModal from "./components/DiscordModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CustomCursor />
        <ParticleBackground />
        <Navigation />
        <DiscordBadge />
        <DiscordModal />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/status" element={<Status />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
