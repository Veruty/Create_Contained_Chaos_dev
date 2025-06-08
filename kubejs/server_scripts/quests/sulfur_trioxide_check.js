 let sulfTrioxCheck
BlockEvents.rightClicked(event => {
sulfTrioxCheck = "" + event.block.entityData
sulfTrioxCheck = sulfTrioxCheck.includes("gasName:\u0022mekanism:sulfur_trioxide\u0022")
})


FTBQuestsEvents.customTask('040A29662464CD85', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfTrioxCheck == null) {return 0}
        if(sulfTrioxCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfTrioxCheck = false
        }
    })
})