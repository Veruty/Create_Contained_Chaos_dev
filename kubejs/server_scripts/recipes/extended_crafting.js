ServerEvents.recipes(event => {
//auto table crafts

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "ae2:smart_cable"
    },
    "B": {
      "tag": "c:storage_blocks/certus_quartz"
    },
    "C": {
      "tag": "ae2:fluix_block"
    }
  },
  "result": {
    "id": 'extendedcrafting:crystaltine_component'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDA",
    "BEFED",
    "CFGFC",
    "BEFED",
    "ABCDA"
  ],
  "key": {
    "A": {
      "item": "ae2:calculation_processor"
    },
    "B": {
      "item": "ae2:formation_core"
    },
    "C": {
      "item": "extendedcrafting:crystaltine_component"
    },
    "D": {
      "item": "ae2:annihilation_core"
    },
    "E": {
      "item": "ae2:engineering_processor"
    },
    "F": {
      "item": "ae2:logic_processor"
    },
    "G": {
      "item": "ae2:fluix_pearl"
    }
  },
  "result": {
    "id": 'extendedcrafting:crystaltine_catalyst'
  }
})

event.shaped(
    Item.of('extendedcrafting:basic_auto_table'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: 'extendedcrafting:crystaltine_catalyst',
        C: 'ae2:energy_cell',
        E: 'ae2:energy_acceptor',
        B: 'create:precision_mechanism',
        D: 'extendedcrafting:basic_table'
    }
)

event.shaped(
    Item.of('extendedcrafting:advanced_auto_table'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: 'extendedcrafting:crystaltine_catalyst',
        C: 'ae2:energy_cell',
        E: 'ae2:energy_acceptor',
        B: 'create:precision_mechanism',
        D: 'extendedcrafting:advanced_table'
    }
)

event.shaped(
    Item.of('extendedcrafting:elite_auto_table'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: 'extendedcrafting:crystaltine_catalyst',
        C: 'ae2:energy_cell',
        D: 'extendedcrafting:elite_table',
        E: 'ae2:energy_acceptor',
        B: 'create:precision_mechanism'
    }
)

//basic table 
event.shapeless('kubejs:sturdy_iron_composite', ['createdeco:industrial_iron_sheet','create:sturdy_sheet','createdeco:industrial_iron_sheet'])
event.recipes.createPressing('extendedcrafting:black_iron_slate', 'kubejs:sturdy_iron_composite').id('kjscreate:pressing/black_iron_slate_from_sturdy_iron_composite')
event.custom({"type": "createdieselgenerators:hammering",
	"ingredients": [{"item": 'kubejs:sturdy_iron_composite'}],
        "results": [{"id": 'extendedcrafting:black_iron_slate'}]}).id('kjscreatedieselgenerators:hammering/black_iron_slate_from_sturdy_iron_composite')
event.shapeless('extendedcrafting:black_iron_slate', ['kubejs:sturdy_iron_composite','immersiveengineering:hammer'])
		.id('kjsimmersiveengineering:crafting/black_iron_slate_from_sturdy_iron_composite')
		.damageIngredient('immersiveengineering:hammer', 1)
event.custom({"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": {"item": 'kubejs:sturdy_iron_composite'},
  		"mold": "immersiveengineering:mold_plate",
  		"result": {"id": 'extendedcrafting:black_iron_slate'}}).id('kjsimmersiveengineering:metal_press/black_iron_slate_from_sturdy_iron_composite')
//event.custom({"type": "thermal:press",
//	"ingredient": { "item": 'kubejs:sturdy_iron_composite'},
//	"result": [{ "item": 'extendedcrafting:black_iron_slate' }]
//	}).id('kjsthermal:press/black_iron_slate_from_sturdy_iron_composite' )
    

event.shaped(
    Item.of('extendedcrafting:basic_component'),
    [
        ' A ',
        'BCB',
        ' A '
    ],
    {
        A: 'minecraft:bedrock',
        B: 'immersiveengineering:component_steel',
        C: 'extendedcrafting:black_iron_slate'
    }
)

event.shaped(
    Item.of('extendedcrafting:basic_catalyst'),
    [
        'BAB',
        'CDC',
        'BAB'
    ],
    {
        B: 'extendedcrafting:basic_component',
        A: 'minecraft:amethyst_shard',
        C: 'bloodmagic:blankslate',
        D: 'minecraft:bedrock'
    }
)

//tier 2 table

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "bloodmagic:infusedslate"
    },
    "B": {
      "item": "minecraft:bedrock"
    },
    "C": {
      "item": "extendedcrafting:basic_component"
    }
  },
  "result": {
    "id": 'extendedcrafting:advanced_component'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:advanced_component"
    },
    "B": {
      "item": "irons_spellbooks:arcane_ingot"
    },
    "C": {
      "tag": "c:plates/plastic"
    },
    "D": {
      "item": "botania:mana_diamond_block"
    }
  },
  "result": {
    "id": 'extendedcrafting:advanced_catalyst'
  }
})

//tier 3 table

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEDB",
    "CEFEC",
    "BDEDB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_aluminum"
    },
    "B": {
      "item": 'mekanism:alloy_atomic'
    },
    "C": {
      "item": "create_new_age:netherite_magnet"
    },
    "D": {
      "item": 'mekanism:elite_control_circuit'
    },
    "E": {
      "item": "bloodmagic:etherealslate"
    },
    "F": {
      "item": "extendedcrafting:advanced_component"
    }
  },
  "result": {
    "id": 'extendedcrafting:elite_component'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABABA",
    "BCDCB",
    "ADEDA",
    "BCDCB",
    "ABABA"
  ],
  "key": {
    "A": {
      "tag": "c:alloys/shadow"
    },
    "B": {
      "tag": "c:alloys/radiance"
    },
    "C": {
      "item": "extendedcrafting:elite_component"
    },
    "D": {
      "item": "minecraft:bedrock"
    },
    "E": {
      "item": 'minecraft:heart_of_the_sea'
    }
  },
  "result": {
    "id": 'extendedcrafting:elite_catalyst'
  }
})
// quantum things
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAA",
    "ABCDCBA",
    "AEFGFEA",
    "HHH HHH",
    "AIJKJIA",
    "ABLJLBA",
    "AAAAAAA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "ae2:quantum_entangled_singularity"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "D": {
      "item": "mekanism:teleportation_core"
    },
    "E": {
      "item": "create_new_age:advanced_motor_extension"
    },
    "F": {
      "item": "create_new_age:reinforced_motor"
    },
    "G": {
      "item": "create:mechanical_press"
    },
    "H": {
      "item": "curvy_pipes:large_item_pipe"
    },
    "I": {
      "item": "create_new_age:nuclear_fuel"
    },
    "J": {
      "item": "minecraft:obsidian"
    },
    "K": {
      "item": "create:depot"
    },
    "L": {
      "item": "create:precision_mechanism"
    }
  },
  "result": {
    "id": 'extendedcrafting:compressor'
  }
})

//ultimate thingamabob
event.custom({
  "type": "extendedcrafting:shapeless_table",
  "ingredients": [
    {"item": "minecraft:iron_ingot"},
    {"item": "minecraft:copper_ingot"},
    {"item": "minecraft:gold_ingot"},
    {"item": "minecraft:netherite_ingot"},
    {"item": "minecraft:brick"},
    {"item": "minecraft:nether_brick"},
    {"item": "botania:manasteel_ingot"},
    {"item": "botania:terrasteel_ingot"},
    {"item": "botania:elementium_ingot"},
    {"item": 'minecraft:emerald'},
    {"item": 'minecraft:lapis_lazuli'},
    {"item": "irons_spellbooks:arcane_ingot"},
    {"item": 'minecraft:diamond'},
    {"item": "create:andesite_alloy"},
    {"item": "create:zinc_ingot"},
    {"item": "create:brass_ingot"},
    {"tag": "c:ingots/steel"},
    {"item": "minecraft:bedrock"},
    {"tag": "c:ingots/tin"},
    {"tag": "c:ingots/lead"},
    {"tag": "c:ingots/silver"},
    {"tag": "c:ingots/nickel"},
    {"tag": "c:ingots/bronze"},
    {"tag": "c:ingots/electrum"},
    {"tag": "c:ingots/invar"},
    {"tag": "c:ingots/constantan"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "mekanism:ingot_refined_obsidian"},
    {"item": "mekanism:ingot_refined_glowstone"},
    {"item": "mekanism:ingot_osmium"},
    {"item": 'ae2:fluix_crystal'},
    {"item": 'ars_nouveau:source_gem'},
    {"item": 'minecraft:bedrock'},
    {"tag": "c:ingots/aluminum"},
    {"tag": "c:ingots/uranium"},
    {"item": "minecraft:bedrock"},
    {"item": "create:bar_of_chocolate"},
    {"item": "create:shadow_steel"},
    {"item": "create:refined_radiance"},
    {"item": "mekanism:alloy_infused"},
    {"item": "mekanism:alloy_reinforced"},
    {"item": "mekanism:alloy_atomic"},
    {"item": "minecraft:netherite_scrap"},
    {"item": "create_new_age:radioactive_thorium"},
    {"item": "create_new_age:overcharged_diamond"},
    {"item": "create_new_age:overcharged_gold"},
    {"item": "create_new_age:overcharged_iron"}
  ],
  "result": {
    "id": "extendedcrafting:the_ultimate_ingot"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCBBA",
    "BDEFEDB",
    "BEGEGEB",
    "CFEHEFC",
    "BEGEGEB",
    "BDEFEDB",
    "ABBCBBA"
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_induction_cell"
    },
    "B": {
      "item": "create:experience_block"
    },
    "C": {
      "item": "mekanism:ultimate_induction_provider"
    },
    "D": {
      "item": "minecraft:end_crystal"
    },
    "E": {
      "item": "botania:terrasteel_block"
    },
    "F": {
      "item": "mekanism:pellet_antimatter"
    },
    "G": {
      "item": "extendedcrafting:elite_component"
    },
    "H": {
      "item": "extendedcrafting:the_ultimate_ingot"
    }
  },
  "result": {
    "id": 'extendedcrafting:the_ultimate_catalyst'
  }
})

})