ServerEvents.recipes(event => {
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_dust_smelting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_dust_blasting' })	
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_smelting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_blasting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_smelting' })
	event.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_blasting' })
	event.remove({ id: 'create:smelting/ingot_osmium_compat_mekanism' })
	event.remove({ id: 'create:blasting/ingot_osmium_compat_mekanism' })
	event.remove({ id: 'create:splashing/mekanism/crushed_raw_osmium' })
	event.remove({ id: 'thermal:compat/mekanism/smelter_mek_osmium_ore' })
	event.remove({ id: 'mekanism:transmitter/logistical_transporter/basic' })
	event.remove({ id: 'mekanism:configurator' })
	event.remove({ id: 'mekanism:dynamic_valve' })
    event.shaped(
        Item.of('mekanism:basic_logistical_transporter', 8),
        [
            '   ',
            'ABA',
            '   '
        ],
        {
            A: '#forge:ingots/steel',
            B: 'minecraft:iron_ingot'
        }
    )
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
    event.shaped(
        Item.of('mekanism:dynamic_valve', 2),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'mekanism:dynamic_tank',
            B: 'kubejs:advanced_mechanism'
        }
    )
})