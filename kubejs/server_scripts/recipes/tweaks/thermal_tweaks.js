ServerEvents.recipes(e => {
	e.shaped('kubejs:simple_mechanism', [
        'ALA',
        'SCS',
        'ALA'
    ], {
        A: 'create:andesite_alloy',
        L: 'create:large_cogwheel',
        S: 'create:cogwheel',
        C: 'create:andesite_casing'
    })
	e.remove({ id: 'thermal:device_tree_extractor' })
	e.shaped('thermal:device_tree_extractor', [
        'PMP',
        'GBG',
        'PSP'
    ], {
        P: '#minecraft:planks',
        M: 'kubejs:simple_mechanism',
        G: '#forge:glass',
        B: 'minecraft:bucket',
		S: 'thermal:redstone_servo'
    })
	e.remove({ id: 'thermal:device_fisher' })
		e.shaped('thermal:device_fisher', [
        'PMP',
        'GFG',
        'PSP'
    ], {
        P: '#minecraft:planks',
        M: 'kubejs:simple_mechanism',
        G: '#forge:glass',
        F: 'minecraft:fishing_rod',
		S: 'thermal:redstone_servo'
    })
	e.remove({ id: 'thermal:device_composter' })
	e.shaped('thermal:device_composter', [
        'PMP',
        'GCG',
        'PSP'
    ], {
        P: '#minecraft:planks',
        M: 'kubejs:simple_mechanism',
        G: '#forge:glass',
        C: 'minecraft:composter',
		S: 'thermal:redstone_servo'
    })
	e.remove({ id: 'thermal:device_water_gen' })
	e.shaped('thermal:device_water_gen', [
        'CMC',
        'GBG',
        'CSC'
    ], {
        C: 'minecraft:copper_ingot',
        M: 'kubejs:simple_mechanism',
        G: '#forge:glass',
        B: 'minecraft:bucket',
		S: 'thermal:redstone_servo'
    })
	e.remove({ id: 'thermal:device_rock_gen' })
	e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:blackstone'),[Fluid.of('minecraft:lava'),Item.of('minecraft:blue_ice')]).requiredBonks(3)
	e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobbled_deepslate'),[Fluid.of('minecraft:lava'),Item.of('minecraft:packed_ice')]).requiredBonks(3)
	e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:deepslate'),[Fluid.of('minecraft:lava'),Item.of('minecraft:packed_ice')]).withCatalyst('minecraft:magma_block').requiredBonks(3)
	e.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
	e.shaped('create_mechanical_extruder:mechanical_extruder', [
        ' S ',
        ' M ',
        'GCG'
    ], {
        S: 'create:shaft',
        M: 'kubejs:simple_mechanism',
        G: '#forge:glass',
         C: 'create:andesite_casing'
    })
	e.remove({ id: 'thermal:device_collector' })
	e.shaped('thermal:device_collector', [
        'IEI',
        'GMG',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
		E: 'minecraft:ender_pearl',
		G: '#forge:glass',
        M: 'kubejs:simple_mechanism',
		S: 'thermal:redstone_servo'
    })	
		e.remove({ id: 'thermal:device_nullifier' })
	e.shaped('thermal:device_nullifier', [
        'IMI',
        'GLG',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
		M: 'kubejs:simple_mechanism',
		G: '#forge:glass',
		L: 'minecraft:lava_bucket',
		S: 'thermal:redstone_servo'
    })
	e.remove({ id: 'thermal:device_potion_diffuser' })
	e.shaped(
    Item.of('thermal:device_potion_diffuser'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        E: 'thermal:redstone_servo',
        A: 'minecraft:iron_ingot',
        C: '#forge:glass',
        B: 'kubejs:simple_mechanism',
        D: 'minecraft:glass_bottle'
    })
	e.remove({ id: 'thermal:device_xp_condenser' })
	e.shaped(
    Item.of('thermal:device_xp_condenser'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        D: 'thermal:xp_crystal',
        E: 'thermal:redstone_servo',
        A: 'minecraft:iron_ingot',
        C: '#forge:glass',
        B: 'kubejs:simple_mechanism'
    })
	e.remove({ id: 'thermal:energy_cell_frame' })
	e.shaped(
    Item.of('thermal:energy_cell_frame'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        B: 'kubejs:redstone_crystal',
        A: 'thermal:invar_ingot',
        C: 'kubejs:advanced_mechanism'
    })
	e.remove({ id: 'thermal:machine_frame' })
	e.shaped('thermal:machine_frame', [
        'BMB',
        'GAG',
        'BRB'
    ], {
        B: 'create:brass_ingot',
        M: 'kubejs:advanced_mechanism',
        G: '#forge:glass',
        A: 'kubejs:amethyst_casing',
        R: 'kubejs:redstone_crystal'
    })
    e.remove({ id: 'thermal:machine_furnace' })
	e.shaped('thermal:machine_furnace', [
        ' M ',
        'PLP',
        'GFG'
    ], {
        M: 'minecraft:redstone_block',
        P: 'kubejs:firebricks',
        G: 'thermal:invar_gear',
        F: 'thermal:rf_coil',
        L: 'thermal:machine_frame'
    })
	e.remove({ id: 'thermal:machine_press' })
	e.shaped(
    Item.of('thermal:machine_press'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: '#forge:rods/steel',
        E: 'thermal:constantan_gear',
        B: 'kubejs:steel_block',
        A: 'thermal:invar_gear',
        D: 'thermal:machine_frame',
        F: 'thermal:rf_coil'
    })
	e.remove({ id: 'thermal:machine_sawmill' })
	e.shaped(
    Item.of('thermal:machine_sawmill'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: '#forge:stone',
        D: 'thermal:constantan_gear',
        C: 'thermal:machine_frame',
        A: 'thermal:saw_blade',
        E: 'thermal:rf_coil'
    })
	e.remove({ id: 'thermal:machine_pulverizer' })
	e.shaped(
    Item.of('thermal:machine_pulverizer'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: 'minecraft:flint',
        D: 'thermal:copper_gear',
        C: 'thermal:machine_frame',
        A: 'minecraft:piston',
        E: 'thermal:rf_coil'
    })
	e.remove({ id: 'thermal:machine_bottler' })
	e.shaped(
    Item.of('thermal:machine_bottler'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        A: 'minecraft:bucket',
        D: 'thermal:invar_gear',
        B: '#forge:glass',
        C: 'thermal:machine_frame',
        E: 'thermal:rf_coil'
    })
	e.remove({ id: 'thermal:machine_smelter' })
	e.shaped(
    Item.of('thermal:machine_smelter'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        C: 'kubejs:ht_cupronickel_coil',
        A: '#forge:plates/netherite',
        B: 'kubejs:advanced_mechanism',
        E: 'thermal:invar_gear',
        D: 'thermal:machine_frame',
        F: 'kubejs:power_management_mechanism'
    })
	e.remove({ id: 'thermal:machine_insolator' })
	e.shaped(
    Item.of('thermal:machine_insolator'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: 'thermal:phytogro',
        D: 'thermal:lumium_gear',
        A: '#forge:glass',
        E: 'kubejs:power_management_mechanism',
        C: 'thermal:machine_frame'
    })
	e.remove({ id: 'thermal:machine_crystallizer' })
	e.shaped(
    Item.of('thermal:machine_crystallizer'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        E: 'thermal:lumium_gear',
        C: 'thermal:signalum_plate',
        B: '#thermal:glass/hardened',
        A: 'thermal:rosin',
        F: 'kubejs:power_management_mechanism',
        D: 'thermal:machine_frame'
    })
    e.remove({ id: 'thermal:saw_blade' })
	e.shaped('thermal:saw_blade', [
        'SS ',
        'SCS',
        ' SS'
    ], {
        S: 'kubejs:steel_ingot',
        C: 'minecraft:copper_ingot'
    })
    e.remove({ id: 'thermal:machine_crafter' })
	e.remove({ id: 'thermal:fire_charge/signalum_ingot_4' })
	e.remove({ id: 'thermal:smelting/signalum_ingot_from_dust_smelting' })
	e.remove({ id: 'thermal:smelting/signalum_ingot_from_dust_blasting' })
	e.remove({ id: 'thermal:fire_charge/lumium_ingot_4' })
	e.remove({ id: 'thermal:smelting/lumium_ingot_from_dust_smelting' })
	e.remove({ id: 'thermal:smelting/lumium_ingot_from_dust_blasting' })
	e.remove({ id: 'thermal:fire_charge/enderium_ingot_2' })
	e.remove({ id: 'thermal:smelting/enderium_ingot_from_dust_smelting' })
	e.remove({ id: 'thermal:smelting/enderium_ingot_from_dust_blasting' })
    e.remove({ id: 'thermal:rubber_from_dandelion'})
    e.remove({ id: 'thermal:rubber_from_vine'})
    e.remove({ id: 'thermal:tinker_bench'})
    e.shaped(
    Item.of('thermal:tinker_bench'),
    [
        'AAA',
        'BCB',
        'DED'
    ],
    {
        C: 'minecraft:crafting_table',
        D: '#minecraft:planks',
        A: 'kubejs:steel_ingot',
        B: '#forge:glass',
        E: 'thermal:rf_coil'
    }
)
 e.remove({ id: 'thermal:drill_head' })
e.shaped(
    Item.of('thermal:drill_head'),
    [
        ' A ',
        'ABA',
        'AAA'
    ],
    {
        A: 'kubejs:steel_ingot',
        B: 'minecraft:copper_ingot'
    }
)
e.remove({ id: 'thermal:dynamo_lapidary' })
e.shaped(
    Item.of('thermal:dynamo_lapidary'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        B: 'minecraft:iron_ingot',
        C: 'thermal:netherite_gear',
        E: 'minecraft:redstone',
        D: 'minecraft:diamond',
        A: 'thermal:rf_coil'
    }
)
e.remove({ id: 'thermal:flux_capacitor' })
e.shaped(
    Item.of('thermal:flux_capacitor'),
    [
        'ABA',
        'CDC',
        'AAA'
    ],
    {
        A: 'kubejs:steel_ingot',
        D: 'thermal:sulfur_dust',
        C: 'thermal:lead_plate',
        B: 'thermal:rf_coil'
    }
)
e.remove({ id: 'thermal:flux_magnet' })
e.shaped(
    Item.of('thermal:flux_magnet'),
    [
        'ABA',
        'CDC',
        ' C '
    ],
    {
        B: 'minecraft:redstone',
        A: 'create_new_age:magnetite_block',
        C: 'kubejs:steel_ingot',
        D: 'thermal:rf_coil'
    }
)
e.custom({
  "type": "thermal:pyrolyzer",
  "ingredient": {
    "item": "minecraft:charcoal"
  },
  "result": [
    {
      "item": "thermal:coal_coke"
    },
    {
      "item": "thermal:tar",
      "chance": 0.5
    },
    {
      "fluid": "thermal:creosote",
      "amount": 500
    }
  ],
  "energy": 4000,
  "experience": 0.15
})
e.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "mekanism:raw_osmium"
  },
  "result": [
    {
      "item": "mekanism:dust_osmium"
    }
  ]
})
})