;jQuery(function($) {
    'use strict';

    var App = {

        gameId: 0,
        mySocketId: '',

        init: function() {
            App.cacheElements();
            App.bindEvents();
        },

        cacheElements: function() {
            App.$doc = $(document);

            App.$container = $('#container');
        },

        bindEvents: function() {
            App.$doc.on('keydown', App.run );
        }
    };

    var IO = {
        init: function() {
            IO.socket = io.connect();
            IO.bindEvents();
        },

        bindEvents: function() {
            IO.socket.on('connected', IO.onConnected);
        },

        onConnected: function(data) {
            App.mySocketId = IO.socket.socket.sessionid;
        }
    }

    IO.init();
    App.init();



    // $('#gameArea').html( $('#hello-screen-template').html() );

}($));
