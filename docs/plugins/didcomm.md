---
sidebar_position: 3
---

# DIDcomm

DIDcomm plugin implementation is compliant to [DIDComm V2](https://identity.foundation/didcomm-messaging/spec/),

[`vade-didcomm`] plugin currently offers:

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

Other necessary parameters e.g: `id` and `created_time` are filled by vade-didcom plugin before transferring message to receiver. 

Lets try to send and receive DIDcomm messages for a simple protocol e.g: [`trust_ping`], in trust ping the protocol communication steps are following.

- Sender creates a ping message and sends to receiver.
- Receiver receives ping from sender.
- Receiver creates a response message and send the ping response back to sender.
- Sender  receives the response of ping message.

Lets try to send and receive ping messages with vade-evan cli example

### Send ping request

```sh
option={"encryptionKeys":{"encryptionMySecret":"5046adc1dba838867b2bbbfdd0c3423e58b57970b5267a90f57960924a87f156","encryptionOthersPublic":"d92f5eeaa24fd4e66221c770f704a5e2639a476bab82cfec40bd2874abeb481f"},"signingKeys":{"signingMySecret":"0eef2b066f5ceff7305db222f934e4bff8cc93dfdcc366ec6670287d4c71a4a3","signingOthersPublic":"653c161434879919469c6dd43cf1d561d4facf8fdcbd926789d0dc9f260bd33c"},"skipProtocolHandling":false}

payload={"type":"https://didcomm.org/trust_ping/1.0/ping","from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp","to":["did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"],"comment":"Hi"}
```

```sh
./vade_evan_cli didcomm send --options $option --payload $payload
```

### Receive ping

```sh
./vade_evan_cli didcomm receive --options $option --payload $payload
```

- Output

```sh
{"message": {"body":null,"created_time":1637054158,"expires_time":null,"from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp","id":"5bbb0be3-accb-4dba-bb9f-9122ededb45a","pthid":null,"type":"https://didcomm.org/trust_ping/1.0/ping","thid":null,"to":["did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"],"comment":"Hi"},                "messageRaw": {"body":null,"created_time":1637054158,"expires_time":null,"from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp","id":"5bbb0be3-accb-4dba-bb9f-9122ededb45a","pthid":null,"type":"https://didcomm.org/trust_ping/1.0/ping","thid":null,"to":["did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"],"comment":"Hi"},                "metadata": {}}
```

### Send ping response

```sh
option={"encryptionKeys":{"encryptionMySecret":"5046adc1dba838867b2bbbfdd0c3423e58b57970b5267a90f57960924a87f156","encryptionOthersPublic":"d92f5eeaa24fd4e66221c770f704a5e2639a476bab82cfec40bd2874abeb481f"},"signingKeys":{"signingMySecret":"0eef2b066f5ceff7305db222f934e4bff8cc93dfdcc366ec6670287d4c71a4a3","signingOthersPublic":"653c161434879919469c6dd43cf1d561d4facf8fdcbd926789d0dc9f260bd33c"},"skipProtocolHandling":false}

payload={"type":"https://didcomm.org/trust_ping/1.0/ping_response","from":"did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG","to":["did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp"],"comment":"hello,there?"}
```

```sh
./vade_evan_cli didcomm send --options $option --payload $payload
```

### Receive ping response

```sh
./vade_evan_cli didcomm receive --options $option --payload $payload
```

In some protocols there are extra messages need to be sent to indicate error or successful message exchange to end the session, these messages have following structures:-

### ack - Acknowledgement of succesfull messagge exchange

```sh
{
        "type": "https://didcomm.org/notification/1.0/ack",
        "from": "",
        "to": "",
        "id": "",
        "thid": "",
        "status": "Success",
}
```
### problem-report -  Reporting problem or denying request

```sh
{
        "type": "https://didcomm.org/report-problem/1.0/problem-report",
        "from": "from DID",
        "to": "to DID",
        "id": "<id>",
        "thid": "<thid>",
        "description": "",
        "problem_items": "",
        "who_retries": "",
        "fix_hint": "",
        "impact": "",
        "where": "",
        "noticed_time": "",
        "tracking_uri": "",
        "excalation_uri": "",
}
```
Complete test cases and flow for various protocols can be found at [`Protocols test cases`].

[`vade-didcomm`]: https://git.slock.it/equs/interop/vade/vade-didcomm
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
[`Protocols test cases`]:  https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/tests