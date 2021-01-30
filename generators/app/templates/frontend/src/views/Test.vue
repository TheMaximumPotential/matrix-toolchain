<template>
    <div>test</div>
    <div>
        {{
            `data: { success: ${data.success}, message: ${
                data.data && data.data.msg
            }\}`
        }}
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    setup() {
        let data = ref({});

        onMounted(() => {
            let url;
            if (process.env.NODE_ENV === "production") {
                url = "";
            } else {
                url = "http://localhost:3000";
            }
            axios.get(url + "/api/test").then((res) => {
                data.value = res.data;
                console.log(data.value);
            });
        });
        return {
            data,
        };
    },
};
</script>

<style>
</style>