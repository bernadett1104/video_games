<template>
    <div>
        <nav class="navbar p-3 navbar-expand-lg navbar-dark bg-dark">
            <!-- <div class="container-fluid"> -->
                <router-link class="navbar-brand" to="/">Infinity </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                class="nav-link active"
                                aria-current="page"
                                to="/">
                                Home
                            </router-link>
                        </li>

                        <!-- #region Adatkarbantartás -->
                        <li class="nav-item dropdown" v-if="loggedIn()">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Adatkarbantartás
                            </a>
                        </li>
                        <!-- #endregion Adatkarbantartás -->

                        <!-- #region Login -->
                        <li class="nav-item dropdown" v-if="loggedIn()">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{$root.$data.user.firstname}}
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li @click.prevent="onClickLogout()">
                                    <router-link
                                        class="dropdown-item"
                                        to="/login">
                                        Logout
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/profile">
                                        Profil
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- #endregion Login -->

                        <li class="nav-item" v-if="!loggedIn()">
                            <router-link class="nav-link" to="/login"
                                >Bejelentkezés</router-link
                            >
                        </li>

                        <li class="nav-item" v-if="!loggedIn()">
                            <router-link class="nav-link" to="/registration"
                                >Regisztráció</router-link
                            >
                        </li>
                    </ul>
                </div>
            <!-- </div> -->
        </nav>
    </div>
</template>

<script>
class User {
    constructor(
        firstname = null,
        lastname = null,
        gender = null,
        email = null,
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
    }
}

export default {
    name: "Menu",
    methods: {
        loggedIn() {
            return Boolean(this.$root.$data.token);
        },
        onClickLogout() {
            this.$root.$data.token = null;
            this.$root.$data.user = new User();
        },
    },
};
</script>

<style></style>
