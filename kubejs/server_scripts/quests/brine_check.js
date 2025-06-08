 let brineCheck
BlockEvents.rightClicked(event => {
brineCheck = "" + event.block.entityData.toString()
brineCheck = brineCheck.includes("FluidName:\u0022mekanism:brine\u0022")
})


FTBQuestsEvents.customTask('3990489D29FD69B6', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(brineCheck == null) {return 0}
        if(brineCheck == true) {
            task.progress++ // Adds progress to the quest.
            brineCheck = false
        }
    })
})