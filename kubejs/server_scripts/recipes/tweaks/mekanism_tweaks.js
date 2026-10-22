ServerEvents.recipes(event => {
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_smelting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_blasting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_smelting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_blasting' })
	event.remove({ id: 'create:smelting/ingot_osmium_compat_mekanism' })
	event.remove({ id: 'create:blasting/ingot_osmium_compat_mekanism' })
	event.remove({ id: 'create:splashing/mekanism/crushed_raw_osmium' })
	event.remove({ id: 'thermal:compat/mekanism/smelter_mek_osmium_ore' })
	event.remove({ id: 'thermal:compat/mekanism/pulverizer_mek_osmium_ore' })
	event.remove({ id: 'mekanism:configurator' })
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_osmium' })
	event.remove({ id: 'immersiveengineering:crafting/hammercrushing_osmium' })
	event.remove({ id: 'immersiveengineering:crusher/ore_osmium' })
	event.remove({ id: 'immersiveengineering:crusher/raw_ore_osmium' })
	event.remove({ id: 'immersiveengineering:crusher/raw_block_osmium' })
    event.shaped(
        Item.of('mekanism:configurator'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: '#c:ingots/steel',
            A: 'minecraft:lapis_lazuli',
            D: 'minecraft:stick',
            C: 'minecraft:bedrock'
        }
    )
  //  event.custom({"type": "thermal:smelter",
	//	"ingredients": [
	//		{"value": [{"tag": "c:raw_materials/osmium"}, {"item": "create:crushed_raw_osmium"}, {"tag": "c:dusts/osmium"}, {"tag": "c:ores/osmium"}],"count": 1},
	//	],
	//	"result": [{"item": "mekanism:ingot_osmium", "count": 1}],
	//	"energy": 27000
	//})
	event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"conditions":[{"type":"neoforge:not","value":{"type":"neoforge:tag_empty","tag":"c:ingots/osmium"}},{"type":"neoforge:not","value":{"type":"neoforge:tag_empty","tag":"create:crushed_raw_materials"}}],"energy":102400,"input":{"item": "create:crushed_raw_osmium"},"results":[{"tag":"c:ingots/osmium","count":2}],"slag":{"tag":"c:slag"},"time":200})
 //event.remove({ id: 'mekanism:rotary/steam'})
 //event.custom({"type": "mekanism:rotary",
 //"fluidInput": {"amount": 1,"fluid": "mekanism:steam"},
 //"fluidOutput": {"amount": 1,"fluid": "mekanism:steam"},
 //"gasInput": {"amount": 1000,"gas": "mekanism:steam"},
 //"gasOutput": {"amount": 1000  ,"gas": "mekanism:steam"
 //}
 //})
  event.remove({ id: 'mekanism:steel_casing' })
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABFBA",
    "BCECB",
    "FEDEF",
    "BCECB",
    "ABFBA"
  ],
  "key": {
    "A": {
      "item": "minecraft:tinted_glass"
    },
    "B": {
      "tag": "c:ingots/steel"
    },
    "C": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
	    "E": {
      "tag": "c:ingots/osmium"
    },
	    "F": {
      "tag": "c:ingots/signalum"
    },
    "D": {
      "item": "immersiveengineering:blastbrick_reinforced"
    }
  },
  "result": {
    "id": 'mekanism:steel_casing'
  }
})
event.remove({output:'mekanismgenerators:fission_reactor_casing'})
event.remove({output:'mekanism:superheating_element'})
event.shaped(
    Item.of('mekanismgenerators:fission_reactor_casing', 4),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: '#c:plates/lead',
        B: 'immersiveengineering:steel_scaffolding_standard'
    }
)

event.shaped(
    Item.of('mekanism:superheating_element'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'minecraft:redstone',
        C: 'immersiveengineering:steel_scaffolding_standard',
        B: 'minecraft:copper_ingot'
    }
)

/*const tier = ["basic", "advanced", "elite", "ultimate"]
const type = ["smelting", "enriching", "crushing", "compressing", "combining", "purifying", "injecting", "infusing", "sawing"]
const typetier = []

tier.forEach(tier =>
    type.forEach(type =>
    typetier.push("mekanism:" + tier + "_" + type + "_factory")
    )
)

typetier.forEach(item =>
event.remove({ output: item})
)
*/
//later
//update: never
})
