// prisma/seed.ts
import { PrismaClient} from '@prisma/client'

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
      password: 'hashed_password_123', 
    },
  })

  // 3. Create Route: Lucknow to Delhi
  await prisma.serviceRoute.create({
    data: {
      slug: "lucknow-to-delhi-ncr",
      title: "Lucknow to Delhi NCR",
      tagline: "The Capital Express",
      heroImage: "https://images.unsplash.com/photo-1590053998592-23c347209930?auto=format&fit=crop&q=80&w=1920",
      distance: "550 km",
      duration: "8-9 Hours",
      basePrice: 6500,
      description: "Book the safest and most comfortable taxi from Lucknow to Delhi NCR via Yamuna Expressway.",
      highlights: ["Yamuna Expressway", "2 Refreshment Breaks", "GPS-Tracked"],
      gallery: {
        create: [
          { imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", caption: "India Gate" },
          { imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800", caption: "City View" }
        ]
      },
      packages: {
        create: [
          { category: "Sedan", carModel: "Dzire / Etios", price: 6500, seats: 4, bags: 2, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600" },
          { category: "SUV", carModel: "Ertiga / Kia", price: 8500, seats: 6, bags: 4, image: "https://images.unsplash.com/photo-1503376763036-066120622c74?w=600" }
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