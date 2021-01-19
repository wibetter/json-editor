## 如何展示富文本类型内容

![image](https://user-images.githubusercontent.com/11958920/104980609-ebc71900-5a41-11eb-8ddd-5b3caf26cf43.png)

- 备注1: 需要引进富文本基础样式文件（@wibetter/json-editor/public/css/text-editor.min.css），保证富文本内容正常展示；
- 备注2: 放置富文本内容的html元素需要添加富文本的class（text-editor-box），保证该富文本内容在class=text-editor-box的html元素内；
- 备注3: 通过 dangerouslySetInnerHTML={{ __html: textCont }} 放置富文本内容，其中textCont就是富文本类型字段。
