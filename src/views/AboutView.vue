<template>
  <AboutCom />
  <FooterCom />
</template>

<script>
// @ is an alias to /src
import AboutCom from '@/components/AboutCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'AboutView',
  components: {
    AboutCom,
    FooterCom
  },
  mounted() {  
      document.title = "Gyru | About";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
</script>

