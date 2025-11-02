import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
