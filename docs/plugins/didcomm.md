---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DIDComm

DIDcomm plugin implementation is compliant to [DIDComm V2](https://identity.foundation/didcomm-messaging/spec/),

[`vade-didcomm`] plugin currently offers:

- message encryption & decryption using [DIDComm rs](https://github.com/decentralized-identity/didcomm-rs)
- protocol support using DIDComm message `type`

It implements the following [`VadePlugin`] functions:

- [`didcomm_send`]
- [`didcomm_receive`]

Currently supported protocols:

- [`trust_ping`]
- [`DID exchange protocol`]
- [`Present Proof Protocol`]
- [`Issue Credential Protocol`]
- [`Presentation Exchange Protocol`]

## Usage

`didcomm_send` prepares a message for being sent to the recipient and `didcomm_receive` is used for decryption and analyzing an incoming message. Per default each sent message will be encrypted, either with the saved encryption key from an existing DID exchange with the communication partner, or with the provided one. Specific protocol types can override the encryption setting of a message to just send a plain message (like DID exchange).

_NOTE_: When you send any message that will be encrypted, you need to have a finished DID exchange or correct encryption keys, that are passed to vade_didcomm.

The two functions [`didcomm_send`] and [`didcomm_receive`] can be called with two parameters, `options` and `payload`, the output is an Object of [`VadeDidCommPluginOutput`]:

- Options: [`DidCommOptions`] object, Contains specific information for passing special configuration to the vade_didcomm. Currently its just used to inject specific encryption configuration, to overwrite the default DIDComm DID exchange key encryption.

```json
{
  "encryptionKeys": {
    "encryptionMySecret": "<Either a computed shared secret or a (local) private key>",
    "encryptionOthersPublic": "<Public key>"
  }
}
```

- Payload: Payload for [`didcomm_send`] and [`didcomm_receive`] should have some basic parameters which are defined as [`BaseMessage`] type, it defines from, to and type fields which are necessary to send or receive data. Apart from [`BaseMessage`] send and receive have different parameters which can be supplied if there are more parameters required:

```json
{
  "type": "https://didcomm.org/trust_ping/1.0/ping",
  "from": "did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
  "to": ["did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"],
  "comment": "Hi"
}
```

- [`ExtendedMessage`]: This type defines additional parameters which can se used in the payload of [`didcomm_send`] if more custom parameters are required to be sent. e.g: Additions objects can be passed as body parameter or some custom parameters can be included in payload if requried by protocol for which message is being exchanged.

```json
{
  "type": "https://didcomm.org/present-proof/1.0/propose-presentation",
  "service_endpoint": "https://evan.network",
  "from": "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG",
  "to": ["did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp"],
  "body": {
    "state": "PresentationProposed",
    "presentation_proposal": {
      "attribute": [
        {
          "name": "90eb30f3d80f49178cc4504c7bb13ad1",
          "cred_def_id": "cred_def_id",
          "mime_type": "application/json",
          "value": "YmFzZSA2NCBkYXRhIHN0cmluZw",
          "referent": "referent"
        }
      ],
      "predicate": [
        {
          "name": "some name",
          "cred_def_id": "cred_def_id",
          "predicate": "application/json",
          "threshold": 5
        }
      ]
    }
  },
  "thid": "90eb30f3d80f49178cc4504c7bb13ad1"
}
```

- [`Jwe`]: This type refers to encrypted message generated as output of [`didcomm_send`], it can be passed to [`didcomm_receive`] as payload if there are some parameters which are required to decrypted.

```json
{
  "protected": "eyJ0eXAiOiJhcHBsaWNhdGlvbi9kaWRjb21tLWVuY3J5cHRlZCtqc29uIiwiZW5jIj
  oiWEMyMFAiLCJraWQiOiI5NjVkNjk5NzYwYzcyN2EwNGRiMjJiY2U2ZmUyMDg3NmUyMTI2YjhmMWE2NG
  UxZGU0MmI0OWJjY2I5ZTg4MWFhIiwic2tpZCI6ImRpZDprZXk6ejZNa2pjaGhmVXNENm1tdm5pOG1DZF
  hIdzIxNlhybTliUWUybUJIMVA1UkRqVkpHIiwiYWxnIjoiRUNESC0xUFUrWEMyMFBLVyJ9",
  "recipients": [
    {
      "header": {
        "key_ops": [],
        "alg": "ECDH-1PU+XC20PKW",
        "kid": "did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
        "epk": {
          "kty": "OKP",
          "crv": "X25519",
          "x": "d1PRwEdAaCg9lFa6zdpkYLkNvyo8o-0Mq8dIDVWaASA"
        },
        "iv": "PEI8C2IyJsWnIrfg0n2-1TGxlIj3REyQ",
        "tag": "yOFwRajO794tj47ConOLAA"
      },
      "encrypted_key": "V5UNErvAqHoqOWwyZ9hcOsrd0KI_nsBNyTpEiTjOhyE"
    }
  ],
  "ciphertext": "s3qUEJPjsnLVsKc5kbvKfH4w1FuVLg-CHOCjWTmBvdDyw1ldBZd6qpn97YSDOY3IX7wZ
  -W6gGHtuL-spdPQt8XAKnrJAteU0U28_9infWKeMFypbtAzSHjzp51R0wugBur1XfjetYhL7s1igdGu3L0sf
  KkcgG1y1zRNc9PswZWEUvLVZ4Bc4fFkGZ_EWYBOqGZQ3wAzl8cf5XIwhDGVynCDNN3YGadJxrDvHtGkBZdgP
  ohAZIzbDD_7H3FTlWrKDFrpwemfXTh5nPTuoDf6xU65bLPd_XNCi-lM21rpFw4HfcyMK0TnMrLFTfYT8qETze
  Dx067jCt3Po7v_Ax4wENP9RtcGWmLDnJBWCiIpV_QV_p6CQ8MnmpX5xqPk7BGOmdhnlc4MSGklEbQywhrQrNzF
  XOD7u4FuiGubUV3HcBogERXLNj1V_SpwrBgms5oMKWjJ0X8Z3SOgCQtlM2IqzQ6iFxvgdf6YiL-jOVy6hiEUjx
  PEtTKbjBdPSO_frrMo6rmSDYRM-L7c9r7mc2pJ81pxYlr1-15W7SF1rpCAsky_Ct68xym3GtVCFH6K5G2vekCl
  RlSV-_Qrvliuz6QdYAsNEFbabxYd_G09wGeIM5g2OKmWm6Z1CRfr1wEEko65Ml4HHWmRHiWYDbMGJcfh8RPOoO
  ZQ9qx9uA0PskjH8Jmvrwo9t_5SMRLYuLyRy2-_1KNd69r820eGxSVbhScvRIu0b6oE7dV25CnIYqiwXovGuwVZ
  w0ZKbPSPoDarsZpYHXeZPhvQEm694YXW7GE_zYu41KHH6nCA2fq72tPZJloO-8kmN3N_rXWLvzgTCKX0m2o4v9
  KYfa6QA5J-A_o799tcK9MK-WUETBUclIwSBxz9XGkI3v-KI2WnCf7bg4pxJiisgfcMHiAe2CM5srlH7p5pLuGhg
  P8qDoum1Wyc4lCgaVjPmimtuBVXxCyfU91RlBpaKXEtaS5MKMKQFbl4UfLIUI9hOYBj5gZs8G61km2StyitLo5Vp
  lvqr3duS1kfaQKfnDKF4AZP0OTIFYwLjsUMYHb3WR4nMMeKka829gMIJf2zZcc9_1DSeRu4mP2_w5eoaK37eZEJ-
  2IzAUGFNazNLYKVj0AC68zeCAiEELPfvfpFOBs4QxOc6_OdNw1L42P2PaiRnzGuePSUOKvw6QVJt9kYQkhRpEB4
  8T0K5b75X5wtejwum85sauEPIAaWR-GuOq1JteiZP3718EmNRBFfRcM0Hoc6nFUcQv5UpIJw6hzG6PHSAyNwXJn
  CHTeXhJQdCcCHhj1nTitaqUvaFzR-KK1UMOzgxD9KXHpGEADfZxOZ_qQvKCyAggNmzu2RmRIAVd2_Fx8eU7ElDzj
  3xyI7BSQX7N8gDspLcQ1j22EpV18IbqlDQzV0-DMAwvGSJveShmCMQVChn2k-MVqf3PhWVM_3FabZKuYGH_p0uTOy
  Wo8Y1dFHPmvsA2n4NGiw_Stw9tU1TAfAoLQY2-n3X-BhLwu4m9JmHsI83kUagHA-CRDYeXQ2-KexVx1CLo3vr-S77
  t0vUhKBhfjTF40w2q3VjpeJqqAka9Qh2-DK2zWc0Xc3tKrnM3riGcH3oeP58YFFhPsPjVODHwC0tUxjxybEbziBIMz
  N6Dj7bSudYHLgGzV4E0xEMCYO4rIQCehqCJheJABEfRAC520BemPgT_I5B-siqk108OD3n6Uj_6xVkVIjlyRSVqdWA
  tv2hrzxGoE8Alft7JIyt-eLHuMUiTLxCg45ca5nEbzZHIjqvbVIToKfr9lU0plcEdHI4nPp3Hsz8g3MsLmnFjFwZQr
  X5QI07sryZiMmtSVxLrSEa4eYftTui_cetKQBctKmC3x_4w1RN7d4QnJQxBPSFoB6SspFlw2dRL4sUZqNngdZ2WrFP
  uKjjLXBbAZtA7iUk0gRH9bBpQzhDKvc3Dv9OHgOfmdvF3onYLAXVPYEf3GbvZyBTcyyNCsr1iRzdPTz4CwSAxK7vHU
  lWhNkEYdWWNnfSIfe7ueJPmcGqu-dja-t26Zt2kgZk8phlBGQVgowjQl1oDGk3IYnHfVZaKJy9y7Yu_2RAyQkXvFW-0p
  tz61Lm6LwuWwmFV0tB8db803HL4t8QrBAD0-UaIVLhWhvMn9Ot2MxmaybjotZ9tTEZqSnPZuB3h5vclU2HjKXr2ZZAo
  CoYdKzP-yNPLl_KNmmCppJGWxfXtHpTeaiqIAWlW6jTUcXXDbr5qVg2dQMSgIkOyNBxQfS1PE0MB2vZ9ZXBvuPu7VBA
  3q4gGvzvNX0AoCeUuDr7cDP-WUDuj4b0UuyItqnlv9RVoegQZEriY2CrxnftJs4jYUWS5pgf5OVMTbZb3yWAwohFY0_KZh
  CIckszF6FeB2JxYYCkaxXHkLPXASKEVSfUE4S7EJw4EcWZmoIXJdW4Ex9Uj58IZCgzTk8MX8RXlMQankEB9A",
  "iv": "0hua0wULMOY8TsbwQDX4Dm-rYOP5sz8n",
  "tag": "pqVXn6G1b4fSteLcQjtReQ"
}
```

- Output: [`VadeDidCommPluginOutput`] object, The result of both functions will have the same structure and will always return a stringified json, with the following pattern:

```json
{
  "message": {<Encrypted message `Jwe` for didcomm_send or Decrypted message for didcomm_receive>},
  "messageRaw": {<Unencrypted raw message>},
  "metadata": {<Metadata associated with message, it's protocol specific and optional>}
}
```

The data that is represented in `message` and `metadata` is protocol specific. The message is also attached unencrypted as `messageRaw`.

## Generating keys for DIDComm communication

As mentioned above DIDComm exchange requires the encryption keys to be passed as [`DidCommOptions`], to generate those keys the  `create-keys` subcommand can be used in `vade-evan-cli` for `didcomm` to generate keys for sender and receiver both, once the `sender` and `receiver` keys are generated, they can use those keys to create [`DidCommOptions`] for [`didcomm_send`] and [`didcomm_receive`].

Note: Encryption keys are X25519 keys

<Tabs groupId="vade_input">
<TabItem value="vade_evan_cli" label="vade_evan_cli command">

```sh
./vade_evan_cli didcomm create_keys
```

</TabItem>
<TabItem value="sender_keys" label="Sender Keys">

```json
{
   "secret":"88a3c91682ceb57a20677502ad2fbaf5e9be57c38ef1e3c6c5b403fc90a7e07c",
   "public":"d00bf764a187ea092b270277c24858653341559c31463ef576220b76412c2167"
}
```

</TabItem>
<TabItem value="receiver_keys" label="Receiver Keys">

```json
{
   "secret":"a0717fc5ae410ee0ea9aa2bc87639339efc582d728a2390a6640c6dec71baf69",
   "public":"cec307d4c3a47244491c6c52f2e7b740cbf02c53689bfefb5813e4f4e7fe8413"
}
```
</TabItem>
<TabItem value="sender_options" label="Sender options">

```json
{
  "encryptionKeys":{
    "encryptionMySecret":"88a3c91682ceb57a20677502ad2fbaf5e9be57c38ef1e3c6c5b403fc90a7e07c",
    "encryptionOthersPublic":"cec307d4c3a47244491c6c52f2e7b740cbf02c53689bfefb5813e4f4e7fe8413"
  }
}
```
</TabItem>
<TabItem value="receiver_options" label="Receiver options">

```json
{
  "encryptionKeys":{
    "encryptionMySecret":"a0717fc5ae410ee0ea9aa2bc87639339efc582d728a2390a6640c6dec71baf69",
    "encryptionOthersPublic":"d00bf764a187ea092b270277c24858653341559c31463ef576220b76412c2167"
  }
}
```

</TabItem>
</Tabs>

## Sending a message from Sender to Receiver

For some specific protocol if you want to send a message from sender DID to receiver DID, the option and payload would look like following:

<Tabs groupId="vade_input">
<TabItem value="json_args" label="JSON args">

```json
payload={
   "type":"https://didcomm.org/present-proof/1.0/request-presentation",
   "service_endpoint":"https://evan.network",
   "from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
   "to":[
      "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"
   ],
   "body":{
      "state":"PresentationRequested",
      "presentation_attach":[
         {
            "type":"https://didcomm.org/present-proof/1.0/request-presentation",
            "id":"1efc7eca99254891ba49ecfefe46c9b8",
            "mime_type":"application/json",
            "data":"YmFzZSA2NCBkYXRhIHN0cmluZw"
         }
      ]
   },
   "thid":"1efc7eca99254891ba49ecfefe46c9b8"
}

option={
   "encryptionKeys":{
      "encryptionMySecret":"5046adc1dba838867b2bbbfdd0c3423e58b57970b5267a90f57960924a87f156",
      "encryptionOthersPublic":"d92f5eeaa24fd4e66221c770f704a5e2639a476bab82cfec40bd2874abeb481f"
   }
}
```

</TabItem>
<TabItem value="vade_evan_cli" label="vade_evan_cli">

```sh
./vade_evan_cli didcomm send --options $option --payload $payload

```
</TabItem>
</Tabs>

The above example demonstrates sending `request-presentation` message for [`Present Proof Protocol`].

## Didcomm message exchange example

Lets try to send and receive DIDcomm messages for a simple protocol e.g: [`trust_ping`], in trust ping the protocol communication steps are following.

- Sender creates a ping message and sends to receiver.
- Receiver receives ping from sender.
- Receiver creates a response message and send the ping response back to sender.
- Sender receives the response of ping message.

Lets try to send and receive ping messages with vade-evan cli example

### Send ping request

<Tabs groupId="vade_input">
<TabItem value="json_args" label="JSON args">

```json
option={
   "encryptionKeys":{
      "encryptionMySecret":"5046adc1dba838867b2bbbfdd0c3423e58b57970b5267a90f57960924a87f156",
      "encryptionOthersPublic":"d92f5eeaa24fd4e66221c770f704a5e2639a476bab82cfec40bd2874abeb481f"
   }
}

payload={
   "type":"https://didcomm.org/trust_ping/1.0/ping",
   "from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
   "to":[
      "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"
   ],
   "comment":"Hi"
}
```
</TabItem>
<TabItem value="vade_evan_cli" label="vade_evan_cli">

```sh
./vade_evan_cli didcomm send --options $option --payload $payload
```
</TabItem>
</Tabs>

- Output of send

```json
{
  "message": {
    "protected": "eyJ0eXAiOiJhcHBsaWNhdGlvbi9kaWRjb21tLWVuY3J5cHRlZCtqc29uIiwiZW5jIjoiWEMyMFAiLCJraWQiOiI5NjVkNjk5NzYwYzcyN2EwNGRiMjJiY2U2ZmUyMDg3NmUyMTI2YjhmMWE2NGUxZGU0MmI0OWJjY2I5ZTg4MWFhIiwic2tpZCI6ImRpZDprZXk6ejZNa2pjaGhmVXNENm1tdm5pOG1DZFhIdzIxNlhybTliUWUybUJIMVA1UkRqVkpHIiwiYWxnIjoiRUNESC0xUFUrWEMyMFBLVyJ9",
    "recipients": [
      {
        "header": {
          "key_ops": [],
          "alg": "ECDH-1PU+XC20PKW",
          "kid": "did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
          "epk": {
            "kty": "OKP",
            "crv": "X25519",
            "x": "d1PRwEdAaCg9lFa6zdpkYLkNvyo8o-0Mq8dIDVWaASA"
          },
          "iv": "PEI8C2IyJsWnIrfg0n2-1TGxlIj3REyQ",
          "tag": "yOFwRajO794tj47ConOLAA"
        },
        "encrypted_key": "V5UNErvAqHoqOWwyZ9hcOsrd0KI_nsBNyTpEiTjOhyE"
      }
    ],
    "ciphertext": "s3qUEJPjsnLVsKc5kbvKfH4w1FuVLg-CHOCjWTmBvdDyw1ldBZd6qpn97YSDOY3IX7wZ-W6gGHtuL-spdPQt8XAKnrJAteU0U28_9infWKeMFypbtAzSHjzp51R0wugBur1XfjetYhL7s1igdGu3L0sfKkcgG1y1zRNc9PswZWEUvLVZ4Bc4fFkGZ_EWYBOqGZQ3wAzl8cf5XIwhDGVynCDNN3YGadJxrDvHtGkBZdgPohAZIzbDD_7H3FTlWrKDFrpwemfXTh5nPTuoDf6xU65bLPd_XNCi-lM21rpFw4HfcyMK0TnMrLFTfYT8qETzeDx067jCt3Po7v_Ax4wENP9RtcGWmLDnJBWCiIpV_QV_p6CQ8MnmpX5xqPk7BGOmdhnlc4MSGklEbQywhrQrNzFXOD7u4FuiGubUV3HcBogERXLNj1V_SpwrBgms5oMKWjJ0X8Z3SOgCQtlM2IqzQ6iFxvgdf6YiL-jOVy6hiEUjxPEtTKbjBdPSO_frrMo6rmSDYRM-L7c9r7mc2pJ81pxYlr1-15W7SF1rpCAsky_Ct68xym3GtVCFH6K5G2vekClRlSV-_Qrvliuz6QdYAsNEFbabxYd_G09wGeIM5g2OKmWm6Z1CRfr1wEEko65Ml4HHWmRHiWYDbMGJcfh8RPOoOZQ9qx9uA0PskjH8Jmvrwo9t_5SMRLYuLyRy2-_1KNd69r820eGxSVbhScvRIu0b6oE7dV25CnIYqiwXovGuwVZw0ZKbPSPoDarsZpYHXeZPhvQEm694YXW7GE_zYu41KHH6nCA2fq72tPZJloO-8kmN3N_rXWLvzgTCKX0m2o4v9KYfa6QA5J-A_o799tcK9MK-WUETBUclIwSBxz9XGkI3v-KI2WnCf7bg4pxJiisgfcMHiAe2CM5srlH7p5pLuGhgP8qDoum1Wyc4lCgaVjPmimtuBVXxCyfU91RlBpaKXEtaS5MKMKQFbl4UfLIUI9hOYBj5gZs8G61km2StyitLo5Vplvqr3duS1kfaQKfnDKF4AZP0OTIFYwLjsUMYHb3WR4nMMeKka829gMIJf2zZcc9_1DSeRu4mP2_w5eoaK37eZEJ-2IzAUGFNazNLYKVj0AC68zeCAiEELPfvfpFOBs4QxOc6_OdNw1L42P2PaiRnzGuePSUOKvw6QVJt9kYQkhRpEB48T0K5b75X5wtejwum85sauEPIAaWR-GuOq1JteiZP3718EmNRBFfRcM0Hoc6nFUcQv5UpIJw6hzG6PHSAyNwXJnCHTeXhJQdCcCHhj1nTitaqUvaFzR-KK1UMOzgxD9KXHpGEADfZxOZ_qQvKCyAggNmzu2RmRIAVd2_Fx8eU7ElDzj3xyI7BSQX7N8gDspLcQ1j22EpV18IbqlDQzV0-DMAwvGSJveShmCMQVChn2k-MVqf3PhWVM_3FabZKuYGH_p0uTOyWo8Y1dFHPmvsA2n4NGiw_Stw9tU1TAfAoLQY2-n3X-BhLwu4m9JmHsI83kUagHA-CRDYeXQ2-KexVx1CLo3vr-S77t0vUhKBhfjTF40w2q3VjpeJqqAka9Qh2-DK2zWc0Xc3tKrnM3riGcH3oeP58YFFhPsPjVODHwC0tUxjxybEbziBIMzN6Dj7bSudYHLgGzV4E0xEMCYO4rIQCehqCJheJABEfRAC520BemPgT_I5B-siqk108OD3n6Uj_6xVkVIjlyRSVqdWAtv2hrzxGoE8Alft7JIyt-eLHuMUiTLxCg45ca5nEbzZHIjqvbVIToKfr9lU0plcEdHI4nPp3Hsz8g3MsLmnFjFwZQrX5QI07sryZiMmtSVxLrSEa4eYftTui_cetKQBctKmC3x_4w1RN7d4QnJQxBPSFoB6SspFlw2dRL4sUZqNngdZ2WrFPuKjjLXBbAZtA7iUk0gRH9bBpQzhDKvc3Dv9OHgOfmdvF3onYLAXVPYEf3GbvZyBTcyyNCsr1iRzdPTz4CwSAxK7vHUlWhNkEYdWWNnfSIfe7ueJPmcGqu-dja-t26Zt2kgZk8phlBGQVgowjQl1oDGk3IYnHfVZaKJy9y7Yu_2RAyQkXvFW-0ptz61Lm6LwuWwmFV0tB8db803HL4t8QrBAD0-UaIVLhWhvMn9Ot2MxmaybjotZ9tTEZqSnPZuB3h5vclU2HjKXr2ZZAoCoYdKzP-yNPLl_KNmmCppJGWxfXtHpTeaiqIAWlW6jTUcXXDbr5qVg2dQMSgIkOyNBxQfS1PE0MB2vZ9ZXBvuPu7VBA3q4gGvzvNX0AoCeUuDr7cDP-WUDuj4b0UuyItqnlv9RVoegQZEriY2CrxnftJs4jYUWS5pgf5OVMTbZb3yWAwohFY0_KZhCIckszF6FeB2JxYYCkaxXHkLPXASKEVSfUE4S7EJw4EcWZmoIXJdW4Ex9Uj58IZCgzTk8MX8RXlMQankEB9A",
    "iv": "0hua0wULMOY8TsbwQDX4Dm-rYOP5sz8n",
    "tag": "pqVXn6G1b4fSteLcQjtReQ"
  },
  "messageRaw": {
    "body": null,
    "created_time": 1637240575,
    "expires_time": null,
    "from": "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG",
    "id": "ada405b6-cbb2-4bab-9813-b750494e8ae5",
    "pthid": null,
    "type": "https://didcomm.org/trust_ping/1.0/ping_response",
    "thid": null,
    "to": ["did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp"],
    "comment": "hello,there?"
  },
  "metadata": {}
}
```

### Receive ping

<Tabs groupId="vade_input">
<TabItem value="json_args" label="JSON args">

```json
receiver_option={
   "encryptionKeys":{
      "encryptionMySecret":"f068e2f7ccc3eee220065e1dc937d34d548ec59be6488fea5ae1397e63f81c52",
      "encryptionOthersPublic":"5bf55c73b82ebe22be80f3430667af570fae2556a6415e6b30d4065300aa947d"
   }
}
```

</TabItem>
<TabItem value="vade_evan_cli" label="vade_evan_cli">

```sh
./vade_evan_cli didcomm receive --options $receiver_option --payload $payload
```
</TabItem>
</Tabs>

- Output of receive

```json
{
   "message":{
      "body":null,
      "created_time":1637054158,
      "expires_time":null,
      "from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
      "id":"5bbb0be3-accb-4dba-bb9f-9122ededb45a",
      "pthid":null,
      "type":"https://didcomm.org/trust_ping/1.0/ping",
      "thid":null,
      "to":[
         "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"
      ],
      "comment":"Hi"
   },
   "messageRaw":{
      "body":null,
      "created_time":1637054158,
      "expires_time":null,
      "from":"did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp",
      "id":"5bbb0be3-accb-4dba-bb9f-9122ededb45a",
      "pthid":null,
      "type":"https://didcomm.org/trust_ping/1.0/ping",
      "thid":null,
      "to":[
         "did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG"
      ],
      "comment":"Hi"
   },
   "metadata":{

   }
}
```

### Send ping response

<Tabs groupId="vade_input">
<TabItem value="json_args" label="JSON args">

```json
option={
   "encryptionKeys":{
      "encryptionMySecret":"f068e2f7ccc3eee220065e1dc937d34d548ec59be6488fea5ae1397e63f81c52",
      "encryptionOthersPublic":"5bf55c73b82ebe22be80f3430667af570fae2556a6415e6b30d4065300aa947d"
   }
}

payload={
   "type":"https://didcomm.org/trust_ping/1.0/ping_response",
   "from":"did:key:z6MkjchhfUsD6mmvni8mCdXHw216Xrm9bQe2mBH1P5RDjVJG",
   "to":[
      "did:key:z6MkiTBz1ymuepAQ4HEHYSF1H8quG5GLVVQR3djdX3mDooWp"
   ],
   "comment":"hello,there?"
}
```

</TabItem>
<TabItem value="vade_evan_cli" label="vade_evan_cli">

```sh
./vade_evan_cli didcomm send --options $option --payload $payload
```

</TabItem>
</Tabs>

### Receive ping response

<Tabs groupId="vade_input">
<TabItem value="json_args" label="JSON args">

```json
option={
   "encryptionKeys":{
      "encryptionMySecret":"5046adc1dba838867b2bbbfdd0c3423e58b57970b5267a90f57960924a87f156",
      "encryptionOthersPublic":"d92f5eeaa24fd4e66221c770f704a5e2639a476bab82cfec40bd2874abeb481f"
   }
}
```
</TabItem>
<TabItem value="vade_evan_cli" label="vade_evan_cli">

```sh
./vade_evan_cli didcomm receive --options $option --payload $payload
```

</TabItem>
</Tabs>

## General message types

In some protocols there are extra messages need to be sent to indicate error or successful message exchange to end the session, these messages have following structures:

### ack - Acknowledgement of succesfull messagge exchange

```json
{
  "type": "https://didcomm.org/notification/1.0/ack",
  "from": "",
  "to": "",
  "id": "",
  "thid": "",
  "status": "Success"
}
```

### problem-report - Reporting problem or denying request

```json
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
  "excalation_uri": ""
}
```

Complete test cases and flow for various protocols can be found at [`Protocols test cases`].

[`vade-didcomm`]: #
[`didcomm_send`]: /docs/references#didcomm_send
[`didcomm_receive`]: /docs/references#didcomm_receive
[`did_exchange`]: https://github.com/hyperledger/aries-rfcs/blob/main/features/0023-did-exchange/README.md
[`didcommoptions`]: /docs/references#didcommoptions
[`basemessage`]: /docs/references#basemessage
[`extendedmessage`]: /docs/references#extendedmessage
[`vadedidcommpluginoutput`]: /docs/references#vadedidcommpluginoutput
[`encryptionkeys`]: /docs/references#encryptionkeys
[`signingkeys`]: /docs/references#signingkeys
[`jwe`]: https://github.com/evannetwork/didcomm-rs/blob/f3c9499b7f09bef1765bcdb5f5e9ec207b40ac38/src/messages/jwe.rs
[`trust_ping`]: https://github.com/hyperledger/aries-rfcs/blob/main/features/0048-trust-ping/README.md
[`did exchange protocol`]: https://github.com/hyperledger/aries-rfcs/tree/master/features/0023-did-exchange
[`present proof protocol`]: https://github.com/hyperledger/aries-rfcs/tree/master/features/0037-present-proof
[`issue credential protocol`]: https://github.com/hyperledger/aries-rfcs/tree/main/features/0036-issue-credential#preview-credential
[`presentation exchange protocol`]: https://identity.foundation/presentation-exchange/
[`protocols test cases`]: https://git.slock.it/equs/interop/vade/vade-didcomm/-/blob/main/tests
