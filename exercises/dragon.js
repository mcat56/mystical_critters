class Dragon {

  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.fullness = 0
  }

  eat() {
    this.fullness += 1
    if (this.fullness === 3) {
      this.hungry = false
    }
  }
}

module.exports = Dragon;
