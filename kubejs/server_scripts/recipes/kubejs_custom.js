ServerEvents.recipes(e => {
	e.recipes.create.deploying('kubejs:bifrost_sword', ['kubejs:unstable_alloy_sword', 'botania:rainbow_rod'])
	e.recipes.create.mixing(Fluid.of('kubejs:liquid_redstone', 100), ['minecraft:redstone']).heated()
	e.recipes.create.mixing('kubejs:redstone_alloy', ['kubejs:redstone_crystal', 'create:brass_nugget']).superheated()
	e.recipes.create.mixing('4x kubejs:chicken_nuggies', [Fluid.water(500), 'minecraft:chicken', 'minecraft:egg', '2x create:wheat_flour', '2x #forge:dusts/salt']).heated()
    e.recipes.create.mixing(Fluid.of('kubejs:molten_moon_cheese', 500), ['ad_astra:cheese']).heated()
    e.recipes.create.mixing(Fluid.of('kubejs:molten_iron', 500), ['minecraft:iron_ingot']).heated()
    e.recipes.create.mixing('2x kubejs:moon_cheese_alloy', [Fluid.of('kubejs:molten_moon_cheese', 500), Fluid.of('kubejs:molten_iron', 500)])
    e.recipes.create.mixing('2x kubejs:reinforced_moon_cheese_alloy', ['kubejs:moon_cheese_alloy', '#forge:ingots/steel']).heated()
	e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy'
    ], 'kubejs:condensed_alloy', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy',['kubejs:incomplete_unstable_alloy', '#forge:ingots/osmium']),
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy',['kubejs:incomplete_unstable_alloy', '#forge:ingots/lead']),
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy',['kubejs:incomplete_unstable_alloy', '#forge:ingots/uranium']),
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy',['kubejs:incomplete_unstable_alloy', 'minecraft:diamond']),
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy',['kubejs:incomplete_unstable_alloy', 'minecraft:netherite_ingot']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy','kubejs:incomplete_unstable_alloy')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy').loops(8)
	e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy_sword'
    ], 'minecraft:netherite_sword', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy_sword',['kubejs:incomplete_unstable_alloy_sword', 'kubejs:unstable_alloy']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy_sword','kubejs:incomplete_unstable_alloy_sword')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy_sword').loops(1)
    e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy_axe'
    ], 'minecraft:netherite_axe', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy_axe',['kubejs:incomplete_unstable_alloy_axe', 'kubejs:unstable_alloy']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy_axe','kubejs:incomplete_unstable_alloy_axe')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy_axe').loops(1)
    e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy_pickaxe'
    ], 'minecraft:netherite_pickaxe', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy_pickaxe',['kubejs:incomplete_unstable_alloy_pickaxe', 'kubejs:unstable_alloy']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy_pickaxe','kubejs:incomplete_unstable_alloy_pickaxe')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy_pickaxe').loops(1)
    e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy_shovel'
    ], 'minecraft:netherite_shovel', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy_shovel',['kubejs:incomplete_unstable_alloy_shovel', 'kubejs:unstable_alloy']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy_shovel','kubejs:incomplete_unstable_alloy_shovel')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy_shovel').loops(1)
    e.recipes.create.sequenced_assembly([
        'kubejs:unstable_alloy_hoe'
    ], 'minecraft:netherite_hoe', [
        e.recipes.createDeploying('kubejs:incomplete_unstable_alloy_hoe',['kubejs:incomplete_unstable_alloy_hoe', 'kubejs:unstable_alloy']),
        e.recipes.createPressing('kubejs:incomplete_unstable_alloy_hoe','kubejs:incomplete_unstable_alloy_hoe')
    ]).transitionalItem('kubejs:incomplete_unstable_alloy_hoe').loops(1)
	e.recipes.create.item_application('kubejs:condensed_casing', ['#forge:stone', 'kubejs:condensed_alloy'])
	e.recipes.create.item_application('kubejs:amethyst_casing', ['#forge:stripped_wood', 'kubejs:amethyst_alloy'])
	e.recipes.create.item_application('kubejs:amethyst_casing', ['#forge:stripped_logs', 'kubejs:amethyst_alloy'])
	e.custom({"type": "create:filling",
	"ingredients": [
	{"item": "minecraft:iron_nugget"},
	{"fluidTag": 'forge:redstone', "amount": 100}
	 ]
	  ,
	"results": [{"item": "kubejs:redstone_crystal"}]
	})
	e.custom({"type": "thermal:bottler",
	"ingredients": 
	[
    {"item": "minecraft:iron_nugget"},
    {"fluid_tag": "forge:redstone", "amount": 100}
	],
	"result": [{"item": "kubejs:redstone_crystal"}]
	})
	e.custom({"type": "thermal:crystallizer",
		"ingredients": [{"fluid": "minecraft:water","amount": 2000}, {"item": "minecraft:redstone"}],
		"result": [{"item": "kubejs:redstone_crystal"}]
	})
	e.custom({"type": "thermal:smelter",
		"ingredients": [
			{"item": "kubejs:redstone_alloy", "count": 1},
			{"tag": "forge:gems/lapis", "count": 2},
			{"value": [{"tag": "forge:ingots/tin"},{"tag": "forge:dusts/tin"}],"count": 1},
		],
		"result": [{"item": "kubejs:condensed_alloy", "count": 4}],
		"energy": 32000
	})
	e.custom({"type": "thermal:smelter",
		"ingredients": [
			{"item": "kubejs:redstone_crystal", "count": 1},
			{"tag": "forge:nuggets/brass", "count": 1},
		],
		"result": [{"item": "kubejs:redstone_alloy", "count": 1}],
		"energy": 32000
	})
	e.custom({"type": "create:sequenced_assembly",
		"ingredient": {"item": "create:andesite_alloy"},
		"loops": 1,
		"results": {"item": "kubejs:simple_mechanism"},
		"sequence": [{
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_simple_mechanism"},
					{"item": "create:cogwheel"}
				],
				"results": [{"item": "kubejs:incomplete_advanced_mechanism"}]
			},
	],
	"transitionalItem": {"item": "kubejs:incomplete_simple_mechanism"}
	})
	e.custom({"type": "create:sequenced_assembly",
		"ingredient": {"tag": "forge:plates/steel"},
			"loops": 3,
				"results": [
					{"chance": 140.0, "item": "kubejs:advanced_mechanism"},
					{"chance": 8.0, "item": "kubejs:steel_plate"},
					{"chance": 8.0, "item": "kubejs:steel_ingot"},
					{"chance": 8.0, "item": "kubejs:redstone_crystal"},
					{"chance": 5.0, "item": "kubejs:steel_gear"},
					{"chance": 3.0, "item": "minecraft:iron_ingot"},
					{"chance": 3.0, "item": "minecraft:redstone"},
					{"chance": 1.0, "item": "minecraft:compass"}
				],
		"sequence": [{
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_advanced_mechanism"},
					{"item": "kubejs:steel_gear"}
				],
				"results": [{"item": "kubejs:incomplete_advanced_mechanism"}]
		},
		{	
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_advanced_mechanism"},
					{"item": "kubejs:steel_nugget"}
				],
				"results": [{"item": "kubejs:incomplete_advanced_mechanism"}]
		},
		{
			"type": "create:pressing",
				"ingredients": [{"item": "kubejs:incomplete_advanced_mechanism"}],
				"results": [{"item": "kubejs:incomplete_advanced_mechanism"}]
		}
		],
		"transitionalItem": {"item": "kubejs:incomplete_advanced_mechanism"}
		})
	e.custom({"type": "create:sequenced_assembly",
		"ingredient": {"tag": "forge:plates/invar"},
			"loops": 2,
				"results": [
					{"chance": 140.0, "item": "kubejs:power_management_mechanism"},
					{"chance": 8.0, "item": "thermal:invar_plate"},
					{"chance": 8.0, "item": "thermal:invar_ingot"},
					{"chance": 8.0, "item": "createaddition:copper_wire"},
					{"chance": 5.0, "item": "create:electron_tube"},
					{"chance": 3.0, "item": "minecraft:iron_ingot"},
					{"chance": 3.0, "item": "thermal:rf_coil"},
					{"chance": 1.0, "item": "minecraft:copper_ingot"}
				],
		"sequence": [{
				"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_power_management_mechanism"},
					{"item": "createaddition:copper_wire"}
				],
				"results": [{"item": "kubejs:incomplete_power_management_mechanism"}]
		},
		{
				"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_power_management_mechanism"},
					{"item": "create:electron_tube"}
				],
				"results": [{"item": "kubejs:incomplete_power_management_mechanism"}]
		},
		{
				"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_power_management_mechanism"},
					{"item": "thermal:rf_coil"}
				],
				"results": [{"item": "kubejs:incomplete_power_management_mechanism"}]
		},
		{
			"type": "create:pressing",
				"ingredients": [{"item": "kubejs:incomplete_power_management_mechanism"}],
				"results": [{"item": "kubejs:incomplete_power_management_mechanism"}]
		}
		],
		"transitionalItem": {"item": "kubejs:incomplete_power_management_mechanism"}
		})
		e.recipes.create.mixing('4x thermal:bronze_ingot', ['#forge:ingots/tin','3x #forge:ingots/copper']).heated()
})
