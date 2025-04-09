import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { type Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });
  
  function generateInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }
  
  function renderStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="fill-yellow-500 text-yellow-500 h-4 w-4" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="fill-yellow-500 text-yellow-500 h-4 w-4" />);
      } else {
        stars.push(<Star key={i} className="text-neutral-300 h-4 w-4" />);
      }
    }
    
    return stars;
  }

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Testimoni</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Apa kata pelanggan kami tentang layanan SAMPAHKU
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {isLoading &&
            Array(2).fill(0).map((_, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />
                    <div className="flex-grow">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-40 mb-1" />
                      <Skeleton className="h-4 w-32 mb-3" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          }
          
          {!isLoading && !error && testimonials?.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border-2 border-neutral-200">
                    <AvatarFallback className="bg-primary text-white">
                      {generateInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h4 className="font-heading font-bold text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm mb-3">{testimonial.role}</p>
                    <p className="text-neutral-600">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
