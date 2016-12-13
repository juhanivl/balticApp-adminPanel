function getReports(){
  getSome("report")
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      console.log("then: " , text);

      /*
      [{"image_url":"http://www.balticapp.fi/images/lukeB/report/5850219a7d84f1094cc1a1bc.jpeg",
      "flagged":false,
      "approved":true,
      "profileId":"auth0|58501262b95c657144e74369",
      "id":"5850219a7d84f1094cc1a1bc",
      "title":"My Photo",
      "description":"numpad0",
      "date":"2016-12-13T18:28:10.538Z",
      "categoryId":[],
      "location":{"long":22.122759,"lat":60.425572}},
      */

      var text = JSON.parse(text);
      for(var i=0; i<text.length; i++){
        var theDiv = document.getElementById("reportList");
        var newNode = document.createElement('div');
        newNode.setAttribute("id" , text[i].id)
        //newNode.innerHTML = "<b>Name: </b>" + text[i].title + "<b> ID: </b>" + text[i].id + "</br>";
        newNode.innerHTML = "<p><a href='#report-modal' data-toggle='modal' data-modal-type='report' data-content-id="+text[i].id+">"+text[i].title+ " ID: " + text[i].id +"</a></p>"
        theDiv.appendChild( newNode )
      }
    });
}
getReports();

function sortReportsBy(param){
  console.log("sortReportsBy", param);
}
