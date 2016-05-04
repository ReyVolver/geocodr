(function($, window, document, undefined){
    'use strict';

    var defaults = {
        text: {
            loading: 'Loading ...'
        },
        attr: {
            adress: 'data-address',
            latitude: 'data-lat',
            longitude: 'data-lng'
        }
    };


    function Geocoder(selector, request){
        var $selector = $(selector);
        var geocoder = new google.maps.Geocoder();

        if (request.address || request.location) {
            geocoder.geocode(request, function(result, status){
                if (status === google.maps.GeocoderStatus.OK){
                    console.log(result);

                    // if we've asked for latlng
                    if (request.address){
                        $selector.trigger('geocode:latlng', result);
                    }

                    // If we've asked for address
                    if (request.location){
                        $selector.trigger('geocode:address', result);
                    }

                }
                else{
                    $selector.trigger('geocode:'+status, result);
                }
            });
        }
    }





    $.fn.geocode = function(options){
        var settings = $.extend(true, {}, defaults, options);
        var request = {};
        var address = this.attr(settings.attr.address);
        var lat = this.attr(settings.attr.latitude);
        var lng = this.attr(settings.attr.longitude);
        var self = this;

        this.html(settings.text.loading_text);

        if (address){
            request.address = address;
        }
        else{
            request.location = { lat: parseFloat(lat), lng: parseFloat(lng) };
        }

        var inst = new Geocoder(this, request);

        // Always return this to be chainable
        return this;
    };

})(jQuery, window, document);
