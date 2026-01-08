export interface Breadcrumb {
  name: string;
  link?: string;
}

export interface BrandItem {
  name: string;
  image?: string;
  subtitle?: string; // e.g., "TOILET CLEANER"
  desc?: string;     // For the About page variant
}

export interface BrandPageData {
  breadcrumb: Breadcrumb[];
  title: string;
  heroImage: string;
  badge?: string;
  introTitle: string;
  description: string;
  layout: 'grid' | 'cards'; // 'grid' for logos, 'cards' for "About Us" values
  items: BrandItem[];
}

export type PageContentMap = Record<string, BrandPageData>;
export const pageContent: PageContentMap = {
  "food-beverages": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Food&Beverages" }],
    title: "Food&Beverages",
    heroImage: "/food&beverages.png",
    badge: "Our Food Brands",
    introTitle: "Nourishing Everyday Moments",
    description: "Our food brands are crafted to bring quality, taste, and nutrition to everyday meals. From essential staples to convenient packaged foods.",
    layout: "grid", // style for brands
    items: [
      { name: "Amma", image: "/amma.png" },
      { name: "Sevana", image: "/sevana.png" },
      { name: "Assam Apple Valley", image: "/assamapple.png" },
      { name: "GRT", image: "https://images.unsplash.com/photo-1597484662317-9bd773ecdf58?w=400" },
    ]
  },
  "mini-home-appliances": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Mini Home Appliances" }],
    title: "Mini Home Appliances",
    heroImage: "/minihomeappliance.png",
    badge: "Our Home Appliance Brands",
    introTitle: "Small Appliances. Big Impact",
    description: "Our mini home appliances are designed to make everyday living simpler, smarter, and more efficient. Combining practical design with reliable performance.",
    layout: "grid",
    items: [
      { name: "Peter Cook", image: "/petercook.png" }
    ]
  },
  "about": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "About" }],
    title: "Purpose at the Heart of Everything We Do",
    heroImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80",
    badge: "About Us",
    introTitle: "What We Stand For",
    description: "We are a fast-moving consumer goods company dedicated to making everyday life better through trusted, high-quality products.",
    layout: "cards", // style for values
    items: [
      { name: "Quality You Can Trust", desc: "Every product is developed and tested to meet standards.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400" },
      { name: "Sustainability in Action", desc: "We are committed to responsible sourcing.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400" },
    ]
  },
   "health-personal-care": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Health & Personal Care" }],
    title: "Health & Personal Care",
    heroImage: "/healthpersonalcare.png",
    badge: "Our Health & Personal Care Brands",
    introTitle: "Gentle Care. Proven Quality",
    description: "Our personal and healthcare products are created to support everyday well-being, hygiene, and self-care. Designed with care and backed by quality standards, our brands help individuals and families feel confident, protected, and cared for—every day.",
    layout: "grid",
    items: [
      { name: "Everlay" },
      { name: "Denix" }
    ]
  },
  "home-care": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Home Care" }],
    title: "Home Care",
    heroImage: "/homeappliance.png",
    badge: "Our Home Care Brands",
    introTitle: "Effective Cleaning Solutions",
    description: "Our home care products are designed to keep living spaces clean, fresh, and comfortable. Combining effective formulations with trusted quality, our brands help consumers maintain hygienic homes with ease and confidence.",
    layout: "grid",
    items: [
      { name: "SkyWash" },
      { name: "King Fresh", subtitle: "TOILET CLEANER" },
      { name: "BizWash" }
    ]
  },
  "hospitality": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Hospitality" }],
    title: "Hospitality",
    heroImage: "/hospitality.png",
    badge: "Our Hospitality Service Brands",
    introTitle: "Guest-Centric Approach",
    description: "Our hospitality services are designed to deliver comfort, quality, and consistent experiences across every touchpoint. We focus on providing reliable, guest-centric solutions that meet the high standards of modern hospitality environments.",
    layout: "grid",
    items: [
      { name: "Willing Ton" },
      { name: "Hyden Park" },
      { name: "Grand Cass" }
    ]
  },
  "consumer-electronics": {
    breadcrumb: [{ name: "Home", link: "/" }, { name: "Brands", link: "" }, { name: "Consumer & Electronics" }],
    title: "Consumer & Electronics",
    heroImage: "/consumer&electronics.png",
    badge: "Our Consumer&Electronics Brands",
    introTitle: "Quality & Safety Standards",
    description: "Our consumer and electronics products are designed to enhance everyday living through smart, reliable, and user-friendly technology. We focus on creating practical solutions that blend innovation with durability to meet the needs of modern consumers.",
    layout: "grid",
    items: [
      { name: "Siscon" }
    ]
  }
};