(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(9),c=(t(0),t(199)),l={},o={id:"js-conflux-sdk/CHANGE_LOG",title:"CHANGE_LOG",description:"change log",source:"@site/docs/js-conflux-sdk/CHANGE_LOG.md",permalink:"/docs/js-conflux-sdk/CHANGE_LOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/CHANGE_LOG.md",lastUpdatedAt:1594026213},i=[{value:"v0.12.0",id:"v0120",children:[]},{value:"v0.11.0",id:"v0110",children:[]},{value:"v0.10.3",id:"v0103",children:[]},{value:"v0.10.2",id:"v0102",children:[]},{value:"v0.10.1",id:"v0101",children:[]},{value:"v0.10.0-alpha",id:"v0100-alpha",children:[]},{value:"v0.9.2",id:"v092",children:[]},{value:"v0.9.1",id:"v091",children:[]},{value:"v0.9.0-beta",id:"v090-beta",children:[]}],b={rightToc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"change-log"},"change log"),Object(c.b)("h2",{id:"v0120"},"v0.12.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add ",Object(c.b)("inlineCode",{parentName:"li"},"getAdmin"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"await cfx.getAdmin('0x89996a8aefb2228593aae723d47f9517eef1341d')\n// \"0x1be45681ac6c53d5a40475f7526bac1fe7590fb8\"\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"sendTransaction accept privateKey as ",Object(c.b)("inlineCode",{parentName:"li"},"from"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.sendTransaction({\n  from: PRIVATE_KEY, // accept Account instance or privateKey\n  to: ADDRESS, // accept Account instance or address\n  ...,\n})\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"create Account accept address")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"new Account(PRIVATE_KEY); // {privateKey:'0x...', publicKey: '0x...', address: '0x...'}\nnew Account(PUBLIC_KEY); // {publicKey: '0x...', address: '0x...'}\nnew Account(ADDRESS); // {address: '0x...'}\n")),Object(c.b)("h2",{id:"v0110"},"v0.11.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"defaultGasPrice, only use for sendTransaction")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// old\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{defaultGasPrice:'0x64',address:'0x...',data:'0x...'}\n\n\n// new\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{address:'0x...',data:'0x...'}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"remove defaultEpoch, defaultChainId, defaultGas, defaultStorageLimit")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultEpoch: 'latest_state',\n  defaultChainId: 1,\n  defaultGasPrice: 100,\n  defaultGas: 10,\n  defaultStorageLimit: 1,\n})\n\n// new\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// user could `epochNumber` and `chainId` manual on each method.\n")),Object(c.b)("h2",{id:"v0103"},"v0.10.3"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fix broken sourcemap")),Object(c.b)("h2",{id:"v0102"},"v0.10.2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fix: include crypto into browserify build")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nConfluxJSSDK.util.sign.randomPrivateKey() // TypeError randomBytes is not a function\n\n")),Object(c.b)("h2",{id:"v0101"},"v0.10.1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add format.bytes")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"format.bytes('abcd'); // <Buffer 61 62 63 64>\nformat.bytes([0, 1, 2, 3]); // <Buffer 00 01 02 03>\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add contract method & event type or signature indexes")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// solidity\nfunction override(bytes memory str) public\nfunction override(string memory str) public\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"contract.override('str'); // Error: can not determine override\n\ncontract['override(string)']('str'); // specify override method by type\ncontract['0x227ffd52']('str'); // specify override method by signature\n")),Object(c.b)("h2",{id:"v0100-alpha"},"v0.10.0-alpha"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add ",Object(c.b)("inlineCode",{parentName:"li"},"getStatus"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.getStatus()\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"remove ",Object(c.b)("inlineCode",{parentName:"li"},"getRiskCoefficient")," and replace with ",Object(c.b)("inlineCode",{parentName:"li"},"getConfirmationRiskByHash"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.getRiskCoefficient(epochNumber)\n\n// new\ncfx.getConfirmationRiskByHash(blockHash)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"remove ",Object(c.b)("inlineCode",{parentName:"p"},"getAccount")," cause it's internal RPC.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"use ",Object(c.b)("inlineCode",{parentName:"p"},"require")," replace ",Object(c.b)("inlineCode",{parentName:"p"},"import")," to gen code."))),Object(c.b)("h2",{id:"v092"},"v0.9.2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add defaultStorageLimit and defaultChainId for Conflux")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n})\n\n// new\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n  defaultStorageLimit: 4096,\n  defaultChainId: 0,\n})\n")),Object(c.b)("h2",{id:"v091"},"v0.9.1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"abi implicitly converting string to number")),Object(c.b)("p",null,"solidity method: ",Object(c.b)("inlineCode",{parentName:"p"},"function add(uint,uint) public returns (uint);")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nawait contract.add(1, '2'); // error! can not accept string \n\n// new version\nawait contract.add(1, '2'); // good, converting string to number\n")),Object(c.b)("h2",{id:"v090-beta"},"v0.9.0-beta"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"format nonce as JSBI.BigInt")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"nonce = await cfx.getNextNonce(...)\n\n// old\n100000\n\n// new\nJSBI.BigInt(100000)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"format transaction fields")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'tx = await cfx.getTransactionByHash(txHash)\n// old\n{\n  storageLimit: "0x64",\n  chainId: "0x0",\n  epochHeight: "0x400",\n  ...\n}\n\n// new\n{\n  storageLimit: JSBI.BigInt(100), // JSBI\n  chainId: 0,\n  epochHeight: 1024,\n  ...\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"unit return string")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nunit.fromCFXToGDrip(123) => JSBI.BigInt(123000000000)\nunit.fromCFXToGDrip('0.1234567891') => Error('Cannot convert JSBI.BigInt')\n\n// new\nunit.fromCFXToGDrip(123) => \"123000000000\"\nunit.fromCFXToGDrip('0.1234567891') => \"123456789.1\"\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'contract fields "code" rename to "bytecode"')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.Contract({code, abi, address})\n\n// new\ncfx.Contract({bytecode, abi, address})\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"abi decodeData and decodeLog return object")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"result = contract.abi.decodeData('0x....')\n\n// old\n[\"Tom\", JSBI.BigInt(18)]\n\n// new\n{\n  name: 'func'\n  fullName: 'func(string name, uint age)',\n  type: 'func(string,uint)',\n  signature: '0x812600df',\n  array: [\"Tom\", JSBI.BigInt(18)],\n  object: {\n    name: \"Tom\",\n    age: JSBI.BigInt(18),\n  }\n}\n")))}u.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),u=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=u(t),s=a,f=d["".concat(l,".").concat(s)]||d[s]||p[s]||c;return t?r.a.createElement(f,o(o({ref:n},b),{},{components:t})):r.a.createElement(f,o({ref:n},b))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=s;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);