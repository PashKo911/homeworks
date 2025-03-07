<script setup></script>

<template>
  <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>

  <hr />
  <v-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle">
    <template v-slot:prepend>
      <v-icon color="success"></v-icon>
    </template>

    Button

    <template v-slot:append>
      <v-icon color="warning"></v-icon>
    </template>
  </v-btn>
  <hr />
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-plus"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="comfortable" icon="$vuetify"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="default" icon="mdi-open-in-new"></v-btn>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn icon="mdi-account" size="x-small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-plus" size="small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="$vuetify"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-open-in-new" size="large"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-calendar" size="x-large"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
