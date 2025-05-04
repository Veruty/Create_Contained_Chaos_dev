console.info('Loaded tooltier')

ItemEvents.toolTierRegistry(e => {
    e.add('unstable_alloy', tier => {
        tier.uses = 3062
        tier.speed = 15.0
        tier.attackDamageBonus = 6.0
        tier.level = 5
        tier.enchantmentValue = 19
        tier.repairIngredient = 'kubejs:unstable_alloy'
    })
    e.add('bifrost', tier => {
        tier.uses = 4096
        tier.speed = 15.5
        tier.attackDamageBonus = 8.0
        tier.level = 6
        tier.enchantmentValue = 24
    })
})