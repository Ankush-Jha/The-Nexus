import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
export default function Home(){
    return (
        <>
        <Navbar />
        <main>
            <section className = "first-sec">
                <div className = "about-home">
                    <h2>About Me</h2>
                    <p>
                        Hi folkes! Im Prachi Choubey and i'm on a journey to become a theoretical physicist and research in cosmology and astrophysics in the next 10 years. I am currently an undergrad with a major in CS and alongside persuing another degree in Physics because one wasn't hard enough already hahaha. y'all can find me wherever my club is working on campus because I do their research and development and im also sort of their secretary (yaya!). I'm also working to start a language learing club and a women in stem community at my university so thats something. I'm also convinced somehow after all that I can still write so I'm also working on my debute scifi-fantasy series called The Starborn Triology (i get the mistborn jib ok stfu) so in my free time im wring up epic space opera that span across multiple galaxies and include idiotic 20 something dimentional mages blowing shit up to save the universe! Y'all can read more about it here. 
                    </p>
                </div>
                <div className = "langList">
                    <h3>Language Counter:</h3>
                    <ol>
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Italian (B1)</li>
                        <li>High Valyrian</li>
                        <li>Sanskrit (A1)</li>
                    </ol>
                </div>
            </section>
            <section className = "second-sec">
                <div className = "vision-board">
                    <h2>2026 Vision Board</h2>
                    <img src="src/assets/Canva Project 2026.png" alt="2026 Vision Board" />
                    <p>Learn more about my Impossibe List (read: Impossible List)</p>
                </div>
                <div className="Writing-status-update">
                    <h3>This Week's Writing Update</h3>
                    <p>I'm on my 3rd draft</p>
                </div>
                
            </section>
            <section className = "third-sec">
                <div className = "Spotify-player">
                    <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/6da4oBWfyQ2T9AKQ7I6QoE?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div>
                    <h3>Book I'm reading</h3>
                    <img src="src/assets/Spiral by Koji Suzuki.jpeg" alt="Book I'm reading" />
                    <p>Spiral by Koji Suzuki</p>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}