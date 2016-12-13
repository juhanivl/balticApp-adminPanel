$('#report-modal').on('show.bs.modal', function(e) {
    var contentId = $(e.relatedTarget).data('content-id');
    var contentType = $(e.relatedTarget).data('modal-type');
    console.log("onHandleStuff"  , contentId , contentType);

    getSome("report?id="+contentId)
      .then(function(response){
        return response.text();
      })
      .then(function(text){
        //document.getElementById("placesStatus").innerHTML = ;
        var text = JSON.parse(text);
        console.log("getSome('report?id='+contentId" , text);
        /*
        document.getElementById("placeTitle").value = text.title
        document.getElementById("placeTotalVoteCount").innerHTML = "Total votes: " + text.votes.length;
        document.getElementById("placeDescription").value = text.description
        document.getElementById("placeId").innerHTML = text.id
        document.getElementById("placeType").value = text.type
        document.getElementById("placeLongitude").value = text.location.long
        document.getElementById("placeLatitude").value = text.location.lat
        document.getElementById("placeRadius").value = text.radius
        getUpAndDownVotes(text.votes);
        */
      });

});

function deleteReport(){

}
