module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("json");
    eleventyConfig.addPassthroughCopy("./*.png");
    eleventyConfig.addPassthroughCopy("./*.svg");
    eleventyConfig.addPassthroughCopy("./*.ico");

  eleventyConfig.addShortcode("blogHeading2", function(title) {
return `<h2 class="color-green-900">${title}</h2>
<hr class="yellow-500-hr" />`;
});
};
