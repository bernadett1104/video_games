<template>
<div class="my-border text-white bg-dark">
  <p class="pp">További információkért itt kapcsolatba léphet velünk: <br> 
  <a href="https://hu-hu.facebook.com/" target="_blank"><i class="bi bi-facebook coloring"></i></a> -
  <a href="https://hu-hu.facebook.com/" target="_blank"><i class="bi bi-messenger coloring"></i></a> -
  <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram coloring"></i></a> -
  <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank"><i class="bi bi-envelope-plus coloring"></i></a>
  </p>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.pp {
    padding: 13px;
    text-align: center;
}

.coloring {
  color: white;
}

.coloring:hover {
  color: grey;
}
</style>