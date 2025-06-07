ServerEvents.recipes(e => {
	console.log('randomshitfixes.js has loaded (probably idk)')
	
	//sifter ban
	
	//e.remove({ id: 'createsifter:andesite_mesh' })
	//e.remove({ id: 'createsifter:zinc_mesh' })
	//e.remove({ id: 'createsifter:brass_mesh' })
	//e.remove({ id: 'createsifter:advanced_brass_mesh' })
	//e.remove({ id: 'createsifter:sifting/sand_string_mesh' })
	
	//pig iron - steel fix
	
	e.remove({ id: 'blocksyouneed_luna:pig_iron' })
	e.shapeless(
		Item.of('blocksyouneed_luna:pig_iron_ingot', 8),
		[
		'8x minecraft:iron_ingot',
		'minecraft:coal'
		]
	)
	e.remove({ id: 'createdieselgenerators:crafting/oil_barrel' })
	e.shaped('createdieselgenerators:oil_barrel', [
		'I  ',
		' B ',
		'  I'
	], {
		I: '#forge:plates/iron',
		B: 'minecraft:barrel',

	})
	e.remove({ id: 'mekanism:separator/water' })
	e.custom({"type":"mekanism:separating","input":{"amount":2,"fluid":"minecraft:water"},"leftGasOutput":{"amount":2,"gas":"mekanism:hydrogen"},"rightGasOutput":{"amount":1,"gas":"mekanism:oxygen"}})
})