var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

class Witch {

  constructor(name) {
    this.name = name
    this.pantry = {}
    this.recipes = []
    this.potions = {}
  }

  collect(ingredient, quantity) {
    if (ingredient in this.pantry) {
      (this.pantry)[`${ingredient}`] += quantity
    } else {
      (this.pantry)[`${ingredient}`] = quantity
    }
  }

  learnRecipe(recipe) {
    if (this.recipes.includes(recipe)) {
      return `Already know: ${recipe.name}`
    } else {
      this.recipes.push(recipe)
      return `Learned: ${recipe.name}`
    }
  }

  brewPotion(recipe) {
    // function inPantry(ingredient) {
    //   this.pantry[`${ingredient}`] >= recipe.ingredients[`${ingredient}`]
    // }
    // let quantityInPantry = (checkStock) => { (Object.keys(recipe.ingredients)).every(inPantry()) }
    if (this.recipes.includes(recipe)) {
      if ( this.checkStock(recipe) ) {
        _.forEach(Object.keys(recipe.ingredients), (ingredient) => {
          this.pantry[`${ingredient}`] -= recipe.ingredients[`${ingredient}`]
        } )
        if (this.potions[`${recipe.name}`] > 0) {
          this.potions[`${recipe.name}`] += 1
        } else {
          this.potions[`${recipe.name}`] = 1
        }
        return `Brewed 1 ${recipe.name}`
      } else {
        let quantityFirst = (`${this.missingStock(recipe)}`).replace(/,/g, ' ' )
        let quantity = quantityFirst.trim()
        return `Not enough ingredients. Need: ${quantity}`
      }
    } else {
      return `Don't know recipe: ${recipe.name}`
    }
  }

  checkStock(recipe) {
    let inPantry = (ingredient) => {
      return this.pantry[`${ingredient}`] >= recipe.ingredients[`${ingredient}`]
    }
    return Object.keys(recipe.ingredients).every(inPantry)
  }

  missingStock(recipe) {
    return Object.keys(recipe.ingredients).map(ingredient => {
      if (Object.keys(this.pantry).includes(ingredient) && this.pantry[`${ingredient}`] < recipe.ingredients[`${ingredient}`]  ) {
        let quantity = recipe.ingredients[`${ingredient}`] - this.pantry[`${ingredient}`]
        return `(${quantity} ${ingredient})`
      } else if (!Object.keys(this.pantry).includes(ingredient)) {
        let quantity = recipe.ingredients[`${ingredient}`]
        return `(${quantity} ${ingredient})`
      }
    })
  }

}

module.exports = Witch;
