<template>
    <div class="home menuPlan">
        <div class="switch-toggle">
            <span class="switch-toggle-title">{{ dayMode? 'Day' : 'Week' }}</span>
            <label class="switch-toggle-item">            
                <input type="checkbox" class="switch-toggle-input" @click="switchView(dayMode)"/>
                <span class="switch-toggle-checkmark" id="switchToggle"></span>
            </label>
            <span class="switch-toggle">
                <span></span>
            </span>
        </div>
        <c-day v-if="dayMode"></c-day>
        <c-week v-else></c-week>
        <section class="plan__btns-wrapper">
            <!-- <button class="btn-rectangular edit-btn">Shopping list</button> -->
            <button class="clear-btn btn--square">
                <i class="far fa-trash-alt"></i>
            </button>
            <button class="edit-btn btn--square">
                <i class="fas fa-pencil-alt"></i>
            </button>
        </section>
    </div>
</template>
<script>
import DayPlan from './Day.vue'
import WeekPlan from './Week.vue'

import db from '../db'
let daysRef = db.ref('days');
let mealsRef = db.ref('meals');
export default {
    name: 'Home',
    components: {
        'c-day': DayPlan,
        'c-week': WeekPlan
    },
    data () {
        return {
            dayMode: true,
            planDate: null
        }
    },
    methods: {
        switchView(dayMode) {
        let toggle = document.getElementById('switchToggle');
        this.dayMode = !dayMode;
        toggle.classList.toggle('switch-active');
        }
    }
}
</script>

