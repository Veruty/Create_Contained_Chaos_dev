var check = 0

// Let's try not spawning the aether portal?
BlockEvents.rightClicked('kubejs:firebricks', e => {
    const { item, hand, facing, block, player } = e
    var placed

    if( item == 'minecraft:bucket' )
    {
        check = block // store block for ItemEvents  
    }
    
})

ItemEvents.rightClicked('minecraft:bucket', e => {
    
    if( check == 'kubejs:firebricks') // Check for stored block then cancel
        e.cancel()

})