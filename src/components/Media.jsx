import "../styles/media.css";

export default function Media() {
  return (
    <div className="media-container">
      {/* radioweb / Spotify */}
      <div className="indie-panel media-panel">
        <h3 className="indie-panel-title">radioweb ♪</h3>
        <div className="spotify-embed">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWspSfsT7m?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify"
          ></iframe>
        </div>
      </div>

      {/* isotube / YouTube */}
      <div className="indie-panel media-panel">
        <h3 className="indie-panel-title">#isotube</h3>
        <div className="youtube-embed">
          <iframe 
            width="100%" 
            height="180" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
