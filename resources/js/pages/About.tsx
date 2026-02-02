import React from 'react';
import SignatureCard from '@/components/SignatureCard';
const About = () => {
  return (
    <div>
      <SignatureCard
        fullName="Frank MbaFrank Kamgang"
        mainRole="Architecte Du Web & Graphiste"
        avatarUrl="/me.png"
        tagline="Créer des expériences d'apprentissage qui marquent durablement."
        specialties={["IA & Éducation", "Micro-learning immersif", "Gamification avancée"]}
        certifications={["Certified AI Educator", "Neuroscience & Learning Design", "Expert Articulate 360"]}
        yearsExperience={13}
        email="frankamdev@gmail.com"
        website="https://frankamdev.getomiie.com"
        linkedin="https://www.linkedin.com/in/frank-kamgang"
        primaryGradient="from-teal-400 via-emerald-500 to-cyan-600"
      />
    </div>
  );
};

export default About;