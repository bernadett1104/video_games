<template>
  <div class="my-border">
		<h1>Főoldal</h1>

    <div class="row row-cols-1 row-cols-md-4 row-cols-sm-3 g-4 p-4">
        <div class="col" v-for="(gamelink, index) in gamelinks" :key="index">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ gamelink.gameName }}</h5>
              <p class="card-text"><a :href="gamelink.link" target="_blank">
                            {{ gamelink.link }} </a></p>
            </div>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
class GameLink {
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

export default {
    name: "Fooldal",
    data() {
        return {
            gamelinks: [],
            gamesABC: [],
            gamelink: new GameLink(),
            state: "view",
            stateTitle: null,
            gameId: null, 
            embed: null,
        };
    },
    created() {
        this.getGamelinks();
        this.getGamesABC();
    },
    methods: {
        getGamesABC(){
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/gamesABC`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.gamesABC = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.gamesABC = [];
                });
        },
        getGamelinks() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/alllinks`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
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
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.gamelink = data.data[0];
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.gamelink = new GameLink();
                });
        },
        onClickGameName(link){
            //src="https://www.youtube.com/embed/-pUhraVG7Ow" 
            link = link.split("=")[1];
            this.embed = `<iframe width="100%" height="315"
                src="https://www.youtube.com/embed/${link}"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" allowfullscreen>
                </iframe>`;
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
        },
    }
}

</script>

<style>
</style>