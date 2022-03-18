---
sidebar_position: 1
---

# did:evan (sidetree)

[`vade-sidetree`] plugin allows you to create,update and read DIDs based on sidetree implemetation.

It implements the following [`VadePlugin`] functions:

- [`did_create`]
- [`did_resolve`]
- [`did_update`]

## Usage

- [`did-create`] requires following params to be passed

| Parameter  | Description |
| ------------- | ------------- |
| options | type property has to be passed to indicate the did implementation to be used |
| method  | DID method, in our case the method is "did:evan" |

```json
options={"type":"sidetree"}

method="did:evan"
```

```sh
./vade_evan_cli did create --method $method --options $options

```

- Output

```json
{
   "update_key":{
      "kty":"EC",
      "crv":"secp256k1",
      "x":"7-pRhpQ8sV1kHL443G6EFJnWXdSmUBv1ZqOHeBC1Ymk",
      "y":"TjI-Muag1hkfSUk2FNHKetS8II13OwCDD2cjWfWBtrA",
      "d":"fBCJHYcKnHV4Vc1MUsmffQLEB3kLc9gnpWrSXiKQlp0"
   },
   "recovery_key":{
      "kty":"EC",
      "crv":"secp256k1",
      "x":"_ph315rHW-VF6as-nrdaV4r_N4mE8-Fe3HmsI0LeJBY",
      "y":"R4YEjaDEP_jfQIKY8rAOEl2XbGvJ6-kp2vqyzM0liO8",
      "d":"gnO2SjmWhu6P7ePvMQaXvfZRTfVkEPjEr9BVP8q2QOA"
   },
   "did":{
      "@context":"https://w3id.org/did-resolution/v1",
      "didDocument":{
         "id":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg",
         "@context":[
            "https://www.w3.org/ns/did/v1",
            "https://ns.did.ai/transmute/v1",
            {
               "@base":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg"
            }
         ],
         "keyAgreement":[
            {
               "id":"#key-1",
               "controller":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg",
               "type":"EcdsaSecp256k1VerificationKey2019",
               "publicKeyJwk":{
                  "kty":"EC",
                  "crv":"secp256k1",
                  "x":"TkWKbz5ZfAYTCt7miLXO9CxsRguumhs4q-1Ky3PtGb8",
                  "y":"UnvZsjI0KigY0o9AXsXk86keK7J7x-B2xtc0yZcn4HA"
               }
            }
         ],
         "service":null
      },
      "didDocumentMetadata":{
         "recoveryCommitment":"EiA2YL0BWPQd9cmRRkZ8R0II2NdpVwlvmRHd1pqByrk5JA",
         "updateCommitment":"EiDT0mi3vtYMy5LDHN6dvbL7OHDGlAvb3eKlbBDdn04DvA"
      }
   }
}
```

- `did-resolve`

```sh
./vade_evan_cli did resolve --did did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg
```

- Output

```json
{
   "@context":"https://w3id.org/did-resolution/v1",
   "didDocument":{
      "@context":[
         "https://www.w3.org/ns/did/v1",
         "https://ns.did.ai/transmute/v1",
         {
            "@base":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg"
         }
      ],
      "id":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg",
      "keyAgreement":[
         {
            "id":"#key-1",
            "controller":"did:evan:EiC7uIezuR8EpwSP2P6DINtl_VkbaA6qmPTzr_22BJtZtg",
            "type":"EcdsaSecp256k1VerificationKey2019",
            "publicKeyJwk":{
               "kty":"EC",
               "crv":"secp256k1",
               "x":"TkWKbz5ZfAYTCt7miLXO9CxsRguumhs4q-1Ky3PtGb8",
               "y":"UnvZsjI0KigY0o9AXsXk86keK7J7x-B2xtc0yZcn4HA"
            }
         }
      ]
   },
   "didDocumentMetadata":{
      "recoveryCommitment":"EiA2YL0BWPQd9cmRRkZ8R0II2NdpVwlvmRHd1pqByrk5JA",
      "updateCommitment":"EiDT0mi3vtYMy5LDHN6dvbL7OHDGlAvb3eKlbBDdn04DvA"
   }
}
```


- [`did-update`]: requires following params to be passed

| Parameter  | Description |
| ------------- | ------------- |
| did  | DID to be updated  |
| options  | Object of [`DidUpdateArguments`] |
| payload  | Payload to update for DID |

```json
did=did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906

options={
   "privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106",
   "identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906",
   "operation":"setDidDocument"
}

payload="hello world"
```

```sh
./vade_evan_cli did update --did $did --options $DIDUpdateOptions --payload $payload
```



[`vade-sidetree`]: #
[`VadePlugin`]: https://docs.rs/vade/*/vade/trait.VadePlugin.html
[`did_create`]: /docs/references#did_create
[`did_resolve`]: /docs/references#did_resolve
[`did_update`]: /docs/references#did_update
[`DidUpdateArguments`]: /docs/references#didupdatearguments
[`IdentityArguments`]: /docs/references#identityarguments
