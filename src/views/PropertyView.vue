<template>
 <HeroSection/>
 <PropertySection/>
 <FooterSection/>
</template>

<script>
import FooterSection from '@/components/FooterSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import PropertySection from '@/components/PropertySection.vue'
export default{
  data(){
    return{

    }
  },
  components:{
    HeroSection,
    PropertySection,
    FooterSection
}
}
</script>
