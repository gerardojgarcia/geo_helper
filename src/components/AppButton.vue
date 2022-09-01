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
        <button class="text-white rounded-sm bg-teal-500 shadow-md px-4 py-1 hover:bg-teal-400 border-0 hover:shadow-xl ">{{name}}</button>
        
    </div>

</template>