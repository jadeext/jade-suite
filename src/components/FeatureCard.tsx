import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      data-hover
      className={cn(
        'group relative p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.02]',
        className
      )}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-jade-sm" />
      
      {/* Content */}
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-jade flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle border gradient on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default FeatureCard;
