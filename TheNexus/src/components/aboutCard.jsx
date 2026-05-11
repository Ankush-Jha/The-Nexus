import "../styles/aboutCard.css";

export default function AboutCard() {
    return (
        <section className ="aboutCard" >
            <div className = "aboutPFP">
                <div className = "aboutCardimg">
                    <img 
                        src ="../assets/theNexusPFP.jpg" 
                        alt="AVATAR"
                        className = "pfp"
                    />
                </div>
                <div className = "aboutHeader">
                    <h4 className ="aboutHeaderTitle">Hii folkes! i'm Choubey </h4>
                    <p className = "aboutHeaderSubtext">(,,・⌣・,,)</p>
                </div>
            </div>
            <div className = "aboutBody">
                <p>well, my parents named me prachi but ppl call me choubey  </p>
            </div>
        </section>
    );
}
