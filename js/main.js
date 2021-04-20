$(".imgRow").click(
    function() {
        const link = $(this).attr('src');
        $('#bigImage').attr('src', link);
     }
);

