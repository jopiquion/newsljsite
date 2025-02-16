module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html', // Serve index.html from the public folder
        permanent: true,
      },
    ]
  },
}
