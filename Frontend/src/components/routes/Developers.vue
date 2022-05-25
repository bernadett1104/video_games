<template>
  <div class="my-border">
      <h1>Fejlesztők</h1>

        <div class="row">
        <div class="col-12">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="col-11">Fejlesztő neve</th>
                    <th class="col-1">
                        <!-- new -->
                        <button
                            type="button"
                            class="btn btn-success ms-1 btn-sm"
                            @click="onClickNew()">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(developer, index) in developers" :key="index">
                    <td>{{ developer.developerName }}</td>
                    <td>
                        <!-- edit -->
                        <button
                            type="button"
                            class="btn btn-dark ms-1 btn-sm"
                            @click="onClickEdit(developer.id)">
                            <i class="bi bi-pencil"></i>
                        </button>

                        <!-- delete -->
                        <button
                            type="button"
                            class="btn btn-danger ms-1 btn-sm"
                            @click="onClickDelete(developer.id)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="modal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ stateTitle }}
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Close"
                            @click="onClickCancel()"></button>
                    </div>
                    
                    <div class="modal-body">
                        <form class="row g-3 needs-validation" novalidate>
                            
                            <div class="mb-3 col-12">
                                <label for="name" class="form-label"
                                    >Fejlesztő neve:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Név"
                                    v-model="developer.developerName"
                                    required />
                                <div class="invalid-feedback">
                                    A fejlesztő neve kötelező!
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="onClickCancel()">
                            Mégse
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="onClickSaveData()">
                            Mentés
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
class Dev {
    constructor(
        id = null,
        developerName = null,
    ) {
        this.id = id;
        this.developerName = developerName;
    }
}

import * as bootstrap from "bootstrap";
export default {
    name: "DevelopersData",
    data() {
        return {
            developers: [],
            state: "view",
            stateTitle: null,
            developer: new Dev(),
            modal: null,
            form: null,
        };
    },
    created() {
        this.getDevelopers();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        getDevelopers() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developers`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.developers = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.developers = [];
                });
        },
        getDevelopersById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developers/${id}`;
            console.log(url);
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.developer = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.developer = [];
                });
        },
        updateDeveloper() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developers/`;
            let data = this.developer;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getDevelopers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteDeveloper(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developers/`;
            let data = {
                id: id,
            };
            fetch(url, {
                method: "DELETE",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getDevelopers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        createDeveloper() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developers`;
            let data = this.developer;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getDevelopers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új fejlesztő";
            this.developer = new Dev();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.getDevelopersById(id);
            this.modal.show();
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteDeveloper(id);
            this.state = "view";
        },
        onClickCancel() {
            this.state = "view";
            this.modal.hide();
        },
        onClickSaveData() {
            this.form.classList.add("was-validated");
            if (this.form.checkValidity()) {
                if (this.state == "edit") {
                    this.updateDeveloper();
                } else if (this.state == "new") {
                    this.createDeveloper();
                }
                this.modal.hide();
                this.state = "view";
            } else {
                return;
            }
        }
    }
}
</script>

<style>

</style>