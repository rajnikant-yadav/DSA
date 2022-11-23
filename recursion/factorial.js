function fact(n){
    let facftorial
    if(n===0 || n===1)
    return 1

    facftorial=n*fact(n-1)
    return facftorial
}

console.log(fact(5))