import { ContentPage } from "../../components/content-page";

export default function ReturnsPage() {
  return (
    <ContentPage
      title="Returns policy"
      description="Eligibility, timelines, and steps for returning products."
      items={["30-day returns", "Unopened products", "Refund timeline", "Support"]}
    />
  );
}
