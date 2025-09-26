ServerEvents.recipes(event => {
	event.remove({ output: 'companions:copper_coin' })
	event.shaped(
    Item.of('companions:copper_coin'),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        B: 'minecraft:charcoal',
        A: 'minecraft:copper_ingot'
    })

	event.remove({ output: 'companions:nether_coin' })
	event.shaped(
    Item.of('companions:nether_coin'),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        B: 'minecraft:charcoal',
        A: 'minecraft:netherite_ingot'
    })
	event.remove({ output: 'companions:end_coin' })
	event.shaped(
    Item.of('companions:end_coin'),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        B: 'thermal:enderium_dust',
        A: 'minecraft:netherite_ingot'
    })
})