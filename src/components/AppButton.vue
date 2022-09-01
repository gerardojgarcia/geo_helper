<script>
export default {
    name: 'AppButton',

    props: {
        name: String,
    }
}
</script>

<template>
    <div>
        <button class="text-white rounded-sm bg-teal-500 shadow-lg px-4 py-1">{{name}}</button>
        
    </div>

</template>