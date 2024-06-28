import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is the voice cloning?",
    answer: "Our advanced AI technology produces highly accurate voice clones. With just a short audio sample, we can create a voice that sounds remarkably similar to your own."
  },
  {
    question: "Is my personal information safe?",
    answer: "We take data privacy very seriously. All personal information and voice data are encrypted and stored securely. You have full control over your AI clone's privacy settings."
  },
  {
    question: "Can I update my AI clone's knowledge?",
    answer: "Absolutely! You can easily update your AI clone's knowledge base at any time through your user dashboard. This ensures your clone always has the most up-to-date information."
  },
  {
    question: "How can I use my AI clone?",
    answer: "Your AI clone can be used in various ways, such as answering customer queries, providing information about your work or expertise, or even creating content in your voice. The possibilities are endless!"
  },
  {
    question: "What if I want to delete my AI clone?",
    answer: "You have full control over your AI clone. You can deactivate or completely delete your clone at any time through your user settings."
  }
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;