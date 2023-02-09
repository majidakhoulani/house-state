<template>
 <HeroSection/>
 <ServiceSection/>
 <ProductSection/>
 <TestimonialsSection/>
 <TeamSection/>
 <BlogSection/>
 <ContactSection/>
 <FooterSection/>
</template>

<script>
import BlogSection from '@/components/BlogSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductSection from '@/components/ProductSection.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
export default{
  components:{
    HeroSection,
    ServiceSection,
    ProductSection,
    TeamSection,
    BlogSection,
    ContactSection,
    FooterSection,
    TestimonialsSection
}
}

</script>
