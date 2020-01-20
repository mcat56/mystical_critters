class Fairy {

  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust += 10
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious'
      this.humanWards.push(infant)
      if (this.humanWards.length === 3) {
        this.disposition = 'Good natured'
      }
    } else {
      return infant
    }
  }
  // makeDresses(array){
  //   array.forEach(function(element) {
  //     this.clothes["dresses"].push(element)
  //   }, this)
  // }

  makeDresses(array){
    for (var i = 0; i<array.length; i++) {
      this.clothes["dresses"].push(array[i])
    }
  }
}

module.exports = Fairy;
