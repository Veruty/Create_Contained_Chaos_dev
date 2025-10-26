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
    e.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:gems/sulfur"}},"output":{"item":"thermal:sulfur_dust"}})
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
    e.remove({ id: 'thermal:saw_blade' })
	e.shaped('thermal:saw_blade', [
        'SS ',
        'SCS',
        ' SS'
    ], {
        S: 'thermal:steel_ingot',
        C: 'minecraft:copper_ingot'
    })
    e.remove({ id: 'thermal:machine_crafter' })
	e.remove({ id: 'thermal:fire_charge/signalum_ingot_4' })
	e.remove({ id: 'thermal:fire_charge/obsidian_glass_2' })
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
        A: 'thermal:steel_ingot',
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
        A: 'thermal:steel_ingot',
        B: 'minecraft:copper_ingot'
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
        A: 'thermal:steel_ingot',
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
        C: 'thermal:steel_ingot',
        D: 'thermal:rf_coil'
    }
)
 e.recipes.create.mixing('2x thermal:obsidian_glass', ['#forge:obsidian', 'minecraft:quartz', 'minecraft:sand']).superheated()
e.remove({ id: 'thermal:machine_frame' })
e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    },
    "C": {
      "item": "thermal:invar_gear"
    }
  },
  "result": {
    "item": "thermal:machine_frame"
  }
})
	e.recipes.create.mixing('4x thermal:bronze_ingot', ['#forge:ingots/tin','3x #forge:ingots/copper']).heated()
})