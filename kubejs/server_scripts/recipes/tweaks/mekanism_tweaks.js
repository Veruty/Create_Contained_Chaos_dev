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
            B: '#forge:ingots/steel',
            A: 'minecraft:lapis_lazuli',
            D: 'minecraft:stick',
            C: 'thermal:rf_coil'
        }
    )
    event.custom({"type": "thermal:smelter",
		"ingredients": [
			{"value": [{"tag": "forge:raw_materials/osmium"}, {"item": "create:crushed_raw_osmium"}, {"tag": "forge:dusts/osmium"}, {"tag": "forge:ores/osmium"}],"count": 1},
		],
		"result": [{"item": "mekanism:ingot_osmium", "count": 1}],
		"energy": 27000
	})
	event.custom({"type":"immersiveengineering:arc_furnace","additives":[],"conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/osmium"}},{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"create:crushed_raw_materials"}}],"energy":102400,"input":{"item": "create:crushed_raw_osmium"},"results":[{"base_ingredient":{"tag":"forge:ingots/osmium"},"count":2}],"slag":{"tag":"forge:slag"},"time":200})
	event.remove({ id: 'mekanism:rotary/steam'})
	event.custom({"type": "mekanism:rotary",
  "fluidInput": {"amount": 1,"fluid": "mekanism:steam"},
  "fluidOutput": {"amount": 1,"fluid": "mekanism:steam"},
  "gasInput": {"amount": 1000,"gas": "mekanism:steam"},
  "gasOutput": {"amount": 1000  ,"gas": "mekanism:steam"
}
  })
})
