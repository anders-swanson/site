module.exports.txt = function(domain) {
    return `User-agent: *
Disallow: /search*
Disallow: /filter/*
Allow: /
Sitemap: ${domain}/sitemap.xml
`
}