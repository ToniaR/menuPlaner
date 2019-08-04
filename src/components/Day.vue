<template>
    <div class="day">
        <div class="day__date-block">
            <h1>Day</h1>
            <input v-if="chooseDate" class="date-input" type="date"/>
            <p v-else>11-07-2019            
                <span @click="onChangeDate">
                    <i class="fas fa-pencil-alt"></i>
                </span>
            </p>
        </div>
        <section>
            <!-- <h1 v-if="planDate">Plan for {{ planDate }}</h1> -->
            <!-- <h1>There is no plan yet</h1> -->
            <c-meal-card v-for="(day, key) in days" :key="key"
            :meal="day"></c-meal-card>
        </section>
    </div>
</template>


<script>

import db from '../db'
const daysRef = db.ref('days'); 

import MealCard from './MealCard.vue'
export default {
    name: 'MealCard',
    components: {
        'c-meal-card': MealCard
    },
    data () {
        return {
            days: {},
            chooseDate: false
        }
    },
    methods: {
        onChangeDate () {
            this.chooseDate = !this.chooseDate;
        }
    },
    created() {
        daysRef.on('value', snapshot => {
            this.days = snapshot.val();
        })
    }
}
</script>

