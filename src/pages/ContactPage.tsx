
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Geen externe formulierdienst: het bericht wordt opgesteld in het eigen e-mailprogramma van de bezoeker.
    const subject = `Bericht via dim.amsterdam van ${formData.name}`;
    const body = `${formData.message}\n\nNaam: ${formData.name}\nE-mail: ${formData.email}`;
    window.location.href = `mailto:info@dim.amsterdam?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({
      title: "Uw e-mailprogramma wordt geopend",
      description: "Verstuur het bericht vanuit uw e-mailprogramma. Opent er niets? Mail dan direct naar info@dim.amsterdam. Wij reageren binnen 2 werkdagen.",
    });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Neem contact op</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u interesse in onze diensten of wilt u meer informatie?
            Neem dan contact met ons op via onderstaande gegevens. Wij reageren binnen 2 werkdagen.
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

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Reactietermijn</h3>
                    <p className="text-muted-foreground">
                      Wij beantwoorden uw vraag binnen 2 werkdagen.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-sm text-muted-foreground">
                  De Investeringsmaatschappij B.V. · KvK 73734381 · CRKBO-geregistreerd
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Stuur een bericht</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Na het verzenden opent uw eigen e-mailprogramma met uw bericht. Wij bewaren via dit formulier geen gegevens op de website.
              </p>
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
                  {isSubmitting ? "Openen..." : "Verstuur bericht"}
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
