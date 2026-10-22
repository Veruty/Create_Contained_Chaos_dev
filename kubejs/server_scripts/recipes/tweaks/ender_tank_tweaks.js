ServerEvents.recipes(e => {

    e.shaped('enderstorage:ender_tank', [
        ' B ',
        'BCB',
        ' B '
    ], {
        B: 'minecraft:bucket',
        C: 'enderstorage:ender_chest'
    })
    e.shaped('enderstorage:ender_chest', [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'minecraft:chest',
        T: 'enderstorage:ender_tank'
    })


})