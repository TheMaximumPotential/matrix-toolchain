<template>
    <div id="nav">
        <router-link to="/">Index</router-link> |
        <router-link to="/test">Test</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
