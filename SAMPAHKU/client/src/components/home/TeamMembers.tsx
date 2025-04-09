import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";

// Tim SAMPAHKU
const teamMembers = [
  {
    name: "Budi Santoso",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Berpengalaman 10+ tahun di industri pengolahan limbah dan daur ulang",
    social: {
      email: "budi@sampahku.id",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Siti Rahayu",
    role: "Chief Sustainability Officer",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Pakar lingkungan dengan fokus pada solusi keberlanjutan dan ekonomi sirkular",
    social: {
      email: "siti@sampahku.id",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ahmad Hidayat",
    role: "CTO",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Ahli teknologi dengan visi menggunakan tech untuk memecahkan masalah lingkungan",
    social: {
      email: "ahmad@sampahku.id",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Maya Wijaya",
    role: "Head of Partnerships",
    image: "https://i.pravatar.cc/300?img=14",
    bio: "Mengembangkan hubungan dengan pabrik mitra dan stakeholder utama di industri daur ulang",
    social: {
      email: "maya@sampahku.id",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function TeamMembers() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Tim SAMPAHKU</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Kami adalah tim yang berkomitmen untuk menciptakan solusi daur ulang yang berkelanjutan dan menguntungkan bagi semua pihak
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3 mt-auto">
                  <a href={`mailto:${member.social.email}`} className="text-neutral-500 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-neutral-500 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-neutral-500 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}