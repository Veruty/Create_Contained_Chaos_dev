ServerEvents.recipes(e => {
    e.remove({ id: 'toms_storage:storage_terminal' })
	e.shaped('toms_storage:ts.storage_terminal', [
        'MPM',
        'PCP',
        'MPM',
    ], {
        M: 'create_dd:inductive_mechanism',
        P: '#minecraft:planks',
        C: '#forge:chests'
    })
})