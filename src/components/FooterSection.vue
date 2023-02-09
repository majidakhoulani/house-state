<template>
    <v-footer dark padless class="bg-surface-variant">
        <!-- <v-container class="bg-surface-variant"> -->
        <v-row no-gutters>
            <v-col cols="4">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pb-8 ">About Homestate</h3>
                    <p class="text-subtitle-4" style="line-height:35px">Far far away, behind the word mountains, far from
                        the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics.</p>
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pl-4">Links</h3>
                    <v-list class=" bg-surface-variant">
                        <v-list-item v-for="item in items" :key="item.title" :title="item.title"
                            style="padding-bottom:0;margin-bottom:0"></v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
            <v-col cols="3">
                <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 pl-4">Information</h3>
                    <v-list class=" bg-surface-variant">
                        <v-list-item v-for="link in links" :key="link.title" :title="link.title"
                            style="padding-bottom:0;margin-bottom:0"></v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
            <v-col cols="3">
                  <v-sheet class="pa-2 ma-2 bg-surface-variant">
                    <h3 class=" text-h5 pt-2 ">Newsletter</h3>
                    <p class="text-subtitle-4" style="line-height:35px">Subscribe for our newsletter</p>
                    <v-form ref="form" id="form" class="pt-4">
                      <div class="d-flex">
                        <v-text-field v-model="name" label="Enter Your Name"
                            required bg-color="" color="primary">
                        </v-text-field>
                        <v-icon icon="mdi-telegram" class="text-white bg-primary text-left w-25 pa-7" size="40"></v-icon>
                      </div>
                    </v-form>

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
