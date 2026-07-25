import "./SecretLetter.css";

function SecretLetter({ title, content }) {

    return (

        <div className="secretLetter">

            <h2>{title}</h2>

            <p>

                {content}

            </p>

        </div>

    );

}

export default SecretLetter;