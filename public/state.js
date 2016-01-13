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
        Wix.pushState(state);
    }

    function setStateInView(state){
        document.querySelector('#state').innerHTML = state;
        document.querySelector('#container').setAttribute('class', state);
    }

    function setNewState(state) {
        if (typeof state == 'undefined' || state === ''){
            changeState();
            state = getState();
        }
        setStateInView(state);
    }

    function setNewStateFromButtonClick(state) {
        setNewState(state);
        updateUrl(state);
    }

    function setStateFromUrl(){
        var state = location.pathname.replace('/', '');
        state = state === '' ? 'initial state' : state;
        setNewState(state);
    }

    window.state = {
        setNewStateFromButtonClick: setNewStateFromButtonClick,
        setStateFromUrl: setStateFromUrl
    };
})();

window.onload = function(){
    state.setStateFromUrl();
};