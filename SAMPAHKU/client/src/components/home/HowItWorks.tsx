import { Button } from "@/components/ui/button";
import { Camera, Tag, Truck } from "lucide-react";

const steps = [
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    number: 1,
    title: "Foto & Unggah",
    description: "Ambil foto barang bekas Anda dan unggah melalui aplikasi atau website kami dengan mengisi detail yang diperlukan."
  },
  {
    icon: <Tag className="h-8 w-8 text-primary" />,
    number: 2,
    title: "Dapatkan Tawaran",
    description: "Pabrik mitra kami akan memberi penawaran untuk material yang Anda jual. Pilih tawaran terbaik untuk Anda."
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    number: 3,
    title: "Kirim & Terima Bayaran",
    description: "Kirim material atau minta penjemputan. Setelah material diterima, pembayaran akan langsung ditransfer ke rekening Anda."
  }
];

export default function HowItWorks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Cara Kerja</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Proses sederhana untuk mengubah barang bekas Anda menjadi peluang ekonomi dan melindungi lingkungan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-5xl">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 relative">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-neutral-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto"
            onClick={() => scrollToSection("sell-material")}
          >
            Mulai Jual Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
