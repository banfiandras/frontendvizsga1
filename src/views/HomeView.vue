<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import dataservice from "../services/dataservice";

const locations = dataservice.getAllLocations();
const selected = ref();
const currentViews = dataservice.getViewpointsById(selected);

</script>

<template>
 <div class="form">
        <div class="data">
            <label for="location">Hegység:</label>
            <select name="locationId" id="location" v-model="selected">
                <option v-for="location in locations" :value="lacation.id">{{ location.locationName }}</option>
            </select>
        </div>
    </div>

    <div id="viewpoints">
        <div v-for="location in currentViews" class="viewpoint">
            <h2>{{ location.ViewpointName }}</h2>
            <div>
                <ul>
                    <li>
                        <label>Hegység:</label>
                        <span>{{ location.mountain }}</span>
                    </li>
                    <li>
                        <label>Magassága:</label>
                        <span>{{ location.height }}</span>
                    </li>
                    <li>
                        <label>Épült:</label>
                        <span>{{ location.built }}</span>
                    </li>
                </ul>
            </div>
            <p class="description">
                {{ location.description }}
            </p>
            <div class="image">
                <img src="https://vizsga2023.cluster.jedlik.eu/images/avas.jpg">
            </div>
        </div>


    </div>
</template>
<style scoped>
.form {
    margin-bottom: 3rem;
    text-align: center;
}

.form .data {
    margin-bottom: 1rem;
}

.form label {
    display: inline-block;
    font-size: 2rem;
    margin-right: 0.5rem;
}

.form input, select {
    font-size: 1.5rem;
    /* width: 100%; */
    padding: 6px;
    border-radius: 6px;
}

#viewpoints {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.viewpoint {
    border: 2px solid #777;
    border-radius: 10px;
    background-color: rgb(255, 228, 196);
    min-width: 400px;
    max-width: 600px;
    font-size: 1.5rem;
    
    margin-bottom: 1rem;
}

.viewpoint h2 {
    text-align: center;
    margin: 0;
    padding: 0.25rem;
    background-color: rgb(200, 190, 156);
    border-top-left-radius: 10px;    
    border-top-right-radius: 10px;    
}

.viewpoint ul {
    margin-left: 2rem;
}

.viewpoint ul li label {
    width: 8rem;
    display: inline-block;
}

.viewpoint ul li span {
    font-weight: bold;
}

.viewpoint .description {
    background-color: rgb(200, 190, 156);
    padding: 0.25rem 1.5rem; 
    margin: 0;
    text-align: justify;
    font-size: 1.2rem;
}

.viewpoint img{
    max-width: 100%;
    max-height: 20rem;
    margin: 0.2rem auto;
    border-radius: 20px;
}

.viewpoint .image {
    text-align: center;
}
</style>