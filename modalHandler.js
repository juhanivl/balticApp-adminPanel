$('#my_modal').on('show.bs.modal', function(e) {
    var contentId = $(e.relatedTarget).data('content-id');
    var contentType = $(e.relatedTarget).data('modal-type');

    //$(e.currentTarget).find('input[name="contentId"]').val(contentId);
    document.getElementById("modalType").innerHTML = "Welcome to " + contentType + " view"
    document.getElementById("modalId").innerHTML ="Getting data for " + contentType + " " +  contentId;

    getSome("place?id="+contentId)
      .then(function(response){
        return response.text();
      })
      .then(function(text){
        //document.getElementById("placesStatus").innerHTML = ;
        var text = JSON.parse(text);
        console.log("text: " , text);
      });
  

});
