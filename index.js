function receivesAFunction (callbackf) {
    callbackf();
    return "Good Job!"
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("Good Job!")
    }
}

function returnsANamedFunction() {
    let pokemon = function(){
    }
    return pokemon;
}