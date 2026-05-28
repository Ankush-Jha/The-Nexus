export default function Navbar(){
    return (
        <nav>
            <div className = "websiteTitle">
                The Nexus
            </div>
            <div className ="Nav">
                <ul className = "NavList">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Research">Research</a></li>
                    <li><a href="/Notebook">Notebook</a></li>
                    <li><a href="/Portfolio">Portfolio</a></li>
                    <li><a href="/The List">The List</a></li>
                    <li><a href="/Writing">Writing</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </div>
        </nav>
    )
}