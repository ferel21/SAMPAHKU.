import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus diisi").max(100),
  email: z.string().email("Email tidak valid"),
  subject: z.string().min(1, "Pilih subjek"),
  message: z.string().min(10, "Pesan harus diisi minimum 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <MapPin className="text-xl text-yellow-500 mr-4 mt-1 flex-shrink-0" />,
    title: "Alamat",
    details: ["Jl. Daur Ulang No. 123, Jakarta Pusat, 10110"]
  },
  {
    icon: <Phone className="text-xl text-yellow-500 mr-4 mt-1 flex-shrink-0" />,
    title: "Telepon",
    details: ["+62 21 1234 5678"]
  },
  {
    icon: <Mail className="text-xl text-yellow-500 mr-4 mt-1 flex-shrink-0" />,
    title: "Email",
    details: ["info@sampahku.id"]
  },
  {
    icon: <Clock className="text-xl text-yellow-500 mr-4 mt-1 flex-shrink-0" />,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08.00 - 17.00", "Sabtu: 08.00 - 13.00"]
  }
];

const socialLinks = [
  { icon: <Facebook className="text-xl" />, href: "#" },
  { icon: <Instagram className="text-xl" />, href: "#" },
  { icon: <Twitter className="text-xl" />, href: "#" },
  { icon: <Linkedin className="text-xl" />, href: "#" }
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contacts", values);
    },
    onSuccess: () => {
      toast({
        title: "Pesan Terkirim!",
        description: "Kami akan menghubungi Anda segera.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Gagal mengirim pesan",
        description: error.message || "Silakan coba lagi nanti",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">Hubungi Kami</h2>
          <p className="text-neutral-100 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi kami!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@anda.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subjek</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih subjek" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="jual">Menjual Barang Bekas</SelectItem>
                          <SelectItem value="beli">Membeli Bahan Daur Ulang</SelectItem>
                          <SelectItem value="kerjasama">Kerja Sama</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tulis pesan Anda di sini..." 
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="text-white">
            <div className="mb-8">
              <h3 className="font-heading text-xl font-bold mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {item.icon}
                    <div>
                      <p className="font-medium">{item.title}</p>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-neutral-100">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
