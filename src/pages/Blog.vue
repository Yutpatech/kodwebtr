<template>
  <Layout>
    <div class="posts">
      <div class="post" v-for="post in $page.posts.edges" :key="post">
        <g-link :to="post.node.path">
          <b>{{ post.node.title }}</b>
        </g-link>
        <g-link :to="post.node.path">
          <p>{{ post.node.short }}</p>
        </g-link>
        <img class="avatar" src="https://avatars1.githubusercontent.com/u/59116658?s=200&v=4" height="32" width="32"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        short
        path
        id
      }
    }
  }
}
</page-query>

<style>
.posts{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.post{
  border-bottom: solid 1px var(--grey);
  padding: 1rem 0;
  color: var(--dark);
}
.post a{
  color: var(--dark);
}
.post:last-child{
  border-bottom: none;
}
.avatar{
  border-radius: 50%;
}
</style>