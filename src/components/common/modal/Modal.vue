<template>
  <div class="modal-table">
    <div class="modal-table__inner">
      <div class="modal-table__content">
        <p>{{ item.name }}</p>
      </div>
      <button type="button" class="modal-table__close" @click="$emit('closeModal')">
        <span class="material-icons">close</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.modal-table {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.modal-table__inner {
  width: 300px;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 9999;
  margin: 0 auto;
  position: relative;
}

.modal-table__content {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 30px;
}

.modal-table__close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

</style>