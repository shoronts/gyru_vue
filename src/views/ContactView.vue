<template>
  <ContactCom />
  <FooterCom />
</template>

<script>
// @ is an alias to /src
import ContactCom from '@/components/ContactCom.vue';
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'ContactView',
  components: {
    ContactCom,
    FooterCom
  },
  mounted() {  
      document.title = "Gyru | Contact";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
  }
}
</script>

