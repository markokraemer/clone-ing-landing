import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Tech Entrepreneur',
    content: 'CLONE.ing has revolutionized how I interact with my audience. My AI clone handles basic inquiries, allowing me to focus on high-level strategy.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'AI Researcher',
    content: 'The voice cloning technology is impressive. My AI clone sounds just like me, making it perfect for delivering lectures when I\'m unavailable.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Social Media Influencer',
    content: 'CLONE.ing has been a game-changer for my brand. My AI clone engages with fans 24/7, increasing my online presence significantly.',
  }
];

const TestimonialCard = ({ name, role, content }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg border border-primary/10"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <p className="text-muted-foreground mb-4 italic">"{content}"</p>
    <div className="flex items-center">
      <Avatar className="h-10 w-10 mr-4 bg-primary text-primary-foreground">
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
