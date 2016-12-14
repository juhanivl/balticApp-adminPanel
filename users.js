var id_token = localStorage.getItem('id_token')

function getUsers(){
  getSome("user")
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      console.log("then: " , text);

      var text = JSON.parse(text);
      for(var i=0; i<text.length; i++){
        var theDiv = document.getElementById("userList");
        var newNode = document.createElement('div');
        newNode.setAttribute("id" , text[i].id)
        //newNode.innerHTML = "<b>Name: </b>" + text[i].title + "<b> ID: </b>" + text[i].id + "</br>";
        newNode.innerHTML = "<p><a href='#user-modal' data-toggle='modal' data-modal-type='user' data-content-id="+text[i].id+">"+ "Username: " + text[i].username+ " ID: " + text[i].id +"</a></p>"
        theDiv.appendChild( newNode )
      }
    });
}
getUsers();



function deleteUser(){
  console.log("deleteUser");

}

function makeUserAdmin(){
  console.log("makeUserAdmin");

}
