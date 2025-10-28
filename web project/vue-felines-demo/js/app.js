const appConfig = {
  data() {
    return {
      mainHeading: 'Felines and Quick Facts',
      felines,          // vient de data/felines.js
      isFlipped: false,
      index: 0
    };
  },
  methods: {
    move(change) {
      const next = this.index + change;
      if (next >= 0 && next < this.felines.length) {
        this.index = next;
        this.isFlipped = false;
      }
    },
    onImgError(e) {
      // fallback si le fichier local manque
      e.target.src = 'images/placeholder.jpg'; // ajoute un placeholder.jpg si tu veux
    }
  }
};

Vue.createApp(appConfig).mount('#app');
