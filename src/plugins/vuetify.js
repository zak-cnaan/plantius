import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'
import { preset3 } from 'vue-cli-plugin-vuetify-preset-rally/preset'
import { preset2 } from 'vue-cli-plugin-vuetify-preset-reply/preset'


Vue.use(Vuetify);

export default new Vuetify({
  preset,
  theme: {
      dark: false
  }
});
