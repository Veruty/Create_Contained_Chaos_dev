ServerEvents.recipes(e => {
	e.recipes.create.deploying('minecraft:netherite_ingot', ['minecraft:gold_ingot', 'minecraft:netherite_scrap'])
	e.recipes.create.sequenced_assembly([
        'minecraft:netherite_upgrade_smithing_template'
    ], 'minecraft:nether_brick', [
        e.recipes.createFilling('kubejs:incomplete_netherite_upgrade',['kubejs:incomplete_netherite_upgrade', Fluid.of('minecraft:lava', 250)]),
        e.recipes.createPressing('kubejs:incomplete_netherite_upgrade','kubejs:incomplete_netherite_upgrade'),
        e.recipes.createDeploying('kubejs:incomplete_netherite_upgrade',['kubejs:incomplete_netherite_upgrade','minecraft:diamond']),
        e.recipes.createPressing('kubejs:incomplete_netherite_upgrade','kubejs:incomplete_netherite_upgrade')
    ]).transitionalItem('kubejs:incomplete_netherite_upgrade').loops(3)
})