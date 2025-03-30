
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return <PageLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Neem contact op</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u interesse in onze diensten of wilt u meer informatie? 
            Neem dan contact met ons op via onderstaande gegevens.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
                      <a href="mailto:info@dim.amsterdam" className="hover:text-primary">
                        info@dim.amsterdam
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>;
};

export default ContactPage;
