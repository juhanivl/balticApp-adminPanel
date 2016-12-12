function getReports(){
  getSome("report")
    .then(function(response){
        console.log("response: " , response);
      return response.text();
    })
    .then(function(text){
      console.log("then " , text);
    });
}
getReports();

function sortReportsBy(param){
  console.log("sortReportsBy", param);
}
