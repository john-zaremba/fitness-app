import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "hello@email.com",
        password: "hello"
      },
      {
        email: "world@email.com",
        password: "world"
      }
    ]

    for (const userObject of usersData) {
      const currentUser = await User.query().findOne({ email: userObject.email })
      if (!currentUser) {
        await User.query().insert(userObject)
      }
    }
  }
}

export default UserSeeder