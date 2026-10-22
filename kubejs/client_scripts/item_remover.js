RecipeViewerEvents.removeEntries('item', event => {
global.deletedItems.forEach(itemInstance => 
  event.hide(itemInstance)
)
})
//what
//server_scripts/recipes/fixes/cast_iron_fix.js
//09.10.26 Veruty: there was a mess here