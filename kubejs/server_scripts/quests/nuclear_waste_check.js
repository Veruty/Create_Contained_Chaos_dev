 let nuclearWasteCheck
BlockEvents.rightClicked(event => {
nuclearWasteCheck = "" + event.block.entityData
nuclearWasteCheck = nuclearWasteCheck.includes("gasName:\u0022mekanism:nuclear_waste\u0022")
})


FTBQuestsEvents.customTask('3CE86EEABE1AEDAD', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(nuclearWasteCheck == null) {return 0}
        if(nuclearWasteCheck == true) {
            task.progress++ // Adds progress to the quest.
            nuclearWasteCheck = false
        }
    })
})