<template>
  <div class="icon" :class="`icon-${svg.id}`">
    <svg :viewBox="svg.viewBox">
      <use :xlink:href="`#${svg.id}`"/>
    </svg>
  </div>
</template>
<script>
const ctx = require.context('../assets/svgs', false, /\.svg$/);
const icons = ctx.keys().reduce((record, key) => {
  const mdl = ctx(key).default;
  record[mdl.id] = mdl;
  return record;
}, {});
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      svg: icons[this.icon]
    }
  }
}
</script>
<style>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
}
</style>


