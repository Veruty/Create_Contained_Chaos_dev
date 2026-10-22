ServerEvents.recipes(e => {

//unstable

	e.custom({"type": "immersiveengineering:arc_furnace",
  		"additives": [{"item": 'create:shadow_steel'},{"item": 'create_new_age:radioactive_thorium'}],
 		"energy": 51200,
  		"input": {"item": 'create:refined_radiance'},
  		"results": [{"id": "kubejs:unstable_alloy","count": 2}],
  		"time": 100})
		
//sword and tools

	e.recipes.create.deploying('kubejs:bifrost_sword', ['kubejs:unstable_alloy_sword', 'botania:rainbow_rod'])
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

//chimken nugis

e.recipes.create.mixing('4x kubejs:chicken_nuggies', [Fluid.water(500), 'minecraft:chicken', 'minecraft:egg', '2x create:wheat_flour', '2x #c:dusts/salt']).heated()

//redstone things

	e.recipes.create.mixing(Fluid.of('kubejs:liquid_redstone', 100), ['minecraft:redstone']).heated()
	e.recipes.create.mixing('kubejs:redstone_alloy', ['kubejs:redstone_crystal', 'create:brass_nugget']).superheated()
	//e.custom({"type": "thermal:crystallizer",
	//"ingredients": [{"fluid": "minecraft:water","amount": 2000}, {"item": "minecraft:redstone"}],
	//"result": [{"item": "kubejs:redstone_crystal"}]})
	//e.custom({"type": "thermal:smelter",
	//"ingredients": [{"item": "kubejs:redstone_crystal", "count": 1},{"tag": "c:nuggets/brass", "count": 1},],
	//"result": [{"item": "kubejs:redstone_alloy", "count": 1}],
	//"energy": 10000})
	e.custom({"type": "create:filling",
		"ingredients": [{"item": "minecraft:iron_nugget"},{"type":"neoforge:tag","amount":100,"tag":"c:redstone"}],
		"results": [{"id": "kubejs:redstone_crystal"}]})
	//e.custom({"type": "thermal:bottler",
	//	"ingredients":[{"item": "minecraft:iron_nugget"},{"fluid_tag": "c:redstone", "amount": 100}],
	//	"result": [{"item": "kubejs:redstone_crystal"}]})
	
//amethyst things

    e.custom({
    "type": "create:item_application",
    "ingredients": [{"tag":"c:stripped_woods"},{"item":"kubejs:amethyst_alloy"}],
    "results": [{"id":"kubejs:amethyst_casing"}]})
	e.custom({
    "type": "create:item_application",
    "ingredients": [{"tag":"c:stripped_logs"},{"item":"kubejs:amethyst_alloy"}],
    "results": [{"id":"kubejs:amethyst_casing"}]})

//condensed

    e.custom({
    "type": "create:item_application",
    "ingredients": [{"tag":"c:stones"},{"item":"kubejs:condensed_alloy"}],
    "results": [{"id":"kubejs:condensed_casing"}]})
	
	//e.custom({"type": "thermal:smelter",
	//	"ingredients": [{"item": "kubejs:amethyst_alloy", "count": 1},{"tag": "c:ingots/manasteel", "count": 1},],
	//	"result": [{"item": "kubejs:condensed_alloy", "count": 2}],
	//	"energy": 12000})
	e.recipes.create.mixing('2x kubejs:condensed_alloy', ['botania:manasteel_ingot','kubejs:amethyst_alloy']).heated()
		e.custom({"type": "immersiveengineering:alloy",
  		"input0": {"item": "botania:manasteel_ingot"},
  		"input1": {"item": "kubejs:amethyst_alloy"},
 		"result": {"id": "kubejs:condensed_alloy", "count": 2},
  		"time": 200})

//simple mechanism

e.custom(
  {
    "type": "create:sequenced_assembly",
    "ingredient": {"item":"create:cogwheel"},
    "loops": 2,
    "results": [{"id":"kubejs:simple_mechanism"}],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {"item":"kubejs:incomplete_simple_mechanism"},
          {"item":"create:andesite_alloy"}
        ],
        "results": [{"id":"kubejs:incomplete_simple_mechanism"}]
      },
      {
        "type": "create:pressing",
        "ingredients": [{"item":"kubejs:incomplete_simple_mechanism"}],
        "results": [{"id":"kubejs:incomplete_simple_mechanism"}]
      }
    ],
    "transitional_item": {"id":"kubejs:incomplete_simple_mechanism"}
  }
)

	
})
