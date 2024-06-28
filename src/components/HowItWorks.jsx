import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, Brain, Share2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Describe Yourself',
    description: 'Provide a brief description about yourself and your areas of expertise.'
  },
  {
    icon: Mic,
    title: 'Record Your Voice',
    description: 'Submit a short voice sample to create your unique AI voice.'
  },
  {
    icon: Brain,
    title: 'Input Knowledge',
    description: 'Add specific knowledge, experiences, and instructions for your AI clone.'
  },
  {
    icon: Share2,
    title: 'Share Your Clone',
    description: 'Get a shareable link to your AI clone and customize privacy settings.'
  }
];

const StepCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <div className="flex-shrink-0">
      <div className="bg-primary text-primary-foreground p-3 rounded-full">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;