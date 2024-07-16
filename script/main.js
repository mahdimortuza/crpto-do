// logic for handling toggle menu
    $(document).ready(function() {
        $('#menu-toggle').click(function() {
            $('#mobile-menu').toggleClass('hidden');
        });
        $('[id="menu-item"]').click(function() {
            $('#mobile-menu').addClass('hidden');

        })
    }); 

 