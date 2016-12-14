var id_token = localStorage.getItem('id_token')

function getReports(){
  getSome("report")
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      //console.log("then: " , text);

      var text = JSON.parse(text);
      for(var i=0; i<text.length; i++){
        var theDiv = document.getElementById("reportList");
        var newNode = document.createElement('div');
        newNode.setAttribute("id" , text[i].id)
        //newNode.innerHTML = "<b>Name: </b>" + text[i].title + "<b> ID: </b>" + text[i].id + "</br>";
        newNode.innerHTML = "<p><a href='#report-modal' data-toggle='modal' data-modal-type='report' data-content-id="+text[i].id+">"+text[i].description+ " ID: " + text[i].id +"</a></p>"
        theDiv.appendChild( newNode )
      }
    });
}
getReports();

function sortReportsBy(param){
  console.log("sortReportsBy", param);
}

function deleteReport(){
  console.log("deleteReport");
  var reportId = document.getElementById("reportId").innerHTML;
  //http://balticapp.fi/lukeB/report/remove?id=y892128121u08
  getSomeAsAdmin("report/remove?id="+reportId , id_token )
  .then(function(response){
    console.log("deleteReportResposne: " , response);
    if(response.status == 200){
      $('#report-modal').modal('toggle');
      alert("Report deleted succesfully!");
    }else{
      $('#report-modal').modal('toggle');
      alert("Couldn't delete report");
    }
    return response;
  })
}
