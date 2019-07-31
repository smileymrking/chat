<template>
  <div id="chat-module">
    <!--<a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>-->
    <a-layout style="height: 100%;">
      <a-layout-sider style="width: 224px; max-width: 224px; flex: none">
        <a-menu
          :defaultSelectedKeys="['1']"
          mode="inline"
          :inlineCollapsed="collapsed"
          style="height: 100%;background-color: #F5F5F5;"
        >
          <a-menu-item key="1" class="chat-list-style">
            <div class="chat-list-avatar">
              <a-avatar class="chat-list-div-avatar" shape="square" :size="50" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2" class="chat-list-style">
            <div class="chat-list-avatar">
              <a-avatar class="chat-list-div-avatar" shape="square" :size="50" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <a-icon type="desktop" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="3" class="chat-list-style">
            <div class="chat-list-avatar">
              <a-avatar class="chat-list-div-avatar" shape="square" :size="50" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <a-icon type="inbox" />
            <span>Option 1</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="background-color: white">
        <a-layout-header style="background: none">
          <a-card style="width: 100%; height: 100%">
            Header
          </a-card>
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer style="background: none; height: 196px;">
          <Editor></Editor>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Editor from './Editor'
export default {
  name: 'Chat',
  components: { Editor },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style type="less">
  #chat-module {
    height: 100%;
  }
  #chat-module .chat-list-style {
    height: 60px !important;
    padding: 0px !important;
  }
  #chat-module .chat-list-avatar {
    width: 60px;
    height: 60px;
    float: left;
  }
  #chat-module .chat-list-div-avatar {
    margin: 5px;
    padding: 5px;
  }
  #chat-module .ant-layout-header {
    margin: 0;
    padding: 0;
  }
  #chat-module .ant-layout-footer {
    margin: 0;
    padding: 0;
  }
</style>
