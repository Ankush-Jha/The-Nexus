import { useState } from "react";
import "../styles/msg.css";

export default function Msg() {
  const [messages] = useState([
    { user: "choubey", text: "does anyone else think about dark matter at 3am", time: "2 min ago" },
    { user: "astro_nerd", text: "literally every night lmao", time: "5 min ago" },
    { user: "stargazer", text: "just finished reading Cosmos again 😭", time: "12 min ago" },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  return (
    <section className="msg-card">
      <h3 className="msg-title">chatbox!</h3>

      <div className="msg-scroll">
        {messages.map((msg, i) => (
          <div key={i} className="msg-bubble">
            <span className="msg-user">{msg.user}</span>
            <span className="msg-time">{msg.time}</span>
            <p className="msg-content">{msg.text}</p>
          </div>
        ))}
      </div>

      <form className="msg-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="msg-input"
        />
        <button type="submit" className="msg-send">→</button>
      </form>
    </section>
  );
}