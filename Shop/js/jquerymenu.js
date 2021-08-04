jQuery(document).ready(function () {
    jQuery('.toggle-nav' ).click(function (e) {

        jQuery('.menu ul' ).toggleClass('active');

        e.preventDefault();
    });
  
});

