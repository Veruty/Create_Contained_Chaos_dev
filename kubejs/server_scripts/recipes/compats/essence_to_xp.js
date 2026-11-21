//ServerEvents.recipes(e => {
//e.custom({
//  "type": "thermal:centrifuge",
//  "ingredient": {
//    "item": "knightlib:small_essence"
//  },
//  "result": [
//    {
//      "fluid": "cofh_core:experience",
//      "amount": 50
//    }
//  ],
//  "energy": 400
//})
//e.custom({
//  "type": "thermal:centrifuge",
//  "ingredient": {
//    "item": "knightlib:great_essence"
//  },
//  "result": [
//    {
//      "fluid": "cofh_core:experience",
//      "amount": 200
//    }
//  ],
//  "energy": 400
//})
//
//})

ServerEvents.generateData('after_mods', event => {
    event.json('kubejs:recipe/small_essence_to_experience_nugget', {"type":"minecraft:smelting","ingredient":{"item":"knightlib:small_essence"},"result":{"id":"create:experience_nugget"},"experience":0.1,"cookingtime":200})
    event.json('kubejs:recipe/great_essence_to_heap_of_experience', {"type":"minecraft:smelting","ingredient":{"item":"knightlib:great_essence"},"result":{"id":"create_sa:heap_of_experience"},"experience":0.1,"cookingtime":200})
})