import { Recycle, User, Building2, Globe } from "lucide-react";

const stats = [
  {
    icon: <Recycle className="h-10 w-10 text-primary" />,
    value: "500+",
    label: "Ton Sampah Didaur Ulang"
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    value: "1000+",
    label: "Penjual Aktif"
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    value: "50+",
    label: "Pabrik Mitra"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    value: "1200+",
    label: "Ton CO₂ Terhindarkan"
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold text-primary mb-1">{stat.value}</span>
              <span className="text-neutral-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
