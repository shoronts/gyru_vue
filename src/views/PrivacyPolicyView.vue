<template>
    <PrivacyPolicyCom />
    <FooterCom />
</template>

<script>
import PrivacyPolicyCom from '@/components/PrivacyPolicyCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
    name: 'PrivacyPolicyView',
    components: {
        PrivacyPolicyCom,
        FooterCom
    },
    mounted() {  
        document.title = "Gyru | Privacy Policy";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
}
</script>

