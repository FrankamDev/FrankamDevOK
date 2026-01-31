// import { useEffect, useRef } from "react";

// type Star = {
//   x: number;
//   y: number;
//   radius: number;
//   speed: number;
// };

// export default function StarBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     let animationId: number;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     const stars: Star[] = Array.from({ length: 150 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 1.5 + 0.5,
//       speed: Math.random() * 0.5 + 0.2,
//     }));

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "white";

//       stars.forEach((star) => {
//         star.y += star.speed;
//         if (star.y > canvas.height) star.y = 0;

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 z-0"
//     />
//   );
// }


import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
  layer: number;
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 300;
    const layers = [0.2, 0.5, 1]; // profondeur

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const layer = layers[Math.floor(Math.random() * layers.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + layer,
        speed: layer,
        alpha: Math.random() * 0.5 + 0.5,
        layer,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const offsetX = (mouse.current.x - canvas.width / 2) * star.layer * 0.02;
        const offsetY = (mouse.current.y - canvas.height / 2) * star.layer * 0.02;

        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(
          star.x + offsetX,
          star.y + offsetY,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
}
