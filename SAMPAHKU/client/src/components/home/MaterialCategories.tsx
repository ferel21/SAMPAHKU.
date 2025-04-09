import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Package, GlassWater, Hammer, TreePine, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { type Material } from "@shared/schema";

const iconMap: Record<string, React.ReactNode> = {
  "package": <Package className="h-16 w-16 text-white opacity-75" />,
  "cup": <GlassWater className="h-16 w-16 text-white opacity-75" />,
  "hammer": <Hammer className="h-16 w-16 text-neutral-800 opacity-75" />,
  "tree": <TreePine className="h-16 w-16 text-white opacity-75" />
};

const colorMap: Record<string, string> = {
  "primary": "bg-primary",
  "secondary": "bg-green-600",
  "accent": "bg-yellow-500",
  "primary-light": "bg-green-500"
};

export default function MaterialCategories() {
  const { data: materials, isLoading, error } = useQuery<Material[]>({
    queryKey: ['/api/materials'],
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="materials" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Kategori Material</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Kami menerima berbagai jenis barang bekas untuk didaur ulang dan dijual ke pabrik yang membutuhkan
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading && 
            Array(4).fill(0).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </CardContent>
              </Card>
            ))
          }
          
          {!isLoading && !error && materials?.map((material) => (
            <Card 
              key={material.id} 
              className="overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`h-40 ${colorMap[material.color] || 'bg-primary'} flex items-center justify-center`}>
                {iconMap[material.icon] || <Package className="h-16 w-16 text-white opacity-75" />}
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{material.name}</h3>
                <p className="text-neutral-600 mb-4">{material.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">{material.priceRange}</span>
                  <button 
                    onClick={() => scrollToSection("sell-material")}
                    className="text-primary hover:text-primary/90 font-medium flex items-center"
                  >
                    Jual <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#all-materials" 
            className="inline-flex items-center text-primary hover:text-primary/90 font-medium"
          >
            Lihat Semua Kategori <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
