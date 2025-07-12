import { createPinia } from 'pinia';

export default {
  install(app) {
    const pinia = createPinia();
    app.use(pinia);
  },
};
