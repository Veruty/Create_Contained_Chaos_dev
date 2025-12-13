ServerEvents.recipes(e => {
e.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "knightlib:small_essence"
  },
  "result": [
    {
      "fluid": "cofh_core:experience",
      "amount": 50
    }
  ],
  "energy": 400
})
e.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "knightlib:great_essence"
  },
  "result": [
    {
      "fluid": "cofh_core:experience",
      "amount": 200
    }
  ],
  "energy": 400
})

})