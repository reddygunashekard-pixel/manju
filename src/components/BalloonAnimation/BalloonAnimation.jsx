import "./BalloonAnimation.css";

const COLORS = [
  "#ff4fa3",
  "#7c4dff",
  "#4cc9f0",
  "#ffd166",
  "#06d6a0",
  "#ef476f",
  "#ffffff",
  "#f72585"
];

function Balloon({
  left,
  delay,
  duration,
  size,
  color
}) {
  return (
    <div
      className="balloon"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <div
        className="balloonBody"
        style={{
          width: size,
          height: size * 1.2,
          background: color,
          boxShadow: `0 0 30px ${color}`
        }}
      />

      <div className="balloonTie"></div>

      <div
        className="balloonString"
        style={{
          height: size * 2
        }}
      />
    </div>
  );
}

function BalloonAnimation({ count = 18 }) {
  const balloons = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 12 + Math.random() * 12,
    size: 45 + Math.random() * 35,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));

  return (
    <div className="balloonContainer">
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} {...balloon} />
      ))}
    </div>
  );
}

export default BalloonAnimation;