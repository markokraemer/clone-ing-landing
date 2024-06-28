import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, Share2, Lock } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice Cloning',
    description: 'Create an AI voice that sounds just like you with a short audio sample.'
  },
  {
    icon: Brain,
    title: 'Knowledge Transfer',
    description: 'Easily input your expertise and experiences to create a knowledgeable AI clone.'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your AI clone with anyone through a simple web link.'
  },
  {
    icon: Lock,
    title: 'Privacy Control',
    description: 'Set password protection and control who can interact with your AI clone.'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg border border-primary/10 relative overflow-hidden"
    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.2)' }}
    transition={{ type: "spring", stiffness: 300 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
    <Icon className="h-12 w-12 text-primary mb-4 relative z-10" />
    <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    />
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
