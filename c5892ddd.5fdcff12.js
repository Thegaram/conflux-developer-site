(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(204)),c={id:"initializing_dapps",title:"Initializing Dapps",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Initializing_Dapps.md"},i={id:"conflux-portal/docs/en/portal/Main_Concepts/initializing_dapps",title:"Initializing Dapps",description:"Once you have your basic dev environment [set up](./Getting_Started.md), you are",source:"@site/docs/conflux-portal/docs/en/portal/Main_Concepts/Initializing_Dapps.md",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/initializing_dapps",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Initializing_Dapps.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1587706878},s=[{value:"The Contract Network",id:"the-contract-network",children:[]},{value:"The Contract Address",id:"the-contract-address",children:[]},{value:"The Contract ABI",id:"the-contract-abi",children:[]},{value:"The Contract Bytecode",id:"the-contract-bytecode",children:[]},{value:"The Contract Source Code",id:"the-contract-source-code",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once you have your basic dev environment ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/Main_Concepts/getting_started"}),"set up"),", you are\nready to start interacting with some smart contracts. There are some basic\nthings you'll need regardless of what convenience library you're using, when\ncommunicating with a smart contract: "),Object(a.b)("h2",{id:"the-contract-network"},"The Contract Network"),Object(a.b)("p",null,"If you aren't connected to the right network, you aren't going to have any luck\nsending transactions to your contract, so make sure you have this right! "),Object(a.b)("p",null,'Many clever dapps will recognize the user\'s current network, and actually adapt\nto it! For example, if you detect a test network, you could deliberately connect\nto a test-network version of your smart contract, which makes it easy for users\nto "try out" your system without using real money! '),Object(a.b)("h2",{id:"the-contract-address"},"The Contract Address"),Object(a.b)("p",null,"Every account in Conflux has an address, whether it's an external key-pair\naccount, or a smart contract. In order for any smart contract library to\ncommunicate with your contracts, they'll need to know its exact address. "),Object(a.b)("h2",{id:"the-contract-abi"},"The Contract ABI"),Object(a.b)("p",null,"In Conflux, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"}),"The ABI\nSpecification")," is a\nway to encode the interface of a smart contract in a way that your user\ninterface can make sense of. It is an array of method-describing objects, and\nwhen you feed this and the address into a contract-abstraction library like\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others, this ",Object(a.b)("inlineCode",{parentName:"p"},"ABI")," tells\nthose libraries about what methods to provide, and how to compose transactions\nto call those methods.  "),Object(a.b)("h2",{id:"the-contract-bytecode"},"The Contract Bytecode"),Object(a.b)("p",null,"If your web app is going to publish a new smart contract that is pre-compiled,\nit may need to include some ",Object(a.b)("inlineCode",{parentName:"p"},"bytecode"),". In this case, you will not know the\ncontract address in advance, but instead will have to publish, watch for the\ntransaction to be processed, and then extract the final contract's address from\nthe completed transaction. "),Object(a.b)("p",null,"If publishing a contract from bytecode, you will still want an ",Object(a.b)("inlineCode",{parentName:"p"},"ABI")," if you want\nto interact with it! The bytecode does not describe how to interact with the\nfinal contract. "),Object(a.b)("h2",{id:"the-contract-source-code"},"The Contract Source Code"),Object(a.b)("p",null,"If your website is going to allow users to edit smart contract source code and\ncompile it, like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://remix.conflux.org/"}),"Remix"),", you may import a whole\ncompiler, in which case you're going to derive your bytecode and ABI from that\nsource code, and eventually you will derive the contract's address from the\ncompleted transaction publishing that bytecode. "))}d.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,b=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?o.a.createElement(b,i({ref:t},l,{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);