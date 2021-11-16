---
sidebar_position: 3
---

# DIDcomm

This crate is a [DIDComm V2](https://identity.foundation/didcomm-messaging/spec/) vade plugin that currently offers:

- message encryption & decryption using [DIDComm rs](https://github.com/decentralized-identity/didcomm-rs)
- protocol support using DIDComm message `type`

It implements the following [`VadePlugin`] functions:

- [`didcomm_send`]
- [`didcomm_receive`]

Currently supported protocols:

- [`trust_ping`]
- [`did_exchange`]
- [`present_proof`]
- [`issue_credential`]
- [`presentation_exchange`]

## Usage

`didcomm_send` prepares a message for being sent to the recipient and `didcomm_receive` is used for decryption and analyzing an incoming message. Per default each sent message will be encrypted, either with the saved encryption key from an existing DID exchange with the communication partner, or with the provided one. Specific protocol types can override the encryption setting of a message to just send a plain message (like DID exchange).

*NOTE*: When you send any message that will be encrypted, you need to have a finished DID exchange or correct encryption keys, that are passed to vade_didcomm.

The two functions [`didcomm_send`] and [`didcomm_receive`] can be called with two parameters, `options` and `message`:

- Options: Contains specific information for passing special configuration to the vade_didcomm. Currently its just used to inject specific encryption configuration, to overwrite the default DIDComm DID exchange key encryption and signing.

```json
{
  "encryptionKeys": {
    "encryptionMySecret": "...",
    "encryptionOthersPublic": "..."
  },
  "signingKeys": {
    "signingMySecret": "...",
    "signingOthersPublic": "..."
  }
}
```

- Message: The plain message object, containing at least the type, to DID and from DID.

The result of both functions will have the same structure and will always return a stringified json, with the following pattern:

```json
{
  "message": {},
  "messageRaw": {},
  "metadata": {}
}
```

The data that is represented in `message` and `metadata` is protocol specific. The message is also attached unencrypted as `messageRaw`.

## Didcomm message exchange example

In current implementation all Didcomm messages are mandatorily encrypted and signing is optional, encryption keys and signing keys are supplied in options and message to be sent is supplied as payload, each message contains some parameters which mandatory and can't be skipped e.g:

```json
{
    "type": "<usually indicates the protocol type>",
    "from": "<DID of sender>",
    "to": [<DIDs of receivers>],
}
```
Lets try to send and receive DIDcomm messages for a simple protocol e.g: [`present_proof`]

### Send presentation request

### Receive presentation request 

Complete test cases and flow for present proof protocol can be found at [`present-proof test`].

[`didcomm_send`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/src/vade_didcomm.rs#L44
[`didcomm_receive`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/src/vade_didcomm.rs#L121
[`did_exchange`]: https://github.com/hyperledger/aries-rfcs/blob/main/features/0023-did-exchange/README.md
[`trust_ping`]: https://github.com/hyperledger/aries-rfcs/blob/main/features/0048-trust-ping/README.md
[`DID exchange protocol`]: https://github.com/hyperledger/aries-rfcs/tree/master/features/0023-did-exchange
[`Present Proof Protocol`]: https://github.com/hyperledger/aries-rfcs/tree/master/features/0037-present-proof
[`present-proof test`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/tests/present-proof.rs
[`Issue Credential Protocol`]: https://github.com/hyperledger/aries-rfcs/tree/main/features/0036-issue-credential#preview-credential
[`issue-credential test`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/tests/issue-credential.rs
[`Presentation Exchange Protocol`]: https://identity.foundation/presentation-exchange/
[`presentation-exchange test`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/tests/presentation-exchange.rs
[`present_proof`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/tree/develop#present_proof-protocol
[`issue_credential`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/tree/develop#issue_credential-protocol
[`presentation_exchange`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/tree/develop#presentation_exchange-protocol