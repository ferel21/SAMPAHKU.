import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ubah Sampah Menjadi Rupiah
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-100">
              SAMPAHKU menghubungkan penjual barang bekas dengan pabrik yang membutuhkan bahan baku daur ulang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold px-6 py-3 h-auto"
                onClick={() => scrollToSection("sell-material")}
              >
                Jual Barang Bekas
              </Button>
              <Button 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white px-6 py-3 h-auto"
                onClick={() => scrollToSection("how-it-works")}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&h=500" 
              alt="Ilustrasi daur ulang sampah" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
