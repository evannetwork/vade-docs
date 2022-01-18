---
sidebar_position: 1
---

# Universal Resolver

[`vade-universal-resolver`] plugin allows you to resolve DIDs from [Universal Resolver](https://dev.uniresolver.io/)

It implements the following [`VadePlugin`] functions:

- [`did_resolve`]

## Usage

[`did_resolve`]

It requires the DID to be passed and returns the [DID Document](https://www.w3.org/TR/did-core/#did-documents) as output if DID is resolved by Universal Resolver.

## Example

```sh
./vade_evan_cli did resolve --did did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736
```

- Output

```json
{
   "@context":[
      "https://www.w3.org/ns/did/v1",
      "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld"
   ],
   "id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736",
   "verificationMethod":[
      {
         "id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller",
         "type":"EcdsaSecp256k1RecoveryMethod2020",
         "controller":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736",
         "blockchainAccountId":"0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736@eip155:1"
      }
   ],
   "authentication":[
      "did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"
   ],
   "assertionMethod":[
      "did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"
   ]
}
```

[`vade-universal-resolver`]: #
[`VadePlugin`]: https://docs.rs/vade/*/vade/trait.VadePlugin.html
[`did_resolve`]: /docs/references#did_resolve
