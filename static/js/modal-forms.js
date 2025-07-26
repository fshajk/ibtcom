$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        var $submitBtn = $form.find('[type="submit"]');
        var originalBtnText = $submitBtn.val();

        $submitBtn.prop('disabled', true).val('Отправка...');

        $.ajax({
            url: $form.attr('action'),
            method: $form.attr('method'),
            data: $form.serialize(),
            dataType: 'json'
        })
        .done(function(response) {
            if (response.success) {
                $('.reveal-modal').trigger('reveal:close');
                $("#myModal3").reveal();  // Открываем окно благодарности
                $form.trigger('reset');
            } else {
                alert(response.message || 'Произошла ошибка');
            }
        })
        .fail(function(xhr) {
            alert('Ошибка соединения. Пожалуйста, попробуйте позже.');
            console.error(xhr.responseText);
        })
        .always(function() {
            $submitBtn.prop('disabled', false).val(originalBtnText);
        });
    });
});

$( "#po .btn" ).click(function() {
	var value=$(this).parent().find("p").text();
 	$('#submission_reason').val(value);
});

$( "#install .btn" ).click(function() {
	var value=$(this).parent().find("p").text();
  	$('#submission_reason').val(value);
});

$(".btnon").click(function() {
	var value=$(this).attr("rel");
  	$('#submission_reason').val(value);
});
