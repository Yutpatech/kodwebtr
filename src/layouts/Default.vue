<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="brand">
          <g-image src="~/logo.svg" width="32" height="32"/>
          {{ $static.metadata.siteName }}
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root{
  --dark: #1b262c;
  --blue: #0f4c75;
  --grey: #dedede;
  --primary: #3282b8;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
a{
  text-decoration: none;
  color: var(--dark);
}
.layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  color: var(--dark);
}

.nav__link {
  margin-left: 20px;
}
.brand{
  display: flex;
  align-items: center;
  gap: .75rem;
}
</style>
