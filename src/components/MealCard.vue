<template>
    <div class="cardMeal">
        <span class="meal-card__title">
            <span class="meal-card__title-block-text">
                <span class="meal-card__time">{{ dayMeal.meal.mealTime }}</span>
                <span class="meal-card__type">{{ dayMeal.meal.type }}</span>
            </span>
            <span class="meal-card__title-block">
            </span> 
        </span>
        <div class="meal-card">
            <section class="meal-card__top">
                <div class="meal-card__meal-block">
                    <p class="meal-card__meal-name"> {{ dayMeal.meal.name }}<i class="fas fa-times"></i></p>
                </div>
                <div class="meal-card__meal-block">
                    <p class="meal-card__meal-name">may be some coffee<i class="fas fa-times"></i></p>
                </div>
            </section>
            <section class="meal-card__bottom">
                <span class="meal-card__bottom-info recepie-level">{{ dayMeal.meal.level }}</span>
                <span class="meal-card__bottom-info recepie-time">{{ dayMeal.meal.time}} min</span>
                <span class="meal-card__bottom-info recepie-calories">{{ dayMeal.meal.cal }} cal</span>
            </section>
            <button class="meal-card__btn">
                <i class="fas fa-pencil-alt"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardMeal',
    props: ['meal'],
    data () {
        return {
            dayMeal: this.meal
        }
    }
}
</script>

