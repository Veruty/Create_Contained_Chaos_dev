LootJS.lootTables((event) => {
	event.getLootTable("cataclysm:entities/ignis").createPool().addEntry("kubejs:godly_shard_flaming")
	event.getLootTable("cataclysm:entities/the_leviathan").createPool().addEntry("kubejs:godly_shard_abyssal")
	event.getLootTable("cataclysm:entities/maledictus").createPool().addEntry(LootEntry.of("kubejs:godly_shard_strange").withWeight(100))
	event.getLootTable("minecraft:entities/ender_dragon").createPool().addEntry("kubejs:godly_shard_end")
	event.getLootTable("alexscaves:entities/tremorzilla").createPool().addEntry("kubejs:godly_shard_toxic")
})