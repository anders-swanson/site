module.exports.txt = function(domain) {
    return `User-agent: *
Disallow: /search*
Disallow: /filter/*
Disallow: /media-kit*
Allow: /
Sitemap: ${domain}/sitemap.xml
`
}