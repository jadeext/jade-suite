import { useEffect, useState } from 'react';
import { X, MessageCircle, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscordModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('jade-discord-modal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('jade-discord-modal', 'true');
  };

  const handleJoin = () => {
    sessionStorage.setItem('jade-discord-modal', 'true');
    window.open('https://discord.gg/fbcGNBcR', '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md animate-scale-in">
        <div className="glass-strong rounded-3xl p-8 glow-jade">
          {/* Close button */}
          <button
            onClick={handleClose}
            data-hover
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-jade flex items-center justify-center animate-bounce-subtle">
              <MessageCircle className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-display font-bold text-center mb-2">
            Join Our <span className="text-gradient-jade">Community</span>
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Get support, updates, and connect with other Jade users!
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Instant updates & announcements</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Active community support</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Direct help from the team</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              data-hover
            >
              Maybe Later
            </Button>
            <Button
              onClick={handleJoin}
              className="flex-1 bg-gradient-jade hover:opacity-90 text-primary-foreground"
              data-hover
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordModal;
