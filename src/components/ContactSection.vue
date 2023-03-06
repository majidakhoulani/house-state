<template>
    <section class="contact">
        <div class="contact-content ">
            <v-row no-gutters>
                <v-col cols="12" sm="6" class="pa-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-duration="2000">
                    <div class="text-center pb-4">
                        <h1 class="text-h3 pa-4 text-primary">Ask an agent, We're here to help 24/7</h1>
                        <p class="text-subtitle-2 pt-4  text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                    </div>
                    <v-form ref="form" id="form" class="pt-16">
                        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Your Name"
                            required bg-color="#F8F9FA" color="primary"></v-text-field>

                        <v-text-field v-model="email" :rules="emailRules" label="Your Email" required
                            bg-color="#F8F9FA" color="primary">
                        </v-text-field>
                        <v-textarea solo name="input-7-4" label="" placeholder="Your Message" bg-color="#F8F9FA"
                            color="primary"></v-textarea>

                        <v-btn color="primary" elevation="2" class="mt-4 pa-4 h-50" width="">
                            <span class="text-white text-subtitle-2 text-uppercase ">send message</span>
                        </v-btn>
                    </v-form>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-img src="/assets/clients/cover_bg_2.jpg" cover class="h-100"></v-img>
                </v-col>
            </v-row>
        </div>
    </section>


    <TheFooter />
</template>


<script>
import AOS from 'aos'
    export default {
        data: () => ({
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Name is required',
                v => v.length <= 12 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
        mounted() {
    AOS.init()
  },
    }
</script>

<style>

</style>
