/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `
            @import "base/variables.scss"; 
            @import "base/animations.scss";
            @import "base/media-queries.scss";
            @import "base/typography.scss";
        `
    },

}

module.exports = nextConfig
