require('dotenv').config();

const Image = require("@11ty/eleventy-img");
const sass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("app/assets/fonts");
    eleventyConfig.addPassthroughCopy("app/json");
    eleventyConfig.addPassthroughCopy("app/assets/img/*.png");
    eleventyConfig.addPassthroughCopy("app/assets/img/*.svg");
    eleventyConfig.addPassthroughCopy("app/assets/js/**/*.js");
    eleventyConfig.addPassthroughCopy("app/*.ico");
    eleventyConfig.addPassthroughCopy("app/*.svg");
    eleventyConfig.addPassthroughCopy("app/_headers");
    eleventyConfig.addPassthroughCopy({
        "node_modules/lite-youtube-embed/src/lite-yt-embed.js": "assets/js/lite-yt-embed.js",
        "node_modules/jquery/dist/jquery.slim.js": "assets/js/jquery.js"
    });
    eleventyConfig.addPlugin(sass, {
        sass: {
          loadPaths: ["node_modules"],
        },
        postcss: postcss([
            autoprefixer
        ])
    });

      const md = new markdownIt({
        html: true,
        breaks: true,
        linkify: true
      });

      eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
      });
    
    

  eleventyConfig.addShortcode("blogHeading2", function(title) {
return `<h2 class="color-green-900">${title}</h2>
<hr class="hr hr--yellow-500 hr" />`;
});


eleventyConfig.addPairedShortcode("postcard", function(content, classes, title, imgUrl, imgAlt) {
const img = this.Image(imgUrl, imgAlt, "image-rounded");
return `<div class="postcard ${classes}">
    <div class="postcard-content">
        <div class="postcard-content-left">
            <div>
            <h2 class="h4">${title}</h2>
            <hr class="hr hr--yellow-500">
            </div>
            ${content}
        </div>
        <div class="postcard-content-right">
            <div class="image-rounded"> 
                ${img}
            </div>
        </div>
    </div>
</div>`
});

eleventyConfig.addShortcode("Image", async (src, alt, classes) => {
    if (!alt) {
      console.warn(`Missing \`alt\` on myImage from: ${src}`);
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

    return `<div class="${classes}"><picture> ${source} ${img} </picture></div>`;
  });

  return {
    dir: {
      input: "app"
    }
  }
};
