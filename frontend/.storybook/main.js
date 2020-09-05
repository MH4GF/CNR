const path = require('path')

module.exports = {
    stories: ['../**/*.stories.tsx'],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: (config) => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                src: path.resolve(__dirname, '../src'),
            },
        },
    }),
}