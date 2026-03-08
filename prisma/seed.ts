import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Handcrafted Metal Mandala Wall Art",
        slug: "handcrafted-metal-mandala-wall-art",
        description: "Premium handcrafted metal wall decor perfect for modern Indian homes.",
        price: 2499,
        stock: 20,
        images: ["https://via.placeholder.com/600"],
        category: "Wall Art",
        isFeatured: true
      },
      {
        name: "Gold Finish Lotus Urli Bowl",
        slug: "gold-finish-lotus-urli-bowl",
        description: "Elegant decorative urli bowl with premium gold finish.",
        price: 1899,
        stock: 25,
        images: ["https://via.placeholder.com/600"],
        category: "Table Decor",
        isFeatured: true
      }
    ]
  })

  console.log("Products seeded successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })