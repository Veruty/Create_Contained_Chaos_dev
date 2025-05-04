console.info('Loaded multiblockblocks (blocks)')

StartupEvents.registry('block', e => {
    e.create('firebricks')
        .displayName('Firebricks')
        .soundType('stone')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_wooden_tool')
})