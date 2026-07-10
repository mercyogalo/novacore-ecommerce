import { ContentPage } from "../../components/content-page";

export default function ShippingPolicyPage() {
  return (
    <ContentPage
      title="Shipping policy"
      description="Delivery windows, rates, and international shipping information."
      items={["Standard shipping", "Express delivery", "Tracking", "International"]}
    />
  );
}
