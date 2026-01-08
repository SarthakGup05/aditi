// prisma/seed.ts
import { PrismaClient } from '@/app/generated/prisma' // Ensure this path matches your client location
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('Start seeding...')

  // 1. Create Admin User
  await prisma.admin.upsert({
    where: { email: 'admin@adititravels.com' },
    update: {},
    create: {
      name: 'Aditi Admin',
      email: 'admin@adititravels.com',
      password: 'secure_hashed_password_here', // In real app, use bcrypt to hash this
    },
  })

  // 2. Define your Taxi Routes (Data from your MOCK_DB)
  const routes = [
    {
      slug: "lucknow-to-delhi-ncr",
      title: "Lucknow to Delhi NCR",
      tagline: "The Capital Express - Premium Outstation Taxi",
      heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1920&auto=format&fit=crop",
      distance: "550 km",
      duration: "8-9 Hours",
      basePrice: 6500,
      description: "Book the safest and most comfortable taxi from Lucknow to Delhi NCR via the world-class Yamuna Expressway. Whether it's a corporate meeting in Gurgaon or a family visit to Noida, we ensure a fatigue-free journey.",
      highlights: ["Yamuna Expressway Route", "2 Refreshment Breaks", "GPS-Tracked Vehicles", "Door-to-Door Service"],
      gallery: [
        { imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop", caption: "India Gate" },
        { imageUrl: "https://images.unsplash.com/photo-1585149635073-7729f64f3c88?q=80&w=800&auto=format&fit=crop", caption: "Lotus Temple" },
        { imageUrl: "https://images.unsplash.com/photo-1705861144419-7589b2756816?q=80&w=800&auto=format&fit=crop", caption: "Highway" },
      ],
      packages: [
        { category: "Sedan", carModel: "Dzire / Etios", price: 6500, seats: 4, bags: 2, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop" },
        { category: "SUV", carModel: "Ertiga / Kia", price: 8500, seats: 6, bags: 4, image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=600&auto=format&fit=crop" },
        { category: "Premium", carModel: "Innova Crysta", price: 10500, seats: 6, bags: 5, image: "https://images.unsplash.com/photo-1628276082470-3663673dc08a?q=80&w=600&auto=format&fit=crop" },
      ]
    },
    {
      slug: "lucknow-to-ayodhya-dham",
      title: "Lucknow to Ayodhya Dham",
      tagline: "Pilgrimage Special - Ram Mandir Darshan",
      heroImage: "https://images.unsplash.com/photo-1706173059858-5d15a510526e?q=80&w=1920&auto=format&fit=crop",
      distance: "135 km",
      duration: "2.5 Hours",
      basePrice: 2500,
      description: "Experience a divine journey to Ayodhya Dham. We offer same-day return packages allowing you ample time for Darshan and Aarti.",
      highlights: ["Same Day Return Available", "Ram Mandir Drop", "Clean Interiors", "Puja Material Space"],
      gallery: [
        { imageUrl: "https://images.unsplash.com/photo-1706853549226-5b9c240902bd?q=80&w=800&auto=format&fit=crop", caption: "Ram Mandir Art" },
        { imageUrl: "https://images.unsplash.com/photo-1698305417056-b8c73c241940?q=80&w=800&auto=format&fit=crop", caption: "Saryu River" },
        { imageUrl: "https://images.unsplash.com/photo-1628628033620-8041af3fa871?q=80&w=800&auto=format&fit=crop", caption: "Temple" },
      ],
      packages: [
        { category: "Sedan", carModel: "Dzire / Etios", price: 2500, seats: 4, bags: 2, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop" },
        { category: "SUV", carModel: "Ertiga / Kia", price: 3500, seats: 6, bags: 4, image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=600&auto=format&fit=crop" },
        { category: "Premium", carModel: "Innova Crysta", price: 5500, seats: 6, bags: 5, image: "https://images.unsplash.com/photo-1628276082470-3663673dc08a?q=80&w=600&auto=format&fit=crop" },
      ]
    }
  ]

  // 3. Insert Data
  for (const route of routes) {
    const routeExists = await prisma.serviceRoute.findUnique({
      where: { slug: route.slug }
    })

    if (!routeExists) {
      await prisma.serviceRoute.create({
        data: {
          slug: route.slug,
          title: route.title,
          tagline: route.tagline,
          heroImage: route.heroImage,
          distance: route.distance,
          duration: route.duration,
          basePrice: route.basePrice,
          description: route.description,
          highlights: route.highlights, // Pass array directly (Prisma handles JSON)
          gallery: {
            create: route.gallery
          },
          packages: {
            create: route.packages
          }
        }
      })
      console.log(`Created route: ${route.title}`)
    }
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })