 let uranHexfluCheck
BlockEvents.rightClicked(event => {
uranHexfluCheck = "" + event.block.entityData
uranHexfluCheck = uranHexfluCheck.includes("gasName:\u0022mekanism:uranium_hexafluoride\u0022")
})


FTBQuestsEvents.customTask('122EE8B4B6117910', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(uranHexfluCheck == null) {return 0}
        if(uranHexfluCheck == true) {
            task.progress++ // Adds progress to the quest.
            uranHexfluCheck = false
        }
    })
})