---
sidebar_position: 1
---

# did:evan

[`vade-evan-substrate`] plugin allows you to use to work with DIDs, which runs on evan.network.

It implements the following [`VadePlugin`] functions:

- [`did_create`]
- [`did_resolve`]
- [`did_update`]

## Usage

- [`did-create`] requires following params to be passed

| Parameter  | Description |
| ------------- | ------------- |
| options  | Object of [`IdentityArguments`] and an additional type property has to be passed to indicate the did implementation to be used |
| method  | DID method, in our case the method is "did:evan" |

```json
options={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906","type":"substrate"}

method="did:evan"
```

```sh
./vade_evan_cli did create --method $method --options $options

```

- Output

```json
"did:evan:0xd74434f146f3fba3fde8a6e4a0a522d2bf5b8b845fee0b493a01c78dd1b999e3"
```

- [`did-update`]: requires following params to be passed

| Parameter  | Description |
| ------------- | ------------- |
| did  | DID to be updated  |
| options  | Object of [`DidUpdateArguments`] |
| payload  | Payload to update for DID |

```json
did=did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906

options={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906","operation":"setDidDocument","type":"substrate"}

payload="hello world"
```

```sh
./vade_evan_cli did update --did $did --options $DIDUpdateOptions --payload $payload
```

- `did-resolve`

```sh
./vade_evan_cli did resolve --did "did:evan:testcore:0xc88d707c2436fa3ce4a1e52d751469acae689fdb"
```

- Output

```json
{
   "@context":"https://w3id.org/did/v1",
   "id":"did:evan:testcore:0x0d87204c3957d73b68ae28d0af961d3c72403902",
   "publicKey":[
      {
         "id":"did:evan:testcore:0x0d87204c3957d73b68ae28d0af961d3c72403906#key-1",
         "type":"Secp256k1VerificationKey2018",
         "controller":"did:evan:testcore:0x0d87204c3957d73b68ae28d0af961d3c72403906",
         "ethereumAddress":"0xcd5e1dbb5552c2baa1943e6b5f66d22107e9c05c"
      }
   ],
   "authentication":[
      "did:evan:testcore:0x0d87204c3957d73b68ae28d0af961d3c72403906#key-1"
   ],
   "created":"2022-22-22T22:22:22.222Z",
   "updated":"2022-22-22T22:22:22.222Z",
   "assertionMethod":[
      {
         "id":"did:evan:testcore:0xc88d707c2436fa3ce4a1e52d751469acae689fdb#bbs-key-e9483702-10e6-4ae7-a028-c81a297119d8",
         "type":"Bls12381G2Key2020",
         "publicKeyBase58":"zuy3qRuZc5hXNn8aw18Mo1p3do3tVgeT6mko8woxeDmAREpe41YyiBTsmRqCKNZcsoxHdGpvpGeeHoJXNEhF8PtT2DCUkhmHFRCGPjUL1Lm4c2T4WouzKvqc1N6M1NWPeVP"
      }
   ]
}
```

[`vade-evan-substrate`]: #
[`VadePlugin`]: https://docs.rs/vade/*/vade/trait.VadePlugin.html
[`did_create`]: /docs/references#did_create
[`did_resolve`]: /docs/references#did_resolve
[`did_update`]: /docs/references#did_update
[`DidUpdateArguments`]: /docs/references#didupdatearguments
[`IdentityArguments`]: /docs/references#identityarguments
