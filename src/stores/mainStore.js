import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    //  api configuration
   ApiUrl: 'http://3.88.166.59/api',
   baseUrl: 'http://3.88.166.59/',
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
