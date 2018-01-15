/**
 * 编辑器实践
 */
import 'summernote/dist/summernote-lite.css'
const $ = window.$ = window.jQuery = require('jquery')
require('summernote/dist/summernote-lite.js')
require('summernote/dist/lang/summernote-zh-CN.js')

var HelloButton = function (context) {
    var ui = $.summernote.ui
    // create button
    var button = ui.button({
        contents: '<i class="fa fa-child"/> Hello',
        tooltip: 'hello',
        click: function () {
            // invoke insertText method with 'hello' on editor module.
            context.invoke('editor.insertText', 'hello');
        }
    })
  
    return button.render()  // return button as jquery object
}


const config = {
    lang: 'zh-CN', // default: 'en-US'
    placeholder: '编辑器示例',
    tabsize: 2,
    height: 100,
    fontNames: ['微软雅黑', 'Arial Black', 'Comic Sans MS', 'Courier New'],
    fontSizes: ['12', '14', '16', '18', '20', '24', '36'],
    dialogsInBody: true,
    toolbar: [
        ['style2', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize', 'fontname']],
        // ['font', ['strikethrough', 'superscript', 'subscript']],
        // ['color', ['color']],
        ['para', ['ul', 'ol']],
        ['paragraph'],
        ['table', ['table']],
        ['mybutton', ['hello']]
        // ['height', ['height']]
    ],
    buttons: {
        hello: HelloButton
    }
}


$(function() {
    console.log('ready')
    $('#editor1').summernote(config)
})
