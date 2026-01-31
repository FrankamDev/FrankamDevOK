"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Award, Globe, Mail, Linkedin, Twitter, Link as LinkIcon,
  BookOpen, Users, Lightbulb, Calendar, MapPin, Phone, QrCode, Sparkles,
  Brain, Cpu, LayoutDashboard, Video, CheckCircle2, ArrowRight
} from "lucide-react";
import { useRef, useState } from "react";

type UltraPremiumSignatureProps = {
  fullName?: string;
  primaryRole?: string;
  secondaryRole?: string;
  avatarUrl: string;
  tagline?: string;
  mission?: string;
  yearsExperience?: number;
  learnersImpacted?: number;
  coursesCreated?: number;
  specialties?: string[];
  keySkills?: string[];
  certifications?: { name: string; issuer?: string; year?: number }[];
  achievements?: string[];
  email?: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  bookingLink?: string; // ex: calendly.com/frank
  linkedin?: string;
  twitter?: string;
  location?: string; // ex: "Yaoundé, Cameroun"
  timezone?: string; // ex: "WAT (UTC+1)"
  qrCodeUrl?: string; // lien vers QR code image
  primaryGradient?: string;
  accentColor?: string;
};

export default function UltraPremiumSignatureCard({
  fullName = "Frank Kamgang",
  primaryRole = "Fondateur & Architecte Pédagogique Numérique",
  secondaryRole = "Expert en UX/UI Éducative & Back-end de l'Apprentissage",
  avatarUrl = "../me.png",
  tagline = "Concevoir des expériences d'apprentissage qui transforment durablement les esprits",
  mission = "Rendre l'éducation africaine innovante, inclusive et performante grâce au numérique",
  yearsExperience = 5,
  learnersImpacted = 250,
  coursesCreated = 15,
  specialties = [
    "Pédagogie active & immersive",
    "Intelligence Artificielle en éducation",
    "Micro-learning & gamification",
    "UX/UI pour dispositifs éducatifs",
    "Graphisme & apprentissage"
  ],
  keySkills = [
    "Moodle / LMS avancé",
    "Articulate 360 & Storyline",
    "GenAI pour contenus pédagogiques",
    "Analyse de données d'apprentissage",
    "Conception centrée sur l'humain"
  ],
  certifications = [
    { name: "Google Certified Educator Level 2", year: 2022 },
    { name: "Certified AI in Education Specialist", issuer: "Coursera / Stanford", year: 2024 },
    { name: "Expert Moodle Administrator", issuer: "Moodle Certified", year: 2023 },
    { name: "Neuroscience of Learning", issuer: "HarvardX", year: 2021 },
  ],
  achievements = [
    "Création de la 1re plateforme e-learning certifiante au Cameroun (Elaarning Centre)",
    "Formateur de +120 enseignants en pédagogie numérique (2023-2025)",
    "Partenaire officiel UNESCO-CEP sur l'IA & éducation en Afrique centrale",
  ],
  email = "frankamdev@gmail.com",
  phone = "+237 60 461 830",
  whatsapp = "+237 690 481 830",
  website = "https://elaarning.cm",
  bookingLink = "https://calendly.com/frank-kamgang/consultation-45min",
  linkedin = "https://linkedin.com/in/frank_kamgang",
  twitter = "https://twitter.com/frank_kamgang",
  location = "Bafoussam, Cameroun",
  timezone = "WAT (UTC+1)",
  qrCodeUrl = "/qr/elaarning-profile.png",
  primaryGradient = "from-teal-400 via-cyan-500 to-indigo-600",
  accentColor = "#22d3ee",
}: UltraPremiumSignatureProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 40, stiffness: 400 });
  const mouseYSpring = useSpring(y, { damping: 40, stiffness: 400 });

  const rotateX = useTransform(mouseYSpring, [-80, 80], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-80, 80], [-10, 10]);

  // const [showTooltip, setShowTooltip] = useState<string | null>(null);



  return (
    <div className="mx-auto my-20 w-full max-w-4xl px-4 sm:px-6">
      <motion.div
        ref={cardRef}
        // onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1400px",
        }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={`
          group relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-slate-950 via-indigo-950/70 to-purple-950/50 
          border border-white/8 backdrop-blur-2xl shadow-2xl shadow-black/60
          hover:shadow-[0_0_80px_-15px] hover:shadow-cyan-500/30 transition-all duration-700
        `}
      >
        {/* Fond lumière dynamique */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(900px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.14), transparent 45%)`,
          }}
        />

        <div className="relative z-10 grid gap-10 p-8 md:grid-cols-[auto,1fr] md:p-10 lg:p-12 xl:p-14">
          {/* Colonne gauche – Avatar + stats + QR */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full opacity-30 blur-3xl animate-pulse-slow"
                style={{ background: `linear-gradient(to bottom right, ${primaryGradient})` }}
              />
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-4 border-white/15 ring-4 ring-white/5 shadow-2xl">
                <img
                  src={avatarUrl}
                  alt={fullName}
                  className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>

              {/* Badge stats années */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.5 }}
                className="absolute -bottom-5 -right-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold shadow-xl"
              >
                <div className="text-center leading-tight">
                  <span className="text-xl">{yearsExperience}</span>
                  <span className="text-xs block">ans</span>
                </div>
              </motion.div>
            </div>

            {/* Stats impact */}
            <div className="grid grid-cols-3 gap-4 text-center w-full max-w-xs">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-cyan-300">{learnersImpacted.toLocaleString()}</div>
                <div className="text-xs text-white/60">apprenants</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-indigo-300">{coursesCreated}</div>
                <div className="text-xs text-white/60">formations</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-300">+38</div>
                <div className="text-xs text-white/60">projets</div>
              </div>
            </div>

            {/* QR Code */}
            {qrCodeUrl && (
              <div className="mt-4">
                <img src={qrCodeUrl} alt="Scan pour profil complet" className="h-28 w-28 rounded-xl border border-white/20 shadow-lg" />
                <p className="mt-2 text-xs text-white/50 text-center">Scan pour + d'infos</p>
              </div>
            )}
          </div>

          {/* Colonne droite – Contenu riche */}
          <div className="space-y-7 text-center md:text-left">
            {/* Nom & rôles */}
            <div>
              <h2 className={`bg-gradient-to-r ${primaryGradient} bg-clip-text text-4xl md:text-5xl font-extrabold text-transparent leading-tight`}>
                {fullName}
              </h2>
              <p className="mt-2 text-2xl font-semibold text-white/95">{primaryRole}</p>
              <p className="text-lg text-white/80 italic">{secondaryRole}</p>

              {tagline && <p className="mt-4 text-lg italic text-cyan-200/90">“{tagline}”</p>}
              {mission && <p className="mt-2 text-base text-white/70">{mission}</p>}
            </div>

            {/* Barre animée premium */}
            <div className="h-1.5 w-32 overflow-hidden rounded-full mx-auto md:mx-0 bg-gradient-to-r from-white/5 to-white/15">
              <motion.div
                className={`h-full w-[300%] bg-gradient-to-r ${primaryGradient}`}
                animate={{ x: ["0%", "-66.66%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Spécialités + compétences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-white/90">
                  <Sparkles size={20} className="text-cyan-400" />
                  <span>Domaines d’expertise</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="rounded-full bg-white/8 px-4 py-1.5 text-sm backdrop-blur-md border border-white/10 flex items-center gap-1.5"
                    >
                      <Brain size={14} className="text-indigo-300" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-white/90">
                  <Cpu size={20} className="text-purple-400" />
                  <span>Compétences techniques</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {keySkills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="rounded-full bg-white/8 px-4 py-1.5 text-sm backdrop-blur-md border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications + Réalisations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-white/90">
                  <Award size={20} className="text-amber-400" />
                  <span>Certifications</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={cert.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span>{cert.name} {cert.year && `(${cert.year})`}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-white/90">
                  <BookOpen size={20} className="text-emerald-400" />
                  <span>Réalisations marquantes</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {achievements.map((ach, i) => (
                    <motion.li
                      key={ach}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contacts + CTA */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <Mail size={18} /> {email}
                  </a>
                )}
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <Phone size={18} /> {phone}
                  </a>
                )}
                {whatsapp && (
                  <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
                    <Phone size={18} className="text-emerald-400" /> WhatsApp
                  </a>
                )}
                {bookingLink && (
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 px-4 py-1.5 rounded-full hover:scale-105 transition-all">
                    <Calendar size={18} /> Réserver un appel
                  </a>
                )}
              </div>

              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-5 text-white/70">
                {website && <a href={website} target="_blank" className="hover:text-white flex items-center gap-1.5"><Globe size={16} /> Site</a>}
                {linkedin && <a href={linkedin} target="_blank" className="hover:text-[#0ea5e9]"><Linkedin size={18} /></a>}
                {twitter && <a href={twitter} target="_blank" className="hover:text-[#1da1f2]"><Twitter size={18} /></a>}
              </div>

              <div className="mt-4 text-xs text-white/50 flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} /> {location}
                </div>
                <div>{timezone}</div>
              </div>

              <p className="mt-6 text-center md:text-left text-base font-medium text-cyan-200/90 italic">
                Prêt à révolutionner votre approche pédagogique ?
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}