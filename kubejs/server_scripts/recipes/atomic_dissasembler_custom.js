ServerEvents.recipes(e => {
	e.remove({ id: 'mekanism:atomic_disassembler' })
	e.recipes.create.deploying('mekanism:atomic_disassembler', ['kubejs:almost_complete_atomic_disassembler', 'mekanism:energy_tablet'])
	e.recipes.create.sequenced_assembly([
        'kubejs:almost_complete_atomic_disassembler'
    ], 'thermal:netherite_gear', [
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'mekanism:alloy_atomic']),
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'mekanism:ingot_refined_obsidian']),
        e.recipes.createDeploying('kubejs:incomplete_atomic_disassembler',['kubejs:incomplete_atomic_disassembler', 'mekanism:hdpe_stick']),
        e.recipes.createPressing('kubejs:incomplete_atomic_disassembler', 'kubejs:incomplete_atomic_disassembler')
    ]).transitionalItem('kubejs:incomplete_atomic_disassembler').loops(2)
})