/** @type {import('next').NextConfig} */
// const nextConfig = {

// }

module.exports =  {
    webpack(config) {
        config.infrastructureLogging = { debug: /PackFileCache/ }
        return config;
    }
}