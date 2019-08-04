<template>
    <div class="recepies" id="recepiesWrapper"> 
        <h1 class="wrapper-title">Recepies</h1>
        <section class="recepies-list">
            <div v-for="(recepie, key) in recepies" :key="key" class="card-wrapper">
                <div class="recepie-card" v-on:click="toggleModal()">
                    <div class="recepie-img"></div>
                    <div class="recepie-info" v-if="!recepie.edit">                      
                        <p class="inline-wrapper">
                            <router-link :to="'/recepie/' + recepie.id">
                                <h1 class="recepie-name">{{ recepie.name }}</h1>
                            </router-link>
                            <span class="recepie-calories">{{ recepie.ccal}}</span>
                        </p>
                        <article class="recepie-description inline-wrapper">{{ recepie.description | Slice }}</article>
                        <p class="inline-wrapper grey">
                            <span v-if="recepie.time" class="recepie-time">{{ recepie.time }}</span>
                            <span class="recepie-level">{{ recepie.level }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- <router-link to="/new-recepie" class="btn btn-add">+</router-link> -->
    </div>
</template>

<script>
import db from '../db'
const recepiesRef = db.ref('recepies'); 

export default {
    name: 'Recepies',
    data () {
        return {
            recepies: {},
            show: false,
            closeCallback: function(recepie) {
                this.show = false;
                recepie = null;
            },
            singleRecepie: {}
        }
    },
    methods: {
        toggleModal: function(val) {
        this.show = !this.show;
        this.singleRecepie = val;
        console.log(val);
        },
        setEditRecepie(key) {
            recepiesRef.child(key).update({ edit: true })
        },
        cancelEdit(key) {
            recepiesRef.child(key).update({ edit: false })
        },
        onSaveRecepie(recepie,key) {
            recepiesRef.child(key).set({ 
                name: recepie.name,
                time: recepie.time,
                level: recepie.level,
                ingredients: recepie.ingredients,
                description: recepie.description,
                edit: false,
            }) 
        },
        removeRecepie(key) {
            recepiesRef.child(key).remove()
            .then(function() {
                alert("Remove succeeded.")
            })
            .catch(function(error) {
                alert("Remove failed: " + error.message)
            });
        }
    },
    filters: {
        Slice(value) {
            return value.slice(0, 50);
        }
    },
    created() {
        recepiesRef.on('value', snapshot => {
            this.recepies = snapshot.val();
            for (let key in this.recepies) {
                this.recepies[key].id = key;
            }
        })
    }
}
</script>