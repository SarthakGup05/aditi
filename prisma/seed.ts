// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('🌱 Start seeding...')

  // 1. Clean old data safely
  try {
      await prisma.vehiclePackage.deleteMany()
      await prisma.routeGallery.deleteMany()
      await prisma.serviceRoute.deleteMany()
      await prisma.admin.deleteMany()
  } catch (e) {
      console.log('Skipping delete (tables might be new)')
  }

  // 2. Create Admin
  await prisma.admin.create({
    data: {
      name: 'Aditi Admin',
      email: 'admin@adititravels.com',
      password: 'securepassword123', 
    },
  })

  // ---------------------------------------------------------
  // A. SEED INDEPENDENT VEHICLE PACKAGES (Global Fleet)
  // ---------------------------------------------------------
  console.log('🚗 Seeding Global Fleet...')
  
  await prisma.vehiclePackage.createMany({
    data:[
  {
    "id": 1,
    "title": "Swift Dzire / Etios",
    "category": "Sedan",
    "pricePerKm": 11,
    "image": "https://images.unsplash.com/photo-1663852397535-18292e115327?q=80&w=580&auto=format&fit=crop",
    "description": "The ideal choice for city transfers and small families. Compact yet spacious, offering a smooth and economical ride.",
    "seats": "4 Passengers",
    "bags": "2 Bags",
    "fuel": "CNG/Diesel",
    "features": ["Chauffeur Driven", "AC & Heater", "Daily Sanitization", "Music System"]
  },
  {
    "id": 2,
    "title": "Maruti Ertiga",
    "category": "SUV",
    "pricePerKm": 14,
    "image": "https://i.pinimg.com/1200x/7d/a2/6e/7da26e9f87f423ee0ccdb96f8a89cd87.jpg",
    "description": "Perfect for outstation trips with family. Experience superior legroom and powerful performance on highways.",
    "seats": "6 Passengers",
    "bags": "3 Bags",
    "fuel": "Diesel",
    "features": ["Dual AC", "Roof Carrier", "Extra Boot Space", "Reclining Seats"]
  },
  {
    "id": 3,
    "title": "Toyota Innova Crysta",
    "category": "Premium SUV",
    "pricePerKm": 18,
    "image": "https://i.pinimg.com/1200x/b7/4e/e9/b74ee929de8581e7251749d1bcbf3a16.jpg",
    "description": "Make a statement with our premium fleet. Unmatched luxury, leather interiors, and VIP treatment for corporate clients.",
    "seats": "7 Passengers",
    "bags": "4 Bags",
    "fuel": "Diesel",
    "features": ["VIP Chauffeur", "Captain Seats", "Climate Control", "Priority Support"]
  },
  {
    "id": 4,
    "title": "Tempo Traveller / Urbania",
    "category": "Traveller",
    "pricePerKm": 26,
    "image": "https://i.pinimg.com/736x/41/4d/c8/414dc896784dcccb36cbf7e3f7adcd11.jpg",
    "description": "The ultimate group travel solution. Spacious aisle, pushback seats, and ample luggage space for weddings and pilgrimages.",
    "seats": "17/20/26 Seats",
    "bags": "15+ Bags",
    "fuel": "Diesel",
    "features": ["Pushback Seats", "Individual AC Vents", "Charging Points", "Music System"]
  }
]
  })

  // ---------------------------------------------------------
  // B. SEED SERVICE ROUTES (No nested packages)
  // ---------------------------------------------------------
  console.log('🛣️ Seeding Routes...')

  // 1. LUCKNOW TO DELHI
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-delhi-ncr",
      title: "Lucknow to Delhi NCR",
      tagline: "The Capital Express",
      heroImage: "https://i.pinimg.com/736x/d9/31/e4/d931e46254d1d51b4743b43be8aefec4.jpg",
      distance: "550 km",
      duration: "8-9 Hours",
      basePrice: 6500,
      description: "Book the safest and most comfortable taxi from Lucknow to Delhi NCR via the world-class Yamuna Expressway.",
      highlights: ["Yamuna Expressway", "2 Refreshment Breaks", "Music & AC"],
      gallery: {
        create: [
          { imageUrl: "https://i.pinimg.com/1200x/e8/13/ef/e813efaafc37425c5506bde6f511e40d.jpg", caption: "Lotus Temple" },
          { imageUrl: "https://i.pinimg.com/736x/4f/73/cb/4f73cb605a7a9443b5e51b40c0eda62b.jpg", caption: "qutub minar" }
        ]
      }
    }
  })

  // 2. LUCKNOW TO AGRA & MATHURA
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-agra-mathura",
      title: "Lucknow to Agra & Mathura",
      tagline: "The Heritage Route",
      heroImage: "https://i.pinimg.com/736x/aa/93/36/aa9336d7e99d166ac2cffab8c82a321f.jpg",
      distance: "340 km",
      duration: "4-5 Hours",
      basePrice: 4500,
      description: "Experience the beauty of the Taj Mahal and the spirituality of Mathura via the Agra-Lucknow Expressway.",
      highlights: ["Taj Mahal Visit", "Krishna Janmabhoomi", "Agra-Lucknow Expressway"],
      gallery: {
        create: [
          { imageUrl: "https://i.pinimg.com/736x/aa/93/36/aa9336d7e99d166ac2cffab8c82a321f.jpg", caption: "Taj Mahal" },
          { imageUrl: "https://i.pinimg.com/736x/4e/64/cd/4e64cd32c41a1d0cfa2bd18568c6318a.jpg", caption: "Mathura Temples" }
        ]
      }
    }
  })

  // 3. LUCKNOW TO VARANASI
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-varanasi",
      title: "Lucknow to Varanasi",
      tagline: "Journey to Kashi",
      heroImage: "https://i.pinimg.com/736x/ad/7c/31/ad7c3109d4448019a71ec8f470b70c98.jpg",
      distance: "310 km",
      duration: "6 Hours",
      basePrice: 5000,
      description: "Visit the spiritual capital of India. Witness the Ganga Aarti and explore the Ghats of Kashi.",
      highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
      gallery: {
        create: [
          { imageUrl: "https://i.pinimg.com/1200x/d8/cc/ab/d8ccabb4471aa79cbf9f87887641972f.jpg", caption: "Ganga Aarti" },
          { imageUrl: "https://i.pinimg.com/736x/b8/f6/5c/b8f65c837b0b8adcf18c7c4593a9c027.jpg", caption: "Varanasi Boats" }
        ]
      }
    }
  })

  // 4. LUCKNOW TO PRAYAGRAJ
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-prayagraj",
      title: "Lucknow to Prayagraj",
      tagline: "The Sangam Link",
      heroImage: "https://i.pinimg.com/1200x/42/7d/1a/427d1a07ec3960de79f0ee6d825ae8c6.jpg",
      distance: "200 km",
      duration: "4-5 Hours",
      basePrice: 3500,
      description: "Travel to the holy city of Prayagraj. Perfect for Triveni Sangam baths and Kumbh Mela visits.",
      highlights: ["Triveni Sangam", "Anand Bhavan", "Hanuman Temple"],
      gallery: {
        create: [
          { imageUrl: "https://i.pinimg.com/1200x/98/90/a4/9890a42c0dd97755b8ced7d1a2e4626f.jpg", caption: "Holy River" },
          { imageUrl: "https://i.pinimg.com/1200x/42/7d/1a/427d1a07ec3960de79f0ee6d825ae8c6.jpg", caption: "Bridge View" }
        ]
      }
    }
  })

  // 5. LUCKNOW TO AYODHYA
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-ayodhya",
      title: "Lucknow to Ayodhya",
      tagline: "Ram Janmabhoomi Darshan",
      heroImage: "https://i.pinimg.com/736x/66/76/fa/6676fa64a5ac1d646cab70680726f6e8.jpg",
      distance: "135 km",
      duration: "2.5-3 Hours",
      basePrice: 2800,
      description: "A short and spiritual drive to Ayodhya Dham. Visit the Ram Mandir and Saryu Ghat.",
      highlights: ["Ram Mandir", "Hanuman Garhi", "Saryu River"],
      gallery: {
        create: [
          { imageUrl: "https://i.pinimg.com/736x/7b/2e/1e/7b2e1e41dca78c0f4a880881f35be595.jpg", caption: "Ayodhya Lamps" },
          { imageUrl: "https://i.pinimg.com/736x/2d/f3/b6/2df3b664f8b4fd1e631f0e0e17635236.jpg", caption: "Temple Architecture" }
        ]
      }
    }
  })

  console.log('✅ Seeding finished.')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })