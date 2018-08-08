<template>
  <div class="IML">

    <div
      class="image-item"
      v-for="img in component.IML.ns"
      :key="img.o.t + img.o.p + img.o.c">

      <img
        height='160'
        width='160'
        :src="getImageSource(img)">

      <p>{{ img.d }}</p>
    </div>

  </div>
</template>

<script>
import BasicComponent from "@/components/webup/BasicComponent.vue";

export default {
  extends: BasicComponent,

  methods: {
    getImageSource(img) {
      return `https://mauer.smeup.com/WebUPNightly/javax.faces.resource/${
        img.o.t
      }%253B${img.o.p}%253B${img.o.c}.jsf?ln=smeupImages`;
    }
  }
};
</script>

<style lang="scss" scoped>
.IML {
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  > .image-item {
    text-align: center;
  }
}
</style>
