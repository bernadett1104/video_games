<template>
  <div class="my-border">
		<h1>Profil</h1>
        <p>Vezetéknév: {{$root.$data.user.lastname}}</p>
        <p>Keresztnév: {{$root.$data.user.firstname}}</p>
        <p>E-mail: {{$root.$data.user.email}}</p>
        <p>Neme: {{$root.$data.user.gender}}</p>
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>