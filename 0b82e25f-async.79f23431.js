(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0b82e25f"],{"0b82e25f":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return i;}});var a=n("f19d2b93");n("a6e7809e");var o=n("e22febe0"),d=n("a9d1a279");let t={beforeUpload:e=>{let l="image/png"===e.type;return l||d.message.error(`${e.name} is not a png file`),l||d.Upload.LIST_IGNORE;},onChange:e=>{console.log(e.fileList);}};var i=()=>(0,a.jsx)(d.Upload,{...t,children:(0,a.jsx)(d.Button,{icon:(0,a.jsx)(o.UploadOutlined,{}),children:"Upload png only"})});}}]);