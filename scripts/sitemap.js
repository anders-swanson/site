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
      } else if (isSiteFile(fileName)) {
        let stats = fs.statSync(filePath);
        let lastmod = stats.mtime.toISOString().split("T")[0];
        const id =
          relDir + "/" + fileName.replace(/\.js$/, "").replace(/\.tsx$/, "");
        metadata =
          metadata +
          `
  <url>
    <loc>${domain}${id}</loc>
    <lastmod>${lastmod}</lastmod>
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

const allowedExtensions = [".js", "jsx", ".ts", ".tsx"];
const blockedFiles = ["example.js", "_", "[", "search.js"];

function isSiteFile(fileName) {
  for (let i = 0; i < blockedFiles.length; ++i) {
    if (fileName.startsWith(blockedFiles[i])) {
      return false;
    }
  }
  for (let i = 0; i < allowedExtensions.length; ++i) {
    if (fileName.endsWith(blockedFiles[i])) {
      return false;
    }
  }
  return true;
}
