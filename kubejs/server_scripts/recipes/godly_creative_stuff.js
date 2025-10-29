ServerEvents.recipes(e => {

//unstable things

e.recipes.create.sequenced_assembly(
    ['kubejs:incomplete_unstable_godly_alloy'],
    'kubejs:unstable_alloy',
    [
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('thermal:refined_fuel', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:diesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:gasoline", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', {fluidTag: "forge:biodiesel", amount: 1000}]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('mekanismgenerators:fusion_fuel', 1000)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(25)

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDCBA",
    "BEDEDEB",
    "CDFGFDC",
    "DEGHGED",
    "CDFGFDC",
    "BEDEDEB",
    "ABCDCBA"
  ],
  "key": {
    "A": {
      "item": "minecraft:blaze_rod"
    },
    "B": {
      "item": "ars_nouveau:fire_essence"
    },
    "C": {
      "item": "thermal:rosin"
    },
    "D": {
      "item": "kubejs:incomplete_unstable_godly_alloy"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:coal\"}"
    },
    "F": {
      "item": "thermal:bitumen"
    },
    "G": {
      "item": "thermal:tar"
    },
    "H": {
      "tag": "forge:coal_coke"
    }
  },
  "result": {
    "item": 'kubejs:unstable_godly_alloy'
  }
})


e.recipes.create.item_application('createbigcannons:creative_autocannon_ammo_container', ['createbigcannons:autocannon_ammo_container', 'kubejs:unstable_godly_alloy'])
e.recipes.createDeploying('create:creative_blaze_cake',['create:blaze_cake', 'kubejs:unstable_godly_alloy'])


//fluid things
e.recipes.create.sequenced_assembly(
    ['kubejs:incomplete_fluid_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('minecraft:lava', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('bloodmagic:life_essence_fluid', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('create_enchantment_industry:hyper_experience', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('thermal:ender', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('createbigcannons:molten_nethersteel', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('immersiveengineering:acetaldehyde', 1000)])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(25)

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDCECDB",
    "BCFGFCB",
    "CEGHGEC",
    "BCFGFCB",
    "BDCECDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "create:copper_casing"
    },
    "B": {
      "item": "immersiveengineering:sheetmetal_copper"
    },
    "C": {
      "item": "kubejs:incomplete_fluid_godly_alloy"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:copper\"}"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:bronze\"}"
    },
    "F": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
    },
    "G": {
      "item": "minecraft:bucket"
    },
    "H": {
      "item": "cookingforblockheads:sink"
    }
  },
  "result": {
    "item": 'kubejs:fluid_godly_alloy'
  }
})

e.recipes.create.item_application('create:creative_fluid_tank', ['create:fluid_tank', 'kubejs:fluid_godly_alloy'])
e.recipes.create.item_application('create_connected:creative_fluid_vessel', ['create_connected:fluid_vessel', 'kubejs:fluid_godly_alloy'])

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

e.recipes.create.item_application('mekanism:creative_fluid_tank', ['mekanism:ultimate_fluid_tank', 'kubejs:fluid_godly_alloy'])

e.shapeless(
    Item.of('mekanism:creative_fluid_tank'),
    [
        'mekanism:creative_fluid_tank'
    ]
)

e.recipes.createDeploying('thermal:fluid_tank_creative_augment',['thermal:fluid_tank_augment', 'kubejs:fluid_godly_alloy'])

//botanic things

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDCECFB",
    "BCGHICB",
    "CEHJHEC",
    "BCKHLCB",
    "BMCECNB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "botania:dice"
    },
    "B": {
      "item": "botania:gaia_ingot"
    },
    "C": {
      "type": "forge:nbt",
      "item": "botania:laputa_shard",
      "count": 1,
      "nbt": "{level:19}"
    },
    "D": {
      "item": "botania:rune_sloth"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:manasteel\"}"
    },
    "F": {
      "item": "botania:rune_wrath"
    },
    "G": {
      "item": "botania:rune_greed"
    },
    "H": {
      "item": "kubejs:unstable_alloy"
    },
    "I": {
      "item": "minecraft:goat_horn"
    },
    "J": {
      "type": "forge:nbt",
      "item": "botania:terra_pick",
      "count": 1,
      "nbt": "{Damage:0,mana:2147483646}"
    },
    "K": {
      "item": "botania:rune_gluttony"
    },
    "L": {
      "item": "botania:rune_lust"
    },
    "M": {
      "item": "botania:rune_pride"
    },
    "N": {
      "item": "botania:rune_envy"
    }
  },
  "result": {
    "item": 'kubejs:botanic_godly_alloy'
  }
})

e.recipes.create.item_application('botania:creative_pool', ['botania:fabulous_pool', 'kubejs:botanic_godly_alloy'])
//energy things

e.recipes.create.sequenced_assembly(
    ['kubejs:incomplete_energy_godly_alloy'],
    'kubejs:unstable_alloy',
     [
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'mekanism:ultimate_induction_cell']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'mekanism:pellet_antimatter']),
        e.recipes.createDeploying('kubejs:unstable_alloy',['kubejs:unstable_alloy', 'mekanism:ultimate_induction_provider'])
    ]
).transitionalItem('kubejs:unstable_alloy').loops(2)

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACBDBCA",
    "ABEFEBA",
    "BDFGFDB",
    "ABEFEBA",
    "ACBDBCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_induction_cell"
    },
    "B": {
      "item": "kubejs:incomplete_energy_godly_alloy"
    },
    "C": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:steel\"}"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:electrum\"}"
    },
    "E": {
      "item": "ae2:dense_energy_cell"
    },
    "F": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    },
    "G": {
      "item": "thermal:cured_rubber"
    }
  },
  "result": {
    "item": 'kubejs:energy_godly_alloy'
  }
})

e.recipes.createDeploying('thermal:rf_coil_creative_augment',['thermal:rf_coil_augment', 'kubejs:energy_godly_alloy'])
e.recipes.create.item_application('createaddition:creative_energy', ['createaddition:modular_accumulator', 'kubejs:energy_godly_alloy'])
e.recipes.create.item_application('immersiveengineering:capacitor_creative', ['immersiveengineering:capacitor_hv', 'kubejs:energy_godly_alloy'])
e.recipes.createDeploying(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'), ['mekanism:ultimate_energy_cube', 'kubejs:energy_godly_alloy'])

//kinetic things

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "CDBEBDC",
    "FBGHGBF",
    "BIJKLIB",
    "MBNONBM",
    "PDBQBDP",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "createaddition:biomass_pellet_block"
    },
    "B": {
      "item": "create:precision_mechanism"
    },
    "C": {
      "item": "createbigcannons:nethersteel_block"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:brass\"}"
    },
    "E": {
      "item": "create:haunted_bell"
    },
    "F": {
      "item": "create:refined_radiance"
    },
    "G": {
      "item": "create_new_age:nuclear_fuel"
    },
    "H": {
      "item": "create:industrial_iron_block"
    },
    "I": {
      "item": "create:crafter_slot_cover"
    },
    "J": {
      "item": "createoreexcavation:raw_diamond"
    },
    "K": {
      "item": "create:shaft"
    },
    "L": {
      "item": "createoreexcavation:raw_redstone"
    },
    "M": {
      "item": "create:shadow_steel"
    },
    "N": {
      "item": "createdieselgenerators:huge_diesel_engine"
    },
    "O": {
      "item": "createoreexcavation:raw_emerald"
    },
    "P": {
      "item": "create_confectionery:gingerbread_man"
    },
    "Q": {
      "item": "create_new_age:netherite_magnet"
    }
  },
  "result": {
    "item": 'kubejs:kinetic_godly_alloy'
  }
})

e.recipes.create.item_application('create:creative_motor', ['create_new_age:reinforced_motor', 'kubejs:kinetic_godly_alloy'])
}
)
