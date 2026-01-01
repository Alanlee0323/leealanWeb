import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/content';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
            CHOOSE YOUR <span className="text-brand-accent">LOADOUT</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!annual ? 'text-white' : 'text-text-muted'}`}>MONTHLY</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 bg-bg-secondary border border-brand-primary rounded-full transition-colors"
            >
              <motion.div 
                className="absolute top-1 left-1 w-5 h-5 bg-brand-primary rounded-full shadow-[0_0_10px_#FF6AD5]"
                animate={{ x: annual ? 24 : 0 }}
              />
            </button>
            <span className={`text-sm font-bold ${annual ? 'text-white' : 'text-text-muted'}`}>ANNUAL <span className="text-brand-accent text-xs ml-1">-20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-2xl bg-bg-secondary border transition-all duration-300 ${
                tier.recommended 
                  ? 'border-brand-primary shadow-[0_0_30px_rgba(255,106,213,0.15)] scale-105 z-10' 
                  : 'border-border-subtle hover:border-brand-secondary/50'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-bg-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_#FF6AD5]">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-sans font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${annual ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className="text-text-muted">/{annual ? 'yr' : 'mo'}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.recommended ? 'primary' : 'outline'}
                fullWidth
              >
                Select Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};