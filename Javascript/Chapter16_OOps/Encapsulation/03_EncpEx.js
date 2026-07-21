class Token{

#value

constructor(val){
    this.#value=val
}

getToken(){
    return this.#value
}


getMasked(){
    return "***"+this.#value.slice(-4)
}

}

let t=new Token("abcdef12345")
console.log(t.getMasked()) //***2345
console.log(t.getToken())  //abcdef12345

console.log(t.value)  //undefined
