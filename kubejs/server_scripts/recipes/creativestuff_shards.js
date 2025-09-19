ServerEvents.recipes(e => {
	//02.0425 Veruty: removed item app recipie for creative mana pool	
	
	e.recipes.create.mixing('kubejs:godly_shard_end_charged', [Fluid.of('thermal:ender', 1000),'kubejs:godly_shard_end', 'minecraft:end_crystal']).superheated()
	e.recipes.create.compacting('kubejs:godly_shard_flaming_charged', ['cataclysm:burning_ashes', 'kubejs:godly_shard_flaming']).superheated()
	e.recipes.create.filling('kubejs:godly_shard_toxic_charged', [Fluid.of('biomancy:acid', 1000), 'kubejs:godly_shard_toxic'])
	e.recipes.botania.runic_altar("kubejs:godly_shard_strange_charged", ["kubejs:godly_shard_strange", "minecraft:nether_star"], 5000)
	e.recipes.botania.terra_plate('kubejs:godly_shard_abyssal_charged', ['cataclysm:void_core', 'kubejs:godly_shard_abyssal'], 500000)

})

