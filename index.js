$(function(){ // short for $(document).ready() 
   // alert("ready!");
    //recall that a form also has input types, in this case, a button!
    $("#nameform").on('submit',function(event) { // using id selector
        alert("Submitted");
        event.preventDefault();
        //regular js way
        //var firstName = document.getElementById("fname").Value;
        //var lastName = document.getElementById("lname").value;
        //with jquery
        var firstName=$('#fname').val();     
        var lastName=$('#lname').val();  
        var newHTML = '<h1>'+firstName+' '+lastName+'</h1>';

        $(".jumbotron").removeClass('d-none').html(newHTML);
        return false;
    });

});