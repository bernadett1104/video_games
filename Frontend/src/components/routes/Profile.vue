<template>
  <div class="my-border">
		<h1>Profil</h1>
        <p>Keresztnév: {{$root.$data.user.firstName}}</p>
        <p>Vezetéknév: {{$root.$data.user.lastName}}</p>
        <p>Email: {{$root.$data.user.email}}</p>
        <p>Number: {{$root.$data.user.number}}</p>
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>