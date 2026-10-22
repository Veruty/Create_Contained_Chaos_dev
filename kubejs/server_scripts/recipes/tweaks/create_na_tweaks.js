ServerEvents.recipes(event => {
    event.remove({ output: 'create_new_age:blank_circuit' })
event.custom({
    "type": "create:compacting",
    "ingredients": [
      {"tag":"c:plates/copper","count":2},
      {"item":"minecraft:redstone","count":2},
      {"tag":"c:wires/electrum"}
    ],
    "results": [{"id":"create_new_age:blank_circuit","count":4}],
    "heat_requirement": "heated"
  }
)
    event.remove({ output: 'create_new_age:copper_circuit' })
    event.custom(  {
    "type": "create:deploying",
    "ingredients": [
      {"item":"create_new_age:blank_circuit"},
      {"tag":"c:wires/copper"}
    ],
    "results": [{"id":"create_new_age:copper_circuit"}]
  })
})