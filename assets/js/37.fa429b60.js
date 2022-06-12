(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{749:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("p",[t._v("使用 css 媒体查询 @media 分别为不同屏幕尺寸的移动设备编写不同尺寸的 css 样式，不适用，每种屏幕都得写一套样式")]),t._v(" "),a("h2",{attrs:{id:"rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),a("p",[t._v("rem 是指相对于根元素(root element html) 的字体大小的单位 ，根元素默认的字体大小为 16px，所以 1rem = 16px")]),t._v(" "),a("p",[t._v("假设现在我们根元素的字体大小为 100px，以 1rem = 100px ，750px 宽的屏幕为基准去画的页面")]),t._v(" "),a("p",[t._v("现在页面需要跑到 1400px 宽的屏幕上，此时屏幕宽变成了两遍，但是如果我们还是用 1rem = 100px 为基准，那么页面中的宽度、字体等大小并没有等比放大，还是原来的大小，所以我们需要动态修改根元素的字体大小")]),t._v(" "),a("p",[t._v("其实就是一个很简单的比例关系："),a("code",[t._v("浏览器宽度 / 750 = x / 100")])]),t._v(" "),a("ul",[a("li",[t._v("750：设计稿宽度，怎么设置取决于项目的设计稿宽度")]),t._v(" "),a("li",[t._v("100：可以是其他数值，取 100 是方便计算，比如 12px 就可以设置为 0.12rem")]),t._v(" "),a("li",[t._v("x：根元素字体大小，随着浏览器宽度变化而变化")])]),t._v(" "),a("p",[t._v("下面为简单实现：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" innerWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浏览器可视区域宽度")]),t._v("\n    html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("innerWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//就是上面公式里的x值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" viewport")]),t._v(" "),a("p",[t._v("viewport 视口：浏览设备的屏幕的显示部分，对于浏览器来说相对于浏览器的可视区域大部分浏览器已经支持")]),t._v(" "),a("p",[t._v("在 css 中直接使用 vw、vh 作为单位，大部分浏览器和手机都支持")]),t._v(" "),a("ul",[a("li",[t._v("vw：相对于视口的宽度，视口宽度是 100vw")]),t._v(" "),a("li",[t._v("vh：相对于视口的高度，视口宽度是 100vh")]),t._v(" "),a("li",[t._v("vmin：vw 和 vh 中较小的值")]),t._v(" "),a("li",[t._v("vmin：vw 和 vh 中较大的值")])]),t._v(" "),a("p",[t._v("使用视口还需要在head标签中添加如下代码")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("content取值：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("正整数或device-width")]),t._v(" "),a("td",[t._v("定义视口的宽度，单位为像素")])]),t._v(" "),a("tr",[a("td",[t._v("initial-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义初始缩放值")])]),t._v(" "),a("tr",[a("td",[t._v("minimum-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义缩小最小比例，它必须小于或等于maximum-scale设置")])]),t._v(" "),a("tr",[a("td",[t._v("maximum-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义放大最大比例，它必须大于或等于minimum-scale设置")])]),t._v(" "),a("tr",[a("td",[t._v("user-scalable")]),t._v(" "),a("td",[t._v("yes/no")]),t._v(" "),a("td",[t._v("定义是否允许用户手动缩放页面，默认值yes")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);