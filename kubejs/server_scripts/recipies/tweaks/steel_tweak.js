ServerEvents.recipes((e) => {
  e.remove({ id: "ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals" })
  e.remove({ id: "ad_astra:compressing/steel_plate_from_compressing_steel_ingots" })
  e.remove({ id: "ad_astra:compressing/steel_plate_from_compressing_steel_blocks" })

})
 // ??.02.25 Veruty: have no idea why do i need to make it at this event but it doesnt work with second one
//ServerEvents.recipes(event => {
	//event.custom({
	//	type: 'createmetallurgy:casting_in_table',
	//	ingredients: [
	//		{ item: 'createmetallurgy:graphite_ingot_mold'},
	//		{ fluid: 'createmetallurgy:molten_steel', amount: 90 }
	//	],
//	processingTime: 60,
//	result: { item: 'mekanism:ingot_steel'}
//	})
// ??.02.25 Veruty: i had so much trouble cuz i wrote )} instead of })
// 02.04.25 Veruty: so coool, we removed the metalurgy so the code above is just useless
ServerEvents.recipes(event => {
	event.remove({ output: 'blocksyouneed_luna:steel_block' })
	event.remove({ output: 'blocksyouneed_luna:steel_ingot' })
	event.remove({ output: 'ad_astra:steel_block' })
	event.remove({ output: 'ad_astra:steel_ingot' })
	event.remove({ output: 'ad_astra:steel_plate' })
	event.remove({ output: 'ad_astra:steel_nugget' })
	event.remove({ output: 'davebuildingmod:steel_block' })
	event.remove({ output: 'davebuildingmod:steel_ingot' })
	event.remove({ output: 'createmetallurgy:coke' })

})
// 03.03.25 Veruty: ok wtf, i added almost unified, and it fixed like everything, i am scared
