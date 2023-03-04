const Image = require("@11ty/eleventy-img");
const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/fonts");
    eleventyConfig.addPassthroughCopy("json");
    eleventyConfig.addPassthroughCopy("./assets/img/*.png");
    eleventyConfig.addPassthroughCopy("./assets/img/*.svg");
    eleventyConfig.addPassthroughCopy("*.ico");
    eleventyConfig.addPassthroughCopy("*.svg");
    eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addShortcode("blogHeading2", function(title) {
return `<h2 class="color-green-900">${title}</h2>
<hr class="yellow-500-hr" />`;
});

eleventyConfig.addShortcode("Image", async (src, alt, classes) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [25, 320, 640, 960, 1200, 1800, 2400],
      formats: ["jpeg", "webp"],
      urlPath: "/assets/img/",
      outputDir: "./_site/assets/img/",
    });

    let lowestSrc = stats["jpeg"][0];

    const srcset = Object.keys(stats).reduce(
      (acc, format) => ({
        ...acc,
        [format]: stats[format].reduce(
          (_acc, curr) => `${_acc} ${curr.srcset} ,`,
          ""
        ),
      }),
      {}
    );

    const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

    const img = `<img
      loading="lazy"
      alt="${alt}"
      src="${lowestSrc.url}"
      sizes='(min-width: 1024px) 1024px, 100vw'
      srcset="${srcset["jpeg"]}"
      width="${lowestSrc.width}"
      height="${lowestSrc.height}">`;

    return `<div class="image-wrapper ${classes}"><picture> ${source} ${img} </picture></div>`;
  });
};
