ServerEvents.recipes(event =>{
event.shaped(
  'kubejs:shrinking_trinket',
  [' # ', '#A#', ' # '],
  { '#': 'minecraft:gold_ingot', 'A': 'kubejs:legal_diamond' }
).id('kubejs:shrinking_trinket')

event.shaped(
  'kubejs:growing_trinket',
  [' # ', '#A#', ' # '],
  { '#': 'minecraft:iron_ingot', 'A': 'kubejs:legal_diamond' }
).id('kubejs:growing_trinket')
})