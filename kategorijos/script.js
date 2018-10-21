function loadCats() {
    $('.category-container').load('includes/category.php');
}

function loadParentCats() {
    $('#parentCat').load('includes/parentCats.php');
}

$(document).ready(function () {
    loadCats();
    loadParentCats()

    $('#form').submit(function (event) {
        event.preventDefault();

        if ($("#name").val() != "") {
            $("#name").css("border", "unset");
            const data = $(this).serialize();

            $.ajax({
                url: 'includes/add-cat.php',
                data: data,
                success: function () {
                    loadCats();
                    loadParentCats();
                    $("#name").val("");
                }
            });
        } else {
            $("#name").css("border", "2px solid red");
        }

    });

});
