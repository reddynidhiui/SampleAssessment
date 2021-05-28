<template>
  <div v-if="show">
    <div class="modal-backdrop"></div>
    <div class="modal">
        <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
 right: 0;
 bottom: 0;
 background: #ddd;
 opacity: .8;
 width: 100%;
 height: 100%;
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
