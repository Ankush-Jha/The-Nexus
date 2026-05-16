import "../styles/quote.css";

export default function Quote() {
    const quote = {
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan",
    };

    return (
        <section className="quote-card">
            <div className="quote-glow"></div>

            <blockquote className="quote-text">
                “{quote.text}”
            </blockquote>

            <p className="quote-author">— {quote.author}</p>
        </section>
    );
}