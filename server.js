const express = require("express");
const app = express();

app.use(express.static(__dirname)); // allows serving image files

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Kenneth Onan</title>
        <style>
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #0f0f0f;
          }

          body {
            min-height: 100vh;
                background: url("bg_plat_tech_final_project.png") left 20%/cover no-repeat fixed;
            font-family: Arial, sans-serif;
            color: white;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .container {
            text-align: left;
            max-width: 700px;
            padding: 40px;
            margin-right: 60px;
            background: transparent;
            border-radius: 15px;
            color: #ffffff;
            text-shadow: 0 6px 18px rgba(0,0,0,0.6);
          }

          .pretitle {
            font-size: 26px;
            letter-spacing: 4px;
            color: rgba(255,255,255,0.75);
            text-transform: uppercase;
            margin-bottom: 12px;
            font-weight: 700;
          }

          .title {
            font-size: clamp(36px, 8vw, 72px);
            margin: 0;
            font-weight: 900;
            line-height: 1;
          }

          h2 {
            font-size: 24px;
            margin-top: 10px;
            color: rgba(255,255,255,0.8);
            font-weight: 600;
          }

          p {
            margin-top: 20px;
            font-size: 24px;
            line-height: 1.6;
            color: rgba(255,255,255,0.9);
            max-width: 520px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="pretitle">Hello</div>
          <h1 class="title">I'M KENNETH ONAN</h1>
          <h2>BSIT BA 4101</h2>

          <p>“Do not go where the path may lead. Go instead where there is no path and leave a trail.”</p>
          <p>-Ralph Waldo Emerson</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
