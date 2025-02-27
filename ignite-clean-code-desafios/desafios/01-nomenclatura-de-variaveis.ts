// Nomenclatura de variáveis

const categoriesList = [
  {
    title: 'User',
    // followers: 5
    minFollowers: 5
  },
  {
    title: 'Friendly',
    // followers: 50,
    minFollowers: 50

  },
  {
    title: 'Famous',
    // followers: 500,
    minFollowers: 500

  },
  {
    title: 'Super Star',
    // followers: 1000,
    minFollowers: 1000

  },
]

// export default async function getData(req, res) {
  export default async function githubUserWithCategory(req, res) { 

  // const github = String(req.query.username)
  const githubUsername = String(req.query.username)

  // if (!github) {
  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

   // const response = await fetch(`https://api.github.com/users/${github}`);
  const githubUserResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      // message: `User with username "${github}" not found`
      message: `User with username "${githubUsername}" not found`
    })
  }

  // const data = await response.json()
  const githubUserData = await githubUserResponse.json()

  // const orderList = list.sort((a, b) =>  b.followers - a.followers); 
  const sortedUsersByMinFollowers = categoriesList.sort((a, b) =>  b.minFollowers - a.minFollowers); 

  // const category = orderList.find(i => data.followers > i.followers)
  const userCategory = sortedUsersByMinFollowers.find(i => githubUserData.followers > i.minFollowers)

  // const result = {
  const githubUsernameAndCategory = {
    // github,
    githubUsername,
    // category: category.title
    category: userCategory.title
  }

  // return result
  return githubUsernameAndCategory
}

githubUserWithCategory({ query: {
  username: 'DanyloHenrique'
}}, {})