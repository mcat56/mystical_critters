class Wizard {

  constructor(info) {
    this.name = info.name
    this.bearded = "bearded" in info ? info.bearded : true
    this.isRested = true
    this.fatigue = 0
  }

  incantation(spell) {
    return spell.toUpperCase()
  }

  cast() {
    if (this.fatigue >= 3) {
      return 'I SHALL NOT CAST!'
    } else {
      this.fatigue += 1
      if (this.fatigue === 3) {
        this.isRested = false
      }
      return 'MAGIC BULLET'
    }
  }
}

module.exports = Wizard;
