<template>
    <div class="my-border p-3">
        <h1 class="mb-4">Regisztráció</h1>
        
<form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4 position-relative">
                <label for="validationTooltip01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
                <div class="valid-tooltip">Looks good!</div>
            </div>
            
            <div class="col-md-4 position-relative">
                <label for="validationTooltip02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
                <div class="valid-tooltip">Looks good!</div>
            </div>

            <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">Please choose a unique and valid username.</div>
                </div>
            </div>

            <div class="col-md-3 position-relative">
                <label for="validationTooltip04" class="form-label">State</label>
                <select class="form-select" id="validationTooltip04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                </select>
            <div class="invalid-tooltip">Please select a valid state.</div>
            </div>

            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
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

<style></style>
