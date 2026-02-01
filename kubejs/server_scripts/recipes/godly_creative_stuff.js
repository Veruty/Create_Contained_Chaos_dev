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
    "ABCDCBA",
    "BEDFDEB",
    "CDGHGDC",
    "DFIJIFD",
    "CDGHGDC",
    "BEDFDEB",
    "ABCDCBA"
  ],
  "key": {
    "A": {
      "item": "thermal:fluid_filter_augment"
    },
    "B": {
      "item": "thermal:cured_rubber"
    },
    "C": {
      "item": "botania:rune_water"
    },
    "D": {
      "item": "kubejs:incomplete_fluid_godly_alloy"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:copper\"}"
    },
    "F": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:bronze\"}"
    },
    "G": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
    },
    "H": {
      "item": "minecraft:bucket"
    },
    "I": {
      "item": "immersiveengineering:jerrycan"
    },
    "J": {
      "item": "botania:open_bucket"
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
    "ZYABAYZ",
    "YCBDBCY",
    "ABEFEBA",
    "BDFGFDB",
    "ABEFEBA",
    "YCBDBCA",
    "ZYABAYZ"
  ],
  "key": {
    "A": {
      "item": "mekanism:pellet_polonium"
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
      "item": "ae2:spatial_cell_component_128"
    },
    "F": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    },
    "G": {
      "item": "thermal:cured_rubber"
    },
    "Y": {
      "item": "mekanism:ultimate_tier_installer"
    },
    "Z": {
      "item": "thermal:upgrade_augment_3"
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
    "ABCDCBA",
    "BEFGFEB",
    "CFHIHFC",
    "JGKLMGJ",
    "CFHNHFC",
    "BEFGFEB",
    "ABCDCBA"
  ],
  "key": {
    "A": {
      "item": "create_enchantment_industry:hyper_experience_bottle"
    },
    "B": {
      "item": "create:shadow_steel"
    },
    "C": {
      "item": "create:refined_radiance"
    },
    "D": {
      "item": "createaddition:chocolate_cake"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:brass\"}"
    },
    "F": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create_new_age:overcharged_diamond"
    },
    "H": {
      "item": "create_confectionery:gingerbread_man"
    },
    "I": {
      "item": "create_sa:steam_engine"
    },
    "J": {
      "item": "createaddition:honey_cake"
    },
    "K": {
      "item": "createoreexcavation:raw_diamond"
    },
    "L": {
      "item": "create:andesite_alloy"
    },
    "M": {
      "item": "createoreexcavation:raw_redstone"
    },
    "N": {
      "item": "createoreexcavation:raw_emerald"
    }
  },
  "result": {
    "item": 'kubejs:kinetic_godly_alloy'
  }
})

e.recipes.create.item_application('create:creative_motor', ['create_new_age:reinforced_motor', 'kubejs:kinetic_godly_alloy'])
}
)
