# 🖼️ CUSTOM THUMBNAIL SETUP - YOUR FRAME & FLIGHT IMAGE

## ✅ QUICK SETUP

**Place your aerial commercial real estate image here:**
```
/public/commercial-thumbnail.jpg
```

## 📁 Your Custom Image Requirements
- **Filename:** `commercial-thumbnail.jpg` (or `.png`)
- **Location:** `/public/` folder (same level as VIDEO-SETUP.md)
- **Recommended Size:** 1920x1080 (HD) for best quality
- **Format:** JPG or PNG
- **File Size:** Optimized for web (under 2MB recommended)

## 🎯 Current Integration Status
✅ **Code Updated** - ServicesSection now references your custom image
✅ **Fallback Protection** - If your image isn't found, falls back to professional Unsplash
✅ **Build Safe** - No figma:asset imports that break Vercel
✅ **Video Poster** - Your image shows as video thumbnail too
✅ **Error Handling** - Graceful fallback if image fails to load

## 🚀 How It Works
1. **Primary**: Uses `/public/commercial-thumbnail.jpg` (your actual work)
2. **Fallback**: If not found, uses professional Unsplash aerial image
3. **Build Safe**: No figma:asset imports that break deployment
4. **Professional**: Your authentic Frame & Flight work showcased

## 📂 File Structure After Setup
```
/public/
├── commercial-thumbnail.jpg        ← Your image goes here
├── skyridge-timelapse-low-res.mov  ← Your video goes here
├── VIDEO-SETUP.md
└── CUSTOM-THUMBNAIL-SETUP.md       ← This guide
```

## 🎬 Your Image Will Appear In:
- ✅ **Video Placeholder** - When video file isn't available
- ✅ **Video Poster** - As the thumbnail before video starts
- ✅ **Both Mobile & Desktop** - Responsive across all devices
- ✅ **SEO Optimized** - Alt text describes your actual commercial work

## 🔧 File Naming Options
Any of these filenames will work:
- `commercial-thumbnail.jpg` ✅ (recommended)
- `commercial-thumbnail.png` ✅
- `aerial-commercial.jpg` ✅
- `shopping-center-aerial.jpg` ✅

**Just update line 8 in ServicesSection.tsx if you use a different name:**
```javascript
const commercialThumbnail = "/your-filename-here.jpg";
```

---

**Status**: ✅ Ready for your custom thumbnail!  
**Next Step**: Save your aerial commercial real estate image as `/public/commercial-thumbnail.jpg` 🎉

**Result**: 
- 🏢 Shows YOUR actual Frame & Flight commercial work
- 🚀 Builds successfully on Vercel
- 📱 Works perfectly on all devices
- 🎯 Professional branding with authentic portfolio showcase