'use strict';

(function() {
    var state = 'brown';
    var states = ['blue', 'red', 'green'];

    function changeState() {
        states.push(state);
        state = states.shift();
    }

    function updateUrl(){
        Wix.pushState(state);
    }

    function setNewState() {
        changeState();
        document.querySelector('#state').innerHTML = state;
        updateUrl();
    }

    window.setNewState = setNewState;
})();