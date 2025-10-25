//priority: 10
// Bulk recipe & tag removal
global['deletedItems'] = [
'extendedcrafting:luminessence_block',
'extendedcrafting:black_iron_block',
'extendedcrafting:redstone_ingot_block',
'extendedcrafting:enhanced_redstone_ingot_block',
'extendedcrafting:ender_ingot_block',
'extendedcrafting:enhanced_ender_ingot_block',
'extendedcrafting:crystaltine_block',
'extendedcrafting:nether_star_block',
'extendedcrafting:flux_star_block',
'extendedcrafting:ender_star_block',
'extendedcrafting:luminessence',
'extendedcrafting:black_iron_ingot',
'extendedcrafting:redstone_ingot',
'extendedcrafting:enhanced_redstone_ingot',
'extendedcrafting:ender_ingot',
'extendedcrafting:enhanced_ender_ingot',
'extendedcrafting:crystaltine_ingot',
'extendedcrafting:flux_star',
'extendedcrafting:ender_star',
'extendedcrafting:black_iron_nugget',
'extendedcrafting:redstone_nugget',
'extendedcrafting:enhanced_redstone_nugget',
'extendedcrafting:ender_nugget',
'extendedcrafting:enhanced_ender_nugget',
'extendedcrafting:crystaltine_nugget',
'extendedcrafting:redstone_catalyst',
'extendedcrafting:enhanced_redstone_catalyst',
'extendedcrafting:ender_catalyst',
'extendedcrafting:enhanced_ender_catalyst',
'extendedcrafting:redstone_component',
'extendedcrafting:enhanced_redstone_component',
'extendedcrafting:ender_component',
'extendedcrafting:enhanced_ender_component',
'extendedcrafting:the_ultimate_component',
'extendedcrafting:frame',
'extendedcrafting:ultimate_catalyst',
'extendedcrafting:ultimate_component',
'extendedcrafting:ultimate_table',
'extendedcrafting:ultimate_auto_table',
'extendedcrafting:ultimate_singularity',
'extendedcrafting:ender_alternator',
'extendedcrafting:ender_crafter',
'extendedcrafting:auto_ender_crafter',
'extendedcrafting:flux_alternator',
'extendedcrafting:flux_crafter',
'extendedcrafting:auto_flux_crafter',
'extendedcrafting:pedestal',
'extendedcrafting:crafting_core',
'extendedcrafting:singularity',
'createaddition:alternator',
'createaddition:electric_motor'
]

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
