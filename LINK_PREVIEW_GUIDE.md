# Link Preview & Social Sharing Guide

This guide explains how link previews work and what you need to set up for optimal social media sharing.

## 📱 What Are Link Previews?

When you share a link on social media platforms (Facebook, Twitter, LinkedIn, WhatsApp, etc.), they automatically generate a preview card showing:
- **Title** - The main headline
- **Description** - A brief summary of the content
- **Image** - A visual preview image
- **URL** - The website address

## ✅ What's Already Implemented

### 1. **Open Graph Tags (Facebook, LinkedIn, WhatsApp)**
- Complete OG tags with title, description, and image
- Image dimensions specified (1200x630px)
- Alt text for accessibility
- Site name and locale information

### 2. **Twitter Card Tags**
- Large image card format
- Optimized title and description
- Creator attribution
- Image alt text

### 3. **Structured Data (JSON-LD)**
- LocalBusiness schema
- Person schema
- WebSite schema
- Organization schema
- All services with pricing

### 4. **Enhanced Meta Tags**
- Rich descriptions with emojis
- Theme color for mobile browsers
- Apple mobile web app tags
- Application name

## 🖼️ Required Images

You need to create these images and place them in `assets/images/`:

### 1. **og-image.jpg** (1200x630px)
- **Purpose**: Facebook, LinkedIn, WhatsApp link previews
- **Format**: JPEG
- **Size**: 1200x630 pixels (1.91:1 ratio)
- **Content Suggestions**:
  - Your logo or brand name
  - "Šuri - Balkan Witch & Tarot"
  - Tarot card imagery or mystical design
  - Text: "Professional Tarot Readings from $2"
  - Use your brand colors (#d4a574, #8b6f47)

### 2. **twitter-image.jpg** (1200x675px)
- **Purpose**: Twitter link previews
- **Format**: JPEG
- **Size**: 1200x675 pixels (16:9 ratio)
- **Content**: Similar to og-image but optimized for Twitter

### 3. **logo.jpg** (Square, 512x512px recommended)
- **Purpose**: Business logo for structured data
- **Format**: JPEG or PNG
- **Size**: Square format, minimum 512x512px

### 4. **profile.jpg** (Square, 400x400px recommended)
- **Purpose**: Personal profile image for Person schema
- **Format**: JPEG
- **Size**: Square format

### 5. **favicon.ico** (16x16, 32x32, 48x48px)
- **Purpose**: Browser tab icon
- **Format**: ICO
- **Sizes**: Multiple sizes in one file

### 6. **apple-touch-icon.png** (180x180px)
- **Purpose**: iOS home screen icon
- **Format**: PNG
- **Size**: 180x180 pixels

## 🎨 Image Design Tips

1. **Keep Text Readable**: Use large, bold fonts
2. **Brand Colors**: Use your color scheme (#d4a574, #8b6f47)
3. **High Contrast**: Ensure text is readable on background
4. **Include Key Info**: Price point ($2 starting), service type
5. **Professional Look**: Clean, mystical aesthetic
6. **No Important Info in Edges**: Social platforms may crop edges

## 🧪 Testing Your Link Previews

### Facebook Debugger
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL
3. Click "Scrape Again" to refresh cache
4. Preview how it will look on Facebook

### Twitter Card Validator
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. See preview of how it will appear on Twitter

### LinkedIn Post Inspector
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL
3. Preview LinkedIn link preview

### Open Graph Preview
1. Use [opengraph.xyz](https://www.opengraph.xyz/)
2. Enter your URL
3. See preview across multiple platforms

## 📝 Current Preview Content

### Title
```
Šuri - Balkan Witch & Tarot | Professional Tarot Readings from $2
```

### Description
```
🔮 Professional tarot reading services. Get personalized insights for love, career, and personal growth. Quick readings from $2. Book via Venmo @suri_tarot
```

### Key Points Highlighted
- ✅ Starting price ($2)
- ✅ Service type (Tarot Reading)
- ✅ Venmo payment method
- ✅ Personalization mentioned
- ✅ Key topics (love, career, growth)

## 🔄 Updating Link Previews

If you need to update link previews:

1. **Update Meta Tags** in `index.html`:
   - Lines 24-25: Open Graph title/description
   - Lines 46-47: Twitter title/description
   - Line 10: Meta description

2. **Update Images**:
   - Replace images in `assets/images/` folder
   - Keep same filenames or update paths in HTML

3. **Clear Cache**:
   - Use Facebook Debugger to clear Facebook cache
   - Use Twitter Card Validator to clear Twitter cache
   - Wait 24-48 hours for full propagation

## 📱 Platform-Specific Notes

### Facebook
- Uses Open Graph tags
- Image: 1200x630px recommended
- Caches aggressively - use debugger to refresh

### Twitter
- Uses Twitter Card tags
- Image: 1200x675px for large cards
- Supports summary_large_image format

### LinkedIn
- Uses Open Graph tags
- Similar to Facebook
- Professional tone works well

### WhatsApp
- Uses Open Graph tags
- Shows title, description, and image
- Mobile-focused

### Instagram
- Doesn't support link previews in posts
- Use Stories with link sticker
- Bio link can be previewed

## 🚀 Quick Checklist

- [ ] Create og-image.jpg (1200x630px)
- [ ] Create twitter-image.jpg (1200x675px)
- [ ] Create logo.jpg (512x512px)
- [ ] Create profile.jpg (400x400px)
- [ ] Create favicon.ico
- [ ] Create apple-touch-icon.png (180x180px)
- [ ] Test with Facebook Debugger
- [ ] Test with Twitter Card Validator
- [ ] Test with LinkedIn Post Inspector
- [ ] Update domain URLs when you have your actual domain

## 💡 Pro Tips

1. **A/B Test Descriptions**: Try different descriptions to see what gets more clicks
2. **Update Seasonally**: Change images/descriptions for special offers
3. **Monitor Performance**: Track which previews get more engagement
4. **Keep It Fresh**: Update previews when you add new services
5. **Mobile First**: Most shares happen on mobile - optimize for small screens

## 📞 Support

For questions about link previews:
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Documentation](https://schema.org/)

---

**Last Updated**: November 2024
**Status**: ✅ Link Preview Tags Implemented - Images Needed

