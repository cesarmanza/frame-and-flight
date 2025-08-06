# 🎥 VIDEO FILE SETUP - FRAME & FLIGHT

## ✅ QUICK VIDEO SETUP

**Place your video file in this exact location:**
```
/public/skyridge-timelapse-low-res.mov
```

## 📁 Video File Requirements
- **Filename:** `skyridge-timelapse-low-res.mov` (exact name)
- **Format:** .mov, .mp4, or .webm (recommended)
- **Size:** Optimized for web (under 50MB recommended)
- **Resolution:** HD (1920x1080) or higher
- **Compression:** Web-optimized for fast loading

## 🎯 Current Integration Status
✅ **Video Component Ready** - ServicesSection configured for your video
✅ **Custom Player** - Professional play/pause controls
✅ **Responsive Design** - Works on all devices  
✅ **Fallback Poster** - Shows preview thumbnail before play

## 🎬 Video Features Implemented
- **Custom Play Button** - Professional overlay with hover effects
- **Auto Poster Generation** - Shows preview before video loads
- **Responsive Container** - Fits perfectly in services section design
- **Progress Tracking** - Play/pause state management
- **Professional Styling** - Matches Frame & Flight brand aesthetic

## 🚀 YouTube Video Gallery Setup

For the portfolio gallery videos, edit this file:
```
/components/VideoGalleryConfig.tsx
```

**Replace the example YouTube IDs:**
```javascript
// Change this:
youtubeId: "dQw4w9WgXcQ"

// To your actual YouTube video ID:
youtubeId: "YOUR_ACTUAL_VIDEO_ID"
```

## 🎯 YouTube Video ID Guide
1. Go to your YouTube video
2. Copy the video URL
3. Extract the ID after `v=`
   
**Example:**
- URL: `https://youtube.com/watch?v=ABC123def456`  
- Video ID: `ABC123def456`

## 📊 Current Video Gallery Features
- ✅ **Hover-to-Play** - Videos play when you hover over thumbnails
- ✅ **Auto Thumbnails** - YouTube thumbnails automatically loaded
- ✅ **Category Badges** - Color-coded video categories
- ✅ **Professional Controls** - Custom play buttons and overlays
- ✅ **Mobile Optimized** - Touch-friendly on mobile devices

## 🔧 File Structure
```
/public/
├── skyridge-timelapse-low-res.mov  ← Your video goes here
└── VIDEO-SETUP.md                  ← This guide

/components/
└── VideoGalleryConfig.tsx          ← YouTube video configuration
```

---

**Status**: ✅ Ready for your video file!  
**Next Step**: Drop `skyridge-timelapse-low-res.mov` in the `/public/` folder! 🎉