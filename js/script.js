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

	$('#registerModal').on('hidden.bs.modal', function (e) {
	  	
	  	$("#reg-form").trigger("reset");
	    $("#img-preview").attr("src", "images/avatar.png");
	});

});