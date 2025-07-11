 let poloniumCheck
BlockEvents.rightClicked(event => {
poloniumCheck = "" + event.block.entityData
poloniumCheck = poloniumCheck.includes("gasName:\u0022mekanism:polonium\u0022")
})


FTBQuestsEvents.customTask('3A29218DFC902641', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(poloniumCheck == null) {return 0}
        if(poloniumCheck == true) {
            task.progress++ // Adds progress to the quest.
            poloniumCheck = false
        }
    })
})