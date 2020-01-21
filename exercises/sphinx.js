class Sphinx {

  constructor() {
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3 ) {
      this.riddles.push(riddle)
    } else {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(guess) {
    let correct = 0
    let riddle_count = this.riddles.length
    for (var i = 0; i < riddle_count; i++) {
      if (this.riddles[i].answer === guess) {
        (this.riddles).splice(this.riddles.indexOf(i), 1)
        correct += 1
        if (riddle_count === 1) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
        } else {
          return 'That wasn\'t that hard, I bet you don\'t get the next one'
        }
      }
    }
   if (correct === 0) {
     this.heroesEaten += 1
   }
  }
}

module.exports = Sphinx;
