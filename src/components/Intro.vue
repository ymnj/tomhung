<template>
  <header>
    <h1>{{title}}</h1>
    <p class="intro">
    {{introduction}}</p>
  </header>
</template>

<script>
  export default {
    props: ['title', 'introduction']
  }
</script>

<style lang="scss" scoped>
  
  header{
      
      h1 {
        text-align: center;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 4.5em;
      }

      p {
        max-width: 600px;
        font-size: 1.4em;
        letter-spacing: 1px;
        padding: 5% 0;
        margin: 0 auto;
        line-height: 1.5em;
      }
    }

  @media screen and (max-width: 926px){
    header h1 {
      font-size: 4em;
    }

    header p {
      font-size: 1.2em;
      padding: 5% 5%;
    }
  }

  @media screen and (max-width: 450px) {

    header h1 {
      font-size: 3em;
    }

    p.intro {
      font-size: 1em;
    }
  }

</style>