ServerEvents.recipes(e => {
	e.recipes.create.mixing(Fluid.of('kubejs:liquid_amethyst', 100), ['minecraft:amethyst_shard']).heated()
	e.custom({"type": "create:filling",
	"ingredients": [
	{"item": "minecraft:iron_nugget"},
	{"fluid": 'kubejs:liquid_amethyst', "amount": 100}
	 ]
	  ,
	"results": [{"item": "kubejs:amethyst_alloy"}]
	})
	e.custom({"type": "thermal:bottler",
	"ingredients": 
	[
    {"item": "minecraft:iron_nugget"},
    {"fluid": "kubejs:liquid_amethyst", "amount": 100}
	],
	"result": [{"item": "kubejs:amethyst_alloy"}]
	})
	e.custom({"type": "thermal:crucible",
	"ingredient": {"item": "minecraft:amethyst_shard"},
	"result": [{"fluid": "kubejs:liquid_amethyst", "amount": 100}],
	"energy": 8000
	})
	e.custom({"type": "thermal:crucible",
	"ingredient": {"tag": "forge:storage_blocks/amethyst"},
	"result": [{"fluid": "kubejs:liquid_amethyst", "amount": 400}],
	"energy": 32000
	})
	e.custom({"type": "thermal:chiller",
	"ingredient": {"fluid": "kubejs:liquid_amethyst", "amount": 400},
	"result": [{"item": "minecraft:amethyst_block"}],
	"energy": 72000
	})
	e.custom({"type": "thermal:crystallizer",
		"ingredients": [{"fluid": "minecraft:water","amount": 2000}, {"item": "minecraft:amethyst_shard","amount":2}],
		"result": [{"item": "minecraft:amethyst_shard"}]
	})
})
