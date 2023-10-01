const mySelf = {

    //property
    name : "MMM",
    age : 26,
    isSingle : true,

    //method
    teach : function(what , where) {
        return "I can teach " + what + " at " +where ;
    },

    //ES6
    learn(what) {
        return "I can learn" + what;
    }
}

console.log(mySelf.teach("Frontend development", "MMSIT"));
console.log(mySelf.learn("frontend development"));
