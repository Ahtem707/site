<template>
  <v-app>
    <v-container>
      <v-row>
        <h1 class="text--secondary mt-10">Create new book</h1>
      </v-row>
      <v-row wrap>
        <v-col>
          <v-card height="400" width="240">
            <v-btn
              v-if="true"
              height="100%"
              width="100%"
              class="justify-center"
            >
              <v-icon @click="addImage" x-large>mdi-plus-circle</v-icon>
            </v-btn>
            <img v-else src="" height="150" />
          </v-card>
        </v-col>
        <v-col>
          <v-layout row>
            <v-flex>
              <v-form v-model="valid" ref="form" validation class="mb-3">
                <v-text-field
                  name="Title"
                  label="Title"
                  light="light"
                  v-model="title"
                  required
                  :rules="[(v) => !!v || 'Title is required']"
                >
                </v-text-field>
                <v-textarea
                  name="annotation"
                  label="Annotation"
                  v-model="annotation"
                  light="light"
                  multi-line
                  :rules="[(v) => !!v || 'Description is required']"
                  class="mb-5"
                ></v-textarea>
              </v-form>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
      <v-row>
        <v-btn :disabled="!valid" class="success" @click="createBook"
          >Create book</v-btn
        >
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      annotation: "",
      valid: false,
    };
  },
  methods: {
    async createBook() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post(this.serverPath+'/',{
            method: 'createBook',
            arguments: {
              title: this.title,
              annotation: this.annotation,
            }
          });
        this.$router.push("/");
        } catch(err) {
          console.log(err)
        }
      }
    },
    addImage() {
      console.log('hi')
    }
  },
};
</script>