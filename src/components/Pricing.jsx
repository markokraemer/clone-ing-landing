import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Create your personal AI clone',
  'Advanced voice cloning technology',
  'Unlimited knowledge transfer',
  'Easy sharing options',
  'Privacy controls',
  'Lifetime updates',
];

const PricingCard = () => (
  <motion.div
    className="bg-card p-8 rounded-lg shadow-lg border border-primary relative overflow-hidden max-w-md mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
      Best Value
    </div>
    <h3 className="text-2xl font-bold mb-2">Create Your AI Clone</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">$29.99</span>
      <span className="text-muted-foreground ml-2">one-time fee</span>
    </div>
    <p className="text-muted-foreground mb-6">Get your personal AI clone with a single payment. No subscriptions, no hidden fees.</p>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-primary mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full text-lg py-6" size="lg">
      Get Your AI Clone Now <Zap className="ml-2 h-5 w-5" />
    </Button>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Simple, One-Time Pricing
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Create your AI clone today and enjoy all features without any recurring fees. It's yours for life!
        </motion.p>
        <PricingCard />
      </div>
    </section>
  );
};

export default Pricing;
