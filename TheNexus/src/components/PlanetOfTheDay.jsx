import { useEffect, useState } from "react";
import "../styles/planetOfTheDay.css";

export default function PlanetOfTheDay() {
    const [planets, setPlanets] = useState([]);
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const query = `
        select top 200
            pl_name,
            hostname,
            disc_year,
            discoverymethod,
            pl_rade,
            pl_orbper,
            pl_eqt
        from pscomppars
        where pl_name is not null
    `;

    const API_URL =
        "SY6lllc5RX07NznHibN36b1J1YbryD4frM8LvXz9" +
        `query=${encodeURIComponent(query)}&format=json`;

    useEffect(() => {
        fetchPlanets();
    }, []);

    async function fetchPlanets() {
        try {
            setLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch exoplanet data.");
            }

            const data = await response.json();

            setPlanets(data);

            if (data.length > 0) {
                pickRandomPlanet(data);
            }
        } catch (err) {
            setError("Unable to load exoplanet data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    function pickRandomPlanet(planetList = planets) {
        const randomIndex = Math.floor(Math.random() * planetList.length);
        setPlanet(planetList[randomIndex]);
    }

    if (loading) {
        return (
            <section className="planetCard">
                <h2>PLANET OF THE DAY</h2>
                <p>Scanning the galaxy...</p>
            </section>
        );
  }

    if (error) {
        return (
            <section className="planetCard">
                <h2>PLANET OF THE DAY</h2>
                <p>{error}</p>
            </section>
        );
    }

    if (!planet) return null;

    return (
        <section className="planetCard">
            <h2>PLANET OF THE DAY</h2>

            <div className="planetWindow">
                <div className="windowBar">
                    <span>Exoplanet Archive</span>
                </div>

                <div className="planetContent">
                    <h3>{planet.pl_name}</h3>

                    <p><strong>Host Star:</strong> {planet.hostname}</p>
                    <p><strong>Discovery Year:</strong> {planet.disc_year}</p>
                    <p><strong>Method:</strong> {planet.discoverymethod}</p>
                    <p>
                        <strong>Radius:</strong>{" "}
                        {planet.pl_rade
                            ?`${planet.pl_rade.toFixed(2)} R⊕`: "Unknown"}
                    </p>
                    <p>
                        <strong>Orbital Period:</strong>{" "}
                        {planet.pl_orbper
                            ?`${planet.pl_orbper.toFixed(2)} days`: "Unknown"}
                    </p>
                    <p>
                        <strong>Equilibrium Temp:</strong>{" "}
                        {planet.pl_eqt
                            ?`${planet.pl_eqt} K`: "Unknown"}
                    </p>

                    <button onClick={() => pickRandomPlanet()}>
                        Discover Another World
                    </button>
                </div>
            </div>
        </section>
    );
}