<template>
  <div v-if="tableData != ''">
    <!-- 这里是上面轮播图 -->
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in picUrl" :key="index">
        <img class="myimg" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>

    <h3>推荐音乐</h3>
    <!-- 下面是推荐音乐的表格 -->
    <el-table :data="tableData" @row-click="handdle" height="370px" stripe style="width: 100%">
      <el-table-column  type="index" width="90"></el-table-column>
      <el-table-column prop="picUrl" width="150">
          <!-- 这里使用了一个自定义模板 -->
        <template slot-scope="scope">
          <img
            :src="scope.row.picUrl"
            alt=""
            style="width: 60px; height: 60px"
          />
        </template>
      </el-table-column>
      <el-table-column prop='name' label="音乐标题" width="260"></el-table-column>
      <el-table-column prop="song.artists" label="歌手">
          <template slot-scope="scope">{{ scope.row.song.artists | songerfilter }}</template>
      </el-table-column>
      <el-table-column prop="song.album.name" label="专辑" > </el-table-column>
      <el-table-column prop="song.duration" label="时长"> 
          <template slot-scope="scope">{{ scope.row.song.duration | dateFormat }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      picUrl: "",
      tableData: "",
    };
  },
  methods: {
      handdle(row){
          this.$router.push('/playmusic?id='+row.id)
      }
  },
  filters:{
      songerfilter(arr){
          return arr.map(item=>item.name).join('&')
      },
      dateFormat(a){
          return moment(a).format('mm:ss')
      }
  },
  created() {
    // 一进来显示轮播图
    this.$axios("https://autumnfish.cn/banner?aaa=" + Math.random()).then(
      (res) => {
        //   console.log(res);
        if (res.status == 200) {
          this.picUrl = res.data.banners;
        }
      }
    );

    // 一进来显示推荐列表
    this.$axios(
      "https://autumnfish.cn/personalized/newsong?bbb=" + Math.random()
    ).then((res) => {
    //   console.log(res);
      if (res.status == 200) {
        this.tableData = res.data.result;
      }
    });
  },
};
</script>

<style scoped>
.slideshow {
  width: 80%;
  margin: 0 auto;
}
.myimg {
  height: 100%;
}
h3 {
  margin-bottom: 20px;
  font-weight: 600;
}
</style>