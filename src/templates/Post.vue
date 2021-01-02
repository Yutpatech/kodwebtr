<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p class="intro">{{ $page.post.excerpt }}</p>
    <time>{{ $page.post.date }}</time>
    <div>{{ $page.post.body}}</div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    excerpt
  }
}
</page-query>