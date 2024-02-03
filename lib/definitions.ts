// model User {
//     id        String   @id @default(uuid())
//     name      String
//     email     String   @unique
//     password  String
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     adverts   Advert[]
//     role      Role     @default(USER)
//   }

export type User = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  adverts?: any // TODO: Add Advert type
  role: string // TODO: Add Role type
}