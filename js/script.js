function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$( document ).ready(function() {

    $(document).on('change', "#photo" , function(){ 
	    readURL(this);
	});

	$(document).on("submit", "#reg-form",function(e) {

    	e.preventDefault(); 

    	// var form = $(this);
	    // var url = form.attr('action');
	    
	    // $.ajax({
	    //        type: "POST",
	    //        url: url,
	    //        data: form.serialize(), // serializes the form's elements.
	    //        success: function(data)
	    //        {
	    //            alert(data); // show response from the php script.
	    //        }
	    //      });
	    // });

	    $("#reg-form-div").removeClass("d-block").addClass("d-none");
	    $("#btn-submit").removeClass("d-block").addClass("d-none");

	    $("#thank-you").removeClass("d-none").addClass("d-block");
	    $("#buy-tickets").removeClass("d-none").addClass("d-block");

	});

	$('#registerModal').on('hidden.bs.modal', function (e) {
	  	
	  	$("#thank-you").removeClass("d-block").addClass("d-none");
	    $("#buy-tickets").removeClass("d-block").addClass("d-none");

	    $("#reg-form-div").removeClass("d-none").addClass("d-block");
	    $("#btn-submit").removeClass("d-none").addClass("d-block");

	    $("#reg-form").trigger("reset");
	    $("#img-preview").attr("src", "images/avatar.png");
	})

});