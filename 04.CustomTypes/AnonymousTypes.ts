module AnonymousTypes {
    let todo: { name: string };
    
    function totalLength (x: { length: number }, y: { length: number }): number {
        let total: number = x.length + y.length;
        return total;
    }
}