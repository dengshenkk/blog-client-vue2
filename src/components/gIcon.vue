<template>
  <svg aria-hidden='true' class='icon' :title='icon'>
    <use :xlink:href='iconName'></use>
  </svg>
</template>

<script>
export default {
  name: 'gIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${ this.icon }`
    }
  }
}
</script>

<style lang='scss' scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  transition: all .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: all .3s;
  }

  & + .icon {
    margin-left: 1em;
  }
}
</style>
