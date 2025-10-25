ServerEvents.recipes(e => {
e.recipes.create.item_application('createbigcannons:creative_autocannon_ammo_container', ['createbigcannons:autocannon_ammo_container', 'kubejs:unstable_godly_alloy'])
e.recipes.create.item_application('botania:creative_pool', ['botania:fabulous_pool', 'kubejs:botanic_godly_alloy'])
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
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('thermal:refined_fuel', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:diesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:gasoline", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:biodiesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('mekanismgenerators:fusion_fuel', 1000)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(10)

e.recipes.create.sequenced_assembly(
    ['kubejs:fluid_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('minecraft:lava', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('bloodmagic:life_essence_fluid', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('mekanism:uranium_hexafluoride', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('thermal:ender', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('createbigcannons:molten_nethersteel', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('immersiveengineering:acetaldehyde', 1000)])
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
e.recipes.create.sequenced_assembly(
    ['kubejs:kinetic_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'create:shadow_steel']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'create:rotation_speed_controller']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'create:refined_radiance']),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('create_enchantment_industry:hyper_experience', 250)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(5)
e.shaped(
    Item.of('kubejs:matter_godly_alloy'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        C: 'mekanism:pellet_antimatter',
        D: 'ars_nouveau:mob_jar',
        B: 'ae2:quantum_entangled_singularity',
        A: 'kubejs:unstable_alloy',
        E: 'ae2:matter_ball'
    }
)

e.shaped(
    Item.of('thermal:rf_coil_creative_augment'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        C: 'thermal:rf_coil_xfer_augment',
        D: 'kubejs:energy_godly_alloy',
        E: 'thermal:rf_coil_storage_augment',
        A: 'kubejs:unstable_alloy',
        B: 'thermal:enderium_ingot'
    }
)
e.shaped(
    Item.of('createaddition:creative_energy'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'kubejs:energy_godly_alloy',
        B: 'create:precision_mechanism',
        A: 'kubejs:unstable_alloy',
        C: 'createaddition:alternator'
    }
)
e.shaped(
    Item.of('immersiveengineering:capacitor_creative'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        C: 'immersiveengineering:capacitor_hv',
        A: 'immersiveengineering:duroplast',
        D: 'kubejs:energy_godly_alloy',
        B: 'kubejs:unstable_alloy'
    }
)

e.shaped(
    Item.of('create:creative_fluid_tank'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        C: 'create:refined_radiance',
        D: 'create:fluid_tank',
        B: 'kubejs:fluid_godly_alloy',
        A: 'create:railway_casing',
        E: 'create:shadow_steel'
    }
)
e.shapeless(
    Item.of('create:creative_fluid_tank'),
    [
        'create_connected:creative_fluid_vessel'
    ]
)
e.shapeless(
    Item.of('create_connected:creative_fluid_vessel'),
    [
        'create:creative_fluid_tank'
    ]
)
e.shaped(
    Item.of('create_sa:creative_filling_tank'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        E: 'create_sa:large_fueling_tank',
        C: 'create_sa:large_filling_tank',
        B: 'create_sa:brass_cube',
        D: 'kubejs:unstable_godly_alloy',
        A: 'create:railway_casing'
    }
)
e.shaped(
    Item.of('thermal:fluid_tank_creative_augment'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'kubejs:fluid_godly_alloy',
        A: 'kubejs:unstable_alloy',
        C: 'thermal:fluid_tank_augment',
        B: 'thermal:enderium_ingot'
    }
)
e.shaped(
    Item.of('create:creative_motor'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        B: 'create_confectionery:black_chocolate_bucket',
        D: 'kubejs:kinetic_godly_alloy',
        A: 'kubejs:unstable_alloy',
        C: 'create_new_age:advanced_motor_extension',
        E: 'create_new_age:reinforced_motor'
    }
)
e.shaped(
    Item.of('appbot:creative_mana_cell'),
    [
        'ABA',
        'CAD',
        'AEA'
    ],
    {
        E: 'appbot:mana_cell_housing',
        C: 'kubejs:matter_godly_alloy',
        D: 'kubejs:energy_godly_alloy',
        B: 'botania:creative_pool',
        A: 'kubejs:unstable_alloy'
    }
)
e.shaped(
    Item.of('storagedrawers:creative_storage_upgrade'),
    [
        'AAA',
        'BCB',
        'AAA'
    ],
    {
        C: 'storagedrawers:upgrade_template',
        B: 'kubejs:matter_godly_alloy',
        A: '#forge:rods/wooden'
    }
)
}
)
