ServerEvents.recipes(e => {
	e.recipes.create.deploying('kubejs:half_netherite_ingot', ['minecraft:gold_ingot', 'minecraft:netherite_scrap'])
    e.shapeless('minecraft:netherite_ingot', ['kubejs:half_netherite_ingot', 'kubejs:half_netherite_ingot'])
	e.recipes.create.sequenced_assembly([
        'minecraft:netherite_upgrade_smithing_template'
    ], 'minecraft:nether_brick', [
        e.recipes.createFilling('kubejs:incomplete_netherite_upgrade',['kubejs:incomplete_netherite_upgrade', Fluid.of('minecraft:lava', 250)]),
        e.recipes.createPressing('kubejs:incomplete_netherite_upgrade','kubejs:incomplete_netherite_upgrade'),
        e.recipes.createDeploying('kubejs:incomplete_netherite_upgrade',['kubejs:incomplete_netherite_upgrade','minecraft:diamond']),
        e.recipes.createPressing('kubejs:incomplete_netherite_upgrade','kubejs:incomplete_netherite_upgrade')
    ]).transitionalItem('kubejs:incomplete_netherite_upgrade').loops(3)
    e.remove({ id: 'minecraft:sticky_piston' })
    e.shaped(
    Item.of('minecraft:sticky_piston'),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: '#c:slimeballs',
        B: 'minecraft:piston'
    }
    )
e.custom(
    {"type":"mekanism:nucleosynthesizing"
        ,"duration":1000
        ,"chemical_input":{"amount":1,"chemical": "mekanism:antimatter"}
        ,"item_input":{"item":"minecraft:netherite_scrap", "count": 1}
        ,"output":{"id":"minecraft:netherite_ingot"},"per_tick_usage": false}
    )
}
)


