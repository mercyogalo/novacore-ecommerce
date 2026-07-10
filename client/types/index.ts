export type Nullable<T> = T | null;

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images?: string[];
  category: string;
  categorySlug: string;
  skinType: string[];
  ingredients: string[];
  benefits?: string[];
  howToUse?: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  stock?: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  href: string;
}

export interface Review {
  id: string;
  productId: string;
  user: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  images: string[];
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  number: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
}
