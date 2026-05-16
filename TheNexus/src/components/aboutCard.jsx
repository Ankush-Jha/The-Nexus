import "../styles/aboutCard.css";

export default function AboutCard() {
  return (
    <section className="aboutCard">
      <div className="aboutPFP">
        <div className="aboutCardimg">
          <img
            src="../assets/theNexusPFP.jpg"
            alt="AVATAR"
            className="pfp"
          />
        </div>
        <div className="aboutHeader">
          <h4 className="aboutHeaderTitle">hello! (ᵔ ᵕ ᵔ)</h4>
          <p className="aboutHeaderSubtext">prachi here~</p>
        </div>
      </div>

      <div className="aboutBody">
        <p>
          i'm a student obsessed with theoretical physics, cosmology, and
          all the complementary geek stuff that comes with it. this is my
          little corner of the web — welcome to the nexus.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          will you explore or take the <a href="#notebook">site map</a>?
        </p>
        <p style={{ marginTop: "0.3rem" }}>
          join my <a href="#">discord</a>
        </p>
      </div>

      <div className="about-links">
        <a href="#notebook" className="about-link-btn">webrings</a>
        <a href="#research" className="about-link-btn">photo kit</a>
        <a href="#portfolio" className="about-link-btn">guestbook</a>
      </div>
    </section>
  );
}
