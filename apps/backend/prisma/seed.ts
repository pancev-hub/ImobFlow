import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const existing = await prisma.user.findFirst({ where: { email: 'admin@local.test' } })
  if (!existing) {
    await prisma.user.create({ data: { email: 'admin@local.test', name: 'Admin Local' } })
    console.log('User admin@local.test criado')
  } else {
    console.log('User já existe')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
