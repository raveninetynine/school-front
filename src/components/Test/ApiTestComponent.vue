<template>
    <div class="test">
        <h1>test</h1>
        <p>
            {{data}}
        </p>
    </div>
</template>

<script>
 import axios from 'axios';
export default {
    data: () => ({
        data: "",
        backUrlLocal: "http://127.0.0.1:80/api/",
        backUrlProd: "http://185.251.91.134/api"
    }),
    mounted(){
        this.testAPI()
    },
    methods: {
        testAPI() {
            axios
            .get(this.backUrlProd)
            .then(response => (this.data = response.data));
        },
    }
}
</script>