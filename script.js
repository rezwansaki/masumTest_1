$(document).ready(function(){
    
  $("#btnSend").hide();
     
     //open mail system 
     $("#btn1").click(function(){
        $("form").append("Send To : <input type='input' id='txtSentTo'>");
        $("form").append("Subject : <input type='input' id='txtSubject'>");
        $("form").append("Mail Body : <textarea rows='10' cols='40' id='txtMailBody'>");
        $("#btn1").hide();
        $("#btnSend").show();
     });
    
    //send button
    $("#btnSend").click(function(){
        
        //form validation
        var xSendTo = $(txtSentTo).val();
        var xSubject = $(txtSubject).val();
        var xMailBody = $(txtMailBody).val();
        if(xSendTo == "" || xSubject == "" || xMailBody == ""){
            alert("Please fill the required fields!!");
        }else
        {
            alert("Successfully send !!");
            $("form").empty();
            $("#txtSentTo").remove();
            $("#txtSubject").remove();
            $("#txtMailBody").remove();
            $("#btn1").show();
            $("#btnSend").hide();
        }
        
    });
    
}); //end of ready function 
