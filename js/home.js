$( document ).ready( function() {

    /**************************************************
    detect os to show correct download links
    **************************************************/

    var desktop = true;
    var uAgent = navigator.userAgent || navigator.vendor || window.opera;
    var osName = "unknown";
    var downloadLink = "<site_url_placeholder>/downloads";

    if( uAgent.indexOf( "Win" ) > -1 ) {
        osName = "win64";
        downloadLink = "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.exe";
    } else if( uAgent.indexOf( "Mac" ) > -1 ) {
        osName = "mac";
        downloadLink = "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-<bisq_version_placeholder>.dmg";
    } else if( uAgent.indexOf( "Linux" ) > -1 && ( uAgent.indexOf( "Ubuntu" ) > -1 || uAgent.indexOf( "Debian" ) > -1 ) ) {
        osName = "deb64";
        downloadLink = "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.deb";
    } else if( uAgent.indexOf( "Linux" ) > -1 && ( uAgent.indexOf( "Fedora" ) > -1 || uAgent.indexOf( "Red Hat" ) > -1 ) ) {
        osName = "rpm64";
        downloadLink = "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.rpm";
    }

    //mobile
    if( /android/i.test( uAgent ) ) {
        desktop = false;
        $( '.downloads-android' ).removeClass( 'hidden' ).addClass( 'shown' );
        $( '.id-all').removeClass( 'hidden' ).addClass( 'shown' );
    }
    if( /iPad|iPhone|iPod/.test( uAgent ) && !window.MSStream ) {
        desktop = false;
        $( '.downloads-ios' ).removeClass('hidden').addClass( 'shown' );
        $( '.id-all' ).removeClass( 'hidden' ).addClass( 'shown' );
    }

    //desktop
    if( desktop ) {
        if( osName !== 'unknown' ) {
            showOSDownloads( osName );
        } else {
            $( '.id-all').removeClass('hidden').addClass('shown');
        }
    }

    //capture click on currently-selected value in dropdown (otherwise
    //link click event doesn't register on firefox)
    $( 'button.selected-os-download' ).on( 'click', function(e) {
        if( ( e.target.className ).indexOf( 'dl-' ) > -1 ) {
            return;
        } else {
            serveDownload( $( e.currentTarget ).attr( 'data-bisq-version' ), $( e.currentTarget ).attr( 'data-site-url' ) );
        }
    });

    //change dom to show downloads for the specific os
    function showOSDownloads( os ) {
        $( '.dl-' + os ).addClass( 'selected' );
        $( '.id-' + os ).removeClass( 'hidden' ).addClass( 'shown' );
        return;
    }

    //for non-link clicks (i.e., the 'download for xx' text on closed dropdown)
    function serveDownload( bisqVersion, siteURL ) {
        if( osName === 'unknown' ) {
            downloadLink = downloadLink.replace( /<site_url_placeholder>/g, siteURL );
        } else {
            downloadLink = downloadLink.replace( /<bisq_version_placeholder>/g, bisqVersion );
        }
        location.href = downloadLink;
        return;
    }

    /**************************************************
    hover actions for the "how to get started" section
    **************************************************/

    $('.step').on({
        mouseenter: function () {
            $('.step').css('opacity', 0.5),
            $(this).css('opacity', 1),
            $('.step-image').addClass('d-none').removeClass('d-block');
            $('.'+$(this).attr('data-image')).addClass('d-block').removeClass('d-none');
        },
        mouseout: function () {}
    });
<<<<<<< HEAD:js/scripts.js


    //FAQ Accordion
    $('.accordion').each(function() {

        $(this).find('.accordion-toggle').click(function(event) {
            event.preventDefault();

            $(".accordion-toggle").not($(this)).removeClass('accordion-toggle-active');

            if($(this).hasClass('accordion-toggle-active')){
                $(this).removeClass('accordion-toggle-active');
            }else{
                $(this).addClass('accordion-toggle-active');
            }

            $(this).next().slideToggle('fast');
            $(".accordion-content").not($(this).next()).slideUp('fast');

            if($(this).attr('id') !== undefined) {
                //add hash to url
                if(history.pushState) {
                    history.pushState(null, null, '#' + $(this).attr('id'));
                } else {
                    location.hash = '#' + $(this).attr('id');
                }
            }
        });
    });

    if( window.location.hash ) {
        showAccordionItem();
    }

    $( ".accordion-content a" ).on( "click", function() {
        var address = $(this).attr('href');
        if( address.charAt(0) === '#' ) {
            showAccordionItem( address );
        };
        return;
    });

    function showAccordionItem( anchorAddress ) {

        var address = anchorAddress ? anchorAddress : window.location.hash;

        $("html, body").animate( {
            scrollTop: ( $( address ).offset().top - 100 )
        }, 1000 );

        $( address ).addClass( 'accordion-toggle-active' ).next().slideToggle( 'fast' );

        return;
    }

    $( ".mode-toggle" ).on( "click", function() {
      $('body').toggleClass("dark-mode");
      $('body').hasClass("dark-mode") ? Cookies.set('darkmode', 1) : Cookies.set('darkmode', 0);
      var text = $(".mode-toggle").text();
      $(".mode-toggle").text(text == "Light" ? "Dark" : "Light");
      return;
    });

=======
>>>>>>> ede21155cef9129bcd868d8744b39d1d4b6c527a:js/home.js
});
