LootJS.modifiers((event) => {
	event
        .addEntityLootModifier("cataclysm:ignis")
        .addWeightedLoot(
            [0, 1],
            [Item.of("kubejs:godly_shard_flaming").withChance(40)]
        );
	event
        .addEntityLootModifier("cataclysm:the_leviathan")
        .addWeightedLoot(
            [0, 1],
            [Item.of("kubejs:godly_shard_abyssal").withChance(75)]
        );
	event
        .addEntityLootModifier("minecraft:ender_dragon")
        .addWeightedLoot(
            [0, 1],
            [Item.of("kubejs:godly_shard_strange").withChance(100)]
        );
	event
        .addEntityLootModifier("cataclysm:ender_guardian")
        .addWeightedLoot(
            [0, 1],
            [Item.of("kubejs:godly_shard_end").withChance(80)]
        );
	event
        .addEntityLootModifier("alexscaves:tremorzilla")
        .addWeightedLoot(
            [0, 1],
            [Item.of("kubejs:godly_shard_toxic").withChance(80)]
        );
});