// import React from "react";

// interface PostCardProps {
//   title: string;
//   content: string; // JSON TipTap décodé en HTML
//   reading_time: number;
//   slug: string;
//   featured_image?: string;
// }

// const PostCard: React.FC<PostCardProps> = ({
//   title,
//   content,
//   reading_time,
//   slug,
//   featured_image,
// }) => {
//   return (
//     <div className="bg-white shadow rounded-lg overflow-hidden">
//       {featured_image && (
//         <img
//           src={featured_image}
//           alt={title}
//           className="w-full h-48 object-cover"
//         />
//       )}
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">{title}</h2>
//         <div
//           className="text-gray-600 mb-4"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//         <p className="text-sm text-gray-400 mb-2">
//           Temps de lecture : {reading_time} min
//         </p>
//         <a
//           href={`/blog/${slug}`}
//           className="text-blue-500 hover:underline"
//         >
//           Lire la suite
//         </a>
//       </div>
//     </div >
//   );
// };

// export default PostCard;

interface PostCardProps {
  post: {
    slug: string;
    featured_image?: string;
    reading_time: number;
    author?: string;
    description: string;
    created_at: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
    >
      {/* Image */}
      {post.featured_image && (
        <div className="overflow-hidden">
          <img
            src={`/storage/${post.featured_image}`}
            className="h-48 w-full object-cover group-hover:scale-105 transition"
            alt=""
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Meta */}
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span>{post.reading_time} min</span>
          <span>•</span>
          <span>{post.author || "admin"}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Date */}
        <div className="text-xs text-gray-400">
          {post.created_at}
        </div>
      </div>
    </a>
  );
}
