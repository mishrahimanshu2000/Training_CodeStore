// Read about generics in TS and implement it.

// generic class
class KeyVal<T1>{
    // generic variable
    private val : T1 |undefined;  
    // Function with generic argument
    public setVal(v : T1){
        this.val = v;
    }
    // Function with h=generic return value
    public getVal(): T1|undefined{
        return this.val;
    }
}

let kv = new KeyVal<string>();
kv.setVal("Himanshu");
console.log(kv.getVal())