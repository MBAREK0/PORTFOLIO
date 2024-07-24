import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
   ApiUrl: 'http://127.0.0.1:8000/api',
   baseUrl: 'http://127.0.0.1:8000/',
   email : 'mbarekelaadraoui@gmail.com',
   selectedLang : 'en',
  }),
  actions: {
    changeLang(lang) {
      this.selectedLang = lang;
    }, 

  },
});
