<template>
    <div class="my-border">
        <h1>Linkek</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Játék</th>
                    <th scope="col">Link</th>
                    <th scope="col">
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
                <tr v-for="(vlink, index) in gamelinks" :key="index">
                    <td>{{ vlink.gameId }}</td>
                    <td>{{ vlink.link }}</td>
                    <td>
                        <!-- edit -->
                        <button
                            type="button"
                            class="btn btn-dark ms-1 btn-sm"
                            @click="onClickEdit(vlink.id)">
                            <i class="bi bi-pencil"></i>
                        </button>

                        <!-- delete -->
                        <button
                            type="button"
                            class="btn btn-danger ms-1 btn-sm"
                            @click="onClickDelete(vlink.id)">
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

                    <div class="modal-body">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="mb-3 col-12">
                                <label for="gameId" class="form-label"
                                    >Játék neve:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="gameId"
                                    placeholder="Név"
                                    v-model="vlink.gameId"
                                    required />
                                <div class="invalid-feedback">
                                    A játék neve kötelező!
                                </div>
                            </div>

                            <div class="mb-3 col-12">
                                <label for="link" class="form-label"
                                    >Videó Link:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="link"
                                    placeholder="Név"
                                    v-model="vlink.link"
                                    required />
                                <div class="invalid-feedback">
                                    Link megadása kötelező!
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
class Clink {
    constructor(
        id = null,
        gameId = null,
        link = null,
    ) {
        this.id = id;
        this.gameId = gameId;
        this.link = link;
    }
}

import * as bootstrap from "bootstrap";
export default {
    name: "LinksData",
    data() {
        return {
            gamelinks: [],
            state: "view",
            stateTitle: null,
            vlink: new Clink(),
            modal: null,
            form: null,
        };
    },
    created() {
        this.getGamelinks();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        getGamelinks() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamelinks`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.gamelinks = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.gamelinks = [];
                });
        },
        getGamelinksById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamelinks/${id}`;
            console.log(url);
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.vlink = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.vlink = [];
                });
        },
        updateGamelink() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamelinks/`;
            let data = this.vlink;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getGamelinks();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteGamelink(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamelinks/`;
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
                    this.getGamelinks();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        createGamelink() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamelinks`;
            let data = this.vlink;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getGamelinks();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új link";
            this.vlink = new Clink();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.getGamelinksById(id);
            this.modal.show();
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteGamelink(id);
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
                    this.updateGamelink();
                } else if (this.state == "new") {
                    this.createGamelink();
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