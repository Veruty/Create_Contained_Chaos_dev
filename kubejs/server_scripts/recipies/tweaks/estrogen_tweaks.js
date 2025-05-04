ServerEvents.recipes(e => {
	
    e.remove({ id: 'estrogen:sequenced_assembly/estrogen_patch' })
    e.remove({ id: 'estrogen:centrifuge' })
    e.remove({ id: 'estrogen:filling/estrogen_pill' })
	e.recipes.create.mixing('estrogen:dream_bottle', [Fluid.of('estrogen:liquid_estrogen', 250), '2x minecraft:ender_pearl', 'minecraft:glass_bottle']).heated()
	e.recipes.create.compacting('estrogen:estrogen_pill', [Fluid.of('estrogen:liquid_estrogen', 250)])
    e.recipes.create.mechanical_crafting('estrogen:estrogen_patches', [
        'PPPPP',
        'SSSSS',
    ], {
        P: 'minecraft:paper',
        S: 'minecraft:slime_ball'
    })
    e.shaped('estrogen:centrifuge', [
        'BPB',
        'STS',
        'BPB'
    ], {
        B: 'create:brass_ingot',
        P: 'create:propeller',
        S: '#forge:ingots/steel',
        T: 'create:fluid_tank'
    })
	e.recipes.create.filling('estrogen:estrogen_chip_cookie',[Fluid.of('estrogen:liquid_estrogen', 500), 'minecraft:cookie'])
})