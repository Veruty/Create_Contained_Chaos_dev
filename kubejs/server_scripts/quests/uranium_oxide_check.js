 let uranOxideCheck
BlockEvents.rightClicked(event => {
uranOxideCheck = "" + event.block.entityData
uranOxideCheck = uranOxideCheck.includes("gasName:\u0022mekanism:uranium_oxide\u0022")
})


FTBQuestsEvents.customTask('5EF3562178B81DA3', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(uranOxideCheck == null) {return 0}
        if(uranOxideCheck == true) {
            task.progress++ // Adds progress to the quest.
            uranOxideCheck = false
        }
    })
})