function add(n){
    let s
    if(n==1) return n
    s=n+add(n-1)
    return s

}

console.log(add(5))