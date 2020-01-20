class Medusa {

  constructor(name) {
    this.name = name
    this.statues = []
  }

  stare(victim){
    if ( this.statues.length < 3 ) {
      this.statues.push(victim);
      victim.stoned = true;
    } else if ( this.statues.length == 3 ) {
      this.statues[0].stoned = false;
      this.statues.shift();
      this.statues.push(victim);
      victim.stoned = true;
    }
  }

}


module.exports = Medusa;
