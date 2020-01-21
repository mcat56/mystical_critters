class Pirate {

  constructor(name, job = 'Scallywag') {
    this.name = name
    this.job = job
    this.cursed = false
    this.heinous_acts = 0
    this.booty = 0
  }

  commitHeinousAct() {
    this.heinous_acts += 1
    if (this.heinous_acts >= 3) {
      this.cursed = true
    }
  }

  robShip() {
    this.booty += 100
    return 'YAARRR!'
  }
}

module.exports = Pirate;
