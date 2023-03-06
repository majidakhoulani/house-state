<template>
    <v-footer dark padless class="bg-surface-variant">
        <!-- <v-container class="bg-surface-variant"> -->
        <v-row no-gutters>
            <v-col cols="12"  lg="4">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pb-8 ">About Homestate</h3>
                    <p class="text-subtitle-4" style="line-height:35px">Far far away, behind the word mountains, far from
                        the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics.</p>
                </v-sheet>
            </v-col>
            <v-col cols="12"  lg="2">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pl-4">Links</h3>
                    <v-list class=" bg-surface-variant">
                        <v-list-item v-for="item in items" :key="item.title" :title="item.title"
                            style="padding-bottom:0;margin-bottom:0"></v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
            <v-col cols="12"  lg="3">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pl-4">Information</h3>
                    <v-list class=" bg-surface-variant">
                        <v-list-item v-for="link in links" :key="link.title" :title="link.title"
                            style="padding-bottom:0;margin-bottom:0"></v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
            <v-col cols="12" lg="3">
                  <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 ">Newsletter</h3>
                    <p class="text-subtitle-4" style="line-height:35px">Subscribe for our newsletter</p>
                    <!-- <v-form ref="form" id="form" class="pt-4">
                      <div class="d-flex">
                        <v-text-field v-model="name" label="Enter Your Name"
                            required  color="primary">
                            <div color="primary" ><v-icon icon="mdi-send" class=" text-center  w-25 pa-7"  size="40" color="primary"></v-icon></div>
                        </v-text-field>


                      </div>
                    </v-form> -->
                    <div class="d-flex">
                    <div class="w-75">
                      <v-text-field label="Enter Your Name"
                            required  color="primary">

                            <!-- <v-icon icon="mdi-send" class="footer-icon"  size="40" color="primary"></v-icon> -->
                        </v-text-field>
                        <!-- <v-icon icon="mdi-send" class=" text-center  footer-icon w-25 pa-6"  size="40" color=""></v-icon> -->
                    </div>
                      <div class="bg-primary pa-2 h-50" ><v-icon icon="mdi-send" class=" text-center  footer-icon pa-5"  size="30" color="white"></v-icon></div>
                    </div>

                </v-sheet>
            </v-col>
        </v-row>
        <!-- </v-container> -->

    </v-footer>
</template>
<script>
    export default {
        data() {
            return {
                items: [{
                        title: 'Home'
                    },
                    {
                        title: 'Properties'
                    },
                    {
                        title: 'Agent'
                    },
                    {
                        title: 'Blog'
                    },
                    {
                        title: 'API'
                    },
                    {
                        title: 'FAQ / Contact'
                    },
                ],
                links: [{
                        title: 'Terms & Condition'
                    },
                    {
                        title: 'License'
                    },
                    {
                        title: 'Privacy & Policy'
                    },
                    {
                        title: 'Contact Us'
                    }
                ]
            }
        }


    }
</script>
<style
>
.footer-icon{
transform: rotate(-45deg);
}
/* .text-white-override1{
  color:#fff !important
} */
</style>
