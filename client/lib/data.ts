import banners from "../data/banners.json";
import blogs from "../data/blogs.json";
import categories from "../data/categories.json";
import faq from "../data/faq.json";
import orders from "../data/orders.json";
import products from "../data/products.json";
import reviews from "../data/reviews.json";
import testimonials from "../data/testimonials.json";
import type { Banner, BlogPost, Category, FaqItem, Order, Product, Review, Testimonial } from "../types";

export function getProducts(): Product[] {
  return products as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((product) => product.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return getProducts().filter((product) => product.categorySlug === slug);
}

export function getCategories(): Category[] {
  return categories as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getBanners(): Banner[] {
  return banners as Banner[];
}

export function getTestimonials(): Testimonial[] {
  return testimonials as Testimonial[];
}

export function getFaq(): FaqItem[] {
  return faq as FaqItem[];
}

export function getBlogs(): BlogPost[] {
  return blogs as BlogPost[];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getBlogs().find((post) => post.slug === slug);
}

export function getReviews(productId?: string): Review[] {
  const all = reviews as Review[];
  return productId ? all.filter((review) => review.productId === productId) : all;
}

export function getOrders(): Order[] {
  return orders as Order[];
}

export function searchProducts(query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return getProducts();

  return getProducts().filter((product) => {
    return (
      product.name.toLowerCase().includes(normalized) ||
      product.category.toLowerCase().includes(normalized) ||
      product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(normalized))
    );
  });
}
