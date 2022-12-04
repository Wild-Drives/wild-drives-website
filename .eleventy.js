module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("json");
    eleventyConfig.addPassthroughCopy("./*.png");
    eleventyConfig.addPassthroughCopy("./*.svg");
    eleventyConfig.addPassthroughCopy("./*.ico");

    eleventyConfig.addPairedShortcode("blogSection", function(content, title) {
return `<div class="margin-spacing-a">
<h2 class="color-green-900">${title}</h2>
<hr class="yellow-500-hr" />
${content}
</div>`;
     });
  };
