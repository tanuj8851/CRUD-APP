function Artist(name, skill, profession) {
    this.name = name;
    this.skill = skill;
    this.profession = profession;
    Object.setPrototypeOf(artistsObject, this);
}

Artist.prototype.getProfession = function() {
    return this.profession;
}

Artist.prototype.print = function() {
    return `I am ${this.name}`;
}

var artistsObject = {}
let A1 = new Artist("name", "skill", "profession");
let A2 = Object.create(artistsObject);
Object.setPrototypeOf(A2, A1)


// Do not change this
export { Artist, artistsObject };