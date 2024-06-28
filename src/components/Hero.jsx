import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Create Your AI Clone in Minutes
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-2xl mx-auto">
            Share your knowledge, voice, and personality with the world. CLONE.ing makes it easy to create a digital version of yourself.
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary font-semibold">
            One-time fee of just $29.99 - No subscriptions, yours for life!
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More <Zap className="ml-2" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-[40px] border-primary/20 rounded-full" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-[30px] border-primary/30 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;