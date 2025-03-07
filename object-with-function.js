let person = {
    firstName : "anuj",
    lastName : "singh",
    age : 20,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }  
}

console.log(person.fullName())

// function call syntax : functionName()

