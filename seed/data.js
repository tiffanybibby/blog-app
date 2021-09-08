import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const posts =
    [
      {
        "title": "Teamwork makes the dream work",
        "imgURL": "https://media.istockphoto.com/photos/diverse-people-stacking-hand-together-picture-id1152125129?k=20&m=1152125129&s=612x612&w=0&h=5K1_PEh5FdEDdiRVXpD8OiWl7tQJP76_x1i0MILlb7s=",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Tiffany, Nia-Emani, Rachel, & Daria"
      },
      {
        "title": "There's no i team",
        "imgURL": "https://us.123rf.com/450wm/artqu/artqu1607/artqu160700235/61462631-concept-of-woman-power-vector.jpg?ver=6",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "author": "Tiffany, Nia-Emani, Rachel, & Daria"
      }
    ]

  await Post.insertMany(posts)
  console.log("Created posts!")

  // close database connection. done.
  db.close()
}

insertData()