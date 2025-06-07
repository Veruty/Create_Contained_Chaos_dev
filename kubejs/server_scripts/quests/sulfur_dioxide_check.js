 let sulfDioxCheck
BlockEvents.rightClicked(event => {
sulfDioxCheck = "" + event.block.entityData.toString() 
sulfDioxCheck = sulfDioxCheck.includes("gasName:\u0022mekanism:sulfur_dioxide\u0022")
})


FTBQuestsEvents.customTask('507370457C85E239', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfDioxCheck == null) {return 0}
        if(sulfDioxCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfDioxCheck = false
        }
    })
})