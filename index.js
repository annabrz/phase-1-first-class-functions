function receivesAFunction(callback){
    callback()
}


function returnsANamedFunction(){
    return function NamedFunction(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}
