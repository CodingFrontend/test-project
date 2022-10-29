<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="item in $options.HEADER" :key="item.text">{{ item.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in $options.TABLE" :key="item.id" @click="showModal(item)">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
      </tbody>
    </table>
    <modal v-if="isModalShow" :item="dataItem" @closeModal="closeModal"/>
  </div>
</template>

<script>
import HEADER from './headers'
import TABLE from './table'

import Modal from '../common/modal/Modal.vue'

export default {
  HEADER,
  TABLE,
  components: {
    Modal
  },
  data() {
    return {
      isModalShow: false,
      dataItem: null
    }
  },
  methods: {
    showModal(item) {
      this.isModalShow = !this.isModalShow;
      this.dataItem = item;
    },
    closeModal() {
      this.isModalShow = false;
    }
  }
}
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  font-family: Tahoma, Geneva, sans-serif;
}

table td {
  padding: 13px 20px;
}

table thead th {
  background-color: #54585d;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #54585d;
  padding: 13px 20px;
}

table tbody td {
  color: #636363;
  border: 1px solid #dddfe1;
}

table tbody tr {
  background-color: #f9fafb;
  cursor: pointer;
}
</style>