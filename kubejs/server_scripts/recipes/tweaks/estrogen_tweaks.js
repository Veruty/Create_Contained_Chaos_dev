ServerEvents.recipes(e => {
	
    e.remove({ id: 'createestrogen:sequenced_assembly/estrogen_patch' })
    e.remove({ id: 'createestrogen:centrifuge' })
    e.remove({ id: 'createestrogen:filling/estrogen_pill' })
	e.recipes.create.mixing('estrogen:dream_bottle', [Fluid.of('estrogen:liquid_estrogen', 250), '2x minecraft:ender_pearl', 'minecraft:glass_bottle']).heated()
	e.recipes.create.compacting('estrogen:estrogen_pill', [Fluid.of('estrogen:liquid_estrogen', 250)])
    e.recipes.create.mechanical_crafting('estrogen:estrogen_patch', [
        'PPPPP',
        'SSSSS',
    ], {
        P: 'minecraft:paper',
        S: 'minecraft:slime_ball'
    })
    e.shaped('createestrogen:centrifuge', [
        'BPB',
        'STS',
        'BPB'
    ], {
        B: 'create:brass_ingot',
        P: 'create:propeller',
        S: '#c:ingots/steel',
        T: 'create:fluid_tank'
    })
	e.recipes.create.filling('estrogen:estrogen_chip_cookie',[Fluid.of('estrogen:liquid_estrogen', 500), 'minecraft:cookie'])
})
ServerEvents.generateData('after_mods', event => {
    event.json('createestrogen:recipe/filling/crystal_estrogen_pill', {"type":"create:filling","ingredients":[{"item":"estrogen:estrogen_pill"},{"type":"neoforge:single","amount":250,"fluid":"kubejs:liquid_amethyst"}],"results":[{"id":"estrogen:crystal_estrogen_pill"}]})
})
ServerEvents.recipes(event => {
    event.remove({ id: 'createestrogen:mixing/molten_amethyst' })
})

ServerEvents.tags('block', event => {
    event.add('create_new_age:magnet/force_12', 'estrogen:dream_block')
    event.add('create_new_age:magnet', 'estrogen:dream_block')
})
