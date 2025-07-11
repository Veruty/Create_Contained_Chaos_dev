 let plutoniumCheck
BlockEvents.rightClicked(event => {
plutoniumCheck = "" + event.block.entityData
plutoniumCheck = plutoniumCheck.includes("gasName:\u0022mekanism:plutonium\u0022")
})


FTBQuestsEvents.customTask('0BEBE9BACA875AC9', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(plutoniumCheck == null) {return 0}
        if(plutoniumCheck == true) {
            task.progress++ // Adds progress to the quest.
            plutoniumCheck = false
        }
    })
})