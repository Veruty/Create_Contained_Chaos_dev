JEIEvents.hideItems(event => {
global.deletedItems.forEach(itemInstance => 
  event.hide(itemInstance)
)
})
//server_scripts/recipes/fixes/cast_iron_fix.js
JEIEvents.hideItems(event => {
  event.hide('createdeco:industrial_iron_ingot')

})