---
sidebar_position: 6
---

# References

## Methods

### did_create

```sh
async fn did_create(
        &mut self,
        did_method: &str,
        options: &str,
        payload: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>> 
```

| Argument  | Description |
| ------------- | ------------- |
| did_method  | did method to cater to, usually "did:evan"  |
| options  | of type [`IdentityArguments`]  |
| payload  | no payload required for vade-evan-substrate DID, so can be left empty  |

### did_update

```sh
async fn did_update(
        &mut self,
        did: &str,
        options: &str,
        payload: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>
```

| Argument  | Description |
| ------------- | ------------- |
| did | DID to update data for  |
| options  | of type [`DidUpdateArguments`] |
| payload  | DID document to set or empty |

### did_resolve

```sh
async fn did_resolve(
        &mut self,
        did_id: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>> 
```

| Argument  | Description |
| ------------- | ------------- |
| did_id  | DID to resolve  |

### didcomm_send

```sh
async fn didcomm_send(
        &mut self,
        options: &str,
        message: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn std::error::Error>>
```

| Argument  | Description |
| ------------- | ------------- |
| options  | of type [`DidcommOptions`], used to apply a custom signing_key  |
| message  | the plain didcomm message (should be of type [`BaseMessage`])  |

### didcomm_receive

```sh
async fn didcomm_receive(
        &mut self,
        options: &str,
        message: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn std::error::Error>>
```

| Argument  | Description |
| ------------- | ------------- |
| options  | of type [`DidcommOptions`], used to apply a custom signing_key  |
| message  | the plain / encrypted didcomm message (should be of type [`BaseMessage`] / [`EncryptedMessage`])  |

### vc_zkp_verify_proof
Verifies the proof sent in a verified credential

```sh
async fn vc_zkp_verify_proof(
        &mut self,
        method: &str,
        options: &str,
        payload: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>> 
```

| Argument  | Description |
| ------------- | ------------- |
| method |  method to verify a proof for (e.g. "did:example") |
| options  | of type [`TypeOptions`] |
| payload  | of type [`VerifyProofPayload`] |

### vc_zkp_issue_credential
Issues a new credential. This requires an UnsignedCredential.

```sh
async fn vc_zkp_issue_credential(
        &mut self,
        method: &str,
        options: &str,
        payload: &str,
    ) -> Result<VadePluginResultValue<Option<String>>, Box<dyn Error>>
```

| Argument  | Description |
| ------------- | ------------- |
| method | method to issue a credential for (e.g. "did:example")  |
| options  | of type [`SignerOptions`] |
| payload  | of type [`IssueCredentialPayload`] |

## Types

### AssertionProof
AssertionProof, typically used to ensure authenticity and integrity of a verifiable credential

```sh
pub struct AssertionProof {
    pub r#type: String,
    pub created: String,
    pub proof_purpose: String,
    pub verification_method: String,
    pub jws: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| r#type  | type (e.g: "EcdsaPublicKeySecp256k1")|
| created  | creation timestamp |
| proof_purpose  | purpose of proof (e.g: "assertionMethod") |
| verification_method  | method of verification (e.g: ""did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6#key-1")|
| jws  | signature in jws format |

### BaseMessage
Decrypted message format without dynamic body
```sh
pub struct BaseMessage {
    pub from: Option<String>,
    pub r#type: String,
    pub to: Option<Vec<String>>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| from  | DID of sender |
| r#type  | type of messge, which identifies the protocol and message type |
| to  | DID of receiver |

### CredentialStatus
'credentialStatus' property of a verifiable credential containing revocation information.

```sh
pub struct CredentialStatus {
    pub id: String,
    pub r#type: String,
    pub revocation_list_index: String,
    pub revocation_list_credential: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| id  | id |
| r#type  | type of list |
| revocation_list_index  | list index |
| revocation_list_credential  | list credential |

### CredentialSubject
Payload/data part of a verifiable credential.

```sh
pub struct CredentialSubject {
    pub id: String,
    pub data: HashMap<String, String>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| id  | DID |
| data  | key value pairs representing various properties to be signed |

### Credential
A verifiable credential issued by an issuer

```sh
pub struct Credential {
    #[serde(rename(serialize = "@context", deserialize = "@context"))]
    pub context: Vec<String>,
    pub id: String,
    pub r#type: Vec<String>,
    pub issuer: String,
    pub issuance_date: String,
    pub credential_subject: CredentialSubject,
    pub credential_schema: CredentialSchemaReference,
    pub credential_status: Option<CredentialStatus>,
    pub proof: AssertionProof,
}
```

| Parameter  | Description |
| ------------- | ------------- |
| context  | context (e.g: https://www.w3.org/2018/credentials/v1)  |
| id  | unique id |
| r#type  | type value(usually ["VerifiableCredential"])  |
| issuer  | DID of Issuer |
| valid_until  | optional validity date  |
| issuance_date  | Date of issuance |
| credential_subject  | type of [`CredentialSubject`]  |
| credential_schema  | type of [`CredentialSchemaReference`] |
| credential_status  | type of [`CredentialStatus`]  |
| credential_status  | type of [`AssertionProof`]  |


### DidCommOptions
Optional parameter that can be passed to vade DIDComm functions to enforce a specific encryption key

```sh
pub struct DidCommOptions {
    pub encryption_keys: Option<EncryptionKeys>,
    pub signing_keys: Option<SigningKeys>,
    pub skip_protocol_handling: Option<bool>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| encryption_keys  | object of [`EncryptionKeys`] type which are optionally used to encrypt message  |
| signing_keys  | object of [`SigningKeys`] type which are optionally used to sign message |
| skip_protocol_handling  | optional boolean parameter true/false   |

### DidUpdateArguments

```sh
pub struct DidUpdateArguments {
    pub private_key: String,
    pub identity: String,
    pub operation: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| private_key  | private key  |
| identity  | DID |
| operation  | update operation  |

### EncryptionKeys
Either a computed shared secret or a (local) private key plus a contacts public key

```sh
pub struct EncryptionKeys {
    #[serde(with = "hex")]
    pub encryption_my_secret: [u8; 32],
    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "hex_option")]
    pub encryption_others_public: Option<[u8; 32]>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| encryption_my_secret  | secret key  |
| encryption_others_public  | public key |

### ExtendedMessage
Decrypted message format without dynamic body

```sh
pub struct ExtendedMessage {
    pub body: Option<HashMap<String, Value>>,
    pub created_time: Option<u64>,
    pub expires_time: Option<u64>,
    pub from: Option<String>,
    pub id: Option<String>,
    pub pthid: Option<String>,
    pub r#type: String,
    pub thid: Option<String>,
    pub to: Option<Vec<String>>,
    pub other: HashMap<String, String>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| body  | optional key/value pairs to be passed as per the message being sent  |
| created_time  | optional timestamp of message creation |
| expires_time  | optional timestamp of message expiration   |
| from  | optional did of sender  |
| id  | optional unique identifier for messagee   |
| pthid  | optional pthid for specific messaging/sessions |
| r#type  | type of messge, which identifies the protocol and message type   |
| thid  | optional pthid for specific messaging/sessions   |
| to  | optional DIDs of receivers   |
| other  | other optional parameters to be sent as per procotol   |

### IdentityArguments

```sh
pub struct IdentityArguments {
    pub private_key: String,
    pub identity: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| private_key  | private key  |
| identity  | DID |

### IssueCredentialPayload

```sh
pub struct IssueCredentialPayload {
    pub unsigned_vc: UnsignedCredential,
    pub issuer_public_key_id: String,
    pub issuer_public_key: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| unsigned_vc  | The VC to sign, without any appended proof  |
| issuer_public_key_id  | DID url of the public key of the issuer used to later verify the signature |
| issuer_public_key | The public key of the issuer used to later verify the signature |

### ProofVerification

```sh
pub struct ProofVerification {
    pub verified: bool,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| verified  | true/false  |

### SigningKeys
Either a computed shared secret or a (local) private key plus a contacts public key

```sh
pub struct SigningKeys {
    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "hex_option")]
    pub signing_my_secret: Option<[u8; 32]>,
    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "hex_option")]
    pub signing_others_public: Option<[u8; 32]>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| signing_my_secret  | secret key  |
| signing_others_public  | public key |

### SignerOptions

```sh
pub struct SignerOptions {
    pub unsigned_vc: UnsignedCredential,
    pub issuer_public_key_id: String,
    pub issuer_public_key: String,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| unsigned_vc  | The VC to sign, without any appended proof  |
| issuer_public_key_id  | DID url of the public key of the issuer used to later verify the signature |
| issuer_public_key  | The public key of the issuer used to later verify the signature |

### UnsignedCredential
An unsigned credential that has to be signed by Issuer

```sh
pub struct UnsignedCredential {
    #[serde(rename(serialize = "@context", deserialize = "@context"))]
    pub context: Vec<String>,
    pub id: String,
    pub r#type: Vec<String>,
    pub issuer: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub valid_until: Option<String>,
    pub issuance_date: String,
    pub credential_subject: CredentialSubject,
    pub credential_schema: CredentialSchemaReference,
    pub credential_status: Option<CredentialStatus>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| context  | context (e.g: https://www.w3.org/2018/credentials/v1)  |
| id  | unique id |
| r#type  | type value(usually ["VerifiableCredential"])  |
| issuer  | DID of Issuer |
| valid_until  | optional validity date  |
| issuance_date  | Date of issuance |
| credential_subject  | type of [`CredentialSubject`]  |
| credential_schema  | type of [`CredentialSchemaReference`] |
| credential_status  | type of [`CredentialStatus`]  |

### VadeDidCommPluginOutput
Output of didcomm_send or didcomm_receive

```sh
pub struct VadeDidCommPluginOutput<T, TRaw = serde_json::Value> {
    pub message: T,
    pub message_raw: TRaw,
    pub metadata: HashMap<String, String>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| message  | encrypted/plain object of Type which is sent or received   |
| message_raw  | json representation of plain message |
| metadata  | optional metadata (key/value pairs)   |

### VerifyProofPayload
Payload for verifying a signed Credential.

```sh
pub struct VerifyProofPayload {
    /// VC to verify
    pub credential: Credential,
    /// Signer address
    pub signer_address: String,
    /// revocation list credential
    pub revocation_list: Option<RevocationListCredential>,
}
```
| Parameter  | Description |
| ------------- | ------------- |
| credential  | type of [`Credential`]   |
| signer_address  | address of signer |
| revocation_list  | type of  [`RevocationListCredential`]  |

[`AssertionProof`]: /docs/references#assertionproof
[`CredentialStatus`]: /docs/references#credentialstatus
[`Credential`]: /docs/references#credential
[`UnsignedCredential`]: /docs/references#unsignedcredential
[`CredentialSubject`]: /docs/references#didcomm_send
[`didcomm_send`]: /docs/references#didcomm_send
[`didcomm_receive`]: /docs/references#didcomm_receive
[`did_exchange`]: https://github.com/hyperledger/aries-rfcs/blob/main/features/0023-did-exchange/README.md
[`DidCommOptions`]: /docs/references#didcommoptions
[`BaseMessage`]: /docs/references#basemessage
[`ExtendedMessage`]: /docs/references#extendedmessage
[`VadeDidCommPluginOutput`]: /docs/references#vadedidcommpluginoutput
[`EncryptionKeys`]: /docs/references#encryptionkeys
[`SigningKeys`]: /docs/references#signingkeys
[`Jwe`]: https://github.com/evannetwork/didcomm-rs/blob/f3c9499b7f09bef1765bcdb5f5e9ec207b40ac38/src/messages/jwe.rs
[`DidUpdateArguments`]: /docs/references#didupdatearguments
[`IdentityArguments`]: /docs/references#identityarguments
[`IssueCredentialPayload`]: /docs/references#issuecredentialpayload
[`SignerOptions`]: /docs/references#signeroptions
[`VerifyProofPayload`]: /docs/references#verifyproofpayload
[`ProofVerification`]: /docs/references#proofverification