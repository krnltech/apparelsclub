// ============================================
// TYPE DEFINITIONS
// ============================================

export type Product = {
  id: string;
  slug: string;
  product_name: string;
  price: string;
  originalPrice?: string;
  images: {
    main: string;
    gallery: string[];
    lifestyle?: string[];
  };
  category: string;
  subcategory: string;
  gender: "boys" | "girls" | "unisex";
  description: string;
  features: string[];
  sizes: {
    available: string[];
    sizeGuide: string;
  };
  colors: {
    name: string;
    code: string;
    inStock: boolean;
  }[];
  materials: string[];
  careInstructions: string[];
  rating: number;
  reviews: number;
  tags: string[];
  inStock: boolean;
  isClearance: boolean;
  isNewArrival: boolean;
};

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  displayOrder: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  subcategories: Subcategory[];
  displayOrder: number;
};

export type ProductFilters = {
  category?: string;
  subcategory?: string;
  sizes?: string[];
  colors?: string[];
  priceMin?: number;
  priceMax?: number;
  gender?: "boys" | "girls" | "unisex";
  inStock?: boolean;
  isClearance?: boolean;
  isNewArrival?: boolean;
  search?: string;
};

export type SortOption = "popular" | "price-asc" | "price-desc" | "newest" | "rating";

// ============================================
// CATEGORY STRUCTURE
// ============================================

export const categories: Category[] = [
  {
    id: "girls",
    name: "Girls",
    slug: "girls",
    displayOrder: 1,
    subcategories: [
      { id: "girls-trousers", name: "Trousers", slug: "trousers", categoryId: "girls", displayOrder: 1 },
      { id: "girls-skirts", name: "Skirts", slug: "skirts", categoryId: "girls", displayOrder: 2 },
      { id: "girls-shirts", name: "Shirts & Blouses", slug: "shirts-blouses", categoryId: "girls", displayOrder: 3 },
      { id: "girls-knitwear", name: "Knitwear", slug: "knitwear", categoryId: "girls", displayOrder: 4 },
      { id: "girls-dresses", name: "Dresses & Pinafores", slug: "dresses-pinafores", categoryId: "girls", displayOrder: 5 },
    ]
  },
  {
    id: "boys",
    name: "Boys",
    slug: "boys",
    displayOrder: 2,
    subcategories: [
      { id: "boys-trousers", name: "Trousers", slug: "trousers", categoryId: "boys", displayOrder: 1 },
      { id: "boys-shorts", name: "Shorts", slug: "shorts", categoryId: "boys", displayOrder: 2 },
      { id: "boys-shirts", name: "Shirts & Polo Shirts", slug: "shirts-polo", categoryId: "boys", displayOrder: 3 },
      { id: "boys-knitwear", name: "Knitwear", slug: "knitwear", categoryId: "boys", displayOrder: 4 },
      { id: "boys-blazers", name: "Blazers & Jackets", slug: "blazers-jackets", categoryId: "boys", displayOrder: 5 },
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    displayOrder: 3,
    subcategories: [
      { id: "accessories-ties", name: "Ties & Scarves", slug: "ties-scarves", categoryId: "accessories", displayOrder: 1 },
      { id: "accessories-bags", name: "Bags", slug: "bags", categoryId: "accessories", displayOrder: 2 },
      { id: "accessories-shoes", name: "Shoes", slug: "shoes", categoryId: "accessories", displayOrder: 3 },
      { id: "accessories-socks", name: "Socks & Tights", slug: "socks-tights", categoryId: "accessories", displayOrder: 4 },
    ]
  },
  {
    id: "pe-kit",
    name: "PE Kit",
    slug: "pe-kit",
    displayOrder: 4,
    subcategories: [
      { id: "pe-tops", name: "Sports Tops", slug: "sports-tops", categoryId: "pe-kit", displayOrder: 1 },
      { id: "pe-bottoms", name: "Sports Bottoms", slug: "sports-bottoms", categoryId: "pe-kit", displayOrder: 2 },
      { id: "pe-footwear", name: "Sports Footwear", slug: "sports-footwear", categoryId: "pe-kit", displayOrder: 3 },
    ]
  },
  {
    id: "clearance",
    name: "Clearance",
    slug: "clearance",
    displayOrder: 5,
    subcategories: [
      { id: "clearance-all", name: "All Clearance", slug: "all", categoryId: "clearance", displayOrder: 1 },
    ]
  }
];

// ============================================
// PRODUCT DATA
// ============================================

export const products: Product[] = [
  // BOYS PRODUCTS
  {
    id: "boys-1",
    slug: "premium-boys-slim-leg-trousers-navy",
    product_name: "Premium Senior Boys' Slim Leg Stain Resistant School Trousers (7-16+ Years)",
    price: "£34.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/tlt_1-V3.jpg",
      gallery: ["/uniform/boys/tlt_1-V3.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "trousers",
    gender: "boys",
    description: "Premium quality school trousers with stain-resistant finish. Designed for durability and comfort with a modern slim leg fit. Perfect for active school days.",
    features: [
      "Stain-resistant fabric technology",
      "Adjustable waistband for perfect fit",
      "Reinforced knees for extra durability",
      "Machine washable at 40°C",
      "Crease-resistant finish"
    ],
    sizes: {
      available: ["7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "trousers-boys"
    },
    colors: [
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Black", code: "#111111", inStock: true },
      { name: "Grey", code: "#7f8c8d", inStock: true }
    ],
    materials: ["65% Polyester", "35% Cotton"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Iron on medium heat",
      "Do not dry clean"
    ],
    rating: 4.7,
    reviews: 156,
    tags: ["trousers", "boys", "school", "uniform", "stain-resistant", "navy", "slim-leg"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "boys-2",
    slug: "premium-unisex-crew-neck-sweatshirt",
    product_name: "Premium Unisex Crew Neck School Sweatshirt (1-16+ Years)",
    price: "£22.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/cjs_1-V3.jpg",
      gallery: ["/uniform/boys/cjs_1-V3.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "knitwear",
    gender: "unisex",
    description: "Soft and comfortable crew neck sweatshirt suitable for both boys and girls. Made from premium cotton-rich fabric for warmth and durability.",
    features: [
      "Soft cotton-rich fabric",
      "Classic crew neck design",
      "Ribbed cuffs and hem",
      "Machine washable",
      "Available in multiple colors"
    ],
    sizes: {
      available: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "knitwear"
    },
    colors: [
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Royal Blue", code: "#0066cc", inStock: true },
      { name: "Burgundy", code: "#800020", inStock: true },
      { name: "Bottle Green", code: "#006a4e", inStock: false }
    ],
    materials: ["80% Cotton", "20% Polyester"],
    careInstructions: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron if needed",
      "Do not dry clean"
    ],
    rating: 4.8,
    reviews: 203,
    tags: ["sweatshirt", "knitwear", "boys", "girls", "unisex", "crew-neck", "navy"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "boys-3",
    slug: "premium-polyester-boys-trousers-black",
    product_name: "Premium 100% Polyester Senior Boys' Stain Resistant School Trousers (6-16+ Years)",
    price: "£36.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/tpt-blk_1-V3.jpg",
      gallery: ["/uniform/boys/tpt-blk_1-V3.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "trousers",
    gender: "boys",
    description: "100% polyester school trousers with advanced stain-resistant technology. Easy-care fabric that maintains its shape and color wash after wash.",
    features: [
      "100% polyester for easy care",
      "Advanced stain protection",
      "Adjustable waist",
      "Flat front design",
      "Quick-dry fabric"
    ],
    sizes: {
      available: ["7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "trousers-boys"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Charcoal", code: "#36454f", inStock: true }
    ],
    materials: ["100% Polyester"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron if needed",
      "Do not dry clean"
    ],
    rating: 4.6,
    reviews: 142,
    tags: ["trousers", "boys", "school", "uniform", "stain-resistant", "black", "polyester"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "boys-4",
    slug: "premium-boys-plus-fit-trousers",
    product_name: "Premium Senior Boys' Plus Fit Stain Resistant School Trousers (11-16+ Years)",
    price: "£37.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/tsf_1-V2.jpg",
      gallery: ["/uniform/boys/tsf_1-V2.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "trousers",
    gender: "boys",
    description: "Specially designed plus fit trousers offering extra room and comfort without compromising on style. Features stain-resistant fabric and reinforced seams.",
    features: [
      "Plus fit for extra comfort",
      "Stain-resistant technology",
      "Reinforced seams",
      "Adjustable waist",
      "Triple-stitched for durability"
    ],
    sizes: {
      available: ["11-12Y", "13-14Y", "15-16Y", "XL", "XXL"],
      sizeGuide: "trousers-boys-plus"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Navy", code: "#001f3f", inStock: true }
    ],
    materials: ["65% Polyester", "35% Cotton"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Iron on medium heat",
      "Do not dry clean"
    ],
    rating: 4.5,
    reviews: 89,
    tags: ["trousers", "boys", "school", "uniform", "plus-fit", "stain-resistant", "navy"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "boys-5",
    slug: "premium-junior-boys-trousers",
    product_name: "Premium Junior Boys' Stain Resistant School Trousers (2-13 Years)",
    price: "£29.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/cfj_1-V3.jpg",
      gallery: ["/uniform/boys/cfj_1-V3.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "trousers",
    gender: "boys",
    description: "Ideal for younger boys, these junior trousers feature an elasticated waist for easy dressing and maximum comfort throughout the school day.",
    features: [
      "Elasticated waistband",
      "Stain-resistant finish",
      "Reinforced knees",
      "Easy-care fabric",
      "Comfortable fit"
    ],
    sizes: {
      available: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "12-13Y"],
      sizeGuide: "trousers-boys-junior"
    },
    colors: [
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Black", code: "#111111", inStock: true },
      { name: "Grey", code: "#7f8c8d", inStock: true }
    ],
    materials: ["65% Polyester", "35% Cotton"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Iron on medium heat",
      "Do not dry clean"
    ],
    rating: 4.8,
    reviews: 167,
    tags: ["trousers", "boys", "junior", "school", "uniform", "stain-resistant", "elasticated"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "boys-6",
    slug: "premium-unisex-v-neck-sweatshirt",
    product_name: "Premium Unisex V-Neck Soft & Durable School Sweatshirt (1-16+ Years)",
    price: "£24.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/boys/cjv_1-V3.jpg",
      gallery: ["/uniform/boys/cjv_1-V3.jpg"],
      lifestyle: []
    },
    category: "boys",
    subcategory: "knitwear",
    gender: "unisex",
    description: "Versatile V-neck sweatshirt perfect for layering over shirts. Soft, durable fabric that maintains its shape and color after repeated washing.",
    features: [
      "Classic V-neck design",
      "Soft acrylic fabric",
      "Ribbed cuffs and hem",
      "Machine washable",
      "Color-fast fabric"
    ],
    sizes: {
      available: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "knitwear"
    },
    colors: [
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Royal Blue", code: "#0066cc", inStock: true },
      { name: "Burgundy", code: "#800020", inStock: true },
      { name: "Black", code: "#111111", inStock: true }
    ],
    materials: ["80% Cotton", "20% Polyester"],
    careInstructions: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron if needed",
      "Do not dry clean"
    ],
    rating: 4.9,
    reviews: 218,
    tags: ["sweatshirt", "knitwear", "boys", "girls", "unisex", "v-neck", "navy"],
    inStock: true,
    isClearance: false,
    isNewArrival: true
  },

  // GIRLS PRODUCTS
  {
    id: "girls-1",
    slug: "premium-girls-comfort-stretch-trousers",
    product_name: "Premium Senior Girls' Comfort Stretch School Trousers (11-16+ Years)",
    price: "£39.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/gtn_1-v1.jpg",
      gallery: ["/uniform/girls/gtn_1-v1.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "trousers",
    gender: "girls",
    description: "Comfortable stretch trousers designed specifically for senior girls. Features a flattering fit with added stretch for ease of movement throughout the school day.",
    features: [
      "Comfort stretch fabric",
      "Tailored fit",
      "Stain-resistant finish",
      "Adjustable waist",
      "Machine washable"
    ],
    sizes: {
      available: ["11-12Y", "13-14Y", "15-16Y", "S", "M", "L"],
      sizeGuide: "trousers-girls"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Charcoal", code: "#36454f", inStock: false }
    ],
    materials: ["62% Polyester", "33% Viscose", "5% Elastane"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron",
      "Do not dry clean"
    ],
    rating: 4.8,
    reviews: 194,
    tags: ["trousers", "girls", "school", "uniform", "stretch", "comfort", "black"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "girls-2",
    slug: "premium-girls-tailored-trousers",
    product_name: "Premium Senior Girls Tailored School Trousers (11-16+ Years)",
    price: "£38.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/gtt-blk_1-V3.jpg",
      gallery: ["/uniform/girls/gtt-blk_1-V3.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "trousers",
    gender: "girls",
    description: "Smart tailored trousers with a professional finish. Perfect for senior students, offering a sophisticated look with practical features.",
    features: [
      "Tailored fit",
      "Flat front design",
      "Side zip fastening",
      "Stain-resistant",
      "Crease-resistant"
    ],
    sizes: {
      available: ["11-12Y", "13-14Y", "15-16Y", "S", "M", "L"],
      sizeGuide: "trousers-girls"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Charcoal", code: "#36454f", inStock: true }
    ],
    materials: ["65% Polyester", "35% Viscose"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Iron on medium heat",
      "Can be dry cleaned"
    ],
    rating: 4.7,
    reviews: 156,
    tags: ["trousers", "girls", "school", "uniform", "tailored", "black"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "girls-3",
    slug: "premium-girls-pleated-skirt",
    product_name: "Premium Senior Permanent Pleated Stain Resistant School Skirt (10-16+ Years)",
    price: "£42.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/gpb-blk_1-v4.jpg",
      gallery: ["/uniform/girls/gpb-blk_1-v4.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "skirts",
    gender: "girls",
    description: "Classic pleated school skirt with permanent pleats that won't wash out. Features advanced stain-resistant technology and durable construction.",
    features: [
      "Permanent pleats",
      "Stain-resistant fabric",
      "Adjustable waistband",
      "Knee-length design",
      "Machine washable"
    ],
    sizes: {
      available: ["10-11Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "skirts"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Grey", code: "#7f8c8d", inStock: true }
    ],
    materials: ["65% Polyester", "35% Viscose"],
    careInstructions: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron only",
      "Do not dry clean"
    ],
    rating: 4.9,
    reviews: 287,
    tags: ["skirt", "girls", "school", "uniform", "pleated", "stain-resistant", "black"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "girls-4",
    slug: "premium-girls-v-neck-jumper",
    product_name: "Premium Girls' Fit V-Neck 100% Cotton School Jumper (3-16+ Years)",
    price: "£25.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/cgv-mgy_1-V4.jpg",
      gallery: ["/uniform/girls/cgv-mgy_1-V4.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "knitwear",
    gender: "girls",
    description: "Soft 100% cotton jumper with a flattering girls' fit. Classic V-neck design perfect for layering over school shirts.",
    features: [
      "100% cotton comfort",
      "Girls' tailored fit",
      "Classic V-neck",
      "Ribbed cuffs and hem",
      "Machine washable"
    ],
    sizes: {
      available: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "knitwear"
    },
    colors: [
      { name: "Grey", code: "#7f8c8d", inStock: true },
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Burgundy", code: "#800020", inStock: true }
    ],
    materials: ["100% Cotton"],
    careInstructions: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron",
      "Do not dry clean"
    ],
    rating: 4.8,
    reviews: 201,
    tags: ["jumper", "knitwear", "girls", "school", "uniform", "v-neck", "cotton", "grey"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "girls-5",
    slug: "premium-girls-crew-neck-sweatshirt",
    product_name: "Premium Unisex Crew Neck School Sweatshirt (1-16+ Years)",
    price: "£22.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/cjs_1-V3.jpg",
      gallery: ["/uniform/girls/cjs_1-V3.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "knitwear",
    gender: "unisex",
    description: "Versatile crew neck sweatshirt suitable for all ages. Soft cotton-rich fabric provides warmth and comfort throughout the school day.",
    features: [
      "Soft cotton-rich fabric",
      "Classic crew neck",
      "Unisex design",
      "Machine washable",
      "Color-fast"
    ],
    sizes: {
      available: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y", "13-14Y", "15-16Y"],
      sizeGuide: "knitwear"
    },
    colors: [
      { name: "Navy", code: "#001f3f", inStock: true },
      { name: "Royal Blue", code: "#0066cc", inStock: true },
      { name: "Burgundy", code: "#800020", inStock: true }
    ],
    materials: ["80% Cotton", "20% Polyester"],
    careInstructions: [
      "Machine wash at 30°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron if needed",
      "Do not dry clean"
    ],
    rating: 4.8,
    reviews: 203,
    tags: ["sweatshirt", "knitwear", "girls", "boys", "unisex", "crew-neck", "navy"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
  {
    id: "girls-6",
    slug: "premium-girls-straight-skirt",
    product_name: "Premium Senior Straight Style Stain Resistant School Skirt (11-16+ Years)",
    price: "£41.99",
    originalPrice: undefined,
    images: {
      main: "/uniform/girls/gsa_1-V3.jpg",
      gallery: ["/uniform/girls/gsa_1-V3.jpg"],
      lifestyle: []
    },
    category: "girls",
    subcategory: "skirts",
    gender: "girls",
    description: "Modern straight-style skirt with a sleek silhouette. Features stain-resistant technology and comfortable stretch fabric for all-day wear.",
    features: [
      "Straight-style fit",
      "Stain-resistant finish",
      "Stretch fabric",
      "Side zip fastening",
      "Machine washable"
    ],
    sizes: {
      available: ["11-12Y", "13-14Y", "15-16Y", "S", "M", "L"],
      sizeGuide: "skirts"
    },
    colors: [
      { name: "Black", code: "#111111", inStock: true },
      { name: "Navy", code: "#001f3f", inStock: true }
    ],
    materials: ["62% Polyester", "33% Viscose", "5% Elastane"],
    careInstructions: [
      "Machine wash at 40°C",
      "Do not bleach",
      "Tumble dry on low",
      "Cool iron",
      "Do not dry clean"
    ],
    rating: 4.7,
    reviews: 173,
    tags: ["skirt", "girls", "school", "uniform", "straight-style", "stain-resistant", "black"],
    inStock: true,
    isClearance: false,
    isNewArrival: false
  },
];

// ============================================
// LEGACY COMPATIBILITY (for existing code)
// ============================================

// Keep old format for backward compatibility
export const uniformData = [
  {
    category: "Boys School Uniform",
    items: products.filter(p => p.category === "boys").map(p => ({
      id: p.id,
      product_name: p.product_name,
      price: p.price,
      image_url: p.images.main,
      rating: p.rating,
      reviews: p.reviews
    }))
  },
  {
    category: "Girls School Uniform",
    items: products.filter(p => p.category === "girls").map(p => ({
      id: p.id,
      product_name: p.product_name,
      price: p.price,
      image_url: p.images.main,
      rating: p.rating,
      reviews: p.reviews
    }))
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getProductsBySubcategory(categorySlug: string, subcategorySlug: string): Product[] {
  return products.filter(p =>
    p.category === categorySlug &&
    p.subcategory === subcategorySlug
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSubcategoryById(subcategoryId: string): Subcategory | undefined {
  for (const category of categories) {
    const subcategory = category.subcategories.find(s => s.id === subcategoryId);
    if (subcategory) return subcategory;
  }
  return undefined;
}

// Legacy function for backward compatibility
export function getSampleProducts(count: number = 6) {
  return products.slice(0, count);
}

// Legacy function for backward compatibility
export function getProductsByCategory_legacy(categoryName: string) {
  const category = uniformData.find(c => c.category === categoryName);
  return category?.items || [];
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.product_name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.subcategory.toLowerCase().includes(lowerQuery)
  );
}

export function filterProducts(filters: ProductFilters): Product[] {
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  if (filters.subcategory) {
    filtered = filtered.filter(p => p.subcategory === filters.subcategory);
  }

  if (filters.gender) {
    filtered = filtered.filter(p => p.gender === filters.gender || p.gender === "unisex");
  }

  if (filters.sizes && filters.sizes.length > 0) {
    filtered = filtered.filter(p =>
      filters.sizes!.some(size => p.sizes.available.includes(size))
    );
  }

  if (filters.colors && filters.colors.length > 0) {
    filtered = filtered.filter(p =>
      filters.colors!.some(color =>
        p.colors.some(c => c.name.toLowerCase() === color.toLowerCase() && c.inStock)
      )
    );
  }

  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    filtered = filtered.filter(p => {
      const price = parseFloat(p.price.replace('£', ''));
      const min = filters.priceMin ?? 0;
      const max = filters.priceMax ?? Infinity;
      return price >= min && price <= max;
    });
  }

  if (filters.inStock !== undefined) {
    filtered = filtered.filter(p => p.inStock === filters.inStock);
  }

  if (filters.isClearance !== undefined) {
    filtered = filtered.filter(p => p.isClearance === filters.isClearance);
  }

  if (filters.isNewArrival !== undefined) {
    filtered = filtered.filter(p => p.isNewArrival === filters.isNewArrival);
  }

  if (filters.search) {
    const searchResults = searchProducts(filters.search);
    filtered = filtered.filter(p => searchResults.some(sr => sr.id === p.id));
  }

  return filtered;
}

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case "popular":
      return sorted.sort((a, b) => b.reviews - a.reviews);

    case "price-asc":
      return sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('£', ''));
        const priceB = parseFloat(b.price.replace('£', ''));
        return priceA - priceB;
      });

    case "price-desc":
      return sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('£', ''));
        const priceB = parseFloat(b.price.replace('£', ''));
        return priceB - priceA;
      });

    case "newest":
      return sorted.sort((a, b) => {
        if (a.isNewArrival && !b.isNewArrival) return -1;
        if (!a.isNewArrival && b.isNewArrival) return 1;
        return 0;
      });

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    default:
      return sorted;
  }
}

// Get all unique sizes across all products
export function getAllAvailableSizes(): string[] {
  const sizes = new Set<string>();
  products.forEach(p => {
    p.sizes.available.forEach(size => sizes.add(size));
  });
  return Array.from(sizes).sort();
}

// Get all unique colors across all products
export function getAllAvailableColors(): { name: string; code: string }[] {
  const colorsMap = new Map<string, string>();
  products.forEach(p => {
    p.colors.forEach(color => {
      if (!colorsMap.has(color.name)) {
        colorsMap.set(color.name, color.code);
      }
    });
  });
  return Array.from(colorsMap.entries()).map(([name, code]) => ({ name, code }));
}

// Get price range for all products
export function getPriceRange(): { min: number; max: number } {
  const prices = products.map(p => parseFloat(p.price.replace('£', '')));
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}
