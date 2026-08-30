import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Hanshika Maradiya",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Hanshika  is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "16 years" ,
    dateOfBirth: "27 Nov 2010",
    height: "5.4 feet",
    weight: "35 kg",
    Bust: "",
    skinTone: "Medium",
    hairColor: "Brown",
    eyeColor: "Brown",
    ShoeSize: "4",
    Hips: "",
    Waist: "26",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Rakesh Maradiya",
    motherName: "Mrs. Khushbu Maradiya",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "ih.anshika",

  ecommerce: [
  /**{
    name: "Flipkart",
    url: "https://www.flipkart.com/",
    description: "Shop featured products and collections.",
  },*/
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Hanshika fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "Hanshika fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "Hanshika studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "Hanshika outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "Hanshika commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "Hanshika lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "Hanshika fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "Hanshika campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "Hanshika editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "Hanshika hero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "Hanshika profile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "Hanshika commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "Hanshika lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "Hanshika fashion look",
      category: "Fashion",
    },
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  /**{
    title: "Hanshika Model Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name.mp4",
    type: "mp4",
  },
  {
    title: "Hanshika Model Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name-compressed.mp4",
    type: "mp4",
  },*/
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
