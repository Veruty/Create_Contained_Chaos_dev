 let fissileFuelCheck
BlockEvents.rightClicked(event => {
fissileFuelCheck = "" + event.block.entityData
fissileFuelCheck = fissileFuelCheck.includes("gasName:\u0022mekanism:fisslie_fuel\u0022")
})


FTBQuestsEvents.customTask('196C5E0A9724C7E6', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(fissileFuelCheck == null) {return 0}
        if(fissileFuelCheck == true) {
            task.progress++ // Adds progress to the quest.
            fissileFuelCheck = false
        }
    })
})