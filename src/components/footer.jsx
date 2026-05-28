import "../styles/footer.css";
import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaXTwitter,
    FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
    const navLinks = [
        { title: "Navigation", links: ["Home", "Notebook", "Research", "Portfolio"] },
        { title: "Projects", links: ["Cosmito", "The Nexus", "Starborn Trilogy"] },
        { title: "Explore", links: ["Vision Board", "Bucket List", "APOD"] },
    ];

    return (
        <footer className="footer">
            {/* Decorative top notch */}
            <div className="footer-top-cut" />

            <div className="footer-shell">
            {/* Upper section */}
                <div className="footer-upper">
                    <div className="footer-brand">
                        <div className="brand-symbol">✦</div>
                        <p>
                            Exploring the cosmos through code, physics, and stories written in
                            starlight.
                        </p>
                    </div>

                    {navLinks.map((group) => (
                        <div className="footer-column" key={group.title}>
                            <h4>{group.title}</h4>
                            <ul>
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Main card */}
                <div className="footer-card">
                    <div className="footer-card-header">
                        <div>
                            <h2>Prachi Choubey</h2>
                            <p>Theoretical Physics • Cosmology • Computational Science</p>
                        </div>

                        <a href="mailto:your@email.com" className="collab-btn">
                            Transmit Signal →
                        </a>
                    </div>

                    <div className="newsletter">
                        <h3>Join the Newsletter</h3>

                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                aria-label="Email address"
                            />
                            <button type="submit">→</button>
                        </form>

                        <p className="newsletter-note">
                            Weekly notes on cosmology, physics, coding, and building a life
                            among the stars.
                        </p>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 Prachi Choubey. May the Force be with your equations.</p>

                        <div className="socials">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}