const testimonials = [
  {
    name: "Bokou Laurenne",
    role: "Développeuse Back-end – Douala",
    image:
      "",
    content:
      "FrankamDev a complètement changé ma façon de coder. Les suggestions de l’IA me font gagner énormément de temps tous les jours, même quand la connexion est capricieuse.",
  },
  {
    name: "Paul Kamdem",
    role: "Lead Developer – Bafoussam",
    image:
      "",
    content:
      "Les tests automatisés et le débogage intelligent, c’est du lourd ! On livre beaucoup plus vite et avec beaucoup moins de stress. Vraiment un game-changer pour l’équipe.",
  },
  {
    name: "Junior T.",
    role: "Freelance & Formateur – Bafoussam",
    image:
      "",
    content:
      "Depuis que j’utilise FrankamDev, je code trois fois plus vite et mes clients sont bluffés par la qualité. C’est comme avoir un senior qui code à côté de moi 24/7. Vraiment du bon boulot !",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Côté gauche - Titre */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                Ce que disent
              </span>
              <br />
              <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                nos apprenants & devs
              </span>
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Découvre pourquoi de plus en plus de développeurs au Cameroun et ailleurs font confiance à FrankamDev pour monter en compétences et livrer plus vite.
            </p>
          </div>

          {/* Côté droit - Témoignages */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      >
                        "
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}