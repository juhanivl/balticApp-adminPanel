console.log("index.js");

//Get the server status and show it in the top of the adminpanel
function getServerStatus(){
  testServerConnection().then(function(response){
    console.log("testServerConnection callback " , response.status , response.type , response.ok);
    if(response.status == 200){
      document.getElementById("serverStatus").innerHTML = "Server status ok."
    }else {
      document.getElementById("serverStatus").innerHTML = "There was problem receiving server status."
    }
  })
}

getServerStatus();
