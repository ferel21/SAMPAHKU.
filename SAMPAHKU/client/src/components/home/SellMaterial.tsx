import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  name: z.string().min(2, "Nama harus diisi").max(100),
  phone: z.string().min(10, "Nomor telepon harus diisi dengan benar").max(15),
  email: z.string().email("Email tidak valid").optional().or(z.literal("")),
  address: z.string().min(5, "Alamat harus diisi dengan benar"),
  materialType: z.string().min(1, "Pilih jenis material"),
  weight: z.coerce.number().positive("Berat harus lebih dari 0"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SellMaterial() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      materialType: "",
      weight: undefined,
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/listings", values);
    },
    onSuccess: () => {
      toast({
        title: "Penawaran Terkirim!",
        description: "Kami akan menghubungi Anda segera.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Gagal mengirim penawaran",
        description: error.message || "Silakan coba lagi nanti",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    mutation.mutate(values);
  }

  return (
    <section id="sell-material" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Jual Material Anda</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Isi formulir di bawah ini untuk menjual barang bekas Anda. Kami akan menghubungi Anda segera!
          </p>
        </div>
        
        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          <CardContent className="p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon</FormLabel>
                        <FormControl>
                          <Input placeholder="08xxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (opsional)</FormLabel>
                      <FormControl>
                        <Input placeholder="email@anda.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat</FormLabel>
                      <FormControl>
                        <Input placeholder="Alamat lengkap Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="materialType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Material</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jenis material" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="plastik">Plastik</SelectItem>
                          <SelectItem value="kaca">Kaca</SelectItem>
                          <SelectItem value="logam">Logam</SelectItem>
                          <SelectItem value="kayu">Kayu</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Perkiraan Berat (kg)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="Contoh: 10" 
                          min={1}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deskripsi Material (opsional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Jelaskan secara singkat kondisi dan detail material yang akan dijual" 
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
                  {isSubmitting ? "Mengirim..." : "Kirim Penawaran"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
