ServerEvents.recipes(e => {
    e.remove({ id: 'createdeco:pressing/zinc_sheet'})
    e.remove({ id: 'createdeco:pressing/andesite_sheet' })
	e.recipes.create.sandpaper_polishing('createdeco:zinc_sheet', 'create:zinc_ingot')
    e.recipes.create.sandpaper_polishing('createdeco:andesite_sheet', 'create:andesite_alloy')
})