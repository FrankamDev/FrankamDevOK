import { Link } from 'lucide-react';
import React from 'react';
import { FiBookOpen, FiCheckCircle } from 'react-icons/fi';

const LessonCard = ({ course }) => {
  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3 text-indigo-300">
        <FiBookOpen className="h-6 w-6" />
        {course.lesson_number ?? 0} leçons
      </h2>
      <div className="max-h-[500px] overflow-y-auto rounded-2xl border border-gray-800/40 bg-[#080E1F]/40 backdrop-blur-md">
        <div className="divide-y divide-gray-800/50">
          {(course.lessons || []).map((lesson) => (
            <Link
              key={lesson.id}
              href={`/courses/${course.slug}/lessons/${lesson.slug}`}
              className="group flex items-center gap-4 p-4 hover:bg-[#080E1F]/70 border-l-4 border-transparent hover:border-indigo-500/70 transition-all"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-900/60 to-purple-900/60 flex items-center justify-center text-indigo-300 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                {lesson.order}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-medium text-sm group-hover:text-indigo-300 transition-colors line-clamp-1">{lesson.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{lesson.duration}</p>
              </div>
              {lesson.is_completed ? (
                <FiCheckCircle className="h-5 w-5 text-emerald-500 ml-auto" />
              ) : (
                <div className="w-5 h-5 ml-auto rounded-full border-2 border-gray-600 group-hover:border-indigo-500/70 transition-colors" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;