import { useState } from "react";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { name: "Facebook", url: "https://facebook.com/tonprofil" },
    { name: "X / Twitter", url: "https://x.com/tonprofil" },
    { name: "LinkedIn", url: "https://linkedin.com/in/tonprofil" },
    { name: "YouTube", url: "https://youtube.com/tonprofil" },
  ];

  return (
    <div className="mt-6 sm:mt-8">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block rounded-xl bg-gradient-to-r from-[#47B3FF] to-[#1E90FF] px-8 py-2.5 font-[arial] text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-[#1E90FF] hover:to-[#47B3FF] hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#101329] focus:outline-none sm:px-10 sm:py-3 sm:text-lg"
        aria-label="S'abonner à FrankamDev"
      >
        S’abonner à FrankamDev
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 w-80 sm:w-96 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Suivez-moi sur mes réseaux
            </h2>
            <ul className="flex flex-col gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md bg-gradient-to-r from-[#47B3FF] to-[#1E90FF] px-4 py-2 text-white text-center font-semibold transition hover:scale-105 hover:from-[#1E90FF] hover:to-[#47B3FF]"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
