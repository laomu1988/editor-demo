import './index.less'
const tinymce = require('tinymce/tinymce.min.js')
/**
 * doc文档： https://github.com/tinymce/tinymce-docs
 */
window.tinymce  = tinymce
require('./zh_CN')

tinymce.init({
    selector: '#editor1',
    menu: {},
    plugins : 'table image',
    toolbar: 'fontsizeselect fontselect bold italic underline  alignleft aligncenter alignright link | table', // undo redo image 
    fontsize_formats: '12px 14px 18px 24px 36px',
    font_formats: 'Arial=arial,helvetica,sans-serif;微软雅黑=微软雅黑,helvetica,sans-serif;',
    language_url: '',
    skin: 'lightgray'
})
