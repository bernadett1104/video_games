<template>
  <div class="my-border">
    <div  class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 p-4" >
        <div class="col" v-bind="getVideoFromLink(gamelink.link)"  v-for="(gamelink, index) in gamelinks" :key="index">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">{{ gamelink.developerName}}</h4>
              <h5 class="card-title">{{ gamelink.gameName }}</h5>
              <p v-html="embed" class="card-text"><a :href="gamelink.link">
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
          developerId = null,
      ) {
          this.id = id;
          this.gameId = gameId;
          this.link = link;
          this.developerId = developerId;
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
            developerId: null,
            embed: null,
        };
    },
    created() {
        this.getLinksToCard();
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
        getLinksToCard() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/getlink`;
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
        getVideoFromLink(link){
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
    }
}

</script>

<style>
</style>