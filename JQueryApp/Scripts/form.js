function showDetails(id) {

    $.ajax({

        url: "/Home/ShowDetails",
        type: 'POST',
        data: JSON.stringify(id),
        dataType: "json",
        contentType: "application/json",
        success: function (dog) {
               
            alert(dog.Name);
         
        },
        error: function (jqXHR, status, error) {
            alert("An AJAX error occured: " + status + "\nError: " + error);
            alert("nu merge");
        }

    });  

}

$(document).ready(function () {
    var dogs;
    $('#add').click(function () {

        var name = $('#name').val();
        var age = $('#age').val();
        var type = $('#type').val();
        var dog = { Name: name, Age: age, Type: type };

        $.ajax({

            url: "/Home/Add",
            type: 'POST',
            data: JSON.stringify(dog),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
               
                alert('Am adaugat un caine');
         
            },
            error: function (jqXHR, status, error) {
                alert("An AJAX error occured: " + status + "\nError: " + error);
                alert("nu merge");
            }

        });  

    });

    $('#show').click(function () {

        $.ajax({

            url: "/Home/Show",
            type: 'GET',
            contentType: "application/json",
            success: function (data) {
               
                dogs = data;
                $('#tabel').show();
                for (var i = 0; i < dogs.length; i++) {
                   
                    var table = $("#tabel > tbody").append("<tr></tr>")
                                                   .append("<td>" + dogs[i].Name + "</td>")
                                                   .append("<td>" + dogs[i].Age + "</td>")
                                                   .append("<td>" + dogs[i].Type + "</td>")
                                                   .append("<input type=\"button\" onClick=\"showDetails("+dogs[i].Id+")\" value=\"Show\" />");
                } },
                 
             error: function (jqXHR, status, error) {
                    alert("An AJAX error occured: " + status + "\nError: " + error);
                    alert("nu merge");
                }
            
            
           });
    
               
    });


    });