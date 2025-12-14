import { Shield, Zap, Lock, RefreshCw, Gift, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PreviewCard from '@/components/PreviewCard';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Undetected',
      description: 'Our advanced bypass technology keeps you safe and undetected at all times.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures smooth gameplay without any lag or stuttering.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Your data and privacy are protected with enterprise-grade security measures.',
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      description: 'Stay ahead with frequent updates that keep everything running smoothly.',
    },
    {
      icon: Gift,
      title: 'Free Features',
      description: 'Access core features completely free with no hidden costs or trials.',
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join thousands of users in our Discord for support and updates.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-jade/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[128px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Status Badge */}
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Updating / Fixing</span>
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal delay={100}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
                Welcome to{' '}
                <span className="text-gradient-jade">Jade</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience the next generation of software with unmatched performance, 
                security, and reliability. Join our growing community today.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/fbcGNBcR"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="px-8 py-3 rounded-xl bg-gradient-jade text-primary-foreground font-semibold glow-jade-sm hover:scale-105 transition-transform duration-300"
                >
                  Join Discord
                </a>
                <a
                  href="/pricing"
                  data-hover
                  className="px-8 py-3 rounded-xl glass font-semibold hover:bg-muted transition-colors duration-300"
                >
                  View Pricing
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Preview Cards */}
          <ScrollReveal delay={400}>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <PreviewCard title="Dashboard Preview" />
              <PreviewCard title="Feature Preview" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Why Choose <span className="text-gradient-jade">Jade</span>?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Discover what makes Jade the preferred choice for thousands of users worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass-strong rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-jade flex items-center justify-center glow-jade">
                    <span className="text-primary-foreground font-display font-bold text-4xl">J</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                    Why Is <span className="text-gradient-jade">Jade</span> Free?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe everyone should have access to quality software without breaking the bank. 
                    Jade started as a passion project, and our amazing community keeps it alive through 
                    optional donations and premium features.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is simple: provide the best experience possible while keeping the core 
                    features free for everyone. Join us on Discord to be part of something special.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-jade flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">J</span>
              </div>
              <span className="font-display font-semibold text-foreground">Jade</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Jade. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/fbcGNBcR"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
