 let hydrogenChlorideCheck
BlockEvents.rightClicked(event => {
hydrogenChlorideCheck = "" + event.block.entityData.toString()
hydrogenChlorideCheck = hydrogenChlorideCheck.includes("gasName:\u0022mekanism:hydrogen_chloride\u0022")
})


FTBQuestsEvents.customTask('7A69667E4DB84182', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(hydrogenChlorideCheck == null) {return 0}
        if(hydrogenChlorideCheck == true) {
            task.progress++ // Adds progress to the quest.
            hydrogenChlorideCheck = false
        }
    })
})