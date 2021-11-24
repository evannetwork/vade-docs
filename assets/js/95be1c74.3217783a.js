"use strict";(self.webpackChunkvade_docs=self.webpackChunkvade_docs||[]).push([[2745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),v=r,b=c["".concat(l,".").concat(v)]||c[v]||u[v]||i;return n?a.createElement(b,d(d({ref:t},p),{},{components:n})):a.createElement(b,d({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var s=2;s<i;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),d=["components"],o={sidebar_position:1},l="did:evan",s={unversionedId:"plugins/dids/evan",id:"plugins/dids/evan",isDocsHomePage:!1,title:"did:evan",description:"[vade-evan-substrate] plugin allows you to use to work with DIDs, which runs on evan.network.",source:"@site/docs/plugins/dids/evan.md",sourceDirName:"plugins/dids",slug:"/plugins/dids/evan",permalink:"/vade-docs/docs/plugins/dids/evan",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/plugins/dids/evan.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JWT",permalink:"/vade-docs/docs/plugins/credentials/jwt"},next:{title:"Universal Resolver",permalink:"/vade-docs/docs/plugins/dids/uniresolver"}},p=[{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"didevan"},"did:evan"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate"},(0,i.kt)("inlineCode",{parentName:"a"},"vade-evan-substrate"))," plugin allows you to use to work with DIDs, which runs on evan.network."),(0,i.kt)("p",null,"It implements the following ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/vade/*/vade/trait.VadePlugin.html"},(0,i.kt)("inlineCode",{parentName:"a"},"VadePlugin"))," functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L141"},(0,i.kt)("inlineCode",{parentName:"a"},"did_create"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L261"},(0,i.kt)("inlineCode",{parentName:"a"},"did_resolve"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L190"},(0,i.kt)("inlineCode",{parentName:"a"},"did_update")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"did-create"),"]"," requires following params to be passed "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Options: Object of ",(0,i.kt)("a",{parentName:"li",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L51"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityArguments"))),(0,i.kt)("li",{parentName:"ul"},'Method: DID method, in our case the method is "did:evan"')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'options={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906"}\n\nmethod="did:evan"\n\n./vade_evan_cli did create --method $method --options $options\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"did:evan:0xd74434f146f3fba3fde8a6e4a0a522d2bf5b8b845fee0b493a01c78dd1b999e3"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("inlineCode",{parentName:"p"},"did-update"),"]",": requires following params to be passed "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DID: DID to be updated"),(0,i.kt)("li",{parentName:"ul"},"Options: Object of ",(0,i.kt)("a",{parentName:"li",href:"https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L43"},(0,i.kt)("inlineCode",{parentName:"a"},"DidUpdateArguments"))),(0,i.kt)("li",{parentName:"ul"},"Payload: Payload to update for DID")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'did=did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906\n\noptions={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906","operation":"setDidDocument"}\n\npayload="hello world"\n\n./vade_evan_cli did update --did $did --options $DIDUpdateOptions --payload $payload\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did-resolve"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./vade_evan_cli did resolve --did did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"@context":["https://www.w3.org/ns/did/v1","https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld"],"id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736","verificationMethod":[{"id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller","type":"EcdsaSecp256k1RecoveryMethod2020","controller":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736","blockchainAccountId":"0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736@eip155:1"}],"authentication":["did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"],"assertionMethod":["did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"]}\n')))}c.isMDXComponent=!0}}]);