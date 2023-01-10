const fs = require("fs");
const path = require("path");

module.exports.txt = function (pagesDirectory, domain) {
  metadata = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const recurseMetadata = (currentDir, relDir) => {
    const files = fs.readdirSync(currentDir);
    files.map((fileName) => {
      const filePath = path.join(currentDir, fileName);
      if (fs.statSync(filePath).isDirectory()) {
        recurseMetadata(filePath, relDir + "/" + fileName);
      } else if (
        fileName.endsWith(".js") &&
        !fileName.startsWith("_") &&
        !fileName.startsWith("[")
      ) {
        const id = relDir + "/" + fileName.replace(/\.js$/, "");
        metadata =
          metadata +
          `
  <url>
    <loc>${domain}${id}</loc>
  </url>`;
      } else {
        return;
      }
    });
  };

  recurseMetadata(pagesDirectory, "");
  return (
    metadata +
    `
</urlset>`
  );
};
