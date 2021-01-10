<template>
  <div>
    <div class="usersearch">
      <el-input class="inp" v-model="searchName" @change="search" placeholder="请输入内容"></el-input>
    <el-button @click="search">搜索</el-button>
    </div>
    <!-- <input type="text" v-model="searchName" @keyup.enter="search"> -->
    <!-- 下面是查找到的MV表格 -->
    <el-table :data="mvArr" height="600px" @row-click="handdle" stripe style="width: 100%" v-if="mvArr!=''">
      <el-table-column  type="index" width="180"></el-table-column>
      <el-table-column prop='name' label="音乐标题" ></el-table-column>
      <el-table-column prop="artists" label="歌手">
          <template slot-scope="scope">{{ scope.row.artists | qjsongerfilter }}</template>
      </el-table-column>
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
      searchName:'',
      mvArr:'',
    }
  },
  methods: {
    search(){
      this.$axios('https://autumnfish.cn/search',{
          params:{
             type:1004,
             keywords:this.searchName
          }
      }).then(res=>{
        // console.log(res);
        if(res.status == 200){
          this.mvArr = res.data.result.mvs
          // console.log(this.musicArr);
        }
      })
    },
     handdle(row){
          this.$router.push('/playMV?id='+row.id)
      }
  },
  created() {
      this.$axios('https://autumnfish.cn/mv/all').then(res=>{
        // console.log(res);
        if(res.status == 200){
            this.mvArr = res.data.data
        }
      })
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