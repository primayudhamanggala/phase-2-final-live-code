<template>
  <div class="">
    <el-form ref="form" :model="newForm" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="newForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input v-model="newForm.content"></el-input>
      </el-form-item>
      <el-form-item label="Author">
        <el-input v-model="newForm.author"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>Cancel</el-button>
        <el-button type="primary" @click="ADD_ARTICLE(newForm)">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      newForm: {
        title: '',
        content: '',
        author: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
  },
  methods: {
    ...mapActions([
      'ADD_ARTICLE'
    ])
  }
}
</script>
