import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5521970344545";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Misturêra.";

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-primary-foreground p-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
