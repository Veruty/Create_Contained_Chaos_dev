console.info('Loaded tooltier')

ItemEvents.toolTierRegistry(e => {
    e.add('unstable_alloy', tier => {
        tier.uses = 3062
        tier.speed = 15.0
        tier.attackDamageBonus = 6.0
        tier.enchantmentValue = 19
        //tier.repairIngredient = 'kubejs:unstable_alloy'
        //09.10.26 Veruty: i have no idea why does this crash it but lets just quietly comment it and see if somebody complains)
    })
    e.add('bifrost', tier => {
        tier.uses = 4096
        tier.speed = 15.5
        tier.attackDamageBonus = 8.0
        tier.enchantmentValue = 24
    })
})