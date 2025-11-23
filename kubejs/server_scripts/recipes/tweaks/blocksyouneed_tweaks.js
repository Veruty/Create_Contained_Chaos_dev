ServerEvents.recipes(e => {
	e.remove({id: 'blocksyouneed_luna:pipe_steel'})
	e.remove({id: 'blocksyouneed_luna:rec_pipe_steel_c'})
	e.recipes.create.mixing('2x blocksyouneed_luna:moonstone', ['minecraft:lapis_lazuli', '#forge:blocks/stone'])
	e.shaped(
    Item.of('blocksyouneed_luna:steel_pipe', 6),
    [
        '  A',
        ' A ',
        '   '
    ],
    {
        A: '#forge:ingots/steel'
    }
)
	e.remove({ id: 'blocksyouneed_luna:pig_iron' })
	e.shapeless(
		Item.of('blocksyouneed_luna:pig_iron_ingot', 8),
		[
		'8x minecraft:iron_ingot',
		'minecraft:coal'
		]
	)
})