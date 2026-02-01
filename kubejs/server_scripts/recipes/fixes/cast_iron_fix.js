ServerEvents.recipes(event => {
//replace the deco with cbc iron
event.replaceInput(
  { input: 'createdeco:industrial_iron_ingot' }, 
  'createdeco:industrial_iron_ingot', 
  'createbigcannons:cast_iron_ingot'
)
event.remove({ output: 'createdeco:industrial_iron_ingot' })
event.shapeless(
    Item.of('createbigcannons:cast_iron_ingot', 9),
    [
        'create:industrial_iron_block'
    ]
)
})
