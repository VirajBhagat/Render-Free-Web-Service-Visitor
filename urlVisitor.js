import cron from "node-cron";
import axios from "axios";
import urls from "./all_server_urls/urls.js";

cron.schedule("*/10 * * * *", async () => {
  console.log("⏰ Visiting URLs...");

  for (const url of urls) {
    try {
      const response = await axios.get(url, { timeout: 5000 });
      console.log(`✅ Visited ${url} | Status: ${response.status}`);
    } catch (error) {
      console.log(`❌ Failed ${url} | Error: ${error.message}`);
    }
  }
});
