<template>
  <v-app>
    <v-container>
      <v-row>
        <h1 class="text--secondary mt-10">Create new book</h1>
      </v-row>
      <v-row wrap>
        <v-col cols="4">
          <v-card height="350" width="250">
            <v-btn
              v-if="!imageSrc"
              height="100%"
              width="100%"
              class="justify-center"
            >
              <v-icon @click="addImage" x-large>mdi-plus-circle</v-icon>
              <input ref="fileInput" type="file" style="display: none"
              accept="image/*"
              @change="onFileImageChange">
            </v-btn>
            <img style="height: inherit; width: inherit" v-else :src="imageSrc"/>
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
              <v-row justify="center">
                <v-btn :disabled="!valid" class="success" @click="createBook"
                  >Create book</v-btn
                >
              </v-row>
            </v-flex>
          </v-layout>
        </v-col>
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
      image: null,
      imageSrc: ''
    };
  },
  methods: {
    async createBook() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post(this.serverPath, {
            method: "createBook",
            arguments: {
              title: this.title,
              annotation: this.annotation,
              //imageUrl: this.imageSrc,
              user: 2
            },
          });
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      }
    },
    addImage() {
      this.$refs.fileInput.click();
    },
    onFileImageChange(event) {
      console.log('onFileImageChange')
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
  },
};
</script>