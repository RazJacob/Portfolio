
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const enterButton = document.createElement("button");
  enterButton.textContent = "כניסה / Enter";
  enterButton.style.padding = "1em";
  enterButton.style.fontSize = "1.2em";
  enterButton.onclick = () => showPortfolio();

  const welcome = document.createElement("div");
  welcome.style.height = "100vh";
  welcome.style.display = "flex";
  welcome.style.flexDirection = "column";
  welcome.style.justifyContent = "center";
  welcome.style.alignItems = "center";
  welcome.innerHTML = `
    <h1>ברוך הבא / Welcome</h1>
    <p>לחץ כדי להיכנס לתיק העבודות שלך</p>
    <p style="color:gray; font-size: 0.9em;">Click to enter your portfolio</p>
  `;
  welcome.appendChild(enterButton);
  root.appendChild(welcome);

  function showPortfolio() {
    root.innerHTML = `
      <div style="padding:2em; max-width:800px; margin:auto;">
        <h1 style="text-align:center;">Raz Jacob</h1>
        <h2>Projects</h2>
        <div id="projects"></div>
        <h2>Contact</h2>
        <p>Have a project in mind or just want to say hi?</p>
        <button onclick="window.location='mailto:you@example.com'">Email Me</button>
      </div>
    `;

    const projects = [
      { id: 1, title: "Red Alert", link: "/red-alert" },
      { id: 2, title: "GAZA - Destruction area", link: "/gaza-destruction-area" },
    ];

    const container = document.getElementById("projects");
    projects.forEach(p => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ddd";
      card.style.padding = "1em";
      card.style.margin = "1em 0";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>This is a placeholder description for ${p.title}.</p>
        <button onclick="window.location='${p.link}'">View Project</button>
      `;
      container.appendChild(card);
    });
  }
});
