
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";

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
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        Panamalaan 5f<br />
                        1019 AS Amsterdam
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium" contentEditable>Telefoon</h3>
                      <p className="text-muted-foreground" contentEditable>
                        <a href="tel:+31610097454" className="hover:text-primary">+31 (0)6 1009 7454</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium" contentEditable>E-mail</h3>
                      <p className="text-muted-foreground" contentEditable>
                        <a 
                          href="mailto:info@dim.amsterdam" 
                          className="hover:text-primary"
                          onClick={(e) => {
                            window.location.href = "mailto:info@dim.amsterdam";
                            e.preventDefault();
                          }}
                        >
                          info@dim.amsterdam
                        </a>
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
          
          {/* Google Maps - Now in the right column */}
          <div className="lg:col-span-1 rounded-lg overflow-hidden shadow-lg h-full min-h-[300px]">
            <GoogleMap />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
