// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif"],
      optimizeImages: true,
      optimizeImagesInDev: true,
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);
