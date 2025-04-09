import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { type Factory } from "@shared/schema";

export default function FactoryPartners() {
  const { data: factories, isLoading, error } = useQuery<Factory[]>({
    queryKey: ['/api/factories'],
  });

  function generateInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  return (
    <section id="buyers" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Pabrik Mitra Kami</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Kami bekerja sama dengan pabrik-pabrik terpercaya yang siap membeli material daur ulang Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-5xl">
          {isLoading &&
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-neutral-100 rounded-lg p-6 text-center">
                <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-2/3 mx-auto mb-1" />
                <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-8 w-1/2 mx-auto rounded-full" />
              </div>
            ))
          }
          
          {!isLoading && !error && factories?.map((factory) => (
            <div key={factory.id} className="bg-neutral-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-white text-xl">
                  {generateInitials(factory.name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-lg font-bold mb-1">{factory.name}</h3>
              <p className="text-neutral-500 text-sm mb-3">{factory.location}</p>
              <p className="text-neutral-600 mb-4">{factory.description}</p>
              <Badge variant="outline" className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                Membeli: {factory.materialsBought}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#all-factories" className="inline-flex items-center text-primary hover:text-primary/90 font-medium">
            Lihat Semua Pabrik Mitra <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
