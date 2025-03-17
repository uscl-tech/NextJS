
function fact(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}

module.exports = fact;
