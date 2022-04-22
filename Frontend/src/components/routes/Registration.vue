<template>
    <div class="my-border p-3">
        <h1 class="mb-4">Regisztráció</h1>
        <p>Kérjük adja meg az adatait a regisztrációhoz!</p>

        <form class="needs-validation" novalidate>
            <div class="row mb-3">
                <label for="last_name" class="col-sm-1 col-form-label">Vezetéknév:</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control " id="last_name" placeholder="Sándor" v-model="registrationData.lastname" required>
                </div>
                <div class="invalid-feedback">Vezetéknév megadása kötelező!</div>
            </div>
            
            <div class="row mb-3">
                <label for="first_name" class="col-sm-1 col-form-label">Keresztnév:</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control " id="first_name" placeholder="Bernadett" v-model="registrationData.firstname" required>
                </div>
                <div class="invalid-feedback">Keresztnév megadása kötelező!</div>
            </div>

            <div class="row mb-3">
                <label for="email" class="col-sm-1 col-form-label">E-mail:</label>
                <div class="col-sm-3">
                    <input type="email" class="form-control " id="email" placeholder="bernadett@gmail.com" v-model="registrationData.email" required>
                </div>
                <div class="invalid-feedback">E-mail megadása kötelező!</div>
            </div>

            <div class="row mb-3">
                <label for="password" class="col-sm-1 col-form-label">Jelszó:</label>
                <div class="col-sm-3">
                    <input type="password" class="form-control " id="password" placeholder="EgyErősJelszó_12" v-model="registrationData.password" required>
                </div>
                <div class="invalid-feedback">Jelszó megadása kötelező!</div>
            </div>

            <div class="row mb-3">
                <label for="password" class="col-sm-1 col-form-label">Neme:</label>
                <div class="col-sm-3">
                    <select class="form-select" v-model="registrationData.gender" required>
                    <option selected disabled value="">Válasz</option>
                    <option>Nő</option>
                    <option>Férfi</option>
                    <option>Egyéb</option>
                </select>
                </div>
                <div class="invalid-feedback">Nem megadása kötelező!</div>
            </div>

            <button type="button" class="btn btn-primary" @click="onClickSaveData()">Regisztráció</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            registrationData: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                gender: ""
            },
            noSuccess: false
        };
    },
    mounted() {
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        onClickRegistration() {
            const url = `${this.$loginServer}/api/users/registration`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch(url, {
                method: "POST", // or 'PUT'
                headers: headers,
                body: JSON.stringify(this.registrationData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if (data.success) {
                        this.$router.push({ path: "/login"});
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
        onClickSaveData() {
            this.form.classList.add("was-validated");
            if (this.form.checkValidity()) {
                    this.onClickRegistration();
            } else {
                return ;
            }
        },
    },
};
</script>

<style></style>
