import { ContentPage } from "../../components/content-page";

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of service"
      description="The terms governing use of our website, products, and services."
      items={["Account usage", "Orders", "Liability", "Updates"]}
    />
  );
}
