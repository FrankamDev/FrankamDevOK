export default function TableOfContents({ items }) {
  if (!items || items.length === 0) return null

  return (
    <aside className="mb-8 p-4 bg-gray-50 border rounded-lg">
      <h3 className="font-semibold mb-3">Sommaire</h3>

      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            style={{ marginLeft: `${(item.level - 1) * 16}px` }}
          >
            <a
              href={`#${item.id}`}
              className="text-blue-600 hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
