import "../styles/navbar.css";

export default function Navbar() {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Notebook", href: "#notebook" },
        { name: "Research", href: "#research" },
        { name: "Portfolio", href: "#portfolio" },
    ];

    return (
        <header className="navbar-wrapper">
            {/* Brand */}
            <a href="#home" className="navbar-brand">
                <span className="brand-text">Prachi's Galaxy</span>
                <span className="brand-stars">✦ ✧ ✶ ✦</span>
            </a>

            {/* Navigation */}
            <nav className="navbar">
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="nav-link">
                        {item.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}