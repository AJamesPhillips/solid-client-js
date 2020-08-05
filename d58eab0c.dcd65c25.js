(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return o}));var c=a(2),n=a(6),s=(a(0),a(88)),l={id:"_acl_class_",title:"acl/class",sidebar_label:"acl/class"},b={unversionedId:"api/modules/_acl_class_",id:"api/modules/_acl_class_",isDocsHomePage:!1,title:"acl/class",description:'@inrupt/solid-client \u203a "acl/class"',source:"@site/docs/api/modules/_acl_class_.md",permalink:"/solid-client-js/docs/api/modules/_acl_class_",editUrl:"https://github.com/inrupt/solid-client-js/edit/master/website/docs/api/modules/_acl_class_.md",sidebar_label:"acl/class",sidebar:"api",previous:{title:"acl/agent",permalink:"/solid-client-js/docs/api/modules/_acl_agent_"},next:{title:"acl/group",permalink:"/solid-client-js/docs/api/modules/_acl_group_"}},r=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getPublicAccess",id:"getpublicaccess",children:[]},{value:"getPublicDefaultAccess",id:"getpublicdefaultaccess",children:[]},{value:"getPublicResourceAccess",id:"getpublicresourceaccess",children:[]},{value:"setPublicDefaultAccess",id:"setpublicdefaultaccess",children:[]},{value:"setPublicResourceAccess",id:"setpublicresourceaccess",children:[]}]}],i={rightToc:r};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/index"}),"@inrupt/solid-client")," \u203a ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_acl_class_"}),'"acl/class"')),Object(s.b)("h2",{id:"index"},"Index"),Object(s.b)("h3",{id:"functions"},"Functions"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#getpublicaccess"}),"getPublicAccess")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#getpublicdefaultaccess"}),"getPublicDefaultAccess")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#getpublicresourceaccess"}),"getPublicResourceAccess")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#setpublicdefaultaccess"}),"setPublicDefaultAccess")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#setpublicresourceaccess"}),"setPublicResourceAccess"))),Object(s.b)("h2",{id:"functions-1"},"Functions"),Object(s.b)("h3",{id:"getpublicaccess"},"getPublicAccess"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"getPublicAccess"),"(",Object(s.b)("inlineCode",{parentName:"p"},"resourceInfo"),": WithAcl & ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#withresourceinfo"}),"WithResourceInfo"),"): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access")," | null")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/solid-client-js/blob/c4f2c57/src/acl/class.ts#L59"}),"acl/class.ts:59"))),Object(s.b)("p",null,"Find out what Access Modes have been granted to everyone for a given Resource."),Object(s.b)("p",null,"Keep in mind that this function will not tell you what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(s.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"resourceInfo")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"WithAcl & ",Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#withresourceinfo"}),"WithResourceInfo")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Information about the Resource to which the given Agent may have been granted access.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access")," | null")),Object(s.b)("p",null,"Which Access Modes have been granted to everyone for the given SolidDataset, or ",Object(s.b)("inlineCode",{parentName:"p"},"null")," if it could not be determined (e.g. because the current user does not have Control Access to a given Resource or its Container)."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getpublicdefaultaccess"},"getPublicDefaultAccess"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"getPublicDefaultAccess"),"(",Object(s.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset"),"): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/solid-client-js/blob/c4f2c57/src/acl/class.ts#L109"}),"acl/class.ts:109"))),Object(s.b)("p",null,"Given an ACL SolidDataset, find out which access modes it provides to everyone for the associated Container Resource's child Resources."),Object(s.b)("p",null,"Keep in mind that this function will not tell you:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(s.b)("li",{parentName:"ul"},"what access anyone has to the Container Resource itself (see ",Object(s.b)("a",Object(c.a)({parentName:"li"},{href:"/solid-client-js/docs/api/modules/_acl_class_#getpublicresourceaccess"}),"getPublicResourceAccess")," for that).")),Object(s.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The SolidDataset that contains Access-Control List rules for a certain Container.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"))),Object(s.b)("p",null,"Which Access Modes have been granted to everyone for the children of the Container associated with the given ACL SolidDataset."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"getpublicresourceaccess"},"getPublicResourceAccess"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"getPublicResourceAccess"),"(",Object(s.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset"),"): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/solid-client-js/blob/c4f2c57/src/acl/class.ts#L83"}),"acl/class.ts:83"))),Object(s.b)("p",null,"Given an ACL SolidDataset, find out which access modes it provides to everyone for its associated Resource."),Object(s.b)("p",null,"Keep in mind that this function will not tell you:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(s.b)("li",{parentName:"ul"},"what access anyone has to child Resources, in case the associated Resource is a Container (see [","[getDefaultResourceAccess]","] for that).")),Object(s.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The SolidDataset that contains Access-Control List rules.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"))),Object(s.b)("p",null,"Which Access Modes have been granted to everyone for the Resource the given ACL SolidDataset is associated with."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"setpublicdefaultaccess"},"setPublicDefaultAccess"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"setPublicDefaultAccess"),"(",Object(s.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset"),", ",Object(s.b)("inlineCode",{parentName:"p"},"access"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"),"): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")," & WithChangeLog")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/solid-client-js/blob/c4f2c57/src/acl/class.ts#L185"}),"acl/class.ts:185"))),Object(s.b)("p",null,"Given an ACL SolidDataset, modify the ACL Rules to set specific default Access Modes for the public."),Object(s.b)("p",null,"If the given ACL SolidDataset already includes ACL Rules that grant a certain set of default Access Modes\nto the public, those will be overridden by the given Access Modes."),Object(s.b)("p",null,"Keep in mind that this function will not modify:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"access arbitrary Agents might have been given through other ACL rules, e.g. public or group-specific permissions."),Object(s.b)("li",{parentName:"ul"},"what access arbitrary Agents have to the Container itself.")),Object(s.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The SolidDataset that contains Access-Control List rules.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"access")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The Access Modes to grant to the public.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")," & WithChangeLog")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"setpublicresourceaccess"},"setPublicResourceAccess"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"setPublicResourceAccess"),"(",Object(s.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset"),", ",Object(s.b)("inlineCode",{parentName:"p"},"access"),": ",Object(s.b)("a",Object(c.a)({parentName:"p"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access"),"): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")," & WithChangeLog")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/solid-client-js/blob/c4f2c57/src/acl/class.ts#L138"}),"acl/class.ts:138"))),Object(s.b)("p",null,"Given an ACL SolidDataset, modify the ACL Rules to set specific Access Modes for the public."),Object(s.b)("p",null,"If the given ACL SolidDataset already includes ACL Rules that grant a certain set of Access Modes\nto the public, those will be overridden by the given Access Modes."),Object(s.b)("p",null,"Keep in mind that this function will not modify:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"access arbitrary Agents might have been given through other ACL rules, e.g. agent- or group-specific permissions."),Object(s.b)("li",{parentName:"ul"},"what access arbitrary Agents have to child Resources.")),Object(s.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The SolidDataset that contains Access-Control List rules.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"access")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(c.a)({parentName:"td"},{href:"/solid-client-js/docs/api/modules/_interfaces_#access"}),"Access")),Object(s.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The Access Modes to grant to the public.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(c.a)({parentName:"em"},{href:"/solid-client-js/docs/api/modules/_interfaces_#acldataset"}),"AclDataset")," & WithChangeLog")))}o.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var c=a(0),n=a.n(c);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,s=e.originalType,l=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=o(a),j=c,d=p["".concat(l,".").concat(j)]||p[j]||u[j]||s;return a?n.a.createElement(d,b(b({ref:t},i),{},{components:a})):n.a.createElement(d,b({ref:t},i))}));function d(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=a.length,l=new Array(s);l[0]=j;var b={};for(var r in t)hasOwnProperty.call(t,r)&&(b[r]=t[r]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var i=2;i<s;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);