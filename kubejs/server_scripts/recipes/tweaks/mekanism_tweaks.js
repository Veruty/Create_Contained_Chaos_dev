ServerEvents.recipes(event => {
    event.remove({ id: 'mekanismgenerators:generator/heat' })
    event.remove({ id: 'mekanismgenerators:generator/wind' })
    event.remove({ id: 'mekanismgenerators:generator/gas_burning' })
    event.remove({ id: 'mekanismgenerators:generator/heat' })
    event.remove({ id: 'mekanismgenerators:generator/solar' })
    event.remove({ id: 'mekanismgenerators:generator/advanced_solar' })
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
	event.shaped('mekanismgenerators:wind_generator', [
        ' O ',
        'OTO',
        'ICI'
    ], {
        O: '#forge:ingots/osmium',
        T: 'mekanism:energy_tablet',
        I: '#forge:plates/iron',
        C: 'kubejs:condensed_casing'
    })
    event.shaped('mekanismgenerators:heat_generator', [
        'BBB',
        'ROR',
        'IFI'
    ], {
        B: 'create:brass_ingot',
        R: 'kubejs:redstone_alloy',
        O: '#forge:ingots/osmium',
        I: '#forge:plates/iron',
        F: 'minecraft:furnace'
    })
    event.shaped('mekanismgenerators:gas_burning_generator', [
        'CIC',
        'SES',
        'CIC'
    ], {
        C: 'kubejs:condensed_alloy',
        S: 'mekanism:steel_casing',
        E: 'mekanism:electrolytic_core',
        I: 'mekanism:alloy_infused'
    })
    event.shaped('mekanismgenerators:solar_generator', [
        'PPP',
        'COC',
        'OTO'
    ], {
        P: 'mekanismgenerators:solar_panel',
        C: 'kubejs:condensed_alloy',
        O: '#forge:ingots/osmium',
        T: 'mekanism:energy_tablet'
    })
    event.shaped('mekanismgenerators:advanced_solar_generator', [
        'PAP',
        'PAP',
        'ACA'
    ], {
        P: 'mekanismgenerators:solar_generator',
        A: 'kubejs:condensed_alloy',
        C: 'kubejs:condensed_casing'
    })
    
})