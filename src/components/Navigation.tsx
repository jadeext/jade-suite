import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/status', label: 'Status' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass-strong rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              data-hover
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-jade flex items-center justify-center glow-jade-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-display font-bold text-xl">J</span>
              </div>
              <span className="text-gradient-jade font-display font-bold text-2xl">
                Jade
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    data-hover
                    className={cn(
                      'relative px-4 py-2 rounded-xl font-medium transition-all duration-300',
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-primary/10" />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
