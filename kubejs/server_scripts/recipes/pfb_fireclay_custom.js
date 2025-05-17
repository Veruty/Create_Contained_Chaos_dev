ServerEvents.recipes(e => {
	e.shaped(
	Item.of('4x kubejs:fireclay'),
	[
		'121',
		'232',
		'121'
	],
	{
		1: 'minecraft:clay_ball',
		2: '#forge:dusts/brick',
		3: '#forge:dusts/netherrack'
	})
	e.smelting('kubejs:firebrick', 'kubejs:fireclay')
	e.shaped(
	Item.of('kubejs:firebricks'),
	[
		'11',
		'11'
	],
	{
		1: 'kubejs:firebrick'
	})
	e.shaped(
	Item.of('mbd2:primitive_blast_furnace'),
	[
		'131',
		'323',
		'131'
	],
	{
		1: 'kubejs:firebrick',
		3: '#forge:plates/iron',
		2: 'minecraft:blast_furnace'
	})
	e.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"item": "minecraft:brick"}],
        "results": [{"item": "kubejs:brick_dust"}]
	})	
	e.recipes.create.crushing(["kubejs:brick_dust", Item.of("kubejs:brick_dust").withChance(0.5)], "minecraft:brick")
	e.recipes.mekanism.crushing("2x kubejs:brick_dust", "minecraft:brick")
	e.custom({"type": "thermal:pulverizer",
	"ingredients": [{"item": "minecraft:brick"}],
        "results": [{"item": "kubejs:brick_dust"}]
	})
	e.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"item": "minecraft:netherrack"}],
        "results": [{"item": "kubejs:netherrack_dust"}]
	})	
	e.recipes.mekanism.crushing("2x kubejs:netherrack_dust", "minecraft:netherrack")
	e.custom({"type": "thermal:pulverizer",
	"ingredients": [{"item": "minecraft:netherrack"}],
        "results": [{"item": "kubejs:netherrack_dust"}]
	})
	e.recipes.create.milling("kubejs:netherrack_dust", "minecraft:netherrack")
	e.recipes.create.milling("kubejs:brick_dust", "minecraft:brick") // 01.05.25 Veruty: i think create 6 mightve broken something (nvm it just working but very stupidly)
})