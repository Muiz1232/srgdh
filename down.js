const { alldown } = require('nayan-media-downloader');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const url = req.query.url; // Get URL from query parameter (GET request)

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      const data = await alldown(url); // Call the downloader
      return res.status(200).json(data); // Send the result as a JSON response
    } catch (error) {
      console.error('Error downloading media:', error);
      return res.status(500).json({ error: 'Failed to download media' });
    }
  }

  if (req.method === 'POST') {
    const { url } = req.body; // Get URL from request body (POST request)

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      const data = await alldown(url); // Call the downloader
      return res.status(200).json(data); // Send the result as a JSON response
    } catch (error) {
      console.error('Error downloading media:', error);
      return res.status(500).json({ error: 'Failed to download media' });
    }
  }

  // If method is not GET or POST, return 405 (Method Not Allowed)
  return res.status(405).json({ error: 'Method not allowed' });
};
