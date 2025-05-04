BlockEvents.rightClicked(event => {
    const { player } = event
    if (player.isCrouching() && player.getHeadArmorItem() == "air" && player.mainHandItem.hasTag('kubejs:fumo')) {
        player.setHeadArmorItem(event.item.copyAndClear())
    }
})