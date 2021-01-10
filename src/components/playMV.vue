<template>
  <div v-if="mvInfo != ''" class="playmusic">
      <h3>{{mvInfo.name}}</h3>
      <p>演唱者：{{mvInfo.artists | qjsongerfilter}}</p>
      <video :src="mvurl" controls loop autoplay></video>
  </div>
</template>

<script>
export default {
    data() {
        return {
            mvurl:'',
            mvInfo:'',
        }
    },
    created() {
        // 获取播放路径
        this.$axios('https://autumnfish.cn/mv/url?id='+this.$route.query.id).then(res=>{
            // console.log(res);
            if(res.status == 200){
                this.mvurl = res.data.data.url
            }
        })
        // 获取播放的信息
        this.$axios('https://autumnfish.cn/mv/detail?mvid='+this.$route.query.id).then(res=>{
            // console.log(res);
            if(res.status == 200){
                this.mvInfo = res.data.data
            }
        })
    },
}
</script>

<style scoped>
.playmusic{
    width: 700px;
    margin: 0 auto;
    text-align: center;
}
.playmusic h3{
    margin-bottom: 28px;
}
.playmusic p{
    margin-bottom: 10px;
}
.playmusic video{
    width: 100%;
}

</style>