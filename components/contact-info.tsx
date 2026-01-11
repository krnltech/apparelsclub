import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-6">
          Our team is ready to assist you with your uniform needs. Feel free to
          reach out through any of the following channels.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Email */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a
                href="mailto:contact@apparelsclub.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                contact@apparelsclub.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <div className="space-y-1">
                <a
                  href="tel:+447852189841"
                  className="block text-muted-foreground hover:text-primary transition"
                >
                  07852 189841
                </a>
                <a
                  href="tel:+447429905601"
                  className="block text-muted-foreground hover:text-primary transition"
                >
                  07429 905601
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Address</h3>
              <address className="text-muted-foreground not-italic">
                Flat 3, Clubhouse Apartments
                <br />
                34 Stainsby Road
                <br />
                London, E14 6JR
                <br />
                United Kingdom
              </address>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
