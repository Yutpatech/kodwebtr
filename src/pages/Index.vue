<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/logo.svg" width="135" />

    <h1>Merhaba Dünya!</h1>

    <p>
      KodWeb Gridsome Blog 
    </p>

    <p class="home-links">
      <a href="https://github.com/Yutpatech" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Yakında | KodWeb'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
