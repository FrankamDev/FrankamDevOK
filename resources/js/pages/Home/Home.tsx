import AnotherQuestion from './HomeComponents/AnotherQuestion';
import CardBuild from './HomeComponents/CardBuild';
import CardTestimanial from './HomeComponents/CardTestimanial';
import CercleRotate from './HomeComponents/CercleRotate';
import Compagnies from './HomeComponents/Compagnies';
import Footer from '../../components/Footer';
import MeetMe from './HomeComponents/MeetMe';
import NavBar from '../../components/NavBar';
import Questions from './HomeComponents/Questions';
import Quotes from './HomeComponents/Quotes';
import SubscriptionCard from './HomeComponents/SubscriptionCard';
import Testimonial from './HomeComponents/Testimonial';
import { Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import Hero from './HomeComponents/Hero';
import { motion } from "framer-motion";
import Member from '@/components/Member';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface FlashMessage {
  success?: string;
  error?: string;
  message?: string;
}

interface Props {
  auth: { user: any };
  flash: FlashMessage;
  [key: string]: any;
}

export default function Home() {
  const { flash } = usePage<Props>().props;

  useEffect(() => {
    if (flash?.success) toast.success(flash.success);
    if (flash?.error) toast.error(flash.error);
    if (flash?.message) toast.info(flash.message);
  }, [flash]);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#020013] text-white">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="text-sm sm:text-base"
        />
        <NavBar />

        <Hero />

        {/* Témoignages */}
        <section className="">
          <Testimonial />
        </section>

        {/* Partenaires */}
        <section className="mt-6 bg-[#030215] py-16 sm:mt-8 sm:py-20">
          {/* Texte central */}
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-lg leading-relaxed text-gray-300 sm:text-xl sm:leading-relaxed md:text-2xl"
            >
              Ils ont commencé comme{' '}
              <span
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="text-xl font-bold text-cyan-300 sm:text-2xl md:text-3xl"
              >
                Toi
              </span>
              , maintenant ils travaillent ici 👇
            </p>
          </div>

          {/* Logos ou partenaires */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 px-4 sm:px-6 lg:px-12">
            <Compagnies />
          </div>
        </section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col items-center px-4 sm:mt-16 sm:px-6 md:px-12"
        >
          <CardBuild />
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/formation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3EAEFF] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 sm:px-12 sm:py-4 sm:text-base"
              aria-label="Voir tous les cours"
            >
              Voir Tous Les Cours <FaArrowRight size={16} />
            </Link>
            <Link
              href="/parcours"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-white underline transition-all hover:text-yellow-400 sm:px-8 sm:py-3 sm:text-base"
              aria-label="Créer un chemin d'apprentissage"
            >
              Créer ton Chemin ✔
            </Link>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 bg-[#020013] px-4 py-12 sm:mt-16 sm:px-6 sm:py-16 md:px-12"
        >
          <CardTestimanial />
          <Quotes />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col gap-8 px-4 sm:mt-16 sm:gap-12 sm:px-6 md:px-12"
        >
          {/* <Group /> */}
          <SubscriptionCard />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col gap-8 px-4 sm:mt-16 sm:gap-12 sm:px-6 md:px-12"
        >
          <MeetMe />
          <Questions />
          <AnotherQuestion />
        </motion.section>

        <CercleRotate />


        <Member />
        <Footer />
      </div>
    </>
  );
}
