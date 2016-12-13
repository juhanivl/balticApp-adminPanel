//get the basic info of the application: number of users, number of places, number of posts and...
function getPlaceInfo(){
  getSome("place")
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      //document.getElementById("placesStatus").innerHTML = ;
      var text = JSON.parse(text);
      for(var i=0; i<text.length; i++){
        var theDiv = document.getElementById("placeList");
        var newNode = document.createElement('div');
        newNode.setAttribute("id" , text[i].id)
        newNode.addEventListener('click', function() {
          handlePlaceClick(this.id);
        });
        //newNode.innerHTML = "<b>Name: </b>" + text[i].title + "<b> ID: </b>" + text[i].id + "</br>";
        newNode.innerHTML = "<p><a href='#my_modal' data-toggle='modal' data-modal-type='place' data-content-id="+text[i].id+">"+text[i].title+"</a></p>"
        theDiv.appendChild( newNode )
      }
    });
}
getPlaceInfo();

function handlePlaceClick(clickedItem){
  console.log("handlePlaceClick:" , clickedItem);

}

function createPlace(){
  var id_token = localStorage.getItem('id_token')
  var createPlaceObject = {
    title: document.getElementById("title").value,
    location: {
      long: document.getElementById("longitude").value,
      lat: document.getElementById("latitude").value
    },
    type: document.getElementById('type').value,
    description: document.getElementById('description').value,
    radius: document.getElementById('radius').value
  }

  createSome("place/create", createPlaceObject, id_token);
}

function editPlace(){
  console.log("editPLace");
  var id_token = localStorage.getItem('id_token')

  var editPlaceObject = {
    id: document.getElementById("placeId").innerHTML,
    title: document.getElementById("placeTitle").value,
    location: {
      long: document.getElementById("placeLongitude").value,
      lat: document.getElementById("placeLatitude").value
    },
    type: document.getElementById('placeType').value,
    description: document.getElementById('placeDescription').value,
    radius: document.getElementById('placeRadius').value
  }

  createSome("place/update", editPlaceObject, id_token)
  .then(function(response){
    console.log("place/update response: " , response);
    return response;
  })
}

function deletePlace(){
  console.log("deletePlace");
}
