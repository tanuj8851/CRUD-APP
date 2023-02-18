class Mobile {
    constructor(model, number, unlockPin) {
        this.model = model;
        this.number = number;

        let _unlockPin = unlockPin; // underscore is used to indicate a private property

        this.getUnlockPin = function() {
            return _unlockPin;
        };

        this.setUnlockPin = function(newPin) {
            _unlockPin = newPin;
        };

        this.sendSMS = function(message) {
            return message;
        };
    }
}

export default Mobile