let counter = {
    _value: 0,
    
    get value() {
        return this._value;
    },
    
    set value(newValue) {
        this._value = newValue;
        document.getElementById("counterValue").innerText = this._value;
    },

    increment() {
        this.value = this._value + 1;
    }
};
