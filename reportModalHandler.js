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
        console.log("getSome('report?id='+contentId" , text[0]);
        document.getElementById("reportId").innerHTML = text[0].id;
        document.getElementById("reportDescription").innerHTML = text[0].description;
        document.getElementById("reportImage").setAttribute('src', text[0].image_url)
        document.getElementById("reportImageUrl").innerHTML = text[0].image_url;
        document.getElementById("reportLongitude").innerHTML = "longitude: " + text[0].location.long
        document.getElementById("reportLatitude").innerHTML = "latitude: " + text[0].location.lat

      });
});
