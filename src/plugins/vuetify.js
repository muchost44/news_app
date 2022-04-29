import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#3C2DD3",
        primary: "#00ce63",
        // secondary: "#F4F4F9",
        secondary: "#000000",
      },
    },
  },
});
