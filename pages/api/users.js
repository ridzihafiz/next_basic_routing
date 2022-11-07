export default function handler(req, res) {
  res.status(200).json({
    success: true,
    request_data: req.headers,
    query: [
      {
        id: 1,
        username: "Rid",
      },
      {
        id: 2,
        username: "Utari",
      },
    ],
  });
}
