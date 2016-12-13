$('#my_modal').on('show.bs.modal', function(e) {
    var contentId = $(e.relatedTarget).data('content-id');
    var contentType = $(e.relatedTarget).data('modal-type');

    //$(e.currentTarget).find('input[name="contentId"]').val(contentId);
    document.getElementById("modalType").innerHTML = "Welcome to " + contentType + " view"

    getSome("place?id="+contentId)
      .then(function(response){
        return response.text();
      })
      .then(function(text){
        //document.getElementById("placesStatus").innerHTML = ;
        var text = JSON.parse(text);
        console.log("getSome('place?id='+contentId" , text);
        /*var modalBody = document.getElementById("modalBody");
        var titleAndDescriptionDiv = document.createElement('div');
        titleAndDescriptionDiv.innerHTML = "<b>Name: </b>" + text.title + "<b> description: </b>" + text.description + "<b> Type: </b> " + text.type + "</br>";
        modalBody.appendChild(titleAndDescriptionDiv)*/
        document.getElementById("placeTitle").value = text.title
        document.getElementById("placeDescription").value = text.description
        document.getElementById("placeId").innerHTML = text.id
        document.getElementById("placeType").value = text.type
        document.getElementById("placeLongitude").value = text.location.long
        document.getElementById("placeLatitude").value = text.location.lat
        document.getElementById("placeRadius").value = text.radius
      });
});
