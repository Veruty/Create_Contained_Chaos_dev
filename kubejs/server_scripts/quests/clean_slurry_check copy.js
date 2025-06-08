 let cleanSlurryCheck
BlockEvents.rightClicked(event => {
cleanSlurryCheck = "" + event.block.entityData
cleanSlurryCheck = cleanSlurryCheck.includes("slurryName:\u0022mekanism:clean")
})


FTBQuestsEvents.customTask('093570D31C881837', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(cleanSlurryCheck == null) {return 0}
        if(cleanSlurryCheck == true) {
            task.progress++ // Adds progress to the quest.
            cleanSlurryCheck = false
        }
    })
})