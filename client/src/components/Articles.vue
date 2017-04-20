<template>
  <div class="">
    <el-row v-for="(article, index) in $store.state.articles" key="index">
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <button class="close" @click="REMOVE_ARTICLE(article._id)"><span>&times;</span></button>
          <img :src="article.image" class="image">
          <div style="padding: 14px;">
            <el-row>
              <span>Title : {{article.title}}</span>
            </el-row>
            <el-row>
              <span>Content : {{article.content}}</span>
            </el-row>
            <el-row>
              <span>Author : {{article.author}}</span>
            </el-row>

            <el-row>
              <span>Created At : {{article.createdAt}}</span>
            </el-row>
            <el-row>
              <span>Updated At : {{article.updatedAt}}</span>
            </el-row>
          </div>
          <button @click="showModal(article)">Update</button>
        </el-card><br>
      </el-col>
    </el-row><br>

    <!-- <ArticleForm v-model="showForm"></ArticleForm> -->
    <el-form ref="form" :model="newForm" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="newForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input v-model="newForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>Cancel</el-button>
        <el-button type="primary" @click="ADD_ARTICLE(newForm)">Create</el-button>
      </el-form-item>
    </el-form>


    <el-dialog title="Article" v-model="updateFormVisibility">
      <el-form>
        <el-form-item label="Title">
          <el-input v-model="article.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Content">
          <el-input v-model="article.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-input type="hidden" v-model="article.author" auto-complete="off"></el-input>
        <el-button @click="updateFormVisibility = false">Cancel</el-button>
        <el-button type="primary" @click="updateFormVisibility = false; UPDATE_ARTICLE(article)">Confirm</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ArticleForm from './ArticleForm.vue'

export default {
  data() {
    return {
      showForm: '',
      updateFormVisibility: false,
      newForm: {
        title: '',
        content: '',
        author: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
      'ADD_ARTICLE',
      'GET_ARTICLES',
      'UPDATE_ARTICLE',
      'REMOVE_ARTICLE'
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
    ArticleForm
  }
}
</script>

<style>
</style>
