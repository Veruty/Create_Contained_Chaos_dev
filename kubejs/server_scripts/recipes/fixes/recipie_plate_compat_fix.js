const thermal_type = [
	'steel',
	'rose_gold',
	'tin',
	'lead',
	'silver',
	'nickel',
	'bronze',
	'electrum',
	'invar',
	'constantan',
	'netherite',
	'signalum',
	'lumium',
	'enderium']

ServerEvents.recipes(event => {
	thermal_type.forEach(thermal_type => event.remove({ output: 'thermal:' + thermal_type + '_plate' }),)
	thermal_type.forEach(thermal_type => event.recipes.createPressing('thermal:' + thermal_type + '_plate','#forge:ingots/' + thermal_type).id('kjscreate:pressing/' + thermal_type + '_plate_from_' + thermal_type + '_ingot'))
	thermal_type.forEach(thermal_type =>
	event.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"tag": 'forge:ingots/' + thermal_type}],
        "results": [{"item": 'thermal:' + thermal_type + '_plate'}]}).id('kjscreatedieselgenerators:hammering/' + thermal_type + '_plate_from_' + thermal_type + '_ingot' ))
	thermal_type.forEach(thermal_type => 
		event.shapeless('thermal:' + thermal_type + '_plate', ['#forge:ingots/' + thermal_type,'immersiveengineering:hammer'])
		.id('kjsimmersiveengineering:crafting/' + thermal_type + '_plate_from_' + thermal_type + '_ingot' )
		.damageIngredient('immersiveengineering:hammer', 1)
	)
	thermal_type.forEach(thermal_type => 
		event.custom({"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": {"tag": 'forge:ingots/' + thermal_type},
  		"mold": "immersiveengineering:mold_plate",
  		"result": {"item": 'thermal:' + thermal_type + '_plate'}}) )
	//thermal_type.forEach(thermal_type => event.custom({"type": "thermal:press",
	//"ingredient": { "tag": 'forge:ingots/' + thermal_type},
	//"result": [{ "item": 'thermal:' + thermal_type + '_plate' }]
	//}).id('kjsthermal:press/' + thermal_type + '_plate_from_' + thermal_type + '_ingot' ))
})

const create_type = [
	'copper',
	'brass',
	'iron'
	//fuck the golden one i just hate it why did you call it golden and not a gold ahhhh stupid ass lang shit
]

ServerEvents.recipes(event => {
	create_type.forEach(create_type => event.remove({ output: 'create:' + create_type + '_sheet' }),)
	create_type.forEach(create_type => event.recipes.createPressing('create:' + create_type + '_sheet','#forge:ingots/' + create_type).id('kjscreate:pressing/' + create_type + '_sheet_from_' + create_type + '_ingot'))
	create_type.forEach(create_type =>
	event.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"tag": 'forge:ingots/' + create_type}],
        "results": [{"item": 'create:' + create_type + '_sheet'}]}).id('kjscreatedieselgenerators:hammering/' + create_type + '_sheet_from_' + create_type + '_ingot' ))
	create_type.forEach(create_type => 
		event.shapeless('create:' + create_type + '_sheet', ['#forge:ingots/' + create_type,'immersiveengineering:hammer'])
		.id('kjsimmersiveengineering:crafting/' + create_type + '_sheet_from_' + create_type + '_ingot' )
		.damageIngredient('immersiveengineering:hammer', 1)
	)
	create_type.forEach(create_type => 
		event.custom({"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": {"tag": 'forge:ingots/' + create_type},
  		"mold": "immersiveengineering:mold_plate",
  		"result": {"item": 'create:' + create_type + '_sheet'}}).id('kjsimmersiveengineering:metal_press/' + create_type + '_sheet_from_' + create_type + '_ingot' ))
	create_type.forEach(create_type => event.custom({"type": "thermal:press",
	"ingredient": { "tag": 'forge:ingots/' + create_type},
	"result": [{ "item": 'create:' + create_type + '_sheet' }]
	}).id('kjsthermal:press/' + create_type + '_sheet_from_' + create_type + '_ingot' ))

	//it might me a good idea to rewrite this whole thing as a function but i cannot be arsed rn
})