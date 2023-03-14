// Read about generics in TS and implement it.
// generic class
var KeyVal = /** @class */ (function () {
    function KeyVal() {
    }
    // Function with generic argument
    KeyVal.prototype.setVal = function (v) {
        this.val = v;
    };
    // Function with h=generic return value
    KeyVal.prototype.getVal = function () {
        return this.val;
    };
    return KeyVal;
}());
var kv = new KeyVal();
kv.setVal("Himanshu");
console.log(kv.getVal());
