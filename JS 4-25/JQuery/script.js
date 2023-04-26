$(document).ready(function() {
    $('#submit').on('click', function(e) {
        let name = $("#name");
        let email = $("#email");
        let phone = $("#phone");
        let required = [name, email, phone];

        for(let item of required) {
            if (item.val() == "") {
                $("#message").text("Please Fill Out Required Fields");
                $("#message").addClass("warning");
                item.prev('label').addClass('warning');
            }
            else {
                item.prev('label').removeClass('warning'); 
            }
        }

        let warning = $('label').hasClass('warning'); 
        if(!warning) {
            $('form').empty(); 
            $('#pre-form > h2').text('Thanks for your feedback!');
        }
    });
});
