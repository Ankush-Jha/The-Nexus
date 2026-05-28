import "../styles/bullitin.css";

export default function Bullitin() {
    const topBooks = [
        {
            title: "Cosmos",
            author: "Carl Sagan",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/71r5rD6Y6QL.jpg",
        },
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/81rtt7D9L-L.jpg",
        },
        {
            title: "The Fabric of the Cosmos",
            author: "Brian Greene",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/81R4YgUeHCL.jpg",
        },
        {
            title: "Contact",
            author: "Carl Sagan",
            cover:
                "https://images-na.ssl-images-amazon.com/images/I/81H7K5nA4hL.jpg",
        },
    ];

    const shows = [
        "Cosmos: A Spacetime Odyssey",
        "The Expanse",
        "Dark",
        "Foundation",
    ];

    return (
        <section className="bulletin-wrapper">
            <div className="bulletin-frame">
                <h2 className="bulletin-title">[ bulletin board ]</h2>

                <div className="bulletin-grid">
                    {/* Note 1: Updates */}
                    <div className="note update-note">
                        <h3>the nexus out now (ᵔ ᵕ ᵔ)</h3>
                        <div className="note-img-container">
                            <img
                                src="../assets/visionBoard.png"
                                alt="Updates"
                                className="note-image"
                            />
                        </div>
                    </div>

                    {/* Note 2: Media */}
                    <div className="note media-note">
                        <h3>stream cosmology</h3>
                        <div className="note-img-container">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/71r5rD6Y6QL.jpg"
                                alt="Media"
                                className="note-image"
                            />
                        </div>
                    </div>

                    {/* Note 3: Links */}
                    <div className="note links-note">
                        <h3>misc pages ip</h3>
                        <ul className="note-links">
                            <li><a href="#">links!</a></li>
                            <li><a href="#">physics guide</a></li>
                            <li><a href="#">star wars kit</a></li>
                            <li><a href="#">my vinyls</a></li>
                        </ul>
                    </div>

                    {/* Note 4: Listening */}
                    <div className="note listening-note">
                        <h3>choubey is listening to...</h3>
                        <div className="listening-card">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/81rtt7D9L-L.jpg"
                                alt="Album"
                                className="mini-album"
                            />
                            <p className="song-name">Echo — Clairo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}