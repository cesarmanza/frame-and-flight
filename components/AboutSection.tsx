import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575686467550-7d2a658eb1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcm9uZSUyMHBpbG90JTIwdGVhbXxlbnwxfHx8fDE3NTQ0MTA5Njd8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Professional drone equipment and team"
                className="w-full h-96 object-cover"
              />
              {/* Animated decorative navy accent */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy rounded-lg opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl font-montserrat-bold text-navy"
              whileInView={{ y: [10, 0] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-navy/80 font-montserrat-regular leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Frame & Flight was born from a passion for innovation and a vision to revolutionize 
                how Austin real estate is presented and experienced. Our team of FAA-certified drone pilots 
                and professional photographers brings together cutting-edge technology with 
                artistic vision to serve the greater Austin, Texas market.
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                We specialize in capturing the essence of Austin properties through aerial perspectives 
                that traditional photography simply cannot achieve. From sprawling Hill Country estates to 
                downtown urban developments, we elevate your Texas property's story to new heights.
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Our commitment to excellence extends beyond just capturing stunning visuals. We 
                understand the Austin real estate market's demands for compelling content that drives 
                engagement and sales. Every project is approached with meticulous attention to 
                detail and a deep understanding of our local clients' unique needs, from luxury residential 
                to commercial real estate throughout Central Texas.
              </motion.p>
            </motion.div>

            {/* Animated stats */}
            <motion.div 
              className="grid grid-cols-2 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-3xl font-montserrat-bold text-navy mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 3
                  }}
                >
                  500+
                </motion.div>
                <div className="text-sm font-montserrat-semibold text-navy/60">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-3xl font-montserrat-bold text-navy mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 3,
                    delay: 1
                  }}
                >
                  5
                </motion.div>
                <div className="text-sm font-montserrat-semibold text-navy/60">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}