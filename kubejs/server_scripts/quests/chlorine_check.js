 let chlorineCheck
BlockEvents.rightClicked(event => {
chlorineCheck = "" + event.block.entityData.toString()
chlorineCheck = chlorineCheck.includes("gasName:\u0022mekanism:chlorine\u0022")
})


FTBQuestsEvents.customTask('4A9D1DC701EA89D0', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(chlorineCheck == null) {return 0}
        if(chlorineCheck == true) {
            task.progress++ // Adds progress to the quest.
            chlorineCheck = false
        }
    })
})