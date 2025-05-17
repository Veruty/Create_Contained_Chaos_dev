ServerEvents.recipes(e => {
	e.remove({ id: 'mekanism:atomic_disassembler' })
	e.recipes.create.deploying('mekanism:atomic_disassembler', ['kubejs:almost_complete_atomic_disassembler', 'kubejs:advanced_mechanism'])
	e.recipes.create.sequenced_assembly([
        'kubejs:almost_complete_atomic_disassembler'
    ], 'mekanism:ingot_refined_obsidian', [
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'mekanism:alloy_atomic']),
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'kubejs:unstable_alloy']),
        e.recipes.createFilling('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', Fluid.of('kubejs:liquid_redstone', 250)]),
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'mekanism:energy_tablet']),
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'kubejs:reinforced_moon_cheese_alloy'])
    ]).transitionalItem('kubejs:incomplete_atomic_disassembler').loops(8)
})