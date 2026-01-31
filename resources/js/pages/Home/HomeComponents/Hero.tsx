import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import StarBackground from "@/components/StarBackground";



const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const poppins = { fontFamily: "'Poppins', sans-serif" };
  const inter = { fontFamily: "'Inter', sans-serif" };

  return (

    <div className="relative h-screen overflow-hidden bg-[#030313]">


      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative mt-14 flex flex-col items-center justify-center min-h-screen px-5 pt-24 pb-12 text-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
      >
        {/* Glow en arrière-plan */} <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div> <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        {/* Titre principal */}
        <h1
          style={poppins}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl mb-6"
        >
          Partez de{" "}
          <span className="text-yellow-300 inline-block mt-2 sm:mt-0">
            Je veux apprendre
          </span>
          <br className="sm:hidden" /> à {" "}
          <span className="text-green-400 inline-block mt-2 sm:mt-0">
            j'ai réalisé ça <i className="text-white not-italic">!!</i>
          </span>
        </h1>

        <StarBackground />
        {/* Sous-titre */}
        <p
          style={inter}
          className="mt-3 sm:mt-5 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl px-2"
        >
          🚀 Arrêtez de consommer. Commencez à créer. Construisez des projets réels et montez en niveau comme jamais.
        </p>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href='/formation'
            prefetch
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-400 to-green-600 rounded font-semibold text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
            Découvrir les cours
            <FaArrowRight />
          </Link>
          <Link
            prefetch
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 rounded font-semibold text-lg border border-gray-700 hover:bg-gray-700 transition-all">
            En savoir plus
          </Link>
        </div>


        {/* Progression */}
        <div className="mt-14 sm:mt-20 w-full max-w-xl px-2 sm:px-4">
          <p
            style={inter}
            className="text-sm sm:text-base text-gray-400 mb-3 font-medium"
          >
            🔥 Plus de 75% de progression moyenne chez nos apprenants
          </p>
          <div className="w-full bg-gray-800 rounded-full h-2.5 sm:h-3.5 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #3EAEFF 0%, #2563EB 100%)",
                boxShadow: "0 0 12px rgba(62, 174, 255, 0.7)",
              }}
            ></motion.div>
          </div>
        </div>
      </motion.section >


    </div>
  );
}


// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// const courses = [
//   { id: 1, title: "React pour débutants", progress: 60, status: "En cours" },
//   { id: 2, title: "Laravel avancé", progress: 100, status: "Terminé" },
//   { id: 3, title: "Design avec TailwindCSS", progress: 25, status: "Nouveau" },
// ]

// export default function CoursesPage() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <h1 className="text-2xl font-bold">📚 Mes Cours</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {courses.map((course) => (
//           <Card key={course.id} className="shadow-md">
//             <CardHeader>
//               <CardTitle className="flex justify-between items-center">
//                 {course.title}
//                 <Badge>{course.status}</Badge>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Progress value={course.progress} className="h-2" />
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">
//                   Progression : {course.progress}%
//                 </span>
//                 <Button variant="outline">Continuer</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }


