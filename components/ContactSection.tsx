import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactInfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  delay: number;
}

function ContactInfoItem({ icon: Icon, text, delay }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5 text-white/80" />
      </div>
      <span className="font-montserrat-regular text-white">{text}</span>
    </motion.div>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactItems = [
    { icon: Mail, text: "cesar@frame-filght.com", delay: 0.1 },
    { icon: Phone, text: "(210) 508-9893", delay: 0.2 },
    { icon: MapPin, text: "Austin, TX", delay: 0.3 }
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-montserrat-bold text-white">
            Get in Touch
          </h2>
        </motion.div>
        
        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-white">
              <motion.h3 
                className="text-xl font-montserrat-semibold mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    delay={item.delay}
                  />
                ))}
              </div>
            </div>
            
            <motion.div 
              className="text-white/80"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="font-montserrat-regular leading-relaxed">
                Ready to elevate your Austin real estate marketing? Contact Frame & Flight today to discuss 
                your project and discover how our professional drone photography and architectural photography 
                services can showcase your Texas properties like never before. Serving Austin, Round Rock, 
                Cedar Park, Pflugerville, and the greater Central Texas area.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="name" className="text-white font-montserrat-semibold mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="email" className="text-white font-montserrat-semibold mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              {/* Phone Field */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="phone" className="text-white font-montserrat-semibold mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20"
                  placeholder="(555) 123-4567"
                />
              </motion.div>
              
              {/* Message Field */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="message" className="text-white font-montserrat-semibold mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </motion.div>
              
              {/* Submit Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-navy hover:bg-white/90 font-montserrat-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}