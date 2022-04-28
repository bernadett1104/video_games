<template>
    <div class="my-border">
        <h1>Platformok</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Platform neve</th>
                    <th scope="col">
                        <!-- new -->
                        <button
                            type="button"
                            class="btn btn-outline-success ms-1 btn-sm"
                            @click="onClickNew()">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(platform, index) in platforms" :key="index">
                    <td>{{ platform.name }}</td>
                    <td>
                        <!-- edit -->
                        <button
                            type="button"
                            class="btn btn-outline-warning ms-1 btn-sm"
                            @click="onClickEdit(platform.id)">
                            <i class="bi bi-pencil"></i>
                        </button>

                        <!-- delete -->
                        <button
                            type="button"
                            class="btn btn-outline-danger ms-1 btn-sm"
                            @click="onClickDelete(platform.id)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

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
                    <!-- Űrlap -->
                    <div class="modal-body">
                        <form class="row g-3 needs-validation" novalidate>
                            <!-- name -->
                            <div class="mb-3 col-12">
                                <label for="name" class="form-label"
                                    >Név:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Platform neve"
                                    v-model="platform.name"
                                    required />
                                <div class="invalid-feedback">
                                    A platform nevének megadása kötelező!
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
                            @click="saveData()">
                            Mentés
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
class Plat {
    constructor(
        id = null,
        name = null,
    ) {
        this.id = id;
        this.name = name;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "PlatformsData",
    data() {
        return {
            platforms: [],
            state: "view",
            stateTitle: null,
            platform: new Plat(),
            modal: null,
            form: null,
        };
    },
    created() {
        this.getPlatforms();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            keyboard: false,
        });

        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        getPlatforms() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platforms`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.platforms = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.platforms = [];
                });
        },
        getPlatformsById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platforms/${id}`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.platform = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.platform = [];
                });
        },
        updatePlatform() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platforms`;
            let data = this.car;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getPlatforms();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        createPlatform() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platforms`;
            let data = this.platform;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getPlatforms();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deletePlatform(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platforms`;
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
                    this.getPlatforms();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új platform";
            this.platform = new Plat();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.getPlatformsById(id);
            this.modal.show();
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deletePlatform(id);
            this.state = "view";
        },
        onClickCancel() {
            this.state = "view";
            this.modal.hide();
        },
        saveData() {
            this.form.classList.add('was-validated')
            if (this.form.checkValidity()) {
                if (this.state == "edit") {
                    //put
                    this.updatePlatform();
                } else if (this.state == "new") {
                    //post
                    this.createPlatform();
                }
                this.modal.hide();
                this.state = "view";
            }else{
                return
            }
        },
    }
}
</script>