const $ = window.$ = window.jQuery = require('jquery')
const Simditor = require('simditor')
require('simditor/styles/simditor.css')
/**
 * todo：
 * 怎样禁止base64编辑
 * 自定义上传操作
 */


const config = {
    textarea: $('#textarea1'),
    //optional options,
    placeholder: '请输入内容',
    toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        // 'strikethrough',
        'fontScale',
        // 'color',
        'ol',             // ordered list
        'ul',            // unordered list
        // 'blockquote',
        // 'code',         // code block
        'link',
        'image',
        // 'hr',           // horizontal ruler
        // 'indent',
        // 'outdent',
        'alignment',
        'table',
    ],
    upload: {
        defaultImage: '',
        url: '/upload',
        params: null,
        fileKey: 'upload_file',
        connectionCount: 3,
        leaveConfirm: '正在上传图片，确认要离开页面？'
    }
}


var editor = new Simditor(config);