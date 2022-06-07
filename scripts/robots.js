module.exports.txt = function(domain) {
    return `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`
}