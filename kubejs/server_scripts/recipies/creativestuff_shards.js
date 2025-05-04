ServerEvents.recipes(e => {
	//02.0425 Veruty: removed item app recipie for creative mana pool
	e.recipes.create.item_application('createbigcannons:creative_autocannon_ammo_container', ['createbigcannons:autocannon_ammo_container', 'kubejs:godly_alloy_unstable'])
	
	
	e.recipes.create.mixing('kubejs:godly_shard_end_charged', [Fluid.of('thermal:ender', 1000),'kubejs:godly_shard_end', 'minecraft:end_crystal']).superheated()
	
	
	e.recipes.create.compacting('kubejs:godly_shard_flaming_charged', ['cataclysm:burning_ashes', 'kubejs:godly_shard_flaming']).superheated()
	e.recipes.create.compacting('create:creative_motor', ['kubejs:almost_complete_creative_motor', 'minecraft:dragon_egg']).superheated()
    e.recipes.create.compacting('create:creative_fluid_tank', ['kubejs:almost_complete_creative_tank', 'minecraft:dragon_egg']).superheated()
	
	
	e.recipes.create.sequenced_assembly([
        'kubejs:almost_complete_creative_pool'
    ], 'botania:fabulous_pool', [
        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'kubejs:godly_alloy_mana_attuned']),
        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'botania:gaia_ingot']),
        e.recipes.createDeploying('kubejs:incomplete_creative_pool',['kubejs:incomplete_creative_pool', 'botania:corporea_index'])
    ]).transitionalItem('kubejs:incomplete_creative_pool').loops(5)
	
	e.recipes.create.sequenced_assembly([
        'kubejs:godly_alloy_fluid_attuned'
    ], 'kubejs:godly_alloy', [
        e.recipes.createFilling('kubejs:partial_godly_alloy_fluid_attuned',['kubejs:partial_godly_alloy_fluid_attuned', Fluid.of('thermal:ender', 1000)]),
		e.recipes.createFilling('kubejs:partial_godly_alloy_fluid_attuned',['kubejs:partial_godly_alloy_fluid_attuned', Fluid.of('mahoutsukai:murky_still', 1000)]),
		e.recipes.createFilling('kubejs:partial_godly_alloy_fluid_attuned',['kubejs:partial_godly_alloy_fluid_attuned', Fluid.of('mekanismgenerators:fusion_fuel', 1000)]),
		e.recipes.createFilling('kubejs:partial_godly_alloy_fluid_attuned',['kubejs:partial_godly_alloy_fluid_attuned', Fluid.of('bloodmagic:life_essence_fluid', 1000)]),
		e.recipes.createFilling('kubejs:partial_godly_alloy_fluid_attuned',['kubejs:partial_godly_alloy_fluid_attuned', Fluid.of('createdieselgenerators:biodiesel', 1000)])
    ]).transitionalItem('kubejs:partial_godly_alloy_fluid_attuned').loops(10)
	
	e.recipes.create.sequenced_assembly([
        'kubejs:godly_alloy_energy_attuned'
    ], 'kubejs:godly_alloy', [
        e.recipes.createDeploying('kubejs:incomplete_godly_alloy_energy_attuned',['kubejs:incomplete_godly_alloy_energy_attuned', 'mekanism:ultimate_induction_cell']),
        e.recipes.createDeploying('kubejs:incomplete_godly_alloy_energy_attuned',['kubejs:incomplete_godly_alloy_energy_attuned', 'traveloptics:lightning_spellweave_ingot']),
        e.recipes.createDeploying('kubejs:incomplete_godly_alloy_energy_attuned',['kubejs:incomplete_godly_alloy_energy_attuned', 'create_new_age:advanced_motor_extension']),
		e.recipes.createDeploying('kubejs:incomplete_godly_alloy_energy_attuned',['kubejs:incomplete_godly_alloy_energy_attuned', 'create_new_age:reinforced_motor']),
		e.recipes.createFilling('kubejs:incomplete_godly_alloy_energy_attuned',['kubejs:incomplete_godly_alloy_energy_attuned', Fluid.of('estrogen:gender_fluid', 1000)])
    ]).transitionalItem('kubejs:incomplete_godly_alloy_energy_attuned').loops(5)

	
	e.recipes.create.sequenced_assembly([
        'kubejs:almost_complete_creative_motor'
    ], 'create_new_age:reinforced_motor', [
        e.recipes.createDeploying('kubejs:incomplete_creative_motor',['kubejs:incomplete_creative_motor', 'kubejs:godly_alloy_energy_attuned']),
        e.recipes.createDeploying('kubejs:incomplete_creative_motor',['kubejs:incomplete_creative_motor', 'minecraft:nether_star'])
    ]).transitionalItem('kubejs:incomplete_creative_motor').loops(8)
	
	e.recipes.create.sequenced_assembly([
        'kubejs:almost_complete_creative_tank'
    ], 'create:fluid_tank', [
        e.recipes.createDeploying('kubejs:incomplete_creative_tank',['kubejs:incomplete_creative_tank', 'kubejs:godly_alloy_fluid_attuned'])
    ]).transitionalItem('kubejs:incomplete_creative_tank').loops(8)

	e.recipes.create.sequenced_assembly([
		'kubejs:godly_alloy'
	], 'kubejs:unstable_alloy', [
		e.recipes.createDeploying('kubejs:incomplete_unstable_alloy', ['kubejs:incomplete_unstable_alloy', 'kubejs:godly_shard_abyssal_charged']),
		e.recipes.createDeploying('kubejs:incomplete_unstable_alloy', ['kubejs:incomplete_unstable_alloy', 'kubejs:godly_shard_end_charged']),
		e.recipes.createDeploying('kubejs:incomplete_unstable_alloy', ['kubejs:incomplete_unstable_alloy', 'kubejs:godly_shard_flaming_charged']),
		e.recipes.createDeploying('kubejs:incomplete_unstable_alloy', ['kubejs:incomplete_unstable_alloy', 'kubejs:godly_shard_strange_charged']),
		e.recipes.createDeploying('kubejs:incomplete_unstable_alloy', ['kubejs:incomplete_unstable_alloy', 'kubejs:godly_shard_toxic_charged'])
	]).transitionalItem('kubejs:incomplete_unstable_alloy').loops(1)
	
	
	e.shaped('create:creative_blaze_cake', [
		'GGG',
		'GBG',
		'GGG'
	], {
		G:'kubejs:godly_alloy_unstable',
		B: 'create:blaze_cake'
	})
	
	
	e.recipes.create.filling('kubejs:godly_alloy_unstable', [Fluid.of('createdieselgenerators:gasoline', 1000), 'kubejs:godly_alloy'])
	e.recipes.create.filling('kubejs:godly_shard_toxic_charged', [Fluid.of('biomancy:acid', 1000), 'kubejs:godly_shard_toxic'])
	
	
	//Terra Plate
	e.recipes.botania.terra_plate('kubejs:godly_shard_abyssal_charged', ['cataclysm:void_core', 'kubejs:godly_shard_abyssal'], 500000)
	e.recipes.botania.terra_plate('kubejs:godly_alloy_mana_attuned', ['kubejs:godly_alloy', 'botania:gaia_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot'], 5000000)
	
	
	//Runic Altar
	e.recipes.botania.runic_altar("kubejs:godly_shard_strange_charged", ["kubejs:godly_shard_strange", "minecraft:nether_star"], 5000)

})

