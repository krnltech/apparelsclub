export const uniformData = [
  {
    "category": "Boys School Uniform",
    "items": [
      {
        "id": "boys-1",
        "product_name": "Premium Senior Boys' Slim Leg Stain Resistant School Trousers (7-16+ Years)",
        "price": "£34.99",
        "image_url": "/uniform/boys/tlt_1-V3.jpg",
        "rating": 4.7,
        "reviews": 156
      },
      {
        "id": "boys-2",
        "product_name": "Premium Unisex Crew Neck School Sweatshirt (1-16+ Years)",
        "price": "£22.99",
        "image_url": "/uniform/boys/cjs_1-V3.jpg",
        "rating": 4.8,
        "reviews": 203
      },
      {
        "id": "boys-3",
        "product_name": "Premium 100% Polyester Senior Boys' Stain Resistant School Trousers (6-16+ Years)",
        "price": "£36.99",
        "image_url": "/uniform/boys/tpt-blk_1-V3.jpg",
        "rating": 4.6,
        "reviews": 142
      },
      {
        "id": "boys-4",
        "product_name": "Premium Senior Boys' Plus Fit Stain Resistant School Trousers (11-16+ Years)",
        "price": "£37.99",
        "image_url": "/uniform/boys/tsf_1-V2.jpg",
        "rating": 4.5,
        "reviews": 89
      },
      {
        "id": "boys-5",
        "product_name": "Premium Junior Boys' Stain Resistant School Trousers (2-13 Years)",
        "price": "£29.99",
        "image_url": "/uniform/boys/cfj_1-V3.jpg",
        "rating": 4.8,
        "reviews": 167
      },
      {
        "id": "boys-6",
        "product_name": "Premium Unisex V-Neck Soft & Durable School Sweatshirt (1-16+ Years)",
        "price": "£24.99",
        "image_url": "/uniform/boys/cjv_1-V3.jpg",
        "rating": 4.9,
        "reviews": 218
      }
    ]
  },
  {
    "category": "Girls School Uniform",
    "items": [
      {
        "id": "girls-1",
        "product_name": "Premium Senior Girls' Comfort Stretch School Trousers (11-16+ Years)",
        "price": "£39.99",
        "image_url": "/uniform/girls/gtn_1-v1.jpg",
        "rating": 4.8,
        "reviews": 194
      },
      {
        "id": "girls-2",
        "product_name": "Premium Senior Girls Tailored School Trousers (11-16+ Years)",
        "price": "£38.99",
        "image_url": "/uniform/girls/gtt-blk_1-V3.jpg",
        "rating": 4.7,
        "reviews": 156
      },
      {
        "id": "girls-3",
        "product_name": "Premium Senior Permanent Pleated Stain Resistant School Skirt (10-16+ Years)",
        "price": "£42.99",
        "image_url": "/uniform/girls/gpb-blk_1-v4.jpg",
        "rating": 4.9,
        "reviews": 287
      },
      {
        "id": "girls-4",
        "product_name": "Premium Girls' Fit V-Neck 100% Cotton School Jumper (3-16+ Years)",
        "price": "£25.99",
        "image_url": "/uniform/girls/cgv-mgy_1-V4.jpg",
        "rating": 4.8,
        "reviews": 201
      },
      {
        "id": "girls-5",
        "product_name": "Premium Unisex Crew Neck School Sweatshirt (1-16+ Years)",
        "price": "£22.99",
        "image_url": "/uniform/girls/cjs_1-V3.jpg",
        "rating": 4.8,
        "reviews": 203
      },
      {
        "id": "girls-6",
        "product_name": "Premium Senior Straight Style Stain Resistant School Skirt (11-16+ Years)",
        "price": "£41.99",
        "image_url": "/uniform/girls/gsa_1-V3.jpg",
        "rating": 4.7,
        "reviews": 173
      }
    ]
  }
];

export function getSampleProducts(count: number = 6) {
  const allProducts: any[] = [];
  uniformData.forEach(category => {
    allProducts.push(...category.items);
  });
  return allProducts.slice(0, count);
}

export function getProductsByCategory(categoryName: string) {
  const category = uniformData.find(c => c.category === categoryName);
  return category?.items || [];
}
