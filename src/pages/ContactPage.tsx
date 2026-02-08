
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using emailjs - configure your service/template IDs
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Bericht verzonden",
        description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Er ging iets mis",
        description: "Het bericht kon niet worden verzonden. Probeer het later opnieuw of neem direct contact op via e-mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Neem contact op</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u interesse in onze diensten of wilt u meer informatie? 
            Neem dan contact met ons op via onderstaande gegevens.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Contactgegevens</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <address className="not-italic text-muted-foreground">
                      Panamalaan 5f<br />
                      1019 AS Amsterdam
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Telefoon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+31610097454" className="hover:text-primary">+31 (0)6 1009 7454</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;info&#64;dim.amsterdam" className="hover:text-primary">
                        info&#64;dim.amsterdam
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Stuur een bericht</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Uw naam"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="uw@email.nl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Waar kunnen we u mee helpen?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
