
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Naam moet minstens 2 karakters bevatten" }),
  email: z.string().email({ message: "Ongeldig e-mailadres" }),
  subject: z.string().min(2, { message: "Onderwerp is verplicht" }),
  message: z.string().min(10, { message: "Bericht moet minstens 10 karakters bevatten" }),
});

// Type for our form values
type FormValues = z.infer<typeof formSchema>;

// EmailJS credentials - replace with your own
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // You'll need to replace this
const EMAILJS_USER_ID = "YOUR_USER_ID"; // You'll need to replace this

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    try {
      // Prepare the template parameters to send to EmailJS
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Show success toast
      toast({
        title: "Bericht verzonden",
        description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
      });
      
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show error toast if submission fails
      toast({
        title: "Er is een fout opgetreden",
        description: "Uw bericht kon niet worden verzonden. Probeer het later opnieuw.",
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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel contentEditable>Naam</FormLabel>
                            <FormControl>
                              <Input placeholder="Uw volledige naam" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel contentEditable>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Uw e-mailadres" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel contentEditable>Onderwerp</FormLabel>
                          <FormControl>
                            <Input placeholder="Onderwerp van uw bericht" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel contentEditable>Bericht</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Schrijf hier uw bericht..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Bezig met verzenden..." : "Verstuur bericht"}
                    </Button>
                  </form>
                </Form>
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
