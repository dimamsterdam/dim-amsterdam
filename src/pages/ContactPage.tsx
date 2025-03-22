
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4" contentEditable>Neem contact op</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" contentEditable>
            Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op. 
            We helpen u graag verder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6" contentEditable>Contactgegevens</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium" contentEditable>Adres</h3>
                    <address className="not-italic text-muted-foreground" contentEditable>
                      Nieuwegracht 23<br />
                      3512 LC Utrecht
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium" contentEditable>Telefoon</h3>
                    <p className="text-muted-foreground" contentEditable>
                      <a href="tel:+31302304355" className="hover:text-primary">+31 (0)30 230 4355</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium" contentEditable>E-mail</h3>
                    <p className="text-muted-foreground" contentEditable>
                      <a href="mailto:info@dim.nl" className="hover:text-primary">info@dim.nl</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium" contentEditable>Openingstijden</h3>
                    <p className="text-muted-foreground" contentEditable>
                      Maandag - Vrijdag<br />
                      09:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form Card */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6" contentEditable>Stuur ons een bericht</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" contentEditable>Naam</Label>
                    <Input id="name" placeholder="Uw volledige naam" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" contentEditable>E-mail</Label>
                    <Input id="email" type="email" placeholder="Uw e-mailadres" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" contentEditable>Onderwerp</Label>
                  <Input id="subject" placeholder="Onderwerp van uw bericht" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" contentEditable>Bericht</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Schrijf hier uw bericht..." 
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  Verstuur bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Google Maps */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
          <GoogleMap />
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
