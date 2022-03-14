<script setup lang="ts">
// Button component

defineProps(['label'])
</script>

<template>
    <button type="button" class="theme-l1 hover-theme">{{ label }}</button>

</template>

<style>



.std-btn {
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.sml-btn {
    padding: 0.25em 0.5em;
    border-radius: 4px;
    font-size: 0.8em;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    box-shadow: 2px 2px 4px  rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.lrg-btn {
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 1.2em;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.std-btn:hover, .sml-btn:hover, .lrg-btn:hover {
    box-shadow: 4px 4px 16px  rgb(135, 135, 135);
    transition: all 0.4s ease-in-out;
}

.outline-btn {
    padding: 0.5em 1em;
    margin: 1px;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.outline-btn-dropdown {
    padding: 0.5em 1em;
    margin: 2px;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 105px;
    height: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.outline-btn-dropdown:hover {
    box-shadow: 4px 4px 16px  rgba(0, 0, 0, 0.1);
}

.outline-btn:hover {
    box-shadow: 4px 4px 16px  rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease-in-out;
    background-color: var(--primary-color);
    color: white;
}

.ghost-btn {
    padding: 0.5em 1em;
    margin: 1px;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    width: 100%;
    max-width: 100px;
    height: auto;
    text-decoration: none;

}

.ghost-btn:hover {
    box-shadow: 4px 4px 16px  rgba(0, 0, 0, 0.1);
}


</style>