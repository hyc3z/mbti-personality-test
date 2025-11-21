# MBTI Personality Type SVG Banners

Place your SVG banner files for each personality type in this directory.

## Required Files

The following SVG files should be placed in this folder:

```
public/assets/
├── ESTJ.svg
├── ESTP.svg
├── ESFJ.svg
├── ESFP.svg
├── ENTJ.svg
├── ENTP.svg
├── ENFJ.svg
├── ENFP.svg
├── ISTJ.svg
├── ISTP.svg
├── ISFJ.svg
├── ISFP.svg
├── INTJ.svg
├── INTP.svg
├── INFJ.svg
└── INFP.svg
```

## File Naming Convention

- **Format:** `{PERSONALITY_TYPE}.svg`
- **Case:** UPPERCASE (e.g., `INTJ.svg`, not `intj.svg`)
- **Extension:** `.svg` (Scalable Vector Graphics)

## Recommended Specifications

- **Format:** SVG (Scalable Vector Graphics)
- **Dimensions:** 1200x600px (2:1 aspect ratio recommended)
- **File Size:** < 500KB per file
- **Colors:** Match the personality type theme colors
- **Style:** Consistent design across all 16 types

## Fallback Behavior

If an SVG file is not found, the app will automatically display a fallback character showcase with:
- Emoji character
- Personality type code
- Gradient background

## Testing

To test if your SVG files are loading correctly:

1. Place SVG files in `public/assets/`
2. Complete the personality test
3. Check if the banner displays on the result page
4. If not, check browser console for errors

## Example SVG Structure

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
  <!-- Your SVG content here -->
  <rect width="1200" height="600" fill="#FF6B9D"/>
  <text x="600" y="300" text-anchor="middle" fill="white" font-size="120">
    INTJ
  </text>
</svg>
```

## Design Tips

- Use vibrant, dopamine-inspired colors
- Include the personality type code prominently
- Add relevant icons or illustrations
- Ensure text is readable
- Test on both light and dark backgrounds
- Optimize SVG files for web (remove unnecessary metadata)

## Color Themes by Type

Each personality type has associated colors defined in `src/data/mbtiCharacters.ts`:

- **INTJ:** Purple/Blue tones
- **INFP:** Pink/Purple tones
- **ENTJ:** Bold Red/Orange tones
- **ENFP:** Bright Yellow/Pink tones
- etc.

Refer to the character data file for specific color codes.
