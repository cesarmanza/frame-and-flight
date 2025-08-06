// 🎥 VIDEO GALLERY CONFIGURATION
// ================================
// 
// This file contains all your YouTube video links and configurations.
// Simply add your YouTube video IDs and thumbnails here to automatically
// integrate them into the portfolio gallery with hover-to-play functionality.
//
// HOW TO ADD VIDEOS:
// 1. Get the YouTube video ID from the URL (e.g., https://youtube.com/watch?v=ABC123 → "ABC123")
// 2. Add a new object to the videoItems array below
// 3. The thumbnail will auto-generate from YouTube, or you can specify a custom one
//
// EXAMPLE:
// {
//   id: 7,
//   title: "Your Video Title",
//   youtubeId: "YOUR_YOUTUBE_VIDEO_ID",
//   category: "Aerial" | "Commercial" | "Residential" | "Construction",
//   description: "Brief description of the video content",
//   customThumbnail: "optional-custom-thumbnail-url" // Optional: uses YouTube thumbnail if not provided
// }

export interface VideoGalleryItem {
  id: number;
  title: string;
  youtubeId: string;
  category: 'Aerial' | 'Commercial' | 'Residential' | 'Construction';
  description?: string;
  customThumbnail?: string;
}

// 🎬 YOUR VIDEO GALLERY ITEMS
// Add your YouTube videos here - they will automatically appear in the portfolio gallery
export const videoItems: VideoGalleryItem[] = [
  // EXAMPLE ENTRIES - Replace with your actual YouTube video IDs
  {
    id: 1,
    title: "Luxury Estate Aerial Tour",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
    category: "Residential",
    description: "Breathtaking aerial tour of a luxury Austin hillside estate"
  },
  {
    id: 2,
    title: "Downtown Commercial Complex",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID  
    category: "Commercial",
    description: "Professional showcase of modern commercial architecture"
  },
  {
    id: 3,
    title: "Construction Progress Timelapse",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
    category: "Construction", 
    description: "Months of development captured in stunning timelapse"
  },
  {
    id: 4,
    title: "Waterfront Property Showcase",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
    category: "Residential",
    description: "Cinematic presentation of luxury waterfront living"
  },
  {
    id: 5,
    title: "3D Mapping Demonstration",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
    category: "Aerial",
    description: "Advanced 3D mapping and surveying capabilities"
  },
  {
    id: 6,
    title: "Austin Skyline Cinematography",
    youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
    category: "Aerial",
    description: "Artistic aerial cinematography of Austin's iconic skyline"
  }
];

// 🔧 UTILITY FUNCTIONS
// These functions help generate YouTube embed URLs and thumbnails automatically

export const getYouTubeEmbedUrl = (videoId: string, autoplay: boolean = false): string => {
  const baseUrl = "https://www.youtube.com/embed";
  const params: Record<string, string> = {
    rel: '0',               // Don't show related videos
    modestbranding: '1',    // Remove YouTube branding
    controls: '1',          // Show player controls
    showinfo: '0',         // Hide video info
    iv_load_policy: '3',   // Hide annotations
    enablejsapi: '1',      // Enable JavaScript API
  };

  // Add origin only in browser environment
  if (typeof window !== 'undefined') {
    params.origin = window.location.origin;
  }

  if (autoplay) {
    params.autoplay = '1';
    params.mute = '1';      // Autoplay with mute (required by browsers)
    params.loop = '1';      // Loop the video
    params.playlist = videoId; // Required for loop to work
  }
  
  const searchParams = new URLSearchParams(params);
  return `${baseUrl}/${videoId}?${searchParams.toString()}`;
};

export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'maxres'): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
};

// 🎨 CATEGORY COLORS
// Define colors for different video categories
export const categoryColors = {
  Aerial: 'bg-blue-500',
  Commercial: 'bg-green-500', 
  Residential: 'bg-purple-500',
  Construction: 'bg-orange-500'
} as const;

// 📊 ANALYTICS HELPERS
// Optional: Track video interactions for analytics
export const trackVideoInteraction = (action: 'hover' | 'play' | 'click', videoId: string, title: string) => {
  // Add your analytics tracking here (Google Analytics, etc.)
  console.log(`Video ${action}:`, { videoId, title });
};

/* 
🚀 QUICK SETUP GUIDE:
=====================

1. **Get Your YouTube Video IDs:**
   - Go to your YouTube video
   - Copy the ID from the URL (the part after "v=")
   - Example: https://youtube.com/watch?v=ABC123def → "ABC123def"

2. **Update the videoItems array above:**
   - Replace the example "dQw4w9WgXcQ" IDs with your real video IDs
   - Update titles, categories, and descriptions

3. **Test the Integration:**
   - Hover over portfolio items to see video previews
   - Videos will auto-play on hover and pause when you move away
   - Click to open full-screen video modal

4. **Optional Customizations:**
   - Add custom thumbnails with the `customThumbnail` field
   - Modify category colors in the `categoryColors` object
   - Add analytics tracking in the `trackVideoInteraction` function

🎯 That's it! Your videos will automatically integrate into the portfolio gallery.
*/