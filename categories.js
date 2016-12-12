//get the basic info of the application: number of users, number of places, number of posts and...
function getCategoryInfo(){
  getSome("category")
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      //document.getElementById("placesStatus").innerHTML = ;
      var text = JSON.parse(text);
      console.log("texttexttext:" , text);
      for(var i=0; i<text.length; i++){
        var theDiv = document.getElementById("categoryList");
        var newNode = document.createElement('div');
        newNode.setAttribute("id" , text[i].id)
        newNode.addEventListener('click', function() {
          handleCategoryClick(this.id);
        });
        newNode.innerHTML = "<b>Name: </b>" + text[i].title + "<b> ID: </b>" + text[i].id + "</br>";
        theDiv.appendChild( newNode )
      }
    });
}
getCategoryInfo();

function handleCategoryClick(clickedItem){
  console.log("handlePlaceClick:" , clickedItem);
}

function createCategory(){
  var id_token = localStorage.getItem('id_token');
  var creatCategoryObject = {
    title: document.getElementById("categoryTitle").value,
    description: document.getElementById('categoryDescription').value
  }

  createSome("category", creatCategoryObject, id_token);

}
