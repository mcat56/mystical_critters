class Centaur {

  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.tired = 0
  }

  shoot() {
    if ( this.cranky = true) {
      return 'NO!'
    }
    this.tired += 1
    if ( this.tired >= 3) {
      this.cranky = true
    }
    return 'Twang!!!'
    }
  }

  run() {
    this.tired += 1
    if ( this.tired >= 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!'
  }
}


module.exports = Centaur;
