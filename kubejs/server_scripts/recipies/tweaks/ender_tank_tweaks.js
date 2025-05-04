ServerEvents.recipes(e => {

    e.shaped('endertanks:ender_tank', [
        ' B ',
        'BCB',
        ' B '
    ], {
        B: 'minecraft:bucket',
        C: 'enderchests:ender_chest'
    })
    e.shaped('enderchests:ender_chest', [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'minecraft:chest',
        T: 'endertanks:ender_tank'
    })


})