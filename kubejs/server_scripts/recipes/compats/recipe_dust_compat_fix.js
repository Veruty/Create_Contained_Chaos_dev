
//function pulverizer(input,output,count) {
//  ServerEvents.recipes(event => {
//	event.custom({
//  "type": "thermal:pulverizer",
//  "ingredient": {"tag": input},
//  "result": [{"item": output ,"count": count}]
//})
//})}
//
//function pulverizerItem(input,output,count) {
//  ServerEvents.recipes(event => {
//	event.custom({
//  "type": "thermal:pulverizer",
//  "ingredient": {"item": input},
//  "result": [{"item": output ,"count": count}]
//})
//})}

function ieCrusher(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "immersiveengineering:crusher",
  "energy": 3000,
  "input": {"tag": input},
  "result": {"id": output,"count": count}
})
})}

function ieCrusherItem(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "immersiveengineering:crusher",
  "energy": 3000,
  "input": {"item": input},
  "result": {"id": output,"count": count}
})
})}

function mekaCrusher(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "mekanism:crushing",
  "input": {"count": 1, "tag": input},
  "output": {"count": count,"id": output}
})
})}

function mekaCrusherItem(input,output,count) {
  ServerEvents.recipes(event => {
	event.custom({
  "type": "mekanism:crushing",
  "input": {"count": 1, "item": input},
  "output": {"count": count,"id": output}
})
})}

//pulverizerItem('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 1)
//pulverizerItem('ae2:fluix_crystal', 'ae2:fluix_dust',  1)
//pulverizerItem('ae2:sky_stone_block', 'ae2:sky_dust',  1)
//pulverizerItem('ae2:smooth_sky_stone_block', 'ae2:sky_stone_block', 1)
//pulverizer('minecraft:coals', 'mekanism:dust_coal', 1)
//pulverizer('c:coal_coke', 'immersiveengineering:dust_coke', 1)
//pulverizer('c:gems/fluorite', 'mekanism:dust_fluorite', 1)
//pulverizer('c:charcoal', 'mekanism:dust_charcoal', 1)

ieCrusherItem('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 1)
ieCrusherItem('ae2:fluix_crystal', 'ae2:fluix_dust',  1)
ieCrusherItem('ae2:sky_stone_block', 'ae2:sky_dust',  1)
ieCrusherItem('ae2:smooth_sky_stone_block', 'ae2:sky_stone_block', 1)
//ieCrusher('c:gems/sulfur', 'thermal:sulfur_dust', 1)
//ieCrusherItem('minecraft:ender_pearl', 'thermal:ender_pearl_dust', 1)
//ieCrusher('c:ingots/netherite', 'thermal:netherite_dust', 1)
//ieCrusher('c:gems/lapis', 'thermal:lapis_dust', 1)
//ieCrusher('c:gems/diamond', 'thermal:diamond_dust', 1)
//ieCrusher('c:gems/emerald', 'thermal:emerald_dust', 1)
//ieCrusher('c:gems/quartz', 'thermal:quartz_dust', 1)
//pulverizer('c:charcoal', 'mekanism:dust_charcoal', 1)
ieCrusher('c:gems/fluorite', 'mekanism:dust_fluorite', 1)

ServerEvents.recipes(event => {
//event.recipes.createCrushing('thermal:rose_gold_dust', '#c:ingots/rose_gold')
//event.recipes.createCrushing('thermal:tin_dust', '#c:ingots/tin')
//event.recipes.createCrushing('thermal:lead_dust', '#c:ingots/lead')
//event.recipes.createCrushing('thermal:silver_dust', '#c:ingots/silver')
//event.recipes.createCrushing('thermal:nickel_dust', '#c:ingots/nickel')
//event.recipes.createCrushing('thermal:bronze_dust', '#c:ingots/bronze')
//event.recipes.createCrushing('thermal:electrum_dust', '#c:ingots/electrum')
//event.recipes.createCrushing('thermal:invar_dust', '#c:ingots/invar')
//event.recipes.createCrushing('thermal:constantan_dust', '#c:ingots/constantan')
//event.recipes.createCrushing('thermal:sulfur_dust', '#c:gems/sulfur')
//event.recipes.createCrushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
//event.recipes.createCrushing('thermal:iron_dust', '#c:ingots/iron')
//event.recipes.createCrushing('thermal:gold_dust', '#c:ingots/gold')
//event.recipes.createCrushing('thermal:copper_dust', '#c:ingots/copper')
//event.recipes.createCrushing('thermal:netherite_dust', '#c:ingots/netherite')
//event.recipes.createCrushing('thermal:lapis_dust', '#c:gems/lapis')
//event.recipes.createCrushing('thermal:emerald_dust', '#c:gems/emerald')
//event.recipes.createCrushing('thermal:quartz_dust', '#c:gems/quartz')
event.custom({"type": "create:crushing","ingredients": [{"item":"minecraft:coal"}],"results": [{"id":"mekanism:dust_coal"}]})
event.custom({"type": "create:crushing","ingredients": [{"item":"minecraft:charcoal"}],"results": [{"id":"mekanism:dust_charcoal"}]})
event.custom({"type": "create:crushing","ingredients": [{"tag":"c:ingots/aluminum"}],"results": [{"id":"immersiveengineering:dust_aluminum"}]})
event.custom({"type": "create:crushing","ingredients": [{"tag":"c:gems/fluorite"}],"results": [{"id":"mekanism:dust_fluorite"}]})
})

//mekaCrusher('c:ingots/rose_gold', 'thermal:rose_gold_dust', 1)
//mekaCrusher('c:ingots/silver', 'thermal:silver_dust', 1)
//mekaCrusher('c:ingots/nickel', 'thermal:nickel_dust', 1)
//mekaCrusher('c:ingots/electrum', 'thermal:electrum_dust', 1)
//mekaCrusher('c:ingots/invar', 'thermal:invar_dust', 1)
//mekaCrusher('c:ingots/constantan', 'thermal:constantan_dust', 1)
//mekaCrusher('c:gems/sulfur', 'thermal:sulfur_dust', 1)
//mekaCrusherItem('minecraft:ender_pearl', 'thermal:ender_pearl_dust', 1)
//mekaCrusher('c:ingots/signalum', 'thermal:signalum_dust', 1)
//mekaCrusher('c:ingots/lumium', 'thermal:lumium_dust', 1)
//mekaCrusher('c:ingots/enderium', 'thermal:enderium_dust', 1)
//mekaCrusher('c:ingots/enderium', 'thermal:enderium_dust', 1)
mekaCrusher('c:coal_coke', 'immersiveengineering:dust_coke', 1)
mekaCrusher('c:ingots/aluminum', 'immersiveengineering:dust_aluminum', 1)

//ServerEvents.recipes(event => {
//event.shapeless(
//  Item.of('thermal:sulfur_dust', 1),
//  [
//    '#c:gems/sulfur',
//    'immersiveengineering:hammer'
//  ]
//).damageIngredient("immersiveengineering:hammer", 1)
//})