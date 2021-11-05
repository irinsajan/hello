<template>
  <div v-if="this.$route.params.data.mood==1" class="mood">
    <img v-bind:src="image1" />
    <p>{{this.$route.params.data.text}}</p>
  </div>
  <div v-else-if="this.$route.params.data.mood==2" class="mood">
    <img v-bind:src="image2" />
    <p>{{this.$route.params.data.text}}</p>
  </div>
  <div v-else-if="this.$route.params.data.mood==3" class="mood">
    <img v-bind:src="image3" />
    <p>{{this.$route.params.data.text}}</p>
  </div>
  <div v-else-if="this.$route.params.data.mood==4" class="mood">
    <img v-bind:src="image4" />
    <p>{{this.$route.params.data.text}}</p>
  </div>
  <div v-else-if="this.$route.params.data.mood==5" class="mood">
    <img v-bind:src="image5" />
    <p>{{this.$route.params.data.text}}</p>
  </div>
  <div v-else class="mood">
  <img v-bind:src="image6" />
  </div>
</template>

<script>
export default {
  name: 'ResultView',
  data() {
    return {
      image1: require('../assets/0-not-happy-at-all@2x.png'),
      image2: require('../assets/1-not-happy@2x.png'),
      image3: require('../assets/3-neutral@2x.png'),
      image4: require('../assets/4-pretty-happy@2x.png'),
      image5: require('../assets/5-super-happy@2x.png'),
      image6: require('../assets/Spinner@2x.png'),
    }
  },
}
</script>

<style lang="scss">
  p{
    color:white;
    font-size: 30px;
    font-weight: bold;
  }
  .mood{
    margin-top: 5%;
  }

</style>