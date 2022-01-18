---
sidebar_position: 1
---

# JWT

[`vade-jwt-vc`] plugin supports less restrictive credentials, it issues VC with a simple JWT Signature Based on the SECP256K1 curve.

[`vade-jwt-vc`] currently offers:

- Signing of [`UnsignedCredential`] just like in the [W3C Datamodel "Example 1" Verifiable Credentials](https://www.w3.org/TR/vc-data-model/#example-1-a-simple-example-of-a-verifiable-credential)  Data Model v1.1 (but without the proof)

- Verification of proof from Signed Credential.

It implements the following [`VadePlugin`] functions:

- [`vc_zkp_issue_credential`]
- [`vc_zkp_verify_proof`]

## Usage

`vc_zkp_issue_credential`:

- The passed payload will be an object of [`IssueCredentialPayload`], which contains [`UnsignedCredential`] to be signed.
- The Options will be an object of [`SignerOptions`], which contains Private key to create Signature and type to indicate that request should be handled by jwt plugin only.
- Output will be an object of [`Credential`].

`vc_zkp_verify_proof`:

- The passed payload will be an Object of [`VerifyProofPayload`], which contains [`Credential`] to be verifed.
- The Options will be an object of `TypeOptions`, it has type paratmeter which should have value as "jwt" string constant.
- Output will be an object of [`ProofVerification`].

## Issue and Verifying Credential with JWT

### Issue Credential example using vade-evan-cli

```json
method=did:evan

options={
   "privateKey":"dfcdcb6d5d09411ae9cbe1b0fd9751ba8803dd4b276d5bf9488ae4ede2669106",
   "identity":"did:evan:testcore:0x0d87204c3957d73b68ae28d0af961d3c72403906",
   "type":"jwt"
}

payload={
   "unsignedVc":{
      "@context":[
         "https://www.w3.org/2018/credentials/v1",
         "https:://schema.org",
         "https://w3id.org/vc-status-list-2021/v1"
      ],
      "id":"94450c72-5dc4-4e46-8df0-106819064656",
      "type":[
         "VerifiableCredential"
      ],
      "issuer":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6",
      "issuanceDate":"2021-04-20T08:35:56+0000",
      "credentialSubject":{
         "id":"did:evan:testcore:0x67ce8b01b3b75a9ba4a1462139a1edaa0d2f539f",
         "data":{
            "test_property_string":"value",
            "test_property_string3":"value",
            "test_property_string4":"value",
            "test_property_string2":"value",
            "test_property_string1":"value"
         }
      },
      "credentialSchema":{
         "id":"did:evan:zkp:0xd641c26161e769cef4b41760211972b274a8f37f135a34083e4e48b3f1035eda",
         "type":"EvanZKPSchema"
      },
      "credentialStatus":{
         "id":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388#0",
         "type":"RevocationList2021Status",
         "revocationListIndex":"1",
         "revocationListCredential":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388"
      }
   },
   "issuerPublicKeyId":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6#key-1",
   "issuerPublicKey":"jCv7l26izalfcsFe6j/IqtVlDolo2Y3lNld7xOG63GjSNHBVWrvZQe2O859q9JeVEV4yXtfYofGQSWrMVfgH5ySbuHpQj4fSgLu4xXyFgMidUO1sIe0NHRcXpOorP01o"
}
```

```sh
./vade_evan_cli vc_zkp issue_credential --method $method --options $options --payload $payload
```

- Output: Output is [`Credential`] object with proof

```json
{
   "@context":[
      "https://www.w3.org/2018/credentials/v1",
      "https:://schema.org",
      "https://w3id.org/vc-status-list-2021/v1"
   ],
   "id":"94450c72-5dc4-4e46-8df0-106819064656",
   "type":[
      "VerifiableCredential"
   ],
   "issuer":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6",
   "issuanceDate":"2021-04-20T08:35:56+0000",
   "credentialSubject":{
      "id":"did:evan:testcore:0x67ce8b01b3b75a9ba4a1462139a1edaa0d2f539f",
      "data":{
         "test_property_string3":"value",
         "test_property_string2":"value",
         "test_property_string4":"value",
         "test_property_string1":"value",
         "test_property_string":"value"
      }
   },
   "credentialSchema":{
      "id":"did:evan:zkp:0xd641c26161e769cef4b41760211972b274a8f37f135a34083e4e48b3f1035eda",
      "type":"EvanZKPSchema"
   },
   "credentialStatus":{
      "id":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388#0",
      "type":"RevocationList2021Status",
      "revocationListIndex":"1",
      "revocationListCredential":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388"
   },
   "proof":{
      "type":"EcdsaPublicKeySecp256k1",
      "created":"2021-11-23T11:41:43.000Z",
      "proofPurpose":"assertionMethod",
      "verificationMethod":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6#key-1",
      "jws":"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOiIyMDIxLTExLTIzVDExOjQxOjQzLjAwMFoiLCJkb2MiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczo6Ly9zY2hlbWEub3JnIiwiaHR0cHM6Ly93M2lkLm9yZy92Yy1zdGF0dXMtbGlzdC0yMDIxL3YxIl0sImlkIjoiOTQ0NTBjNzItNWRjNC00ZTQ2LThkZjAtMTA2ODE5MDY0NjU2IiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6ZXZhbjp0ZXN0Y29yZToweDYyNDBjZWRmYzg0MDU3OWI3ZmRjZDY4NmJkYzY1YTlhOGM0MmRlYTYiLCJpc3N1YW5jZURhdGUiOiIyMDIxLTA0LTIwVDA4OjM1OjU2KzAwMDAiLCJjcmVkZW50aWFsU3ViamVjdCI6eyJpZCI6ImRpZDpldmFuOnRlc3Rjb3JlOjB4NjdjZThiMDFiM2I3NWE5YmE0YTE0NjIxMzlhMWVkYWEwZDJmNTM5ZiIsImRhdGEiOnsidGVzdF9wcm9wZXJ0eV9zdHJpbmczIjoidmFsdWUiLCJ0ZXN0X3Byb3BlcnR5X3N0cmluZzIiOiJ2YWx1ZSIsInRlc3RfcHJvcGVydHlfc3RyaW5nNCI6InZhbHVlIiwidGVzdF9wcm9wZXJ0eV9zdHJpbmcxIjoidmFsdWUiLCJ0ZXN0X3Byb3BlcnR5X3N0cmluZyI6InZhbHVlIn19LCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiZGlkOmV2YW46emtwOjB4ZDY0MWMyNjE2MWU3NjljZWY0YjQxNzYwMjExOTcyYjI3NGE4ZjM3ZjEzNWEzNDA4M2U0ZTQ4YjNmMTAzNWVkYSIsInR5cGUiOiJFdmFuWktQU2NoZW1hIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsiaWQiOiJkaWQ6ZXZhbjp6a3A6MHhjYWMzZjQxODZlMjczMDgzODIwYzhjNTlmM2M1MmVmYjcxM2E3NTVkZTI1NWQwZWI5OTdiNDk5MDI1M2VhMzg4IzAiLCJ0eXBlIjoiUmV2b2NhdGlvbkxpc3QyMDIxU3RhdHVzIiwicmV2b2NhdGlvbkxpc3RJbmRleCI6IjEiLCJyZXZvY2F0aW9uTGlzdENyZWRlbnRpYWwiOiJkaWQ6ZXZhbjp6a3A6MHhjYWMzZjQxODZlMjczMDgzODIwYzhjNTlmM2M1MmVmYjcxM2E3NTVkZTI1NWQwZWI5OTdiNDk5MDI1M2VhMzg4In19LCJpc3MiOiJkaWQ6ZXZhbjp0ZXN0Y29yZToweDYyNDBjZWRmYzg0MDU3OWI3ZmRjZDY4NmJkYzY1YTlhOGM0MmRlYTYifQ.DoAQvIsPcORu5xqAFzWWzTnDeLvV_ElfF7EEb8E7dPNPrgjsfi3V837LnUD3uNaJIiohuRkW1kiisIVekp5bkwA"
   }
}
```

### Verify Credential example using vade-evan-cli

```json
method=did:evan

payload={
   "credential":{
      "@context":[
         "https://www.w3.org/2018/credentials/v1",
         "https:://schema.org",
         "https://w3id.org/vc-status-list-2021/v1"
      ],
      "id":"94450c72-5dc4-4e46-8df0-106819064656",
      "type":[
         "VerifiableCredential"
      ],
      "issuer":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6",
      "issuanceDate":"2021-04-20T08:35:56+0000",
      "credentialSubject":{
         "id":"did:evan:testcore:0x67ce8b01b3b75a9ba4a1462139a1edaa0d2f539f",
         "data":{
            "test_property_string4":"value",
            "test_property_string2":"value",
            "test_property_string":"value",
            "test_property_string1":"value",
            "test_property_string3":"value"
         }
      },
      "credentialSchema":{
         "id":"did:evan:zkp:0xd641c26161e769cef4b41760211972b274a8f37f135a34083e4e48b3f1035eda",
         "type":"EvanZKPSchema"
      },
      "credentialStatus":{
         "id":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388#0",
         "type":"RevocationList2021Status",
         "revocationListIndex":"1",
         "revocationListCredential":"did:evan:zkp:0xcac3f4186e273083820c8c59f3c52efb713a755de255d0eb997b4990253ea388"
      },
      "proof":{
         "type":"EcdsaPublicKeySecp256k1",
         "created":"2021-11-23T12:01:29.000Z",
         "proofPurpose":"assertionMethod",
         "verificationMethod":"did:evan:testcore:0x6240cedfc840579b7fdcd686bdc65a9a8c42dea6#key-1",
         "jws":"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOiIyMDIxLTExLTIzVDEyOjAxOjI5LjAwMFoiLCJkb2MiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczo6Ly9zY2hlbWEub3JnIiwiaHR0cHM6Ly93M2lkLm9yZy92Yy1zdGF0dXMtbGlzdC0yMDIxL3YxIl0sImlkIjoiOTQ0NTBjNzItNWRjNC00ZTQ2LThkZjAtMTA2ODE5MDY0NjU2IiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6ZXZhbjp0ZXN0Y29yZToweDYyNDBjZWRmYzg0MDU3OWI3ZmRjZDY4NmJkYzY1YTlhOGM0MmRlYTYiLCJpc3N1YW5jZURhdGUiOiIyMDIxLTA0LTIwVDA4OjM1OjU2KzAwMDAiLCJjcmVkZW50aWFsU3ViamVjdCI6eyJpZCI6ImRpZDpldmFuOnRlc3Rjb3JlOjB4NjdjZThiMDFiM2I3NWE5YmE0YTE0NjIxMzlhMWVkYWEwZDJmNTM5ZiIsImRhdGEiOnsidGVzdF9wcm9wZXJ0eV9zdHJpbmczIjoidmFsdWUiLCJ0ZXN0X3Byb3BlcnR5X3N0cmluZzIiOiJ2YWx1ZSIsInRlc3RfcHJvcGVydHlfc3RyaW5nIjoidmFsdWUiLCJ0ZXN0X3Byb3BlcnR5X3N0cmluZzEiOiJ2YWx1ZSIsInRlc3RfcHJvcGVydHlfc3RyaW5nNCI6InZhbHVlIn19LCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiZGlkOmV2YW46emtwOjB4ZDY0MWMyNjE2MWU3NjljZWY0YjQxNzYwMjExOTcyYjI3NGE4ZjM3ZjEzNWEzNDA4M2U0ZTQ4YjNmMTAzNWVkYSIsInR5cGUiOiJFdmFuWktQU2NoZW1hIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsiaWQiOiJkaWQ6ZXZhbjp6a3A6MHhjYWMzZjQxODZlMjczMDgzODIwYzhjNTlmM2M1MmVmYjcxM2E3NTVkZTI1NWQwZWI5OTdiNDk5MDI1M2VhMzg4IzAiLCJ0eXBlIjoiUmV2b2NhdGlvbkxpc3QyMDIxU3RhdHVzIiwicmV2b2NhdGlvbkxpc3RJbmRleCI6IjEiLCJyZXZvY2F0aW9uTGlzdENyZWRlbnRpYWwiOiJkaWQ6ZXZhbjp6a3A6MHhjYWMzZjQxODZlMjczMDgzODIwYzhjNTlmM2M1MmVmYjcxM2E3NTVkZTI1NWQwZWI5OTdiNDk5MDI1M2VhMzg4In19LCJpc3MiOiJkaWQ6ZXZhbjp0ZXN0Y29yZToweDYyNDBjZWRmYzg0MDU3OWI3ZmRjZDY4NmJkYzY1YTlhOGM0MmRlYTYifQ.et_rtqo4aaJqutsMTkzsb8BK5Eeh_TP4qZEvfb1pKqB47RzftjFbpwagCY8PQMSc7Um8I29vTp9wB546EazDFwA"
      }
   },
   "signerAddress":"0xcd5e1dbb5552c2baa1943e6b5f66d22107e9c05c"
}

options={"type":"jwt"}
```

```sh
./vade_evan_cli vc_zkp verify_proof --method $method --options $options --payload $payload
```

- Output

```json
{"verified":true}
```

[`VadePlugin`]: https://docs.rs/vade/*/vade/trait.VadePlugin.html
[`vade-jwt-vc`]: #
[`UnsignedCredential`]: /docs/references#unsignedcredential
[`vc_zkp_issue_credential`]: /docs/references#vc_zkp_issue_credential
[`vc_zkp_verify_proof`]: /docs/references#vc_zkp_verify_proof
[`IssueCredentialPayload`]: /docs/references#issuecredentialpayload
[`SignerOptions`]: /docs/references#signeroptions
[`VerifyProofPayload`]: /docs/references#verifyproofpayload
[`Credential`]: /docs/references#credential
[`ProofVerification`]: /docs/references#proofverification
