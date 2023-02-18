function Artist(name, skill, profession) {
    this.name = name;
    this.skill = skill;
    this.profession = profession;
}
Artist.prototype.getProfession = function() {
    return this.profession;
};

// Method to print artist name
Artist.prototype.print = function() {
    return "I am " + this.name;
};

var artistsObject = Object.create(Artist)
    // const artist2 = ;

// Do not change this
export { Artist, artistsObject };