


// function updateUserRoute(body, params) {
function updateUserRoute({body, params}) {
  const {name, email, password} = body
  const {id} = params

  updateUserController({
    data: {name, email, password}, 
    params: {id},
  })
}

// function updateUserController(data, params){
function updateUserController({data, params}){
  const {name, email, password} = data
  const {id} = params

  // userRepository.update(data, params)
  userRepository.update({
    data: {name, email, password}, 
    params: {id},
  })
  
}

const userRepository = {
  // update: (data, params) => {},
  update: ({data, params}) => {},
}