ServerEvents.generateData('after_mods', event => {
event.json(
      'enderio:recipe/alloy_smelting/end_steel_ingot',
      {
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
          {"count":1,"tag":"c:end_stones"},
          {"count":1,"tag":"c:ingots/dark_steel"},
          {"count":1,"item":"minecraft:crying_obsidian"}
        ],
        "output": {"count":2,"id":"enderio:end_steel_ingot"}
      }
    )
event.json(
  'enderio:recipe/alloy_smelting/dark_steel_ingot',
  {
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {"count":1,"tag":"c:ingots/steel"},
      {"count":1,"tag":"c:dusts/coal"},
      {"count":1,"tag":"c:obsidians"}
    ],
    "output": {"count":2,"id":"enderio:dark_steel_ingot"}
  }
    )
event.json(
  'enderio:recipe/dark_steel_ingot_with_coal',
  {
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {"count":1,"tag":"c:ingots/steel"},
      {"count":2,"item":"minecraft:coal"},
      {"count":1,"tag":"c:obsidians"}
    ],
    "output": {"count":2,"id":"enderio:dark_steel_ingot"}
  })
event.json(
  'enderio:recipe/alloy_smelting/redstone_alloy_ingot',
  {
    "type": "enderio:alloy_smelting",
    "energy": 3200,
    "experience": 0.3,
    "inputs": [
      {"count":1,"tag":"c:dusts/redstone"},
      {"count":1,"tag":"c:ingots/tin"}
    ],
    "output": {"count":1,"id":"enderio:redstone_alloy_ingot"}
  }
)
})
ServerEvents.recipes(e => {
    e.custom(
  {
    "type": "enderio:alloy_smelting",
    "energy": 6400,
    "experience": 0.3,
    "inputs": [
      {"count":1,"tag":"minecraft:coals"},
      {"count":2,"tag":"c:ingots/iron"}
    ],
    "output": {"count":2,"id":"immersiveengineering:ingot_steel"}
  })

})
