/** @type {import('next').NextConfig} */
const path = require('path')
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);
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

    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.mp4$/,
            type: 'asset',

            generator: {
                filename: '[name][ext]',
            },
        });

        return config;
    }
}



module.exports = withNextIntl(nextConfig)
