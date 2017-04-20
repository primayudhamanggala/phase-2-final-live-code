<template>
  <div class="">
    <button style="float: right">POST ARTICLE</button>

    <el-row v-for="(article, index) in $store.state.articles" key="index">
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <button class="close" @click="remove(article._id)"><span>&times;</span></button>
          <img :src="article.image" class="image">
          <div style="padding: 14px;">
            <el-row>
              <span>Title : {{article.title}}</span>
            </el-row>
            <el-row>
              <span>Content : {{article.content}}</span>
            </el-row>
            <el-row>
              <span>Author : {{article.author.name}}</span>
            </el-row>    <!-- <HeadNav></HeadNav><br> -->

            <el-row>
              <span>Created At : {{article.createdAt}}</span>
            </el-row>
            <el-row>
              <span>Updated At : Rp. {{article.updatedAt}}</span>
            </el-row>
          </div>
          <button @click="showModal(article)">Update</button>
        </el-card><br>
      </el-col>
    </el-row>

    <el-dialog title="Article" v-model="updateFormVisibility">
      <el-form>
        <el-form-item label="Title">
          <el-input v-model="article.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Content">
          <el-input v-model="article.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-button @click="updateFormVisibility = false">Cancel</el-button>
        <el-button type="primary" @click="updateFormVisibility = false; UPDATE_ARTICLE(article)">Confirm</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      updateFormVisibility: false,
      article: {
        title: '',
        content: '',
        author: '',
        updatedAt: new Date()
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_ARTICLES',
      'UPDATE_ARTICLE'
    ]),
    showModal: function(data) {
      this.updateFormVisibility = true,
      this.article = data
    }
  },
  created() {
    this.$store.dispatch('GET_ARTICLES')
  },
  components: {

  }
}
</script>

<style>
</style>
