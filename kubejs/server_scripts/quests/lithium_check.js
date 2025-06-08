 let lithiumCheck
BlockEvents.rightClicked(event => {
lithiumCheck = "" + event.block.entityData.toString()
lithiumCheck = lithiumCheck.includes("gasName:\u0022mekanism:lithium\u0022")
})


FTBQuestsEvents.customTask('111F08EC986B989D', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(lithiumCheck == null) {return 0}
        if(lithiumCheck == true) {
            task.progress++ // Adds progress to the quest.
            lithiumCheck = false
        }
    })
})