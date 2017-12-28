<template>
    <div style="box-shadow:2px 2px 5px #eee;position:relative">
        <Row>
            <Col :xxl="4" :xl="5" :lg="5" :md="6" :xs="24" :sm="24">
                <h2 style="text-align:center;height:58px;line-height:58px">Lxz</h2>
            </Col>
            <Col :xxl="20" :xl="19" :lg="19" :md="18" :xs="0" :sm="0">
                <div style="border-left:1px solid #ccc;height:58px;float:left;width:0"></div>
                <Menu mode="horizontal" :theme="theme1" active-name="1" style="float:left">
                    <MenuItem name="1">
                        <Icon type="home" />
                        主页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-book"/> 
                        教程
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-information"/>
                        关于
                    </MenuItem>
                 </Menu>
                 <div style="float:right;padding-right:90px;line-height:58px">
                     <!-- <Button style="marginRight: 2px"><Icon type="user" />登陆</Button>
                    <Button style="marginRight: 2px"><Icon type="flag" />注册</Button> -->
                    
                    <Dropdown style="margin-left: 20px">
                        <Avatar icon="person" /><span style="margin-left:10px;font-size:18px">Lxz</span>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>发布话题</Dropdown-item>
                            <Dropdown-item>用户中心</Dropdown-item>
                            <Dropdown-item>退出登陆</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                 </div>
            </Col>
        </Row>
        <Row style="position: absolute; right: 50px; top: 16px;">
            <Col :xxl="0" :xl="0" :lg="0" :md="0" :xs="24" :sm="24">
              <Dropdown>
                <Button>
                    <Icon type="navicon-round"></Icon>
                </Button>
                <Dropdown-menu slot="list" style="text-align:center">
                    <Dropdown-item>主页</Dropdown-item>
                    <Dropdown-item>教程</Dropdown-item>
                    <Dropdown-item>关于</Dropdown-item>
                    <Dropdown-item><Avatar icon="person" /><span style="margin-left:10px;font-size:18px">Lxz</span></Dropdown-item>
                    
                </Dropdown-menu>
            </Dropdown>
            </Col>
          </Row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            theme1: 'light'
        }
    }
}
</script>

<style>

</style>
