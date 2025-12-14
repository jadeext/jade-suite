import { DollarSign, Bitcoin, Gift, Gamepad2, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Pricing = () => {
  const pricingOptions = [
    {
      icon: DollarSign,
      title: 'Cashapp',
      price: '$3.50',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Bitcoin,
      title: 'Crypto',
      subtitle: 'BTC, LTC, ETH',
      price: '$3.50',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Gift,
      title: 'Gift Cards',
      price: '$3.50',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Gamepad2,
      title: 'Robux',
      price: '400',
      color: 'from-red-500 to-rose-600',
    },
  ];

  const features = [
    'Lifetime access',
    'All current features',
    'Future updates included',
    'Discord support access',
    'Priority assistance',
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-4">
      {/* Background effects */}
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-jade/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Simple <span className="text-gradient-jade">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One price, lifetime access. Choose your preferred payment method and get started today.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingOptions.map((option, index) => (
            <ScrollReveal key={option.title} delay={index * 100}>
              <div className="group relative h-full" data-hover>
                <div className="glass-strong rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {option.title}
                  </h3>
                  
                  {option.subtitle && (
                    <p className="text-sm text-muted-foreground mb-2">{option.subtitle}</p>
                  )}

                  {/* Price */}
                  <div className="mt-auto pt-4">
                    <span className="text-3xl font-display font-bold text-gradient-jade">
                      {option.price}
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-jade-sm pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features */}
        <ScrollReveal delay={400}>
          <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              What's <span className="text-gradient-jade">Included</span>
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://discord.gg/fbcGNBcR"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex px-8 py-3 rounded-xl bg-gradient-jade text-primary-foreground font-semibold glow-jade-sm hover:scale-105 transition-transform duration-300"
              >
                Purchase on Discord
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                All purchases are handled through our Discord server
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Pricing;
