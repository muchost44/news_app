<template>
  <!-- <hello-world /> -->
  <v-app>
    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Portal Berita</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search Title"
        v-show="isSearch"
        v-model="search"
        @keyup.enter="searchTitle(search)"
      ></v-text-field>
      <v-btn @click="isSearch = !isSearch" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" temporary> -->
    <v-navigation-drawer v-model="drawer" app color="primary" dark temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Portal Berita </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item-group>
          <v-list-item>
            <!-- <v-col> -->
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              Kategori
            </v-list-item-content>
            <!-- </v-col> -->
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-radio-group v-model="radioGroup" dense>
                <v-radio
                  label="Umum"
                  value="general"
                  @click="fetchNews({ query, category: 'general' })"
                  @change="category = 'general'"
                ></v-radio>
                <v-radio
                  label="Teknologi"
                  value="technology"
                  @click="fetchNews({ query, category: 'technology' })"
                  @change="category = 'technology'"
                ></v-radio>
                <v-radio
                  label="Hiburan"
                  value="entertaintment"
                  @click="fetchNews({ query, category: 'entertaintment' })"
                  @change="category = 'entertaintment'"
                ></v-radio>
                <v-radio
                  label="Kesehatan"
                  value="health"
                  @click="fetchNews({ query, category: 'health' })"
                  @change="category = 'health'"
                ></v-radio>
                <v-radio
                  label="Sains"
                  value="science"
                  @click="fetchNews({ query, category: 'science' })"
                  @change="category = 'science'"
                ></v-radio>
                <v-radio
                  label="Olahraga"
                  value="sport"
                  @click="fetchNews({ query, category: 'sport' })"
                  @change="category = 'sport'"
                ></v-radio>
              </v-radio-group>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-row no-gutters>
      <v-col v-for="(news, index) in listNews" :key="index">
        <v-card class="ma-auto mb-5" max-width="300">
          <v-img height="200px" :src="`${news.urlToImage}`"></v-img>
          <v-card-title>{{ news.title }}</v-card-title>
          <v-card-text>{{ news.description }}</v-card-text>
          <v-card-actions class="d-flex justify-center mb-6">
            <v-btn :href="news.url" medium color="primary"
              >Baca Selengkapnya</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",
  data: () => ({
    //
    drawer: false,
    isSearch: false,
    search: "",
    category: "general",
    query: "",
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Account", icon: "mdi-account-box" },
      { title: "Admin", icon: "mdi-gavel" },
    ],
  }),
  computed: {
    listNews() {
      return this.$store.state.news.listNews;
    },
  },
  components: {
    // HelloWorld,
  },
  methods: {
    fetchNews({ query, category }) {
      this.$store.dispatch("news/fetchNews", {
        query,
        category,
      });
    },
    searchTitle(query) {
      if (this.keyword != "") {
        this.fetchNews({
          query,
          category: this.category,
        }),
          (this.keyword = "");
      } else {
        this.fetchNews({
          query: "",
          category: this.category || "general",
        });
      }
    },
  },
  mounted() {
    this.fetchNews({
      query: "",
      category: this.category || "general",
    });
  },
};
</script>
