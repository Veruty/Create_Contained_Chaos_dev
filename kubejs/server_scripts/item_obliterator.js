//priority: 10
// Bulk recipe & tag removal


ServerEvents.recipes(event => {
  global.deletedItems.forEach(itemInstance => 
    event.remove([
      {input: itemInstance},
      {output: itemInstance}
    ])
  )
})
ServerEvents.tags('item', event => {
  global.deletedItems.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.tags('block', event => {
  global.deletedItems.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.compostableRecipes(event => {
  global.deletedItems.forEach(itemInstance => 
    event.remove(itemInstance)
  )
})

ServerEvents.recipes(event => {
  global.deletedFluids.forEach(itemInstance => 
    event.remove([
      {input: itemInstance},
      {output: itemInstance}
    ])
  )
})
ServerEvents.tags('item', event => {
  global.deletedFluids.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})
ServerEvents.tags('block', event => {
  global.deletedFluids.forEach(itemInstance => 
    event.removeAllTagsFrom(itemInstance)
  )
})

