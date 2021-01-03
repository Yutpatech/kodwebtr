<template>
  <Layout>
    <div class="posts">
      <div class="post" v-for="post in $page.posts.edges" :key="post">
        <div class="post-body">
          <time>{{ post.node.date }} ({{post.node.timeToRead}} dakika okundu)</time>
          <g-link :to="post.node.path">
            <h3>{{ post.node.title }}</h3>
          </g-link>
          <img class="avatar" src="https://avatars1.githubusercontent.com/u/59116658?s=200&v=4" height="32" width="32"/>
          <g-link :to="post.node.path">
            {{ post.node.short }}
          </g-link>
        </div>
        <g-link class="readmore" :to="post.node.path">
          Devamını oku →
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        path
        date(format: "dddd, DD MMMM YYYY", locale: "tr")
        timeToRead
        title
        short
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
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px var(--grey);
  padding: 1rem 0;
}
.post-body{
  display: flex;
  flex-direction: column;
  color: var(--dark);
}
.post-body a{
  color: var(--dark);
}
.post h3{
  font-size: 1.75rem;
  line-height: 1;
  margin: 0;
}
.post p{
  font-size: 1rem;
  line-height: 1.1rem;
}
.post:last-child{
  border-bottom: none;
}
.avatar{
  border-radius: 50%;
  margin: .75rem 0;
}
.readmore{
  color: var(--primary);
}
</style>