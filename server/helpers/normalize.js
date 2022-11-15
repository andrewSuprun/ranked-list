export const normalize = ( array ) =>{
 return array.map( obj => {
  const {id, name, userId} = obj
  return {id, name, userId}
 })
}

