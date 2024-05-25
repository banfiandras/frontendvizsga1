<template>
    <h1 class="text-center">Kilátók értékelése</h1>
    <div class="form">

        <div class="data">
            <label for="viewpoint">Kilátó:</label>
            <select name="viewpointId" id="viewpoint" v-model="form.viewpointId">
                <option v-for="a in list" value="v.id">{{ v.viewpointName }}</option>
            </select>
        </div>

        <div class="data">
            <label for="email">Az Ön e-mail címe:</label>
            <input type="text" id="email" name="email" v-model="form.email">
        </div>

        <div class="data">
            <label for="rating">Értékelés:</label>
            <input type="range" min="1" max="10" id="rating" name="rating" v-model="form.rating">
        </div>

        <div class="data">
            <label for="rating">Megjegyzsés:</label>
            <textarea id="comment" name="comment" rows="3" v-model="form.comment"></textarea>
        </div>

        <div class="data">
            <input type="checkbox" id="acceptedConditions" name="acceptedConditions" v-model="form.acceptedConditions">
            <label for="acceptedConditions">Felhasználási feltételeket elfogadom</label>
        </div>

        <div class="data">
            <input :onclick="send()" type="button" value="Küldés" style="margin: 0 220px; width: 160px;">
        </div>


        <div class="error">
            <span>{{ error }}</span>
            <span>x</span>
        </div>
    </div>


</template>

<script setup>
import dataservice from "../services/dataservice";
import HomeView from "./HomeView.vue";
import router from vue;

    
const list = dataservice.getAllViewpoints;

const succ = ref({

    count: 0,
    average: 0

});

const error = ref();

const form = ref({
    viewpointId: '',
    email: '',
    rating: 5,
    comment: '',
    acceptedConditions: false
});

const send = () => {
    if (form.acceptedConditions) {
        try{
            succ = dataservice.sendRating(form);    
            alert(` asdad ${succ.average} adsa ${succ.count} asdad`);
            router.push(HomeView);
        }
        catch(err){
            error = dataservice.sendRating(form);
        }
       
    } else {
        console.log('Nincsenek elfogadva a feltételek!');
    }
}

</script>

<style scoped>
.text-center{
    text-align: center;
}

.form {
    width: 600px;
    margin: 0 auto;
}

.data {
    margin-bottom: 1rem;
}

label {
    display: block;
    font-size: 1.4rem;
}

input, select {
    font-size: 1.5rem;
    width: 100%;
    padding: 6px;
    border-radius: 6px;
}

input[type='checkbox'] {
    width: unset;    
}

label[for='acceptedConditions'] {
    display: inline-block;
}

#acceptedConditions {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 8px;
}

.error {
    background-color: red;
    color: white;
    text-align: center;
    font-size: 1.4rem;
    padding: 10px 4px;
    border-radius: 6px;
}

.error span:nth-child(2) {
    float: right;
    padding-right: 4px;
    cursor: pointer;
}

textarea {
	width: 100%;
	resize: none;
	font-size: 1.5rem;
}

.error span:nth-last-of-type(1) {
    cursor: pointer;
}
</style>