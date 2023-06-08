module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com", "home.nps.gov"],
  },
  async redirects() {
    return [
      {
        source: "/blog/oregon/crg-wildflowers",
        destination: "/blog/guides/columbia-river-gorge-wildflowers",
        permanent: true,
      },
    ];
  },
};
