console.info('Loaded ccc_custom (blocks)')

StartupEvents.registry('block', e => {
    e.create('condensed_casing')
        .displayName('Condensed Casing')
        .mapColor('color_blue')
        .soundType('stone')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
		.textureAll("kubejs:block/condensed_casing")
        .tagBlock('mineable/axe')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
		.model('kubejs:block/condensed_casing')    
	e.create('amethyst_casing')
        .displayName('Amethyst Casing')
        .mapColor('color_purple')
        .soundType('wood')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
		.textureAll("kubejs:block/amethyst_casing")
        .tagBlock('mineable/axe')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_wooden_tool')
		.model('kubejs:block/amethyst_casing')
})