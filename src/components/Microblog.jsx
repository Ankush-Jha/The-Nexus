import "../styles/microblog.css";

export default function Microblog() {
  const posts = [
    {
      date: "2026/05/12",
      content: "just discovered a new exoplanet paper!! the atmospheric composition of WASP-121b is absolutely insane. physics is so cool (ᵔ ᵕ ᵔ)",
    },
    {
      date: "2026/05/10",
      content: "finally finished my cosmology assignment. feeling like a real jedi now. may the equations be with you all.",
    },
    {
      date: "2026/05/08",
      content: "listening to clairo while coding this site. the vibes are immaculate. also, rachel is a bop.",
    },
  ];

  return (
    <div className="microblog-container">
      <h2 className="microblog-title">/microblog</h2>
      <div className="microblog-list">
        {posts.map((post, index) => (
          <div key={index} className="microblog-post">
            <div className="post-header">
              <span className="post-user">choubey</span>
              <span className="post-date">{post.date}</span>
            </div>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
