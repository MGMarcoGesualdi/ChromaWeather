import "../components/styles/Particles.css";

const PALETTE = {
  Rain:       ["#60a5fa", "#93c5fd", "#bfdbfe"],
  Snow:       ["#e0f2fe", "#f0f9ff", "#ffffff"],
  Clear:      ["#fde68a", "#fbbf24", "#f59e0b"],
  Clouds:     ["#d1d5db", "#9ca3af", "#6b7280"],
  Thunderstorm: ["#a78bfa", "#7c3aed", "#4c1d95"],
  default:    ["#a78bfa", "#818cf8", "#6366f1"],
};

export default function Particles({ condition }) {
  const palette = PALETTE[condition] ?? PALETTE.default;

  return (
    <div className="particles" aria-hidden="true">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 5.7 + 3) % 100}%`,
            animationDelay: `${(i * 0.47) % 8}s`,
            animationDuration: `${7 + (i * 0.6) % 8}s`,
            width:  `${5 + (i * 1.3) % 8}px`,
            height: `${5 + (i * 1.3) % 8}px`,
            background: palette[i % palette.length],
            opacity: 0.12 + (i % 4) * 0.06,
          }}
        />
      ))}
    </div>
  );
}
