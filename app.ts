
function totalLength (x:string, y:string) : number
function totalLength (x:Array<any>, y:Array<any>) : number
function totalLength (x:(string | Array<any>), y:(string | Array<any>)) : number {
    let xLength : number = x.length
    let yLength : number = y.length
    
    if (x instanceof Array) { 
        x.push('abc') 
    }
    
    if (x instanceof String) { 
        x.substring(0,5) 
    }

    return xLength + yLength
}

