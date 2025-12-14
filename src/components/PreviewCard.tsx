import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface PreviewCardProps {
  title: string;
  className?: string;
}

const PreviewCard = ({ title, className }: PreviewCardProps) => {
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover
      className={cn(
        'relative group overflow-hidden rounded-2xl transition-all duration-300 ease-out',
        className
      )}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      {/* Glare effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Card content */}
      <div className="glass-strong p-1 h-full">
        <div className="relative aspect-video bg-gradient-to-br from-muted to-background rounded-xl overflow-hidden">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--jade) / 0.3) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }} />
          </div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-jade flex items-center justify-center mb-4 glow-jade-sm">
              <span className="text-primary-foreground font-display font-bold text-2xl">J</span>
            </div>
            <span className="text-muted-foreground text-sm">Preview Coming Soon</span>
          </div>
        </div>
        
        {/* Title bar */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">Add your screenshot here</p>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-jade" />
    </div>
  );
};

export default PreviewCard;
