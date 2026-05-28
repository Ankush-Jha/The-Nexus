import "../styles/theList.css";

export default function TheList() {
    const bucketList = [
        "Publish my first novel",
        "Study Physics at Harvard",
        "Earn a PhD in Cosmology",
        "Work with NASA or ESA",
        "See the Milky Way from the Atacama Desert",
        "Attend a rocket launch",
        "Build Cosmito into a universe for curious minds",
        "Visit CERN",
        "Contribute to our understanding of dark matter",
        "Write a sci-fi trilogy",
        "See the Northern Lights",
        "Help inspire future women in STEM",
    ];

    return (
        <section className="bucket-card">
            <div className="bucket-header">
                <h2 className="bucket-title">The List</h2>
                <span className="bucket-subtitle">Dreams written in stardust ✦</span>
            </div>

            <div className="bucket-scroll">
                <ul className="bucket-items">
                    {bucketList.map((item, index) => (
                        <li key={index} className="bucket-item">
                            <span className="bucket-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="bucket-text">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
  );
}