import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export const metadata = {
  title: "Contact Us | ApparelsClub",
  description:
    "Get in touch with ApparelsClub for all your school uniform needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help you find
              the perfect school uniform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
