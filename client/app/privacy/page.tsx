import { ContentPage } from "../../components/content-page";

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy policy"
      description="How we collect, use, and protect your personal information."
      items={["Data collection", "Cookies", "Your rights", "Contact"]}
    />
  );
}
