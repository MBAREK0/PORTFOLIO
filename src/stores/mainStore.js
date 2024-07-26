import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    //  api configuration
   ApiUrl: 'http://127.0.0.1:8000/api',
   baseUrl: 'http://127.0.0.1:8000/',
  //  contact form configuration
   email : 'mbarekelaadraoui@gmail.com',
   userName: 'M\'barek EL AADRAOUI',
  //  emailJs configuration
   service_id : 'service_8p1j5fd',
   template_id : 'template_f2m0fea',
   user_id : 'Pms4EzhvmczF8xnPR',
    // language
   selectedLang : 'en',
  }),
  actions: {
    changeLang(lang) {
      this.selectedLang = lang;
    }, 

  },
});
