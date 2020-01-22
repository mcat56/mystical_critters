class Centaur {

  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.tired = 0
    this.layingDown = false
  }

  shoot() {
    if ( this.tired >= 3) {
      return 'NO!'
    } else if (this.layingDown === true ) {
      return 'NO!'
    } else {
      this.tired += 1
      if ( this.tired >= 3) {
        this.cranky = true
      }
      return 'Twang!!!'
    }
  }

  run() {
    if (this.layingDown === true) {
      return 'NO!'
    } else {
      this.tired += 1
      if ( this.tired >= 3) {
        this.cranky = true
      }
    }
    return 'Clop clop clop clop!!!'
  }

  layDown() {
    this.layingDown = true
    this.standing = false
  }

  standUp() {
    this.layingDown = false
    this.standing = true
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.tired = 0
      this.cranky = false
      return 'ZZZZ'
    }
  }

  drinkPotion() {
    if (this.standing === true) {
      if (this.cranky === false) {
        this.cranky = true
      } else {
        this.tired = 0
        this.cranky = false  
      }
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}
module.exports = Centaur;
