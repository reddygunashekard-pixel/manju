import "./FloatingHearts.css";

const ITEMS = [
  "❤️",
  "💖",
  "💕",
  "💗",
  "💝",
  "💜",
  "🌸",
  "🌺",
  "✨"
];

function FloatingHearts({

  count = 40

}) {

  const particles = Array.from({ length: count }, (_, index) => ({

    id: index,

    icon: ITEMS[Math.floor(Math.random() * ITEMS.length)],

    left: Math.random() * 100,

    delay: Math.random() * 20,

    duration: 12 + Math.random() * 12,

    size: 16 + Math.random() * 24,

    opacity: .35 + Math.random() * .65

  }));

  return (

    <div className="floatingHeartsContainer">

      {

        particles.map((item) => (

          <span

            key={item.id}

            className="floatingHeart"

            style={{

              left: `${item.left}%`,

              animationDelay: `${item.delay}s`,

              animationDuration: `${item.duration}s`,

              fontSize: `${item.size}px`,

              opacity: item.opacity

            }}

          >

            {item.icon}

          </span>

        ))

      }

    </div>

  );

}

export default FloatingHearts;