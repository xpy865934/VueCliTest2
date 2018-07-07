<style scoped>
.mindex{
    margin-top: 200px;
}
</style>
<template>
<div class="mindex">
    <Row>
        <i-col span="8"></i-col>
        <i-col span="8" offset="8">
            <i-input v-model="searchContent">
                <i-button slot="append" icon="arrow-right-c" @click="search"></i-button>
            </i-input>
        </i-col>
        <i-col span="8"></i-col>
    </Row>
    <Row>
        <i-col span="8" offset="8">
            <span>{{ ret }}</span><br/>
            <span>{{ prov }}</span><br/>
            <span>{{ city }}</span>
        </i-col>
    </Row>
</div>
</template>
<script>
    import axios from 'axios'
    import 'jquery'
    export default {
        data(){
            return {
                searchContent:'',
                ret:'',
                prov:'',
                city:''
            }
        },
        methods:{
            search:function(){
                //需要将this取出来
                var self = this;
                axios.get('http://imobile.market.alicloudapi.com/mobile/query?number='+this.searchContent,{
                    headers:{
                        Authorization:'APPCODE f2e05eca479f480ca0c389b2f493d1d7'
                    }
                }).then(
                    function(response){
                        if(response.data.ret != 200){
                            self.ret = '查询失败！';
                            self.prov = '',
                            self.city = ''
                        }
                        if(response.data.ret ==200){
                            self.ret='查询成功！';
                            self.prov = response.data.data.prov;
                            self.city = response.data.data.city;
                        }
                    }
                ).catch( function(response){
                        self.ret = '查询失败！';
                        self.prov = '',
                        self.city = ''
                });

                // fetch('http://mobsec-dianhua.baidu.com/dianhua_api/open/location?tel='+this.searchContent,{ mode:'no-cors',method:'GET'})
                // .then(function(response){
                //     return response.json();
                // }).then(function(response){
                //     alert(response);
                // }).catch(function(response){
                //     alert(response);
                // });


                // $.ajax({
                //     headers:{
                //         Authorization:'APPCODE f2e05eca479f480ca0c389b2f493d1d7'
                //     },
                //     url:'http://life.tenpay.com/cgi-bin/mobile/MobileQueryAttribution.cgi?chgmobile='+this.searchContent,
                //     type:'GET',
                //     dataType:'jsonp',//指定服务器返回的数据类型
                //     success:function(data){
                //         var result = JSON.stringify(data); //json对象转成字符串
                //         alert(result);
                //     }
                // });


                // this.$http.get('http://mobsec-dianhua.baidu.com/dianhua_api/open/location?tel='+this.searchContent).then(response => {
                //     console.log(response.data);
                //     // get body data
                //     // this.someData = response.body;

                // }, response => {
                //     console.log("error");
                // });
            }
        }
    };
</script>