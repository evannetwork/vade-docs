"use strict";(self.webpackChunkvade_docs=self.webpackChunkvade_docs||[]).push([[5736],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),m=o(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5189:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={sidebar_position:6},p="References",o={unversionedId:"references",id:"references",isDocsHomePage:!1,title:"References",description:"Methods",source:"@site/docs/references.md",sourceDirName:".",slug:"/references",permalink:"/vade-docs/docs/references",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/references.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Propose Credential with DIDComm",permalink:"/vade-docs/docs/usage samples/didcomm_issue-credential_holder_proposes"}},s=[{value:"Methods",id:"methods",children:[{value:"did_create",id:"did_create",children:[],level:3},{value:"did_update",id:"did_update",children:[],level:3},{value:"did_resolve",id:"did_resolve",children:[],level:3},{value:"didcomm_send",id:"didcomm_send",children:[],level:3},{value:"didcomm_receive",id:"didcomm_receive",children:[],level:3},{value:"vc_zkp_verify_proof",id:"vc_zkp_verify_proof",children:[],level:3},{value:"vc_zkp_issue_credential",id:"vc_zkp_issue_credential",children:[],level:3}],level:2},{value:"Types",id:"types",children:[{value:"AssertionProof",id:"assertionproof",children:[],level:3},{value:"BaseMessage",id:"basemessage",children:[],level:3},{value:"CredentialStatus",id:"credentialstatus",children:[],level:3},{value:"CredentialSubject",id:"credentialsubject",children:[],level:3},{value:"Credential",id:"credential",children:[],level:3},{value:"DidCommOptions",id:"didcommoptions",children:[],level:3},{value:"DidUpdateArguments",id:"didupdatearguments",children:[],level:3},{value:"EncryptionKeys",id:"encryptionkeys",children:[],level:3},{value:"ExtendedMessage",id:"extendedmessage",children:[],level:3},{value:"IdentityArguments",id:"identityarguments",children:[],level:3},{value:"IssueCredentialPayload",id:"issuecredentialpayload",children:[],level:3},{value:"ProofVerification",id:"proofverification",children:[],level:3},{value:"SigningKeys",id:"signingkeys",children:[],level:3},{value:"SignerOptions",id:"signeroptions",children:[],level:3},{value:"UnsignedCredential",id:"unsignedcredential",children:[],level:3},{value:"VadeDidCommPluginOutput",id:"vadedidcommpluginoutput",children:[],level:3},{value:"VerifyProofPayload",id:"verifyproofpayload",children:[],level:3}],level:2}],u={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"references"},"References"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"did_create"},"did_create"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn did_create(\n        &mut self,\n        did_method: &str,\n        options: &str,\n        payload: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_method"),(0,l.kt)("td",{parentName:"tr",align:null},'did method to cater to, usually "did:evan"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#identityarguments"},(0,l.kt)("inlineCode",{parentName:"a"},"IdentityArguments")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"no payload required for vade-evan-substrate DID, so can be left empty")))),(0,l.kt)("h3",{id:"did_update"},"did_update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn did_update(\n        &mut self,\n        did: &str,\n        options: &str,\n        payload: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did"),(0,l.kt)("td",{parentName:"tr",align:null},"DID to update data for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#didupdatearguments"},(0,l.kt)("inlineCode",{parentName:"a"},"DidUpdateArguments")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"DID document to set or empty")))),(0,l.kt)("h3",{id:"did_resolve"},"did_resolve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn did_resolve(\n        &mut self,\n        did_id: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"did_id"),(0,l.kt)("td",{parentName:"tr",align:null},"DID to resolve")))),(0,l.kt)("h3",{id:"didcomm_send"},"didcomm_send"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn didcomm_send(\n        &mut self,\n        options: &str,\n        message: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn std::error::Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#didcommoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"DidcommOptions")),", used to apply a custom signing_key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"the plain didcomm message (should be of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#basemessage"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseMessage")),")")))),(0,l.kt)("h3",{id:"didcomm_receive"},"didcomm_receive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn didcomm_receive(\n        &mut self,\n        options: &str,\n        message: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn std::error::Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#didcommoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"DidcommOptions")),", used to apply a custom signing_key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"the plain / encrypted didcomm message (should be of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#basemessage"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseMessage"))," / ","[",(0,l.kt)("inlineCode",{parentName:"td"},"EncryptedMessage"),"]",")")))),(0,l.kt)("h3",{id:"vc_zkp_verify_proof"},"vc_zkp_verify_proof"),(0,l.kt)("p",null,"Verifies the proof sent in a verified credential"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn vc_zkp_verify_proof(\n        &mut self,\n        method: &str,\n        options: &str,\n        payload: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},'method to verify a proof for (e.g. "did:example")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ","[",(0,l.kt)("inlineCode",{parentName:"td"},"TypeOptions"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#verifyproofpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"VerifyProofPayload")))))),(0,l.kt)("h3",{id:"vc_zkp_issue_credential"},"vc_zkp_issue_credential"),(0,l.kt)("p",null,"Issues a new credential. This requires an UnsignedCredential."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"async fn vc_zkp_issue_credential(\n        &mut self,\n        method: &str,\n        options: &str,\n        payload: &str,\n    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},'method to issue a credential for (e.g. "did:example")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#signeroptions"},(0,l.kt)("inlineCode",{parentName:"a"},"SignerOptions")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"of type ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#issuecredentialpayload"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueCredentialPayload")))))),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("h3",{id:"assertionproof"},"AssertionProof"),(0,l.kt)("p",null,"AssertionProof, typically used to ensure authenticity and integrity of a verifiable credential"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct AssertionProof {\n    pub r#type: String,\n    pub created: String,\n    pub proof_purpose: String,\n    pub verification_method: String,\n    pub jws: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},'type (e.g: "EcdsaPublicKeySecp256k1")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created"),(0,l.kt)("td",{parentName:"tr",align:null},"creation timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proof_purpose"),(0,l.kt)("td",{parentName:"tr",align:null},'purpose of proof (e.g: "assertionMethod")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verification_method"),(0,l.kt)("td",{parentName:"tr",align:null},'method of verification (e.g: ""did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6#key-1")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jws"),(0,l.kt)("td",{parentName:"tr",align:null},"signature in jws format")))),(0,l.kt)("h3",{id:"basemessage"},"BaseMessage"),(0,l.kt)("p",null,"Decrypted message format without dynamic body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct BaseMessage {\n    pub from: Option<String>,\n    pub r#type: String,\n    pub to: Option<Vec<String>>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"DID of sender")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},"type of messge, which identifies the protocol and message type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"DID of receiver")))),(0,l.kt)("h3",{id:"credentialstatus"},"CredentialStatus"),(0,l.kt)("p",null,"'credentialStatus' property of a verifiable credential containing revocation information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct CredentialStatus {\n    pub id: String,\n    pub r#type: String,\n    pub revocation_list_index: String,\n    pub revocation_list_credential: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},"type of list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revocation_list_index"),(0,l.kt)("td",{parentName:"tr",align:null},"list index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revocation_list_credential"),(0,l.kt)("td",{parentName:"tr",align:null},"list credential")))),(0,l.kt)("h3",{id:"credentialsubject"},"CredentialSubject"),(0,l.kt)("p",null,"Payload/data part of a verifiable credential."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct CredentialSubject {\n    pub id: String,\n    pub data: HashMap<String, String>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"DID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"key value pairs representing various properties to be signed")))),(0,l.kt)("h3",{id:"credential"},"Credential"),(0,l.kt)("p",null,"A verifiable credential issued by an issuer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pub struct Credential {\n    #[serde(rename(serialize = "@context", deserialize = "@context"))]\n    pub context: Vec<String>,\n    pub id: String,\n    pub r#type: Vec<String>,\n    pub issuer: String,\n    pub issuance_date: String,\n    pub credential_subject: CredentialSubject,\n    pub credential_schema: CredentialSchemaReference,\n    pub credential_status: Option<CredentialStatus>,\n    pub proof: AssertionProof,\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"context (e.g: ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/2018/credentials/v1"},"https://www.w3.org/2018/credentials/v1"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"unique id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},"type value(usually ",'["VerifiableCredential"]',")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"DID of Issuer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valid_until"),(0,l.kt)("td",{parentName:"tr",align:null},"optional validity date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuance_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date of issuance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_subject"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#didcomm_send"},(0,l.kt)("inlineCode",{parentName:"a"},"CredentialSubject")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_schema"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ","[",(0,l.kt)("inlineCode",{parentName:"td"},"CredentialSchemaReference"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_status"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#credentialstatus"},(0,l.kt)("inlineCode",{parentName:"a"},"CredentialStatus")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_status"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#assertionproof"},(0,l.kt)("inlineCode",{parentName:"a"},"AssertionProof")))))),(0,l.kt)("h3",{id:"didcommoptions"},"DidCommOptions"),(0,l.kt)("p",null,"Optional parameter that can be passed to vade DIDComm functions to enforce a specific encryption key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct DidCommOptions {\n    pub encryption_keys: Option<EncryptionKeys>,\n    pub signing_keys: Option<SigningKeys>,\n    pub skip_protocol_handling: Option<bool>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"object of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#encryptionkeys"},(0,l.kt)("inlineCode",{parentName:"a"},"EncryptionKeys"))," type which are optionally used to encrypt message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signing_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"object of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#signingkeys"},(0,l.kt)("inlineCode",{parentName:"a"},"SigningKeys"))," type which are optionally used to sign message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip_protocol_handling"),(0,l.kt)("td",{parentName:"tr",align:null},"optional boolean parameter true/false")))),(0,l.kt)("h3",{id:"didupdatearguments"},"DidUpdateArguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct DidUpdateArguments {\n    pub private_key: String,\n    pub identity: String,\n    pub operation: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private_key"),(0,l.kt)("td",{parentName:"tr",align:null},"private key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null},"DID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operation"),(0,l.kt)("td",{parentName:"tr",align:null},"update operation")))),(0,l.kt)("h3",{id:"encryptionkeys"},"EncryptionKeys"),(0,l.kt)("p",null,"Either a computed shared secret or a (local) private key plus a contacts public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pub struct EncryptionKeys {\n    #[serde(with = "hex")]\n    pub encryption_my_secret: [u8; 32],\n    #[serde(default)]\n    #[serde(skip_serializing_if = "Option::is_none")]\n    #[serde(with = "hex_option")]\n    pub encryption_others_public: Option<[u8; 32]>,\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption_my_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"secret key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption_others_public"),(0,l.kt)("td",{parentName:"tr",align:null},"public key")))),(0,l.kt)("h3",{id:"extendedmessage"},"ExtendedMessage"),(0,l.kt)("p",null,"Decrypted message format without dynamic body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct ExtendedMessage {\n    pub body: Option<HashMap<String, Value>>,\n    pub created_time: Option<u64>,\n    pub expires_time: Option<u64>,\n    pub from: Option<String>,\n    pub id: Option<String>,\n    pub pthid: Option<String>,\n    pub r#type: String,\n    pub thid: Option<String>,\n    pub to: Option<Vec<String>>,\n    pub other: HashMap<String, String>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"optional key/value pairs to be passed as per the message being sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_time"),(0,l.kt)("td",{parentName:"tr",align:null},"optional timestamp of message creation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expires_time"),(0,l.kt)("td",{parentName:"tr",align:null},"optional timestamp of message expiration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"optional did of sender")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"optional unique identifier for messagee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pthid"),(0,l.kt)("td",{parentName:"tr",align:null},"optional pthid for specific messaging/sessions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},"type of messge, which identifies the protocol and message type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thid"),(0,l.kt)("td",{parentName:"tr",align:null},"optional pthid for specific messaging/sessions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"optional DIDs of receivers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},"other optional parameters to be sent as per procotol")))),(0,l.kt)("h3",{id:"identityarguments"},"IdentityArguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct IdentityArguments {\n    pub private_key: String,\n    pub identity: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private_key"),(0,l.kt)("td",{parentName:"tr",align:null},"private key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null},"DID")))),(0,l.kt)("h3",{id:"issuecredentialpayload"},"IssueCredentialPayload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct IssueCredentialPayload {\n    pub unsigned_vc: UnsignedCredential,\n    pub issuer_public_key_id: String,\n    pub issuer_public_key: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unsigned_vc"),(0,l.kt)("td",{parentName:"tr",align:null},"The VC to sign, without any appended proof")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer_public_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"DID url of the public key of the issuer used to later verify the signature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer_public_key"),(0,l.kt)("td",{parentName:"tr",align:null},"The public key of the issuer used to later verify the signature")))),(0,l.kt)("h3",{id:"proofverification"},"ProofVerification"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct ProofVerification {\n    pub verified: bool,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verified"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false")))),(0,l.kt)("h3",{id:"signingkeys"},"SigningKeys"),(0,l.kt)("p",null,"Either a computed shared secret or a (local) private key plus a contacts public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pub struct SigningKeys {\n    #[serde(default)]\n    #[serde(skip_serializing_if = "Option::is_none")]\n    #[serde(with = "hex_option")]\n    pub signing_my_secret: Option<[u8; 32]>,\n    #[serde(default)]\n    #[serde(skip_serializing_if = "Option::is_none")]\n    #[serde(with = "hex_option")]\n    pub signing_others_public: Option<[u8; 32]>,\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signing_my_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"secret key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signing_others_public"),(0,l.kt)("td",{parentName:"tr",align:null},"public key")))),(0,l.kt)("h3",{id:"signeroptions"},"SignerOptions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct SignerOptions {\n    pub unsigned_vc: UnsignedCredential,\n    pub issuer_public_key_id: String,\n    pub issuer_public_key: String,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unsigned_vc"),(0,l.kt)("td",{parentName:"tr",align:null},"The VC to sign, without any appended proof")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer_public_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"DID url of the public key of the issuer used to later verify the signature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer_public_key"),(0,l.kt)("td",{parentName:"tr",align:null},"The public key of the issuer used to later verify the signature")))),(0,l.kt)("h3",{id:"unsignedcredential"},"UnsignedCredential"),(0,l.kt)("p",null,"An unsigned credential that has to be signed by Issuer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pub struct UnsignedCredential {\n    #[serde(rename(serialize = "@context", deserialize = "@context"))]\n    pub context: Vec<String>,\n    pub id: String,\n    pub r#type: Vec<String>,\n    pub issuer: String,\n    #[serde(skip_serializing_if = "Option::is_none")]\n    pub valid_until: Option<String>,\n    pub issuance_date: String,\n    pub credential_subject: CredentialSubject,\n    pub credential_schema: CredentialSchemaReference,\n    pub credential_status: Option<CredentialStatus>,\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"context (e.g: ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/2018/credentials/v1"},"https://www.w3.org/2018/credentials/v1"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"unique id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r#type"),(0,l.kt)("td",{parentName:"tr",align:null},"type value(usually ",'["VerifiableCredential"]',")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"DID of Issuer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valid_until"),(0,l.kt)("td",{parentName:"tr",align:null},"optional validity date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuance_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date of issuance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_subject"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#didcomm_send"},(0,l.kt)("inlineCode",{parentName:"a"},"CredentialSubject")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_schema"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ","[",(0,l.kt)("inlineCode",{parentName:"td"},"CredentialSchemaReference"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential_status"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#credentialstatus"},(0,l.kt)("inlineCode",{parentName:"a"},"CredentialStatus")))))),(0,l.kt)("h3",{id:"vadedidcommpluginoutput"},"VadeDidCommPluginOutput"),(0,l.kt)("p",null,"Output of didcomm_send or didcomm_receive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct VadeDidCommPluginOutput<T, TRaw = serde_json::Value> {\n    pub message: T,\n    pub message_raw: TRaw,\n    pub metadata: HashMap<String, String>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"encrypted/plain object of Type which is sent or received")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message_raw"),(0,l.kt)("td",{parentName:"tr",align:null},"json representation of plain message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"optional metadata (key/value pairs)")))),(0,l.kt)("h3",{id:"verifyproofpayload"},"VerifyProofPayload"),(0,l.kt)("p",null,"Payload for verifying a signed Credential."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pub struct VerifyProofPayload {\n    /// VC to verify\n    pub credential: Credential,\n    /// Signer address\n    pub signer_address: String,\n    /// revocation list credential\n    pub revocation_list: Option<RevocationListCredential>,\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credential"),(0,l.kt)("td",{parentName:"tr",align:null},"type of ",(0,l.kt)("a",{parentName:"td",href:"/docs/references#credential"},(0,l.kt)("inlineCode",{parentName:"a"},"Credential")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signer_address"),(0,l.kt)("td",{parentName:"tr",align:null},"address of signer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revocation_list"),(0,l.kt)("td",{parentName:"tr",align:null},"type of  ","[",(0,l.kt)("inlineCode",{parentName:"td"},"RevocationListCredential"),"]")))))}m.isMDXComponent=!0}}]);