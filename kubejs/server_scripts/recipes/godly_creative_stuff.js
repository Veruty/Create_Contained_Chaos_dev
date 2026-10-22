ServerEvents.recipes(e => {

//unstable things

e.recipes.create.sequenced_assembly(
    ['kubejs:incomplete_unstable_godly_alloy'],
    'kubejs:unstable_alloy',
    [
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('minecraft:water', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.sizedIngredientOf('#c:diesel', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.sizedIngredientOf('#c:gasoline', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.sizedIngredientOf('#c:biodiesel', 1000)]),
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
      "item": "minecraft:bedrock"
    },
    "D": {
      "item": "kubejs:incomplete_unstable_godly_alloy"
    },
    "E": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:coal"}
    },
    "F": {
      "item": "minecraft:bedrock"
    },
    "G": {
      "item": "minecraft:bedrock"
    },
    "H": {
      "tag": "c:coal_coke"
    }
  },
  "result": {
    "id": 'kubejs:unstable_godly_alloy'
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
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('create_enchantment_industry:experience', 1000)]),
        e.recipes.createFilling('kubejs:unstable_alloy',['kubejs:unstable_alloy', Fluid.of('minecraft:water', 1000)]),
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
      "item": "minecraft:bedrock"
    },
    "B": {
      "item": "minecraft:bedrock"
    },
    "C": {
      "item": "botania:rune_water"
    },
    "D": {
      "item": "kubejs:incomplete_fluid_godly_alloy"
    },
    "E": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:copper"}
    },
    "F": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:bronze"}
    },
    "G": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:lapis_lazuli"}
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
    "id": 'kubejs:fluid_godly_alloy'
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

//e.recipes.createDeploying('thermal:fluid_tank_creative_augment',['thermal:fluid_tank_augment', 'kubejs:fluid_godly_alloy'])

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
      "type": "neoforge:components",
      "items": "botania:laputa_shard",
      "components": {"botania:shard_level":19}
    },
    "D": {
      "item": "botania:rune_sloth"
    },
    "E": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:manasteel"}
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
      "type": "neoforge:components",
      "items": "botania:terra_pick",
      "components": {"botania:mana":2147483646}
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
    "id": 'kubejs:botanic_godly_alloy'
  }
})

e.recipes.create.item_application('botania:creative_mana_pool', ['botania:fabulous_mana_pool', 'kubejs:botanic_godly_alloy'])
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
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:steel"}
    },
    "D": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:electrum"}
    },
    "E": {
      "item": "ae2:spatial_cell_component_128"
    },
    "F": {
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:redstone"}
    },
    "G": {
      "item": "minecraft:bedrock"
    },
    "Y": {
      "item": "mekanism:ultimate_tier_installer"
    },
    "Z": {
      "item": "minecraft:bedrock"
    }
  },
  "result": {
    "id": 'kubejs:energy_godly_alloy'
  }
})

e.recipes.createDeploying('minecraft:bedrock',['minecraft:bedrock', 'minecraft:bedrock'])
e.recipes.create.item_application('createaddition:creative_energy', ['createaddition:modular_accumulator', 'kubejs:energy_godly_alloy'])
e.recipes.create.item_application('immersiveengineering:capacitor_creative', ['immersiveengineering:capacitor_hv', 'kubejs:energy_godly_alloy'])
e.custom(
  {
    "type": "create:item_application",
    "ingredients": [
      {"item":"mekanism:ultimate_energy_cube"},
      {"item":"kubejs:energy_godly_alloy"}
    ],
    "results": [
      {
        "id": "mekanism:creative_energy_cube",
        "components": {
          "mekanism:side_config": {
            "config": {
              "energy": {
                "side": {
                  "front": "output",
                  "left": "output",
                  "right": "output",
                  "back": "output",
                  "top": "output",
                  "bottom": "output"
                },
                "eject": true
              },
              "items": {
                "side": {
                  "front": "output",
                  "left": "input",
                  "right": "input",
                  "back": "input",
                  "top": "input",
                  "bottom": "input"
                }
              }
            }
          },
          "mekanism:energy": {"energy_containers":[9223372036854775807]}
        }
      }
    ]
  }
)

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
      "item": "create_enchantment_industry:experience_cake"
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
      "type": "neoforge:components",
      "items": "extendedcrafting:singularity",
      "components": {
      "extendedcrafting:singularity_id": "extendedcrafting:brass"}
    },
    "F": {
      "item": "create:precision_mechanism"
    },
    "G": {
      "item": "create_new_age:overcharged_diamond"
    },
    "H": {
      "item": "minecraft:bedrock"
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
    "id": 'kubejs:kinetic_godly_alloy'
  }
})

e.recipes.create.item_application('create:creative_motor', ['create_new_age:reinforced_motor', 'kubejs:kinetic_godly_alloy'])
}
)
