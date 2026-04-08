import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import NossaHistoria from "./pages/NossaHistoria.tsx";
import Unidades from "./pages/Unidades.tsx";
import Sabores from "./pages/Sabores.tsx";
import ComoFunciona from "./pages/ComoFunciona.tsx";
import Avalie from "./pages/Avalie.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/sabores" element={<Sabores />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/avalie" element={<Avalie />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
