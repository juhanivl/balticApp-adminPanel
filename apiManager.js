function testServerConnection () {
  return fetch('http://www.balticapp.fi/lukeB/callback', {method: 'get'}) // return a promise! ..important!
      .then((response) => {
          return response
      })
      .catch((err) => {
          return err

  });
}

function getSome (param){
 return fetch('http://www.balticapp.fi/lukeB/'+param,
 {
   method: 'get'

 })
   .then((response) => {
      return response
   })
   .catch((err) => {
       return err
   });
}

function createSome(destination, bodyObject, id_token){
  console.log(destination, bodyObject, id_token);

  return fetch('http://www.balticapp.fi/lukeB/'+destination+'/create' , {
    method: 'post',
    body: JSON.stringify(bodyObject),
    mode: 'cors',
    headers: new Headers({
        'Authorization': 'Bearer ' + id_token,
        'Content-Type': 'application/json',
    })
  })
  .then((response) => {
     return response
  })
  .catch((err) => {
    return err
  });
}
