ServerEvents.recipes(e => {
e.recipes.create.item_application('createbigcannons:creative_autocannon_ammo_container', ['createbigcannons:autocannon_ammo_container', 'kubejs:godly_alloy_unstable'])
//e.recipes.create.compacting('create:creative_motor', ['kubejs:almost_complete_creative_motor', 'minecraft:dragon_egg']).superheated()
//e.recipes.create.compacting('create:creative_fluid_tank', ['kubejs:almost_complete_creative_tank', 'minecraft:dragon_egg']).superheated()
//e.recipes.create.sequenced_assembly(
//    ['kubejs:almost_complete_creative_pool'], 
//    'botania:fabulous_pool',
//    [
//        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'kubejs:godly_alloy_mana_attuned']),
//        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'botania:gaia_ingot']),
//        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'botania:corporea_index'])
//    ]
//).transitionalItem('kubejs:incomplete_creative_pool').loops(5)
//e.recipes.create.sequenced_assembly(
//    ['kubejs:almost_complete_creative_motor'],
//    'create_new_age:reinforced_motor',
//    [
//        e.recipes.createDeploying('kubejs:incomplete_creative_motor',['kubejs:incomplete_creative_motor', 'kubejs:godly_alloy_energy_attuned']),
//        e.recipes.createDeploying('kubejs:incomplete_creative_motor',['kubejs:incomplete_creative_motor', 'minecraft:nether_star'])
//    ]
//).transitionalItem('kubejs:incomplete_creative_motor').loops(8)
//e.recipes.create.sequenced_assembly(
//    ['kubejs:almost_complete_creative_tank'],
//     'create:fluid_tank',
//     [
//        e.recipes.createDeploying('kubejs:incomplete_creative_tank',['kubejs:incomplete_creative_tank', 'kubejs:godly_alloy_fluid_attuned'])
//    ]
//).transitionalItem('kubejs:incomplete_creative_tank').loops(8)
e.shaped('create:creative_blaze_cake', 
    [
		'GGG',
		'GBG',
		'GGG'
	], 
    {
		G:'kubejs:unstable_godly_alloy',
		B: 'create:blaze_cake'
	})
e.recipes.create.sequenced_assembly(
    ['kubejs:unstable_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('thermal:refined_fuel', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', {fluidTag: "forge:diesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', {fluidTag: "forge:gasoline", amount: 1000}]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', {fluidTag: "forge:biodiesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('mekanismgenerators:fusion_fuel', 1000)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(10)
e.recipes.create.sequenced_assembly(
    ['kubejs:fluid_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('minecraft:lava', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('bloodmagic:life_essence_fluid', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('mekanism:uranium_hexafluoride', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('thermal:ender', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('createbigcannons:molten_nethersteel', 1000)]),
        e.recipes.createFilling('kubejs:incomplete_unstable_godly_alloy',['kubejs:incomplete_unstable_godly_alloy', Fluid.of('immersiveengineering:acetaldehyde', 1000)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(25)

e.recipes.botania.runic_altar("kubejs:botanic_godly_alloy",
    [
    "botania:rune_sloth",
    "botania:rune_wrath",
    "botania:rune_pride",
    "botania:rune_envy",
    "botania:rune_greed",
    "botania:rune_gluttony",
    "botania:rune_lust",
    "botania:rune_mana",
    "kubejs:unstable_alloy",
    "botania:gaia_ingot",
    "botania:ender_air_bottle",
    "botania:terrasteel_block",
    "botania:laputa_shard"
], 2500000)

 e.custom ({"type":"mekanism:nucleosynthesizing",
        "duration": 200,
        "gasInput":{"amount":5000,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":'kubejs:incomplete_energy_godly_alloy'}},
        "output":{"item": 'kubejs:energy_godly_alloy'}
    })
e.recipes.create.sequenced_assembly(
    ['kubejs:incomplete_energy_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'mekanism:ultimate_induction_cell']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'create_confectionery:bar_of_ruby_chocolate']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'mekanism:ultimate_induction_provider'])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(2)
}
)
