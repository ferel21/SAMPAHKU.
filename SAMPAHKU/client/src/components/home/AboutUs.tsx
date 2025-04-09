import { Button } from "@/components/ui/button";
import { Check, Recycle, Users, TrendingUp, Heart } from "lucide-react";

const benefits = [
  "Mengurangi pembuangan sampah di tempat pembuangan akhir",
  "Menciptakan nilai ekonomi dari barang bekas",
  "Mendukung ekonomi sirkular yang berkelanjutan",
  "Memberdayakan masyarakat dengan penghasilan tambahan"
];

const values = [
  {
    icon: <Recycle className="h-6 w-6 text-primary" />,
    title: "Keberlanjutan",
    description: "Kami berkomitmen untuk praktik ramah lingkungan dalam setiap aspek operasional."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Kemitraan",
    description: "Kami percaya membangun hubungan jangka panjang dengan semua pemangku kepentingan."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Inovasi",
    description: "Kami terus mencari solusi baru untuk masalah pengelolaan sampah."
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Sosial",
    description: "Kami peduli terhadap dampak positif bagi masyarakat dan lingkungan."
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Tentang SAMPAHKU</h2>
            <p className="text-neutral-600 mb-4">
              SAMPAHKU didirikan dengan misi untuk menciptakan solusi inovatif dalam mengatasi masalah sampah di Indonesia. Kami menghubungkan penjual material bekas dengan pabrik yang membutuhkan bahan baku daur ulang.
            </p>
            <p className="text-neutral-600 mb-4">
              Dengan platform kami, kami bertujuan untuk:
            </p>
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80&w=600&h=500" 
                alt="Tim SAMPAHKU bekerja memilah material" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg shadow-xl overflow-hidden hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=300&h=200" 
                alt="Tim SAMPAHKU bekerja dengan masyarakat" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-primary/20 rounded-full blur-xl z-0"></div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-8 text-center">Nilai-Nilai SAMPAHKU</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
