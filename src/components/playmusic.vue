<template>
  <div v-if="musicInfo != ''" class="playmusic">
      <h3>{{musicInfo.name}}</h3>
      <p>演唱者：{{musicInfo.ar | qjsongerfilter}}</p>
      <img :src="musicInfo.al.picUrl" alt="">
      <audio :src="musicUrl" controls loop autoplay></audio>
  </div>
</template>

<script>
export default {
    data() {
        return {
            musicUrl:'',
            musicInfo:'',
        }
    },
    created() {
        // 获取播放路径
        this.$axios('https://autumnfish.cn/song/url?id='+this.$route.query.id).then(res=>{
            // console.log(res);
            if(res.status == 200){
                this.musicUrl = res.data.data[0].url
            }
        })
        // 获取播放的信息
        this.$axios('https://autumnfish.cn/song/detail?ids='+this.$route.query.id).then(res=>{
            // console.log(res);
            if(res.status == 200){
                this.musicInfo = res.data.songs[0]
            }
        })
    },
}
</script>

<style scoped>
.playmusic{
    width: 600px;
    margin: 0 auto;
    text-align: center;
}
.playmusic h3{
    margin-bottom: 28px;
}
.playmusic p{
    margin-bottom: 10px;
}
.playmusic img{
    width: 100%;
}

</style>