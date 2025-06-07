 let sulfAcidCheck
BlockEvents.rightClicked(event => {
sulfAcidCheck = "" + event.block.entityData.toString()
sulfAcidCheck = sulfAcidCheck.includes("gasName:\u0022mekanism:sulfuric_acid\u0022")
})


FTBQuestsEvents.customTask('048BEDB820F2D6DC', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfAcidCheck == null) {return 0}
        if(sulfAcidCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfAcidCheck = false
        }
    })
})