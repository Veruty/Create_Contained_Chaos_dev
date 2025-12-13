
function pulverizer(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {"tag": input},
  "result": [{"item": output ,"count": count}]
})
})}

function pulverizerItem(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {"item": input},
  "result": [{"item": output ,"count": count}]
})
})}

function ieCrusher(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "immersiveengineering:crusher",
  "energy": 3000,
  "input": {"tag": input},
  "result": {"item": output,"count": count},
  "secondaries": []
})
})}

function ieCrusherItem(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "immersiveengineering:crusher",
  "energy": 3000,
  "input": {"item": input},
  "result": {"item": output,"count": count},
  "secondaries": []
})
})}

function mekaCrusher(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "mekanism:crushing",
  "input": {"ingredient": {"tag": input}},
  "output": {"count": count,"item": output}
})
})}

function mekaCrusherItem(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "mekanism:crushing",
  "input": {"ingredient": {"item": input}},
  "output": {"count": count,"item": output}
})
})}

pulverizerItem('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 1)
pulverizerItem('ae2:fluix_crystal', 'ae2:fluix_dust',  1)
pulverizerItem('ae2:sky_stone_block', 'ae2:sky_dust',  1)
pulverizerItem('ae2:smooth_sky_stone_block', 'ae2:sky_stone_block', 1)
pulverizer('minecraft:coals', 'mekanism:dust_coal', 1)
pulverizer('forge:coal_coke', 'immersiveengineering:dust_coke', 1)
pulverizer('forge:gems/fluorite', 'mekanism:dust_fluorite', 1)
pulverizer('forge:charcoal', 'mekanism:dust_charcoal', 1)

ieCrusherItem('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 1)
ieCrusherItem('ae2:fluix_crystal', 'ae2:fluix_dust',  1)
ieCrusherItem('ae2:sky_stone_block', 'ae2:sky_dust',  1)
ieCrusherItem('ae2:smooth_sky_stone_block', 'ae2:sky_stone_block', 1)
ieCrusher('forge:gems/sulfur', 'thermal:sulfur_dust', 1)
ieCrusherItem('minecraft:ender_pearl', 'thermal:ender_pearl_dust', 1)
ieCrusher('forge:ingots/netherite', 'thermal:netherite_dust', 1)
ieCrusher('forge:gems/lapis', 'thermal:lapis_dust', 1)
ieCrusher('forge:gems/diamond', 'thermal:diamond_dust', 1)
ieCrusher('forge:gems/emerald', 'thermal:emerald_dust', 1)
ieCrusher('forge:gems/quartz', 'thermal:quartz_dust', 1)
pulverizer('forge:charcoal', 'mekanism:dust_charcoal', 1)
ieCrusher('forge:gems/fluorite', 'mekanism:dust_fluorite', 1)

ServerEvents.recipes(event => {
event.recipes.createCrushing('thermal:rose_gold_dust', '#forge:ingots/rose_gold')
event.recipes.createCrushing('thermal:tin_dust', '#forge:ingots/tin')
event.recipes.createCrushing('thermal:lead_dust', '#forge:ingots/lead')
event.recipes.createCrushing('thermal:silver_dust', '#forge:ingots/silver')
event.recipes.createCrushing('thermal:nickel_dust', '#forge:ingots/nickel')
event.recipes.createCrushing('thermal:bronze_dust', '#forge:ingots/bronze')
event.recipes.createCrushing('thermal:electrum_dust', '#forge:ingots/electrum')
event.recipes.createCrushing('thermal:invar_dust', '#forge:ingots/invar')
event.recipes.createCrushing('thermal:constantan_dust', '#forge:ingots/constantan')
event.recipes.createCrushing('thermal:sulfur_dust', '#forge:gems/sulfur')
event.recipes.createCrushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
event.recipes.createCrushing('thermal:iron_dust', '#forge:ingots/iron')
event.recipes.createCrushing('thermal:gold_dust', '#forge:ingots/gold')
event.recipes.createCrushing('thermal:copper_dust', '#forge:ingots/copper')
event.recipes.createCrushing('thermal:netherite_dust', '#forge:ingots/netherite')
event.recipes.createCrushing('thermal:lapis_dust', '#forge:gems/lapis')
event.recipes.createCrushing('thermal:emerald_dust', '#forge:gems/emerald')
event.recipes.createCrushing('thermal:quartz_dust', '#forge:gems/quartz')
event.recipes.createCrushing('mekanism:dust_coal', '#minecraft:coals')
event.recipes.createCrushing('mekanism:dust_charcoal', '#forge:charcoal')
event.recipes.createCrushing('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum')
event.recipes.createCrushing('mekanism:dust_fluorite', '#forge:gems/fluorite')
})

mekaCrusher('forge:ingots/rose_gold', 'thermal:rose_gold_dust', 1)
mekaCrusher('forge:ingots/silver', 'thermal:silver_dust', 1)
mekaCrusher('forge:ingots/nickel', 'thermal:nickel_dust', 1)
mekaCrusher('forge:ingots/electrum', 'thermal:electrum_dust', 1)
mekaCrusher('forge:ingots/invar', 'thermal:invar_dust', 1)
mekaCrusher('forge:ingots/constantan', 'thermal:constantan_dust', 1)
mekaCrusher('forge:gems/sulfur', 'thermal:sulfur_dust', 1)
mekaCrusherItem('minecraft:ender_pearl', 'thermal:ender_pearl_dust', 1)
mekaCrusher('forge:ingots/signalum', 'thermal:signalum_dust', 1)
mekaCrusher('forge:ingots/lumium', 'thermal:lumium_dust', 1)
mekaCrusher('forge:ingots/enderium', 'thermal:enderium_dust', 1)
mekaCrusher('forge:ingots/enderium', 'thermal:enderium_dust', 1)
mekaCrusher('forge:coal_coke', 'immersiveengineering:dust_coke', 1)
mekaCrusher('forge:ingots/aluminum', 'immersiveengineering:dust_aluminum', 1)

ServerEvents.recipes(event => {
event.shapeless(
  Item.of('thermal:sulfur_dust', 1),
  [
    '#forge:gems/sulfur',
    'immersiveengineering:hammer'
  ]
).damageIngredient("immersiveengineering:hammer", 1)
})