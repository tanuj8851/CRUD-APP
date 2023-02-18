function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}
// UserInfo.prototype.serveFood = function(food) {
//     return `Serving ${food} to ${this.name} in ${this.location}`;
// };

function serveFood(food) {}

function serveIn(name, location, food) {
    const userInfo = new UserInfo(name, location);
    return userInfo.serveFood.call({ name, location }, food);
}

function billNote() {}

function generateInVoice(name, location, quantity, price) {
    const userInfo = new UserInfo(name, location);
    const total = quantity * price;
    return userInfo.billNote.apply({ name, location }, [total]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };