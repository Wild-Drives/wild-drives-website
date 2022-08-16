# History

## Sat Aug 12 2022

### Done:
  - Established local dir structure
  - Exported all PNGs from Figma file, converted to JPGs
  - Created favicon(s) based on mark found in Figma file
  - Created GitHub repo
  - Created CodePen for homepage (https://codepen.io/haems/pen/wvmYgdY)

### To-Do:
- [ ] ~~Determine appropriate photo dimensions~~
- [ ] Color correct photos (if possible; check ownership and rights)
- [ ] Convert images to WebP format
  
### Ask Lewis:
  - How does he want the favicon to look in dark mode / light mode? Is the favicon meant to be B&W or color?
  - What do these pages look like on tablets and mobile viewports? Ultrawide display (is there a max-width)?
  - What parts of the UI need animation?
  - Is he set on Recoleta font? I'd need to license it. (https://www.myfonts.com/products/recoleta-complete-family-package-203125/licenses)
  - Lots of colors going on here. Not a question, just an observation
  - What happens when the user clicks the "Book Your Trip" link? I don't have the skill to code a webapp that could handle that


## Mon Aug 14 2022
### Done:
- Finished first draft on CodePen, tossed it into VSC
- Imported new fonts from Google
- Added color classes for fonts
- Adjusted alignment of .hero div
- Saved add'l images from the Figma file
- Created iconfont
- Fixed background issue with the green and purple squares -- used an SVG for the body background instead
- Imported more icons to iconfont
- Tweaked link styles
- Began work on eve.html
  - Exported Eve body background-image from Figma
  - Added all copy
  - Added styles to CSS
  - Added copy
  - Arranged (loosely) elements
- Created vector version of postcard background
- Exported the remainder of the images
  
### To-Do:

- [x] Create CTA div for footer
- [x] Exempt / fix border-radius property for site-id.svg
- [x] Get favicon working (404)
- [x] Establish orange link style for links in <main>
- [x] Set background-color for social icons
- [x] Export SVG background (from Figma) for footer
- [x] Implement SVG background for footer
- [x] Export lightning bolt image (from Figma) for .hero
- [ ] Add icons to iconfont for Eve page
- [x] Fix weird image rotations (postcard, goodies)-- unclear what is causing this; devcon doesn't offer any insight at this time
- [ ] Fix vector paths for the following icons (see ):
  - pizza
  - charge
  - sink
  - shower
  - beds
  - chair
  - usb
  - towels
  - fridge
  
- [ ] Overhaul iconfont for consistent sizing -- 24px x 24px (batch these in Illustrator)
  
## Ask Lewis:
- What color space is he using in Figma? sRGB or unmanaged? The colors look muddier in unmanaged. This will depend on browser as well -- we can't control which browsers / monitors users choose, so don't go too hard on this
- Repost: How does he want the favicon to look in dark mode / light mode? Is the favicon meant to be B&W or color? Current favicon doesn't look so hot in dark mode
- There are (at time of counting) 3 different email icons. Is this intentional?
- I suggest keeping the alignment of hero section items consistent between pages (where applicable). Eve page, for example, should match range page
- How does he want to treat integers outside of the range page? E.g.: "[...] pop-up roof, 5 seats, two double beds, a fridge, [...]" Per AP Style, this should read "five seats, two double beds" but both an integer and a spelled-out number are used. Which one?
- What does he want to happen when a user subscribes to the newsletter? Redirect to the homepage?
- Does he want me to fix the paths on the icons or redraw them himself?
- Can we not have the newsletter div on the Eve page overlap the footer? It's inconsistent. Also, consider adding the newsletter div to the Range page. 
- Does the range page not have a background at the top? Seems a bit inconsistent
- What to do about the inconsistent use of hyphens with compound modifiers? On homepage: "nature-friendly" and "pop-up roof" vs. "150 mile range" and "Pop Up Roof" on Eve page. Also, "Mile Range" ought to be capitalized (Eve page) to match consistency
- Eve page should probably have top nav, yes?

## Tue Aug 16 2022
### Done:
- Fixed minor copy issues on Eve page
- Implemented airmail gradient for postcard borders
- Various font color fixes
  
### To-Do:
- Fix postcards
- Set colors for nav (if Lewis wants a nav on this page)
- See if I can indent the second line of the li spans -- else, use inline-block divs (a la specs)
