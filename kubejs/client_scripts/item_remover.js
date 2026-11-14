RecipeViewerEvents.removeEntries('item', event => {
global.deletedItems.forEach(itemInstance => 
  event.remove(itemInstance)
)
})

RecipeViewerEvents.removeEntries('fluid', event => {
global.deletedFluids.forEach(fluidInstance => 
  event.remove(fluidInstance)
)
})
//what
//server_scripts/recipes/fixes/cast_iron_fix.js
//09.10.26 Veruty: there was a mess here