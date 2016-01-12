'use strict';

(function() {
    var currentState = 'orange';
    var states = ['blue', 'red', 'green'];

    function getState(){
        return currentState;
    }

    function setState(state){
        currentState = state;
    }

    function changeState() {
        states.push(getState());
        var state = states.shift();
        setState(state);
    }

    function updateUrl(state){
        Wix.pushState('state/' + state);
    }

    function setStateInView(state){
        document.querySelector('#state').innerHTML = state;
        document.querySelector('#container').setAttribute("class", state);
    }

    function setNewState(state) {
        if (typeof state == 'undefined' || state === ''){
            changeState();
            state = getState();
        }
        setStateInView(state);
        updateUrl(state);
    }

    window.setNewState = setNewState;
})();

window.onload = function(){
    var state = location.pathname.replace("/", "");
    setNewState(state);
};