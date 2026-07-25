import "./FloatingStars.css";

function FloatingStars({

    count = 180,

    shootingStars = true

}) {

    const stars = Array.from({ length: count }, (_, index) => ({

        id: index,

        left: Math.random() * 100,

        top: Math.random() * 100,

        size: 1 + Math.random() * 4,

        delay: Math.random() * 8,

        duration: 2 + Math.random() * 6,

        opacity: .25 + Math.random() * .75

    }));

    const shooting = Array.from({ length: 5 }, (_, index) => ({

        id: index,

        top: Math.random() * 40,

        left: Math.random() * 100,

        delay: 4 + Math.random() * 20,

        duration: 3 + Math.random() * 3

    }));

    return (

        <div className="starsContainer">

            {stars.map((star) => (

                <span

                    key={star.id}

                    className="star"

                    style={{

                        left: `${star.left}%`,

                        top: `${star.top}%`,

                        width: `${star.size}px`,

                        height: `${star.size}px`,

                        opacity: star.opacity,

                        animationDelay: `${star.delay}s`,

                        animationDuration: `${star.duration}s`

                    }}

                />

            ))}

            {

                shootingStars &&

                shooting.map((item) => (

                    <span

                        key={item.id}

                        className="shootingStar"

                        style={{

                            top: `${item.top}%`,

                            left: `${item.left}%`,

                            animationDelay: `${item.delay}s`,

                            animationDuration: `${item.duration}s`

                        }}

                    />

                ))

            }

            <div className="moonGlow"></div>

        </div>

    );

}

export default FloatingStars;