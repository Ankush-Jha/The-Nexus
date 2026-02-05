const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDmDXWWPbO7Y5nlpU53vHRGP7dKcddWmVaRaNsAOZknN7KTDc9Z6CX8SIMF-43kTRX-_z7zoOLjuHD/gviz/tq?tqx=out:json";

fetch(SHEET_URL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const list = document.getElementById("checklist");

    rows.forEach(row => {
      const task = row.c[0]?.v;
      const done = row.c[1]?.v;

      if (!task) return;

      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" ${done ? "checked" : ""} disabled>
        <label>${task}</label>
      `;
      list.appendChild(li);
    });
  })
  .catch(err => console.error("Checklist load failed:", err));
