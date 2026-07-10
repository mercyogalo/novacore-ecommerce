import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { getCategories } from "../../lib/data";

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <main className="container py-10">
      <AdminPageHeader
        eyebrow="Catalog"
        title="Categories"
        description="Create, edit, and organize product categories."
        actions={<button className="btn-primary">Add category</button>}
      />
      <section className="mt-8">
        <DataTable headers={["ID", "Name", "Slug", "Products"]} rows={categories.map((cat) => [cat.id, cat.name, cat.slug, cat.products])} />
      </section>
    </main>
  );
}
