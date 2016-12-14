$('#user-modal').on('show.bs.modal', function(e) {
    var contentId = $(e.relatedTarget).data('content-id');
    var contentType = $(e.relatedTarget).data('modal-type');
    console.log("onHandleStuff"  , contentId , contentType);

    getSome("user?id="+contentId)
      .then(function(response){
        return response.text();
      })
      .then(function(text){
        //document.getElementById("placesStatus").innerHTML = ;
        var text = JSON.parse(text);
        console.log("getSome('user?id='+contentId" , text);
        document.getElementById("userId").innerHTML = text.id;
        document.getElementById("userName").innerHTML = text.username;
        document.getElementById("userGender").innerHTML = text.gender;
        document.getElementById("userBio").innerHTML = text.bio;

      });
});
