module FunctionInterfaces {
    interface jQuery {
        (selector : string) : HTMLElement
        version : number
    }

    let $ = <jQuery> function (selector) {
        // Find dom element.
    }

    let element = $('container')
}

