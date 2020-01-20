class Direwolf {

  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name
    this.home = home
    this.size = size
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.huntsWhiteWalkers = false
      stark.safe = true
      this.starksToProtect.push(stark)
    }
  }

  leave(stark) {
    stark.safe = false;
    (this.starksToProtect).splice((this.starksToProtect.indexOf(stark)), 1)
  }
}

module.exports = Direwolf;
