(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(1),i=n(9),a=(n(0),n(204)),r={id:"independent_chain",title:"Run An Independent Chain",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/setup_independent_chain.md",keywords:["conflux","run","chain","independent"]},c={id:"conflux-doc/docs/independent_chain",title:"Run An Independent Chain",description:"#How to Set an Independent Conflux Chain",source:"@site/docs/conflux-doc/docs/setup_independent_chain.md",permalink:"/docs/conflux-doc/docs/independent_chain",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/setup_independent_chain.md",lastUpdatedBy:"ypliu",lastUpdatedAt:1587706879,sidebar:"docs",previous:{title:"My First Transaction",permalink:"/docs/conflux-doc/docs/send_transaction"},next:{title:"JSON RPC",permalink:"/docs/conflux-doc/docs/json_rpc"}},l=[{value:"Run Single Node Development Chain",id:"run-single-node-development-chain",children:[]},{value:"Run Multiple Node Production Chain",id:"run-multiple-node-production-chain",children:[]},{value:"A Simple Instruction",id:"a-simple-instruction",children:[]},{value:"Setting Multiple Bootnodes",id:"setting-multiple-bootnodes",children:[]},{value:"Setting Genesis Accounts",id:"setting-genesis-accounts",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"#How to Set an Independent Conflux Chain"),Object(a.b)("p",null,"You may want to run Conflux on a single node chain to develop and test smart\ncontracts. You can run Conflux as your indepdent chain with several machines."),Object(a.b)("h2",{id:"run-single-node-development-chain"},"Run Single Node Development Chain"),Object(a.b)("p",null,"In roder to run a single node Conflux chain for development, you can follow the\nfollowing steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Get executable Conflux binary file (use precompiled binary or build from the\nlatest source code). You can refer to the document\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/install/"}),"Installation"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a directory and prepare a configuration file ",Object(a.b)("inlineCode",{parentName:"p"},"development.toml"),". You\ncan copy the ",Object(a.b)("inlineCode",{parentName:"p"},"default.toml")," provided in the directory and start from there\nfollowing the guide ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/get_started/"}),"Getting\nStarted"),". ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"bootnodes")," parameter in the configuration file to empty (or comment\nthe setting line).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"mode"),' parameter to "dev". If you copy from ',Object(a.b)("inlineCode",{parentName:"p"},"default.toml"),", you\nshould find the line being commented and you can uncomment it.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"dev_block_interval_ms")," parameter to the block generation interval\nyou want. In the development mode, Conflux will automatically generate a block\nin a fixed interval.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run Conflux binary with ",Object(a.b)("inlineCode",{parentName:"p"},"development.toml")," as the configuration file. For\nexample:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"```bash\n$ ../target/release/conflux --config development.toml\n``` \n")))),Object(a.b)("h2",{id:"run-multiple-node-production-chain"},"Run Multiple Node Production Chain"),Object(a.b)("p",null,"To have your independent Conflux chain with multiple nodes in the production\nmode, you need to ensure that your nodes can be connected to other nodes in\nthis chain, and will not connect to other chains (like our testnet)."),Object(a.b)("p",null,"To achieve this, you should setup your own boot node, and let other nodes\nconnect to it. Then they will connect to others with our discovery protocol."),Object(a.b)("p",null,"You need the IP address, the port number, and the node id of the bootnode for\nothers to connect. The node id is the public key corresponding the the node's\nunique private key for identification at the network layer. And here is an\ninstruction to let the bootnode generate its private key automatically, and get\nthe node id through the log file."),Object(a.b)("h2",{id:"a-simple-instruction"},"A Simple Instruction"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Get executable Conflux binary file (use precompiled binary or build from the\nlatest source code). You can refer to the document\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/install/"}),"Installation"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a directory and prepare a configuration file ",Object(a.b)("inlineCode",{parentName:"p"},"bootnode.toml")," for the\nbootnode (the default port is 32323 if not set). You can refer to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/get_started/"}),"Getting\nStarted"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Ensure that `bootnode.toml` does not contain the `bootnode` entry, and the\nlog level for `network` is at least `debug`. \n\n```bash\n$ mkdir run\n$ cd run\n# Put Conflux executable `conflux` and the configuration file `bootnode.toml` under `run`\n```\n\nIf you are editing based on our provided `default.toml`, you need to\ncomment out the `bootnode` entry. Otherwise the node will connect to the\nexisting Conflux net. \n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Launch the bootnode, and find the node id in the console print out. The\ninformation for node id is ",Object(a.b)("inlineCode",{parentName:"p"},"Self node id: $ID")," where ",Object(a.b)("inlineCode",{parentName:"p"},"$ID")," is the 0x-prefixed\nnode id of this bootnode. Remove the 0x prefix and you'll get the node id\n",Object(a.b)("inlineCode",{parentName:"p"},"$NODEID"),". If you missed the line from the screen, you can look at the log file\nwith:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"```bash\ngrep \"Self node id\" log/conflux.log|awk '{print $9}'|tr -d '0x'\n```\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now we have the ",Object(a.b)("inlineCode",{parentName:"p"},"$IP"),", ",Object(a.b)("inlineCode",{parentName:"p"},"$PORT$"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"$NODEID")," of the boot node, we can get\nthe url for this boot node with the format ",Object(a.b)("inlineCode",{parentName:"p"},"cfxnode://$NODEID@$IP:$PORT"),".\nDenote this as ",Object(a.b)("inlineCode",{parentName:"p"},"$BOOTNODE_URL"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start other nodes by setting ",Object(a.b)("inlineCode",{parentName:"p"},'bootnodes="$BOOTNODE_URL"')," in their\nconfiguration."))),Object(a.b)("p",null,"Note that with the instruction above, other nodes connected to the boot node\nwill stay in untrusted state for a while (3 days by default), and untrusted\nnodes will not be broadcast in our discovery protocol. Thus, the network\nstructure will be a star with the boot node in the center before other nodes\nare promoted to trusted state. You can change ",Object(a.b)("inlineCode",{parentName:"p"},"node_table_promotion_timeout_s"),"\nin the configurations to make this period shorter."),Object(a.b)("h2",{id:"setting-multiple-bootnodes"},"Setting Multiple Bootnodes"),Object(a.b)("p",null,"You can also setup multiple bootnodes at the very beginning. However, this\ncannot be done by simply replaying the boot node setup steps above multiple\ntimes, because you need to set ",Object(a.b)("inlineCode",{parentName:"p"},"bootnodes")," of every boot node before they are\nstarted."),Object(a.b)("p",null,"One way to achieve this is to start these bootnodes and stop them immediately.\nThen gather their node ids, set their configuration, and restart them all."),Object(a.b)("p",null,"Another better way is to generate their private keys seperately, and manually\nset their ",Object(a.b)("inlineCode",{parentName:"p"},"net_key")," to start. This can be done with the functions provided in\nour python test framework in the directory ",Object(a.b)("inlineCode",{parentName:"p"},"test"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"from conflux.utils import *\n\nnum_of_bootnodes=10\nfor _ in range(num_of_bootnodes):\n    pri_key, pub_key = ec_random_keys()\n    node_id = encode_hex(encode_int32(pub_key[0]) + encode_int32(pub_key[1]))\n    print(encode_hex(pri_key), node_id)\n")),Object(a.b)("p",null,"Then you can construct the bootnode url with the generated node id, and start\neach node by setting the ",Object(a.b)("inlineCode",{parentName:"p"},'net_key="$NET_KEY"')," field to the private key or pass\nit with the command line option ",Object(a.b)("inlineCode",{parentName:"p"},"--net-key $NET_KEY"),"."),Object(a.b)("h2",{id:"setting-genesis-accounts"},"Setting Genesis Accounts"),Object(a.b)("p",null,"In a production environment, you can initialize the initial genesis state with\nyour accounts by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"genesis_accounts")," to an account file with formats\nlike"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'0f947e34fc907008968ec99baa1dbb677b927531="1000000000000"\nab4a32bca7500d94a2cc1f3150e12686c692c590="1000000000000"\n')),Object(a.b)("p",null,"Every line is an account. The key is the account address, and the value is a\nstring representing its balance in Drip. Note that ",Object(a.b)("inlineCode",{parentName:"p"},"genesis_accounts")," does not\napply if ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," is ",Object(a.b)("inlineCode",{parentName:"p"},"test")," or ",Object(a.b)("inlineCode",{parentName:"p"},"dev"),"."),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," is ",Object(a.b)("inlineCode",{parentName:"p"},"test")," or ",Object(a.b)("inlineCode",{parentName:"p"},"dev,")," you can setup the genesis accounts with their\nsecret keys by setting ",Object(a.b)("inlineCode",{parentName:"p"},"genesis_secrets"),". Each line is an account private key\nwithout 0x-prefix. The balance of each account is set to\n",Object(a.b)("inlineCode",{parentName:"p"},"10000000000000000000000")," by default."))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=o,h=b["".concat(r,".").concat(s)]||b[s]||u[s]||a;return n?i.a.createElement(h,c({ref:t},d,{components:n})):i.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);