<template>
    <div class="about">
        <div class="about-content">
            <Card :bordered="false">
                <h3 slot="title">关于</h3>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由 alsotang 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank" rel="noopener noreferrer">https://github.com/alsotang</a></p>
                <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank" rel="noopener noreferrer">http://weibo.com/cnodejs</a></p>
            </Card>
            <Card :bordered="false">
                <h3 slot="title">移动客户端</h3>
                
                <p>客户端由 soliury 开发维护。</p>
                <p>源码地址：<a href="https://github.com/soliury/noder-react-native" target="_blank" rel="noopener noreferrer">https://github.com/soliury/noder-react-native </a></p>
                <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank" rel="noopener noreferrer">https://github.com/TakWolf/CNode-Material-Design </a>这是 Java 原生开发的安卓客户端。</p>
            </Card>
            <Card :bordered="false">
                <h3 slot="title">友情链接</h3>
                <div class="about-img">
                    <a href="https://www.huoban.com/" target="_blank" rel="noopener noreferrer" style="width: 33.33%;">
                        <img width="100%" src="//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx" alt="fq">
                    </a>
                    <a href="http://100offer.com/" target="_blank" rel="noopener noreferrer" style="width: 33.33%;">
                        <img width="100%" src="//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq" alt="fq">
                    </a>
                    <a href="https://www.teambition.com/" target="_blank" rel="noopener noreferrer" style="display: inline-block; width: 33.33%;">
                        <img style="width:100%" src="//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" alt="fq">
                    </a>
                    <a href="http://yunzhihui.com/" target="_blank" rel="noopener noreferrer" style="width: 33.33%;">
                        <img width="100%" src="//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR" alt="fq">
                    </a>
                    <a href="http://segmentfault.com/" target="_blank" rel="noopener noreferrer" style="width: 33.33%;">
                        <img width="100%" src="//o4j806krb.qnssl.com/public/images/temp/sf.png" alt="fq">
                    </a>
                    <a href="http://ionichina.com/" target="_blank" rel="noopener noreferrer" style="width: 33.33%;">
                        <img width="100%" src="//o4j806krb.qnssl.com/public/images/temp/ionichina.png" alt="fq">
                    </a>
                </div>
            </Card>
        </div>
    </div>
</template>


<style>
.about {
  width: 75%;
  margin: 0 auto;
}
.about-content {
  margin: 40px 0;
}
.about-content p {
  padding: 10px 0;
}
.about-content a {
  color: rgb(11, 92, 197);
}
.about-img a,.about-img img{
    width: 32.5%
}
</style>
