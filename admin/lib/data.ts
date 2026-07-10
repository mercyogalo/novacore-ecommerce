import metrics from "../data/metrics.json";
import orders from "../data/orders.json";
import customers from "../data/customers.json";
import products from "../data/products.json";
import categories from "../data/categories.json";

export function getMetrics() {
  return metrics;
}

export function getOrders() {
  return orders;
}

export function getCustomers() {
  return customers;
}

export function getProducts() {
  return products;
}

export function getCategories() {
  return categories;
}

export const lowStock = ["Golden Body Oil", "Cocoa Silk Body Cream", "Glow Ritual Gift Set"];

export const recentActivity = [
  "New order AURA-1004 received",
  "Product inventory updated for Golden Body Oil",
  "Review approved for Radiance Face Cream",
  "Banner Summer Glow Event published"
];
