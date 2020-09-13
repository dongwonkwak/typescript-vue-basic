import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import './components/Hello.scss';

let v = new Vue({
    el: "#app",
    data: {
        name: "World"
    },
    components: {
        HelloComponent
    }
});