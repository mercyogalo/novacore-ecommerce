import fs from "fs";
import path from "path";

const roots = [
  "/home/ogalo/novacore-ecommerce/client/public",
  "/home/ogalo/novacore-ecommerce/admin/public"
];

const palettes = [
  { bg: "#f7f2ec", fg: "#9c6b4b" },
  { bg: "#f1e6d9", fg: "#7a5238" },
  { bg: "#efe1d2", fg: "#6f5b50" },
  { bg: "#ffffff", fg: "#9c6b4b" }
];

function svg(label, palette, width = 800, height = 1000) {
  const { bg, fg } = palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <rect x="${width * 0.15}" y="${height * 0.2}" width="${width * 0.7}" height="${height * 0.55}" rx="28" fill="${fg}" opacity="0.12"/>
  <circle cx="${width * 0.5}" cy="${height * 0.38}" r="${width * 0.12}" fill="${fg}" opacity="0.18"/>
  <text x="${width / 2}" y="${height * 0.72}" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="${fg}">${label}</text>
</svg>`;
}

function writeImage(dir, name, label, palette, width, height) {
  const filePath = path.join(dir, name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, svg(label, palette, width, height));
}

for (const root of roots) {
  for (let i = 1; i <= 12; i++) {
    writeImage(path.join(root, "products"), `product-${i}.svg`, `Product ${i}`, palettes[i % palettes.length]);
  }

  const categories = [
    "Body Lotions",
    "Shea Butter",
    "Body Creams",
    "Face Creams",
    "Body Oils",
    "Hair Butter",
    "Lip Balms",
    "Black Soap",
    "Scrubs",
    "Gift Sets",
    "Accessories"
  ];

  categories.forEach((name, index) => {
    writeImage(path.join(root, "categories"), `category-${index + 1}.svg`, name, palettes[index % palettes.length], 900, 600);
  });

  for (let i = 1; i <= 4; i++) {
    writeImage(path.join(root, "hero"), `hero-${i}.svg`, `Hero ${i}`, palettes[i % palettes.length], 1400, 700);
    writeImage(path.join(root, "banners"), `banner-${i}.svg`, `Banner ${i}`, palettes[i % palettes.length], 1200, 400);
  }

  for (let i = 1; i <= 6; i++) {
    writeImage(path.join(root, "blog"), `blog-${i}.svg`, `Blog ${i}`, palettes[i % palettes.length], 900, 600);
    writeImage(path.join(root, "team"), `team-${i}.svg`, `Team ${i}`, palettes[i % palettes.length], 600, 600);
    writeImage(path.join(root, "reviews"), `review-${i}.svg`, `Review ${i}`, palettes[i % palettes.length], 400, 400);
    writeImage(path.join(root, "avatars"), `avatar-${i}.svg`, `User ${i}`, palettes[i % palettes.length], 200, 200);
    writeImage(path.join(root, "ingredients"), `ingredient-${i}.svg`, `Ingredient ${i}`, palettes[i % palettes.length], 500, 500);
  }

  writeImage(path.join(root, "logos"), "logo.svg", "AURA", palettes[0], 240, 80);
}

console.log("Placeholder images generated.");
