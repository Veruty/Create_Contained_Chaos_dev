ServerEvents.recipes(e => {

    e.remove({ id: 'create_jetpack:jetpack' })
    e.recipes.create.mechanical_crafting('create_jetpack:jetpack', [
        ' BSB ',
        'BMTMB',
        'BFBFB',
        ' C C ',
    ], {
        B: 'create:brass_sheet',
        S: 'create:shaft',
        M: 'create:precision_mechanism',
        F: 'create:encased_fan',
        T: 'create:copper_backtank',
        C: 'create:chute'
    }
    )
})