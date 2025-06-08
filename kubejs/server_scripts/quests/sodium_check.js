 let sodiumCheck
BlockEvents.rightClicked(event => {
sodiumCheck = "" + event.block.entityData.toString()
sodiumCheck = sodiumCheck.includes("gasName:\u0022mekanism:sodium\u0022")
})


FTBQuestsEvents.customTask('5042389DF6578656', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sodiumCheck == null) {return 0}
        if(sodiumCheck == true) {
            task.progress++ // Adds progress to the quest.
            sodiumCheck = false
        }
    })
})