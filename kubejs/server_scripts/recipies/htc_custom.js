ServerEvents.recipes(e => {
	e.shapeless(
		Item.of('kubejs:ht_cupronickel_block'), 
			['9x kubejs:ht_cupronickel_ingot']
	)
	e.shapeless(
		Item.of('9x kubejs:ht_cupronickel_ingot'), 
			['kubejs:ht_cupronickel_block']
	)
	e.shapeless(
		Item.of('kubejs:ht_cupronickel_ingot'), 
			['9x kubejs:ht_cupronickel_nugget']
	)
	e.shapeless(
		Item.of('9x kubejs:ht_cupronickel_nugget'), 
			['kubejs:ht_cupronickel_ingot']
	)
	e.recipes.createPressing('kubejs:ht_cupronickel_plate','kubejs:ht_cupronickel_ingot')
	e.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"item": "kubejs:ht_cupronickel_ingot"}],
        "results": [{"item": "kubejs:ht_cupronickel_plate"}]
      })
	e.shaped(
    Item.of('kubejs:ht_cupronickel_dust', 4),
    [
        'AAA',
        'AAB',
        'BC '
    ],
    {
        C: '#forge:dusts/netherite',
        A: '#forge:dusts/copper',
        B: '#forge:dusts/nickel'
    })
	e.custom({
	"type": "thermal:press",
	"ingredient": {"item": "kubejs:ht_cupronickel_ingot"},
	"result": [{"item": "kubejs:ht_cupronickel_plate"}]
	})
	e.shaped(
    Item.of('kubejs:ht_cupronickel_coil'),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        B: 'kubejs:steel_rod',
        A: 'kubejs:ht_cupronickel_wire'
    })
	e.custom({"type":"createaddition:rolling",
	"input": {"item": "kubejs:ht_cupronickel_plate"},
	"result": {"item": "kubejs:ht_cupronickel_wire", "count": 2}
	})
	e.custom({"type": "createdieselgenerators:wire_cutting",
	"ingredients": [{"item": "kubejs:ht_cupronickel_plate"}],
	"results": [{"item": "kubejs:ht_cupronickel_wire", "count": 1}]
	})
	e.recipes.create.mixing(['kubejs:ht_cupronickel_ingot'], ['kubejs:ht_cupronickel_dust', Fluid.lava(1000)]).superheated()
	e.custom({"type": "thermal:smelter",
		"ingredients": [
			{"value": [{"tag": "forge:ingots/copper"}, {"tag": "forge:dusts/copper"}],"count": 5},
			{"value": [{"tag": "forge:ingots/nickel"},{"tag": "forge:dusts/nickel"}],"count": 2},
			{"value": [{"tag": "forge:ingots/netherite"},{"tag": "forge:dusts/netherite"}],"count": 1},
		],
		"result": [{"item": "kubejs:ht_cupronickel_ingot", "count": 4}],
		"energy": 54000
	})
})