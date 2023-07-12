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
            @import "components/links.scss";
            @import "components/buttons.scss";
        `
    },

    // webpack(config, { isServer }) {
    //     config.module.rules.push({
    //         test: /\.(mp4|jpg|jpeg|png|svg)$/,
    //         type: 'asset',

    //         generator: {
    //             filename: '[name][ext]',
    //         },
    //     });

    //     return config;
    // }
}



module.exports = nextConfig
