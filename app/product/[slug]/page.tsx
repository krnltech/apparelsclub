import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getProductBySlug, getAllProducts, getProductsByCategory } from "@/lib/products";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductDetails } from "@/components/product-details";
import { ProductCard } from "@/components/product-card";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.product_name} | ApparelsClub`,
    description: product.description,
    openGraph: {
      images: [product.images.main],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-primary">Shop</a>
            <span className="mx-2">/</span>
            <a href={`/shop?category=${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.product_name}</span>
          </nav>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <ProductImageGallery product={product} />

            {/* Product Info */}
            <ProductInfo product={product} />
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <ProductDetails product={product} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
