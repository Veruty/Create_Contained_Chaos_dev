ServerEvents.recipes(e => {
	e.remove({ id: 'ad_astra:recipes/nasa_workbench' })
	e.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
        'H  H  H',
        'S  S  S',
        'ISSCSSI',
        ' MIIIM ',
        ' IIIII ',
    ], {
        H: 'create:brass_hand',
        S: '#forge:plates/steel',
        I: '#forge:ingots/steel',
        C: 'create_dd:calculation_mechanism',
        M: 'create_dd:integrated_mechanism'
    })
	e.remove({ id: 'ad_astra:steel_rod'})
})