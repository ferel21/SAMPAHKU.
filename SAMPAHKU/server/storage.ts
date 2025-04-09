import { 
  materials, type Material, type InsertMaterial,
  factories, type Factory, type InsertFactory,
  testimonials, type Testimonial, type InsertTestimonial,
  listings, type Listing, type InsertListing,
  contacts, type Contact, type InsertContact,
  users, type User, type InsertUser 
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Material operations
  getAllMaterials(): Promise<Material[]>;
  getMaterial(id: number): Promise<Material | undefined>;
  createMaterial(material: InsertMaterial): Promise<Material>;
  
  // Factory operations
  getAllFactories(): Promise<Factory[]>;
  getFactory(id: number): Promise<Factory | undefined>;
  createFactory(factory: InsertFactory): Promise<Factory>;
  
  // Testimonial operations
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Listing operations
  getAllListings(): Promise<Listing[]>;
  getListing(id: number): Promise<Listing | undefined>;
  createListing(listing: InsertListing): Promise<Listing>;
  
  // Contact operations
  getAllContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private materials: Map<number, Material>;
  private factories: Map<number, Factory>;
  private testimonials: Map<number, Testimonial>;
  private listings: Map<number, Listing>;
  private contacts: Map<number, Contact>;
  
  private userIdCounter: number;
  private materialIdCounter: number;
  private factoryIdCounter: number;
  private testimonialIdCounter: number;
  private listingIdCounter: number;
  private contactIdCounter: number;

  constructor() {
    this.users = new Map();
    this.materials = new Map();
    this.factories = new Map();
    this.testimonials = new Map();
    this.listings = new Map();
    this.contacts = new Map();
    
    this.userIdCounter = 1;
    this.materialIdCounter = 1;
    this.factoryIdCounter = 1;
    this.testimonialIdCounter = 1;
    this.listingIdCounter = 1;
    this.contactIdCounter = 1;
    
    // Initialize with some default data
    this.initDefaultData();
  }

  private initDefaultData() {
    // Add default materials
    const defaultMaterials: InsertMaterial[] = [
      {
        name: "Plastik",
        description: "Botol PET, HDPE, kantong plastik, galon, dan semua jenis plastik lainnya.",
        priceRange: "Rp 4.000 - 8.000/kg",
        icon: "package",
        color: "primary"
      },
      {
        name: "Kaca",
        description: "Botol kaca, toples, serpihan kaca, dan semua jenis produk kaca lainnya.",
        priceRange: "Rp 1.500 - 5.000/kg",
        icon: "cup",
        color: "secondary"
      },
      {
        name: "Logam",
        description: "Besi, aluminium, tembaga, baja, dan semua jenis logam lainnya.",
        priceRange: "Rp 12.000 - 80.000/kg",
        icon: "hammer",
        color: "accent"
      },
      {
        name: "Kayu",
        description: "Palet, potongan kayu, papan, dan semua jenis produk kayu lainnya.",
        priceRange: "Rp 3.000 - 7.000/kg",
        icon: "tree",
        color: "primary-light"
      }
    ];
    
    defaultMaterials.forEach(material => this.createMaterial(material));
    
    // Add default factories
    const defaultFactories: InsertFactory[] = [
      {
        name: "PT Plastik Daur Ulang",
        location: "Bandung, Jawa Barat",
        description: "Spesialis daur ulang plastik PET dan HDPE menjadi biji plastik berkualitas industri.",
        materialsBought: "Plastik"
      },
      {
        name: "PT Logam Mulia",
        location: "Tangerang, Banten",
        description: "Pabrik pengolahan logam bekas menjadi bahan baku industri konstruksi dan manufaktur.",
        materialsBought: "Logam"
      },
      {
        name: "PT Kaca Indonesia",
        location: "Surabaya, Jawa Timur",
        description: "Mengolah kaca bekas menjadi produk kaca baru dengan standar kualitas tinggi.",
        materialsBought: "Kaca"
      }
    ];
    
    defaultFactories.forEach(factory => this.createFactory(factory));
    
    // Add default testimonials
    const defaultTestimonials: InsertTestimonial[] = [
      {
        name: "Ibu Siti Nurhasanah",
        role: "Penjual Plastik, Jakarta",
        content: "SAMPAHKU membantu saya mendapatkan harga terbaik untuk botol plastik yang saya kumpulkan. Proses sangat mudah dan pembayaran cepat!",
        rating: 5
      },
      {
        name: "Bapak Ahmad Ridwan",
        role: "Pengepul Logam, Bandung",
        content: "Sebagai pengepul, SAMPAHKU membantu saya terhubung langsung dengan pabrik. Penghasilan meningkat dan proses jual beli menjadi lebih efisien.",
        rating: 4
      }
    ];
    
    defaultTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Material operations
  async getAllMaterials(): Promise<Material[]> {
    return Array.from(this.materials.values());
  }
  
  async getMaterial(id: number): Promise<Material | undefined> {
    return this.materials.get(id);
  }
  
  async createMaterial(insertMaterial: InsertMaterial): Promise<Material> {
    const id = this.materialIdCounter++;
    const material: Material = { ...insertMaterial, id };
    this.materials.set(id, material);
    return material;
  }
  
  // Factory operations
  async getAllFactories(): Promise<Factory[]> {
    return Array.from(this.factories.values());
  }
  
  async getFactory(id: number): Promise<Factory | undefined> {
    return this.factories.get(id);
  }
  
  async createFactory(insertFactory: InsertFactory): Promise<Factory> {
    const id = this.factoryIdCounter++;
    const factory: Factory = { ...insertFactory, id };
    this.factories.set(id, factory);
    return factory;
  }
  
  // Testimonial operations
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialIdCounter++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Listing operations
  async getAllListings(): Promise<Listing[]> {
    return Array.from(this.listings.values());
  }
  
  async getListing(id: number): Promise<Listing | undefined> {
    return this.listings.get(id);
  }
  
  async createListing(insertListing: InsertListing): Promise<Listing> {
    const id = this.listingIdCounter++;
    const now = new Date();
    const listing: Listing = { 
      ...insertListing, 
      id, 
      status: "pending", 
      createdAt: now 
    };
    this.listings.set(id, listing);
    return listing;
  }
  
  // Contact operations
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const now = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: now 
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
