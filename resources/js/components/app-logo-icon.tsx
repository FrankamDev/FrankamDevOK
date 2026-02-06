export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 12 L20 6 L30 12 V28 L20 34 L10 28 V12 Z"
        stroke="#3b82f6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30 L20 20 M20 20 L15 25 M20 20 L25 25"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}