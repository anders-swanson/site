const fs = require("fs");
const path = require("path");
const sitemap = require("./scripts/sitemap");
const metadata = require("./scripts/metadata");
const robots = require("./scripts/robots");

const blogDirectory = path.join(process.cwd(), "pages/blog");
const embeddedPagesDirectory = path.join(process.cwd(), "components/pages");
const pagesDirectory = path.join(process.cwd(), "pages");

const metadataFile = "lib/metadata.js";
const sitemapFile = "public/sitemap.xml";
const robotsFile = "public/robots.txt";
const domain = "https://www.trailsandtrekking.com";

function writeFile(f, d) {
  fs.writeFile(f, d, function (err, d) {
    if (err) {
      return console.log(err);
    }
    console.log(d);
  });
}

// Write the Posts function out to the metadata.js file
writeFile(metadataFile, metadata.txt(blogDirectory, embeddedPagesDirectory));
// Create the sitemap.xml
writeFile(sitemapFile, sitemap.txt(pagesDirectory, domain));
// Create the robots.txt
writeFile(robotsFile, robots.txt(domain));
