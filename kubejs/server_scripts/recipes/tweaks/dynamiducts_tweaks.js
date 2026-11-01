ServerEvents.generateData('after_mods', event => {
event.json(
  'dynamiducts:recipe/lux_duct',
  {
    "type": "minecraft:crafting_shapeless",
    "category": "redstone",
    "ingredients": [
      {"item":"dynamiducts:structural_duct"},
      {"tag":"c:dusts/glowstone"}
    ],
    "result": {"id":"dynamiducts:lux_duct","count":1}
  }
)
})

ServerEvents.recipes(e => {

    e.remove({ id: 'dynamiducts:invar_ingot_from_iron' })
    e.remove({ id: 'dynamiducts:electrum_ingot_from_gold' })
    e.remove({ id: 'dynamiducts:signalum_ingot_craft' })
    e.remove({ id: 'dynamiducts:enderium_ingot_craft' })
    e.remove({ id: 'dynamiducts:lumium_ingot_craft' })
    e.remove({ id: 'dynamiducts:lumium_ingot_from_nuggets' })
    e.remove({ id: 'dynamiducts:lumium_nugget_from_ingot' })

    e.custom(
        {
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {"count":2,"tag":"c:ingots/iron"},
      {"count":1,"tag":"c:ingots/nickel"}
    ],
    "output": {"count":3,"id":'dynamiducts:invar_ingot'}
  
    })

    e.custom(
        {
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {"count":1,"tag":"c:ingots/gold"},
      {"count":1,"tag":"c:ingots/silver"}
    ],
    "output": {"count":2,"id":'immersiveengineering:ingot_electrum'}
  
    })

    e.custom(
        {
    "type": "enderio:alloy_smelting",
    "energy": 32000,
    "experience": 0.3,
    "inputs": [
      {"count":3,"tag":"c:ingots/copper"},
      {"count":1,"tag":"c:ingots/silver"},
      {"count":10,"tag":"c:dusts/redstone"}
    ],
    "output": {"count":4,"id":'dynamiducts:signalum_ingot'}
  
    })

    e.custom(
        {
    "type": "enderio:alloy_smelting",
    "energy": 50000,
    "experience": 0.3,
    "inputs": [
      {"count":2,"tag":"c:ingots/lead"},
      {"count":1,"tag":"c:gems/diamond"},
      {"count":2,"tag":"c:ender_pearls"}

    ],
    "output": {"count":1,"id":'dynamiducts:enderium_ingot'}
  
    })

})




