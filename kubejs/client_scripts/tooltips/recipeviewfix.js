RecipeViewerEvents.addInformation('item', e => {
  e.add("create:refined_radiance", ['Craftable by dropping Chromatic Compound in activated beacon beam.'])
  e.add("create:shadow_steel", ['Craftable by dropping Chromatic Compound in the void.'])
});
// 20.09.25 Veruty: stopgap until i find how to show recipes normally (probably wont be fixed ever)
// 09.10.26 Veruty: still have no idea how to do that, but stopgap broke so let me put a bandaid on it
//const recipesVoid = [
//    {
//        input: 'create:chromatic_compound',
//        output: 'create:shadow_steel'
//    }
//]
//
//KubeJEIEvents.registerCategories(event => {
//    const helpers = event.registration.jeiHelpers
//
//    event.custom("kjs:void", builder => {
//        builder.icon = helpers.guiHelper.createDrawableItemStack('minecraft:black_concrete')
//        builder.background = helpers.guiHelper.createBlankDrawable(30 * 4, 30)
//        builder.title = Component.literal("Dropping in the Void")
//        
//
//        // actually you can simply use (...) => {...}, instead of { setRecipe(...) {...} }
//        // but unfortunately you wont get type hints when using lambda, as of ProbeJS 8.0.3. Hopefully it will be fixed eventually
//        builder.recipeSetHandler = {
//            setRecipe(builder, recipe, focuses) {
//                /** @type {typeof recipesVoid[0]} */
//                const data = recipe.data
//
//                builder.addInputSlot(0, 0).addItemStack(data.input)
//                builder.addOutputSlot(20 * 3, 0).addItemStack(data.output)
//            }
//        }
//
//        builder.drawHandler = {
//            draw(recipe, graphics, mouseX, mouseY) {
//                graphics = helpers.guiHelper.createDrawable('kubejs:item/bifrost_sword',100, 100, 100, 100)
//            }
//        }
//    })
//})
//
//KubeJEIEvents.registerRecipes(event => {
//    event.custom("kjs:void").addAll(recipesVoid)
//})