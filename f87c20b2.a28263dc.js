(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(9),r=(t(0),t(199)),i={id:"sending_transactions",title:"Sending Transactions",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Sending_Transactions.md"},c={id:"conflux-portal/docs/en/portal/Main_Concepts/sending_transactions",title:"Sending Transactions",description:"Transactions are a formal action on a blockchain. They are always initiated in",source:"@site/docs/conflux-portal/docs/en/portal/Main_Concepts/Sending_Transactions.md",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/sending_transactions",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Sending_Transactions.md",lastUpdatedAt:1594698287,sidebar:"docs",previous:{title:"Accessing Accounts",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/accessing_accounts"},next:{title:"Portal Provider API",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}},s=[{value:"Transaction Parameters",id:"transaction-parameters",children:[{value:"Nonce ignored",id:"nonce-ignored",children:[]},{value:"Gas Price optional",id:"gas-price-optional",children:[]},{value:"Gas Limit optional",id:"gas-limit-optional",children:[]},{value:"To semi-optional",id:"to-semi-optional",children:[]},{value:"Value optional",id:"value-optional",children:[]},{value:"Data semi-optional",id:"data-semi-optional",children:[]},{value:"Chain ID currently ignored",id:"chain-id-currently-ignored",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Transactions are a formal action on a blockchain. They are always initiated in\nConfluxPortal with a call to the ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_sendTransaction")," method. They can involve\na simple sending of ether, may result in sending tokens, creating a new smart\ncontract, or changing state on the blockchain in any number of ways. They are\nalways initiated by a signature from an ",Object(r.b)("em",{parentName:"p"},"external account"),", or a simple key\npair. "),Object(r.b)("p",null,"In ConfluxPortal, using the ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.sendAsync")," method directly, sending a\ntransaction will involve composing an options object like this: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const transactionParameters = {\n  nonce: '0x00', // ignored by ConfluxPortal\n  gasPrice: '0x09184e72a000', // customizable by user during ConfluxPortal confirmation.\n  gas: '0x2710',  // customizable by user during ConfluxPortal confirmation.\n  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.\n  from: accounts[0], // must match user's active address.\n  value: '0x00', // Only required to send ether to the recipient from the initiating external account.\n  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.\n  chainId: 3 // Used to prevent transaction reuse across blockchains. Auto-filled by ConfluxPortal.\n}\n\nconflux.sendAsync({\n  method: 'cfx_sendTransaction',\n  params: [transactionParameters],\n  from: conflux.selectedAddress,\n}, callback)\n")),Object(r.b)("h2",{id:"transaction-parameters"},"Transaction Parameters"),Object(r.b)("p",null,"Many transaction parameters are handled for you by ConfluxPortal, but it's good\nto know what all the parameters do. "),Object(r.b)("h3",{id:"nonce-ignored"},"Nonce ","[ignored]"),Object(r.b)("p",null,"This field is ignored by ConfluxPortal."),Object(r.b)("p",null,"In Conflux every transaction has a nonce. This is so that each transaction can\nonly be processed by the blockchain once. Additionally, to be a valid\ntransaction, the nonce must either be ",Object(r.b)("inlineCode",{parentName:"p"},"0"),", or a transaction with the previous\nnumber must have already been processed. "),Object(r.b)("p",null,"That means that transactions are always processed in order for a given account,\nand so incrementing nonces is a very sensitive matter that is easy to mess up,\nespecially when a user is interacting with multiple applications with pending\ntransactions using the same account, potentially across multiple devices. "),Object(r.b)("p",null,"For these reasons, ConfluxPortal currently does not provide application\ndevelopers any way to customize the nonce of transactions it suggests, and\ninstead assists the user in managing their transaction queue themselves. "),Object(r.b)("h3",{id:"gas-price-optional"},"Gas Price ","[optional]"),Object(r.b)("p",null,"Optional parameter - best used on private blockchains."),Object(r.b)("p",null,"In Conflux, the pool of pending transactions offer their gas price as a sort of\nauction bid to the validators to include this transaction in a block in exchange\nfor a transaction fee. That means high gas prices can mean faster processing,\nbut also more expensive transactions. "),Object(r.b)("p",null,'ConfluxPortal helps users select a competitive gas price on the Conflux Main\nNetwork and popular test networks. We make requests to an API maintained by our\nfriends at MyCrypto and allow users to choose between "slow," "medium," and\n"fast" options for their gas price.  '),Object(r.b)("p",null,"We cannot know about the gas market on all blockchains because it requires some\ndeep analysis. For this reason, while you can safely ignore this parameter on\nour main hosted networks, you may want to suggest a gas price in situations\nwhere your application knows more about the target network than we do. "),Object(r.b)("h3",{id:"gas-limit-optional"},"Gas Limit ","[optional]"),Object(r.b)("p",null,"Optional parameter. Rarely useful to Dapp developers."),Object(r.b)("p",null,"Gas limit is a highly optional parameter, and we automatically calculate a\nreasonable price for it. You will probably know that your smart contract\nbenefits from a custom gas limit if it ever does for some reason. "),Object(r.b)("h3",{id:"to-semi-optional"},"To ","[semi-optional]"),Object(r.b)("p",null,"A hex-encoded Conflux address. Required for transactions with a recipient (all\ntransactions except for contract creation). "),Object(r.b)("p",null,"Contract creation occurs when there is no ",Object(r.b)("inlineCode",{parentName:"p"},"to")," value but there is a ",Object(r.b)("inlineCode",{parentName:"p"},"data"),"\nvalue. "),Object(r.b)("h3",{id:"value-optional"},"Value ","[optional]"),Object(r.b)("p",null,"Hex-encoded value of the network's native currency to send. On the Main Conflux\nnetwork, this is cfx, which is denominated in ",Object(r.b)("em",{parentName:"p"},"drip"),", which is ",Object(r.b)("inlineCode",{parentName:"p"},"1e-18")," ether. "),Object(r.b)("p",null,"Please note that these numbers often used in Conflux are far higher precision\nthan native JavaScript numbers, and can cause unpredictable behavior if not\nanticipated. For this reason, we highly recommend using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"}),"BigInt"),"\nor ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/indutny/bn.js/"}),"BN.js")," when manipulating values intended\nfor the blockchain.  "),Object(r.b)("h3",{id:"data-semi-optional"},"Data ","[semi-optional]"),Object(r.b)("p",null,"Required for smart contract creation."),Object(r.b)("p",null,"This field is also used for specifying contract methods and their parameters.\nYou can learn more about how that data is encoded on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"}),"the solidity ABI\nspec"),". "),Object(r.b)("h3",{id:"chain-id-currently-ignored"},"Chain ID ","[currently ignored]"),Object(r.b)("p",null,"Chain ID is currently derived by the user's current selected network at\n",Object(r.b)("inlineCode",{parentName:"p"},"conflux.networkVersion"),". In the future we will probably allow a way to connect\nto multiple networks at once, at which point this parameter will become\nimportant, so it may be useful to be in the habit of including now. "))}p.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return t?o.a.createElement(h,c(c({ref:n},l),{},{components:t})):o.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);