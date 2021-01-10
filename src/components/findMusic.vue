<template>
  <div>
    <div class="usersearch">
      <el-input class="inp" v-model="searchName" @change="search" placeholder="请输入内容"></el-input>
    <el-button @click="search">搜索</el-button>
    </div>
    <!-- <input type="text" v-model="searchName" @keyup.enter="search"> -->
    <!-- 下面是查找到的歌曲表格 -->
    <el-table :data="musicArr" height="600px" @row-click="handdle" stripe style="width: 100%" v-if="musicArr!=''">
      <el-table-column  type="index" width="90"></el-table-column>
      <el-table-column prop='name' label="音乐标题" width="260"></el-table-column>
      <el-table-column prop="artists" label="歌手">
          <template slot-scope="scope">{{ scope.row.artists | qjsongerfilter }}</template>
      </el-table-column>
      <el-table-column prop="album.name" label="专辑" > </el-table-column>
      <el-table-column prop="duration" label="时长"> 
          <template slot-scope="scope">{{ scope.row.duration | dateFormat }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName:'神话',
      musicArr:'',
    }
  },
  methods: {
    search(){
      this.$axios('https://autumnfish.cn/search?keywords='+this.searchName+'&aaa='+ Math.random()).then(res=>{
        // console.log(res);
        if(res.status == 200){
          this.musicArr = res.data.result.songs
          // console.log(this.musicArr);
        }
      })
    },
     handdle(row){
          this.$router.push('/playmusic?id='+row.id)
      }
  },
  created() {
    this.search()
  },
}
</script>

<style>
.usersearch{
  width: 100%;
  display: flex;
  justify-content: center;
}
.inp{
  display: inline-block;
  width: 25%;
}
</style>