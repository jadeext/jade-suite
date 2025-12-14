import { MessageCircle } from 'lucide-react';

const DiscordBadge = () => {
  return (
    <a
      href="https://discord.gg/fbcGNBcR"
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
        <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
        
        {/* Badge */}
        <div className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-jade glow-jade group-hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
          <span className="text-primary-foreground font-semibold text-sm">
            Join Discord
          </span>
        </div>
      </div>
    </a>
  );
};

export default DiscordBadge;
