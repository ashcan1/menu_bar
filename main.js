



$(function () {
    var iframeElement = $('#mainIframe');

    function processStandardMenuItem(domId, url) {
        if (url) {
            $(domId).on('click touch', function () {
                iframeElement.attr('src', url);
            });
        } else {
            $(domId).hide();
        }
    }



        var iframeSecond = $('#secondIframe');

        function processSecond(domId, url) {
            if (url) {
                $(domId).on('click touch', function () {
                    iframeSecond.attr('src', url);
                });
            } else {
                $(domId).hide();
            }
        }




            $.getJSON('./config.json', function (config) {

            processSecond('#menuAuditoriums', config.auditoriums);
            processSecond('#menuExhibition', config.exhibition);
            processSecond('#menuLobby', config.lobby);
            processStandardMenuItem('#menuAgenda', config.menu.agenda);
            processStandardMenuItem('#menuLivechat', config.menu.livechat);
            processStandardMenuItem('#menuMeetings', config.menu.meetings);
            processStandardMenuItem('#menuMessages', config.menu.messages);
            processStandardMenuItem('#menuAttendees', config.menu.attendees);
            processStandardMenuItem('#menuCpd', config.menu.cpd);
            processStandardMenuItem('#menuSocialwall', config.menu.socialwall);
            processStandardMenuItem('#menuSocialshare', config.menu.socialshare);
            processStandardMenuItem('#menuHelpdesk', config.menu.helpdesk);
            processStandardMenuItem('#menuFaq', config.menu.faq);
            processStandardMenuItem('#menuContactus', config.menu.contactus);
            processStandardMenuItem('#menuFeedback', config.menu.feedback);


        });
    });



// toggle menu when window is small

$(document).ready(function(){
    $('.cmb-burger').click(function(){
        $(this).toggleClass('open');
    });
});


// screen resize hamburger appears

$(document).ready(function($) {
    if ($(window).width() < 960) {
        $('#cmb-sidebar-container').hide();
    } else {
        $('.cmb-burger').hide();
    }

    $('.cmb-burger').click(function() {

        $('#cmb-sidebar-container').toggleClass('expand')



    });
});

//Screen resize testing
$(window).resize(function() {
    if ($(window).width() < 960) {
        $('#cmb-sidebar-container').hide();
        $('.cmb-burger').show();
    } else {

        $('.cmb-burger').hide();
        $('#cmb-sidebar-container').show();
    }
});


// Hide submenus
$('#cmb-body-row .collapse').collapse('hide');

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left');

// Collapse click

$('[data-toggle=cmb-sidebar-collapsed]').click(function() {
    SidebarCollapse();

});
function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#cmb-sidebar-container').toggleClass('cmb-sidebar-expanded cmb-sidebar-collapsed');

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');

}


//click outside to close the menu (not working atm)
/*$(document).mouseup(function(e){
    var container = $("#cmb-sidebar-container");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        $("#cmb-sidebar-container").removeClass("cmb-sidebar-expanded")
    }
}); */



