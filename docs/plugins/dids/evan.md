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

  - Options: Object of [`IdentityArguments`]
  - Method: DID method, in our case the method is "did:evan"

```sh
options={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906"}

method="did:evan"

./vade_evan_cli did create --method $method --options $options

```

- Output

```json
"did:evan:0xd74434f146f3fba3fde8a6e4a0a522d2bf5b8b845fee0b493a01c78dd1b999e3"
```

- [`did-update`]: requires following params to be passed 

  - DID: DID to be updated
  - Options: Object of [`DidUpdateArguments`]
  - Payload: Payload to update for DID

```sh
did=did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906

options={"privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106","identity":"did:evan:0x0d87204c3957d73b68ae28d0af961d3c72403906","operation":"setDidDocument"}

payload="hello world"

./vade_evan_cli did update --did $did --options $DIDUpdateOptions --payload $payload
```

- `did-resolve`

```sh
./vade_evan_cli did resolve --did did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736
```

- Output

```json
{"@context":["https://www.w3.org/ns/did/v1","https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld"],"id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736","verificationMethod":[{"id":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller","type":"EcdsaSecp256k1RecoveryMethod2020","controller":"did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736","blockchainAccountId":"0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736@eip155:1"}],"authentication":["did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"],"assertionMethod":["did:ethr:mainnet:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736#controller"]}
```

[`vade-evan-substrate`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate
[`VadePlugin`]: https://docs.rs/vade/*/vade/trait.VadePlugin.html
[`did_create`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L141
[`did_resolve`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L261
[`did_update`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L190
[`DidUpdateArguments`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L43
[`IdentityArguments`]: https://git.slock.it/equs/interop/vade/vade-evan-substrate/-/blob/develop/src/vade_evan_substrate.rs#L51