// server.js - Startup file for cPanel / CloudLinux Node.js App (Phusion Passenger)
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");

// Always false in production on cPanel
const dev = false;
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

// In Passenger, PORT can be a Unix domain socket path or a port number
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error handling request:", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    server.listen(port, () => {
      console.log(`> Payfast ID server ready on ${port}`);
    });
  })
  .catch((err) => {
    console.error("Next.js prepare error:", err);
    process.exit(1);
  });
