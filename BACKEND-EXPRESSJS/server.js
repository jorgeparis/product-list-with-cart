const express = require("express");
const cors = require("cors");
const https = require("https");
const { Readable } = require("stream");

const app = express();

app.use(cors({ origin: "*" }));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get("/stream", async (req, res) => {
  try {
    const icecastUrl = "https://node.stream-africa.com:8443/Gaza";

    // TLS bypass per-request (not global)
    const agent = new https.Agent({ rejectUnauthorized: false });

    const response = await fetch(icecastUrl, { agent });

    if (!response.ok) {
      res.status(response.status).send("Error fetching stream");
      return;
    }

    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") || "audio/mpeg"
    );

    // ✅ Convert WebStream -> Node Stream
    Readable.fromWeb(response.body).pipe(res);
  } catch (error) {
    console.error("Stream error:", error);
    res.status(500).send("Streaming failed");
  }
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
