export default function handler(req, res) {
    res.status(200).json({
      APP_ID: process.env.NEXT_PUBLIC_PARSE_APP_ID,
      API_KEY: process.env.NEXT_PUBLIC_PARSE_API_KEY,
    });
  }
  