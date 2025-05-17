ServerEvents.recipes(e => {
	e.shapeless(
		Item.of('kubejs:steel_block'), 
			['9x kubejs:steel_ingot']
	)
	e.shapeless(
		Item.of('9x kubejs:steel_ingot'), 
			['kubejs:steel_block']
	)
	e.shapeless(
		Item.of('kubejs:steel_ingot'), 
			['9x kubejs:steel_nugget']
	)
	e.shapeless(
		Item.of('9x kubejs:steel_nugget'), 
			['kubejs:steel_ingot']
	)
	e.recipes.createPressing('kubejs:steel_plate','kubejs:steel_ingot')
	e.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"item": "kubejs:steel_ingot"}],
        "results": [{"item": "kubejs:steel_plate"}]
      })
    e.shaped(
    Item.of('kubejs:steel_gear'),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        B: 'minecraft:iron_nugget',
        A: 'kubejs:steel_ingot'
    })
	e.custom({
	"type": "thermal:press",
	"ingredients": [{"item": "kubejs:steel_ingot", "count": 4}, {"item": "thermal:press_gear_die"}],
	"result": [{"item": "kubejs:steel_gear"}]
	})
	e.custom({
	"type": "thermal:press",
	"ingredient": {"item": "kubejs:steel_ingot"},
	"result": [{"item": "kubejs:steel_plate"}]
	})
	e.custom({"type":"createaddition:rolling",
	"input": {"item": "kubejs:steel_ingot"},
	"result": {"item": "kubejs:steel_rod", "count": 2}
	})
	e.custom({"type": "createdieselgenerators:wire_cutting",
	"ingredients": [{"item": "kubejs:steel_ingot"}],
	"results": [{"item": "kubejs:steel_rod", "count": 1}]
	})
})