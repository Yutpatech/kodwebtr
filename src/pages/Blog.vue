<template>
  <Layout>
    <p v-for="post in $page.posts.edges" :key="post">
      <g-link :to="post.node.path">
        {{ post.node.title }}
      </g-link>
    </p>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
        id
      }
    }
  }
}
</page-query>