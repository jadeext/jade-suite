import { CheckCircle2, AlertCircle, XCircle, Clock, RefreshCw } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type StatusType = 'operational' | 'updating' | 'down';

interface StatusInfo {
  type: StatusType;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  glowColor: string;
}

const Status = () => {
  // Current status - change this to update the displayed status
  const currentStatus: StatusType = 'updating';

  const statusInfo: Record<StatusType, StatusInfo> = {
    operational: {
      type: 'operational',
      label: 'Fully Working',
      description: 'All systems are operational. No updates needed.',
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      glowColor: 'shadow-[0_0_40px_rgba(34,197,94,0.3)]',
    },
    updating: {
      type: 'updating',
      label: 'Updating / Fixing',
      description: 'We are currently working on updates. Please check back soon.',
      icon: RefreshCw,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      glowColor: 'shadow-[0_0_40px_rgba(234,179,8,0.3)]',
    },
    down: {
      type: 'down',
      label: 'Down',
      description: 'Service is currently unavailable. An update is required.',
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      glowColor: 'shadow-[0_0_40px_rgba(239,68,68,0.3)]',
    },
  };

  const current = statusInfo[currentStatus];
  const StatusIcon = current.icon;

  const allStatuses = Object.values(statusInfo);

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-4">
      {/* Background effects */}
      <div className="fixed top-1/3 left-1/4 w-96 h-96 bg-jade/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              System <span className="text-gradient-jade">Status</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check the current operational status of Jade services.
            </p>
          </div>
        </ScrollReveal>

        {/* Current Status Card */}
        <ScrollReveal delay={100}>
          <div className={`glass-strong rounded-3xl p-8 md:p-12 mb-12 ${current.glowColor}`}>
            <div className="flex flex-col items-center text-center">
              {/* Status Icon */}
              <div className={`w-24 h-24 rounded-3xl ${current.bgColor} flex items-center justify-center mb-6`}>
                <StatusIcon className={`w-12 h-12 ${current.color} ${currentStatus === 'updating' ? 'animate-spin-slow' : ''}`} />
              </div>

              {/* Status Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-3 h-3 rounded-full ${current.color.replace('text-', 'bg-')} animate-pulse`} />
                <h2 className={`text-3xl font-display font-bold ${current.color}`}>
                  {current.label}
                </h2>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg max-w-md">
                {current.description}
              </p>

              {/* Last Updated */}
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Status Legend */}
        <ScrollReveal delay={200}>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-semibold text-lg mb-6 text-center">
              Status Indicators
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {allStatuses.map((status) => {
                const Icon = status.icon;
                const isActive = status.type === currentStatus;
                
                return (
                  <div
                    key={status.type}
                    className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                      isActive ? status.bgColor : 'bg-muted/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${status.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${status.color}`} />
                    </div>
                    <div>
                      <p className={`font-medium ${isActive ? status.color : 'text-muted-foreground'}`}>
                        {status.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Discord CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need help or have questions about the status?
            </p>
            <a
              href="https://discord.gg/fbcGNBcR"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-muted transition-colors duration-300"
            >
              <AlertCircle className="w-5 h-5 text-primary" />
              <span>Report an Issue on Discord</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Status;
