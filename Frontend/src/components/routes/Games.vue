<template>
    <div class="my-border">
        <h1>Játékok</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Fejlesztő</th>
                    <th scope="col">Játékok</th>
                    <th scope="col">Categória</th>
                    <th scope="col">Platform</th>
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
                <tr v-for="(game, index) in games" :key="index">
                    <td>{{ game.developerName }}</td>
                    <td>{{ game.gameName }}</td>
                    <td>{{ game.categoryName }}</td>
                    <td>{{ game.platformName }}</td>
                    <td>
                        <!-- edit -->
                        <button
                            type="button"
                            class="btn btn-dark ms-1 btn-sm"
                            @click="onClickEdit(game.id)">
                            <i class="bi bi-pencil"></i>
                        </button>

                        <!-- delete -->
                        <button
                            type="button"
                            class="btn btn-danger ms-1 btn-sm"
                            @click="onClickDelete(game.id)">
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
                                <label for="developerId" class="form-label"
                                    >Fejlesztő neve:</label
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    id="developerId"
                                    placeholder="Fejlesztő neve"
                                    v-model="game.developerId"
                                    required />
                                <div class="invalid-feedback">
                                    A fejlesztő neve kötelező!
                                </div>
                            </div>

                            <div class="mb-3 col-12">
                                <label for="gameName" class="form-label"
                                    >Játék neve:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="gameName"
                                    placeholder="Név"
                                    v-model="game.gameName"
                                    required />
                                <div class="invalid-feedback">
                                    A játék neve kötelező!
                                </div>
                            </div>

                            <div class="mb-3 col-12">
                                <label for="categoryId" class="form-label"
                                    >Categoria neve:</label
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    id="categoryId"
                                    placeholder="Név"
                                    v-model="game.categoryId"
                                    required />
                                <div class="invalid-feedback">
                                    A categoria megadása kötelező!
                                </div>
                            </div>

                            <div class="mb-3 col-12">
                                <label for="platformId" class="form-label"
                                    >Platform neve:</label
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    id="platformId"
                                    placeholder="Név"
                                    v-model="game.platformId"
                                    required />
                                <div class="invalid-feedback">
                                    A platform megadása kötelező!
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
class Game {
    constructor(
        id = null,
        developerName = null,
        gameName = null,
        categoryName = null,
        platformName = null
    ) {
        this.id = id;
        this.developerName = developerName;
        this.gameName = gameName;
        this.categoryName = categoryName;
        this.platformName = platformName;
    }
}

import * as bootstrap from "bootstrap";
export default {
    name: "GamesData",
    data() {
        return {
            games: [],
            state: "view",
            stateTitle: null,
            game: new Game(),
            modal: null,
            form: null,
        };
    },
    created() {
        this.getGames();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        getGames() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamesallname`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.games = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.games = [];
                });
        },
        getGamesById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/games/${id}`;
            console.log(url);
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.game = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.game = [];
                });
        },
        updateGame() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/games/`;
            let data = this.game;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getGames();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteGame(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/games/`;
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
                    this.getGames();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        createGame() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/games`;
            let data = this.game;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.getGames();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új játék";
            this.game = new Game();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.getGamesById(id);
            this.modal.show();
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteGame(id);
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
                    this.updateGame();
                } else if (this.state == "new") {
                    this.createGame();
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