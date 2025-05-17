MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:arc_furnace", e => {
    let event = e.event;
    const {recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe} = event;

    if (proxyTypeId === "minecraft:smelting") {
        let input = proxyRecipe.getIngredients()[0]; 
        let output = proxyRecipe.getResultItem(null);
        var recipe = recipeType.recipeBuilder()
            .id(proxyRecipeId + "_mbd2")
            .duration(80)
            .inputItems(input)
            .perTick(builder => builder
            .inputFE(128)
            )
            .outputItems(output)
            .buildMBDRecipe();
        event.mbdRecipe = recipe;
    }
})
