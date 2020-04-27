(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(214)),c={id:"getting_started",title:"Getting Started",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Getting_Started.md"},i={id:"conflux-portal/docs/en/portal/Main_Concepts/getting_started",title:"Getting Started",description:"To develop for ConfluxPortal, you're first going to want to get ConfluxPortal",source:"@site/docs/conflux-portal/docs/en/portal/Main_Concepts/Getting_Started.md",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/getting_started",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Getting_Started.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1587706878,sidebar:"docs",previous:{title:"What Is ConfluxPortal",permalink:"/docs/conflux-portal/docs/en/portal/introduction"},next:{title:"Accessing Accounts",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/accessing_accounts"}},l=[{value:"Basic Considerations",id:"basic-considerations",children:[{value:"ConfluxJS Browser Detection",id:"confluxjs-browser-detection",children:[]},{value:"Running a Test Network",id:"running-a-test-network",children:[]},{value:"Detecting ConfluxPortal",id:"detecting-confluxportal",children:[]},{value:"User State",id:"user-state",children:[]},{value:"Connecting to ConfluxPortal",id:"connecting-to-confluxportal",children:[]}]},{value:"Choosing a Convenience Library",id:"choosing-a-convenience-library",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To develop for ConfluxPortal, you're first going to want to get ConfluxPortal\ninstalled on your development machine. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal/releases"}),"Download\nhere"),".   "),Object(r.b)("p",null,"Once you have it running, you should find that new browser tabs have a\n",Object(r.b)("inlineCode",{parentName:"p"},"window.conflux")," object available in the console. This is the way ConfluxPortal\nprovides for you to interact with it.  "),Object(r.b)("p",null,"You can review the full API for that object ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}),"here"),"."),Object(r.b)("h2",{id:"basic-considerations"},"Basic Considerations"),Object(r.b)("h3",{id:"confluxjs-browser-detection"},"ConfluxJS Browser Detection"),Object(r.b)("p",null,"The first thing your app will want to do is verify whether the user is using\nConfluxPortal or not, which is simple using a check like ",Object(r.b)("inlineCode",{parentName:"p"},"if (typeof\nwindow.conflux !== 'undefined') { /* deal with it */ }"),". "),Object(r.b)("h3",{id:"running-a-test-network"},"Running a Test Network"),Object(r.b)("p",null,"In the top right menu of ConfluxPortal, you can select the network that you are\ncurrently connected to. Among several popular defaults, you'll find ",Object(r.b)("inlineCode",{parentName:"p"},"Custom RPC"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"Localhost 12539"),". These are both useful for connecting to a test\nblockchain, like ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/yqrashawn/conflux-local-network-lite#readme"}),"conflux local network\nlite"),", which you\ncan quickly install and start if you have ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," installed with ",Object(r.b)("inlineCode",{parentName:"p"},"npm i -g\nganache-cli && ganache-cli"),". "),Object(r.b)("p",null,"Since your seed phrase is the power to control all your accounts, it is probably\nworth keeping at least one seed phrase for development, separate from any that\nyou use for storing real value. One easy way to manage multiple seed phrases\nwith ConfluxPortal is with multiple browser profiles, each of which can have\nits own clean extension installations.  "),Object(r.b)("h4",{id:"resetting-your-local-nonce-calculation"},"Resetting Your Local Nonce Calculation"),Object(r.b)("p",null,"If you're running a test blockchain, and then restart it, you can accidentally\nconfuse ConfluxPortal, because it calculates the next\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/Main_Concepts/sending_transactions#nonce-%5Bignored%5D"}),"nonce")," based on both the network\nstate ",Object(r.b)("em",{parentName:"p"},"and")," the known sent transactions.  "),Object(r.b)("p",null,"To clear ConfluxPortal's transaction queue, and effectively reset its nonce\ncalculation, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"Reset Account")," button in ",Object(r.b)("inlineCode",{parentName:"p"},"Settings")," (available in\nthe top-right sandwich menu). "),Object(r.b)("h3",{id:"detecting-confluxportal"},"Detecting ConfluxPortal"),Object(r.b)("p",null,"If you want to differentiate ConfluxPortal from other conflux-compatible\nbrowsers, you can detect ConfluxPortal using ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.isConfluxPortal"),". "),Object(r.b)("h3",{id:"user-state"},"User State"),Object(r.b)("p",null,"Currently there are a few stateful things you want to consider when interacting\nwith this API:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What is the current network?"),Object(r.b)("li",{parentName:"ul"},"What is the current account?")),Object(r.b)("p",null,"Both of these are available synchronously as ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.networkVersion")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"conflux.selectedAddress"),". You can listen for changes using events too, see\n(",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}),"the API reference"),")."),Object(r.b)("h3",{id:"connecting-to-confluxportal"},"Connecting to ConfluxPortal"),Object(r.b)("p",null,'"Connecting" or "logging in" to ConfluxPortal effectively means "to access the\nuser\'s Conflux account(s)".'),Object(r.b)("p",null,"You should ",Object(r.b)("strong",{parentName:"p"},"only")," initiate a connection request in response to direct user\naction, such as clicking a button. You should ",Object(r.b)("strong",{parentName:"p"},"never")," initiate a connection\nrequest on page load.  "),Object(r.b)("p",null,"We recommend that you provide a button to allow the user to connect Conflux\nPortal to your dapp. Clicking this button should call the following method:  "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.enable()\n")),Object(r.b)("p",null,"This promise-returning function resolves with an array of hex-prefixed conflux\naddresses, which can be used as general account references when sending\ntransactions.  "),Object(r.b)("p",null,"Over time, this method is intended to grow to include various additional\nparameters to help your site request all the setup it needs from the user during\nsetup.  "),Object(r.b)("p",null,"Since it returns a promise, if you're in an ",Object(r.b)("inlineCode",{parentName:"p"},"async")," function, you may log in\nlike this:  "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const accounts = await conflux.enable()\nconst account = accounts[0] // We currently only ever provide a single account,\n                            // but the array gives us some room to grow.\n")),Object(r.b)("h2",{id:"choosing-a-convenience-library"},"Choosing a Convenience Library"),Object(r.b)("p",null,"Convenience libraries exist for a variety of reasons."),Object(r.b)("p",null,"Some of them simplify the creation of specific user interface elements, some\nentirely manage the user account onboarding, and others give you a variety of\nmethods of interacting with smart contracts, for a variety of API preferences,\nfrom promises, to callbacks, to strong types, and on.  "),Object(r.b)("p",null,"The provider API itself is very simple, and wraps ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"Conflux\nJSON-RPC")," formatted\nmessages, which is why developers usually use a convenience library for\ninteracting with the provider, like\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others. From those tools,\nyou can generally find sufficient documentation to interact with the provider,\nwithout reading this lower-level API. "))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(f,i({ref:t},s,{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);