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
        document.getElementById("placeTotalVoteCount").innerHTML = "Total votes: " + text.votes.length;
        document.getElementById("placeDescription").value = text.description
        document.getElementById("placeId").innerHTML = text.id
        document.getElementById("placeType").value = text.type
        document.getElementById("placeLongitude").value = text.location.long
        document.getElementById("placeLatitude").value = text.location.lat
        document.getElementById("placeRadius").value = text.radius
        getUpAndDownVotes(text.votes);
      });

});

function getUpAndDownVotes(voteList){

  var upVoteCount =0;
  var downVoteCount =0;

  for(var i=0; i<voteList.length; i++){
    if(voteList[i].vote === true){
      upVoteCount ++;
    }else if(voteList[i].vote === false) {
      downVoteCount ++
    }
  }
  document.getElementById("placeUpvoteCount").innerHTML = "Upvotes: " + upVoteCount;
  document.getElementById("placeDownvoteCount").innerHTML = "Downvotes: " + downVoteCount;
}
