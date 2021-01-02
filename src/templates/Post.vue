<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p class="intro">{{ $page.post.short }}</p>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    short
    content
  }
}
</page-query>