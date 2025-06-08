 let dirtySlurryCheck
BlockEvents.rightClicked(event => {
dirtySlurryCheck = "" + event.block.entityData
dirtySlurryCheck = dirtySlurryCheck.includes("slurryName:\u0022mekanism:dirty")
})


FTBQuestsEvents.customTask('61C80229A6088D66', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(dirtySlurryCheck == null) {return 0}
        if(dirtySlurryCheck == true) {
            task.progress++ // Adds progress to the quest.
            dirtySlurryCheck = false
        }
    })
})