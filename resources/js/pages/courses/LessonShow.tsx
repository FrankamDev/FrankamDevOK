import { Link } from "@inertiajs/react";

export default function CourseShow({ course }) {
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h3>Leçons</h3>

      {course.lessons.map((lesson) => (
        <div key={lesson.id}>
          <Link href={`/courses/${course.slug}/${lesson.slug}`}>
            {lesson.position}. {lesson.title} ({lesson.reading_time} min)
          </Link>
        </div>
      ))
      }
    </div >
  );
}