ServerEvents.recipes(event => {

    event.remove({ output: 'create_new_age:blank_circuit' })
    event.recipes.create.compacting('4x create_new_age:blank_circuit', ['#forge:plates/copper','2x minecraft:redstone','2x #forge:wires/electrum']).heated()
    event.remove({ output: 'create_new_age:copper_circuit' })
    event.recipes.create.deploying('create_new_age:copper_circuit',['create_new_age:blank_circuit','#forge:wires/copper'])
})