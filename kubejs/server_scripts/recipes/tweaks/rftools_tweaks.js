ServerEvents.recipes(e => {
	e.remove({ id: 'rftoolsbase:machine_frame' })
	e.recipes.create.mixing('rftoolsbase:dimensionalshard', ['quark:clear_shard', '3x minecraft:ender_pearl']).heated()
	e.shaped('rftoolsbase:machine_frame', [
        'AIA',
        'G G',
        'AIA'
    ], {
        A: 'create:andesite_alloy',
        I: '#forge:plates/iron',
        G: 'minecraft:gold_nugget'
    })
})