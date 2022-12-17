function merge(a,b){
    let i=0,j=0,k=0
    let c=[]
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            c[k++]=a[i++]
        }else{
            c[k++]=b[j++]
        }

    }

    for(;i<a.length;i++){
        c[k++]=a[i]
    }

    for(;j<b.length;j++){
        c[k++]=b[j]
    }
    return c
}

const a=[2,6,8,9,11,14]
const b=[1,3,7,15]
console.log(merge(a,b))

