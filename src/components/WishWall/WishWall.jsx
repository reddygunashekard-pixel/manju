import "./WishWall.css";

function WishWall({ wishes }) {

    return (

        <div className="wishWall">

            {

                wishes.map((wish,index)=>(

                    <div

                        key={index}

                        className="wishCard"

                    >

                        {wish}

                    </div>

                ))

            }

        </div>

    );

}

export default WishWall;