<template>
  <div id="components-chat-layout">
    <div id="components-chat-layout-header">
      <a-avatar shape="square" :size="40" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <!--<a-icon type="user" style="fontSize: 40px" />-->
    </div>
    <a-tabs id="components-chat-layout-tabs" defaultActiveKey="1" tabPosition="left" size="large">
      <a-tab-pane key="1" class="components-chat-layout-tab-pane">
        <span slot="tab">
          <a-icon type="message" style="fontSize: 24px" />
        </span>
        <Chat></Chat>
      </a-tab-pane>
      <a-tab-pane key="2" class="components-chat-layout-tab-pane">
        <span slot="tab">
          <a-icon type="team" style="fontSize: 24px" />
        </span>
        Tab 2
      </a-tab-pane>
    </a-tabs>
    <div id="components-chat-layout-footer">
      <a-icon type="setting" style="fontSize: 24px" />
    </div>
  </div>
</template>

<script>
import Chat from './Chat'
export default {
  name: 'Layout',
  components: { Chat }
}
</script>

<style type="less">
  #components-chat-layout, #components-chat-layout-tabs, .components-chat-layout-tab-pane {
    height: 100%;
    overflow: hidden;
  }
  .components-chat-layout-tab-pane {
    /*width: 200px;*/
  }
  #components-chat-layout > .ant-tabs-line > .ant-tabs-bar .ant-tabs-ink-bar {
    display: none !important;
  }
  #components-chat-layout > .ant-tabs-line > .ant-tabs-content {
    height: 100%;
    position: relative;
    top: -80px;
    padding-left: 0;
  }
  #components-chat-layout > .ant-tabs {
    overflow: visible;
  }
  #components-chat-layout-header {
    width: 79px;
    height: 80px;
    padding-top: 16px;
    text-align: center;
    border-right: 1px solid #e8e8e8;
  }
  #components-chat-layout-footer {
    width: 79px;
    margin-bottom: 16px;
    text-align: center;
    border-right: 1px solid #e8e8e8;
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
