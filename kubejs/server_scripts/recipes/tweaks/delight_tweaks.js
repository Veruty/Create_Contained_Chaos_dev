ServerEvents.recipes(e => {
	e.recipes.create.mixing('7x casualnessdelight:cheese_wheel_slice', ['minecraft:milk']).heated()
})
ServerEvents.tags('item', e => e.add('c:foods/milk', 'farmers_delight:milk_bottle'))