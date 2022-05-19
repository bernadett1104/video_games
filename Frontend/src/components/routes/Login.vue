<template>
    <div class="my-border p-3 tocenter">
        <h1 class="mb-4">Bejelentkezés</h1>
        <p>Kérjük jelentkezzen be a fiókjába!</p>
        <p>Ha még nincs fiókja, hozza létre <a href="#/registration">itt.</a></p>

        <form>
            <div class="row mb-3 center">
                <label for="email" class="col-sm-1 col-form-label input-group-text">E-mail:</label>
                <div class="col-sm-3">
                    <input type="email" class="form-control " id="email" placeholder="példa-email@gmail.com" v-model="loginData.email">
                </div>
            </div>
  
            <div class="row mb-3 center">
                <label for="password" class="col-sm-1 col-form-label input-group-text">Jelszó:</label>
                <div class="col-sm-3">
                    <input type="password" class="form-control" id="password" placeholder="példajelszó123" v-model="loginData.password" >
                </div>
            </div>
    
            <button type="button" class="btn btn-primary" @click="onClickLogin()">Bejelentkezés</button>
        </form>
        
        <div class="alert alert-danger m-3" role="alert" v-if="noSuccess"> 
            Bejelentkezés sikertelen: Rossz email vagy jelszó!
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginData: {
                email: "",
                password: "",
            },
            loginResponse: {
                success: 0,
                message: "",
                token: null,
            },
            noSuccess: false
        };
    },
    methods: {
        onClickLogin() {
            const url = `${this.$loginServer}/api/users/login`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch(url, {
                method: "POST", // or 'PUT'
                headers: headers,
                body: JSON.stringify(this.loginData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    this.loginResponse = data;
                    this.$root.$data.token = data.token;
                    this.$root.$data.user = data.data;
                    if (data.success) {
                        this.$router.push({ path: "/"});
                    } else {
                        this.noSuccess = true;
                        setTimeout(()=>{
                            this.noSuccess = false;
                        },2000);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
    },
};
</script>

<style>
.tocenter {
    text-align: center;
}

.center {
    text-align: justify;
    margin: 0 32%;
    width: 110%;
}
</style>