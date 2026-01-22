import axios from "axios";

const urls = [
  "https://viraj-personal-portfolio-server.onrender.com/"
];

export default async function handler(req, res) {
  const results = [];

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      results.push({ url, status: response.status });
    } catch (err) {
      results.push({ url, error: err.message });
    }
  }

  res.status(200).json({
    message: "URLs visited",
    results
  });
}
