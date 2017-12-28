<template>
  <div style="padding: 40px 0; flex: 1">
          <Row style="min-height: 100%">
            <Col :xxl="4" :xl="5" :lg="5" :md="6" :xs="0" :sm="0">
              <Menu
                mode="inline"
                style="line-height: 64px; border: none;text-align: center"
              >
                <MenuItem>全部</MenuItem>
                <MenuItem>精华</MenuItem>
                <MenuItem>分享</MenuItem>
                <MenuItem>问答</MenuItem>
                <MenuItem>招聘</MenuItem>
                <MenuItem>测试</MenuItem>
              </Menu>
            </Col>
            <Col :xxl="0" :xl="0" :lg="0" :md="0" :xs="24" :sm="24">
              <Menu
                mode="horizontal"
                style="paddingLeft: 10vw"
              >
                <MenuItem>全部</MenuItem>
                <MenuItem>精华</MenuItem>
                <MenuItem>分享</MenuItem>
                <MenuItem>问答</MenuItem>
                <MenuItem>招聘</MenuItem>
                <MenuItem>测试</MenuItem>
              </Menu>
            </Col>
            <Col :xxl="20" :xl="19" :lg="19" :md="18" :xs="24" :sm="24" style="padding-left: 20px; padding-right: 12vw; border-left: 1px solid #e9e9e9"></Col>
              <ul>
                  <li v-for="item in topics" key={item.id}>{{item.title}}</li>
              </ul>
          </Row>
        </div>
</template>

<script>
export default {
    data() {
        return {topics: [
            {
                id:1,
                reply_count: 30,
                visit_count: 400,
                author: {
                    loginname: 'Fq',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
                },
                create_at: '2017-12-11',
                title: '首届蚂蚁金服体验科技大会'
            },
            {
                id:2,
                reply_count: 30,
                visit_count: 400,
                author: {
                    loginname: 'Fq',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
                },
                create_at: '2017-12-11',
                title: '首届蚂蚁金服体验科技大会'
            },
            {
                id:3,
                reply_count: 30,
                visit_count: 400,
                author: {
                    loginname: 'Fq',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/7286498?v=4&s=120'
            },
                create_at: '2017-12-11',
                title: '首届蚂蚁金服体验科技大会'
            }
        ]}
    }
}
</script>

<style>
/* <List
                itemLayout="horizontal"
                loading={false}
                dataSource={topics}
                renderItem={item => (
                  <List.Item 
                    actions={
                      [
                        <span style={{marginLeft: 35}}>回复:{item.reply_count}</span>, 
                        <span>访问:{item.visit_count}</span>
                      ]
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.author.avatar_url} />}
                      title={
                        <div>
                          <Tag 
                            color={'magenta'}
                          >
                            {'分享'}
                          </Tag>
                          <a href="https://ant.design">{item.title}</a>
                        </div>
                      }
                      description={<span>{item.author.loginname} 发表于: {item.create_at}</span>}
                    />
                    <div />
                  </List.Item>
                )}
              />
              <Pagination 
                style={{margin: '20px 0'}} 
                size="small"
                // onChange={changePage}
                showQuickJumper 
                current={1}
                pageSize={30}
                total={500} 
              />
            </Col> */
</style>
