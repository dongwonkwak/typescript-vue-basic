<template>
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue;
</script>
