<template>
  <div style="height: 100%;">
    <div id="editor-menu" style="border-top: 1px solid #e8e8e8; height: 32px;"></div>
    <div id="editor-text" style="text-align:left; border-top: 1px solid #e8e8e8; height: 160px;"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
import qq from '../emojis/qq'
import xinlang1 from '../emojis/xinlang1'
import xinlang2 from '../emojis/xinlang2'
import emojis from '../emojis/emojis'
export default {
  name: 'Editor',
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    let editor = new E('#editor-menu', '#editor-text')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }

    // 自定义菜单配置
    editor.customConfig.menus = [
      // 'head', // 标题
      'bold', // 粗体
      // 'fontSize', // 字号
      // 'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      // 'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      // 'link', // 插入链接
      // 'list', // 列表
      // 'justify', // 对齐方式
      // 'quote', // 引用
      'emoticon' // 表情
      // 'image', // 插入图片
      // 'table', // 表格
      // 'video', // 插入视频
      // 'code', // 插入代码
      // 'undo', // 撤销
      // 'redo' // 重复
    ]

    // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
    editor.customConfig.emotions = [
      {
        title: '默认',
        type: 'image',
        content: qq
      },
      {
        title: 'emoji',
        type: 'emoji',
        content: emojis
      },
      {
        title: 'sina',
        type: 'image',
        content: [
          ...xinlang1,
          ...xinlang2
        ]
      }
    ]

    editor.create()
  }
}
</script>

<style scoped>
</style>
