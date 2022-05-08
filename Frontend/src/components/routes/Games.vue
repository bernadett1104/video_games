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
                            @click="onClickEdit(game)">
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
                                <label for="text" class="col-form-label">Fejlesztő neve:</label>
                                <div>
                                    <select class="form-select" v-model="game.developerId" required>
                                        <option
                                        v-for="(developertoadc, index) in developersABC"
                                        :key="index"
                                        :value="developertoadc.id"
                                        >
                                            {{developertoadc.developerName}}
                                        </option>
                                    </select>
                                </div>
                                <div class="invalid-feedback">Fejlesztő megadása kötelező!</div>
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
                                <label for="text" class=" col-form-label">Kategória neve:</label>
                                <div>
                                    <select class="form-select" v-model="game.categoryId" required>
                                        <option
                                        v-for="(categorytoabc, index) in categoryABC"
                                        :key="index"
                                        :value="categorytoabc.id"
                                        >
                                            {{categorytoabc.categoryName}}
                                        </option>
                                    </select>
                                </div>
                                <div class="invalid-feedback">Kategória megadása kötelező!</div>
                            </div>

                            <div class="mb-3 col-12">
                                <label for="text" class="col-form-label">Platform neve:</label>
                                <div>
                                    <select class="form-select" v-model="game.platformId" required>
                                        <option
                                        v-for="(platformtoabc, index) in platformABC"
                                        :key="index"
                                        :value="platformtoabc.id"
                                        >
                                            {{platformtoabc.platformName}}
                                        </option>
                                    </select>
                                </div>
                                <div class="invalid-feedback">Platform megadása kötelező!</div>
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
        developerId = null,
        gameName = null,
        categoryId = null,
        platformId = null
    ) {
        this.id = id;
        this.developerId = developerId;
        this.gameName = gameName;
        this.categoryId = categoryId;
        this.platformId = platformId;
    }
}

import * as bootstrap from "bootstrap";
export default {
    name: "GamesData",
    data() {
        return {
            games: [],
            developersABC: [],
            categoryABC: [],
            platformABC: [],
            developerId: null,
            categoryId: null,
            platformId: null,
            state: "view",
            stateTitle: null,
            game: new Game(),
            modal: null,
            form: null,
        };
    },
    created() {
        this.getGames();
        this.getDevelopersABC();
        this.getCategoriesABC();
        this.getplatformsABC();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        getDevelopersABC(){
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/developersABC`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Success:", data.data);
                    this.developersABC = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.developersABC = [];
                });
        },
        getCategoriesABC(){
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/categoriesABC`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.categoryABC = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.categoryABC = [];
                });
        },
        getplatformsABC(){
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/platformsABC`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.platformABC = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.platformABC = [];
                });
        },
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
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.game = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.game = new Game();
                });
        },
        updateGame() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/games/`;
            let data = {
                id: this.game.id,
                developerId: this.game.developerId,
                gameName: this.game.gameName,
                categoryId: this.game.categoryId,
                platformId: this.game.platformId
            }
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(() => {
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
                .then(() => {
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
                .then(() => {
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
        onClickEdit(game) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.game = game;
            this.developerId = game.developerId;
            this.categoryId = game.categoryId;
            this.platformId = game.platformId;
            this.gameName = game.gameName;
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