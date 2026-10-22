ServerEvents.recipes(e => {
    e.remove({ id: 'toms_storage:storage_terminal' })
	e.shaped('toms_storage:storage_terminal', [
        ' P ',
        'PCP',
        ' P ',
    ], {
        P: '#minecraft:planks',
        C: '#c:chests'
    })
})