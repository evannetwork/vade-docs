# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Dev Notes

#### Compilation errors

---
If you see something like that:

````
Compiled with problems:X

ERROR in ./docs/usage samples/bbs_issue_credential_and_exchange.mdx

Module build failed (from ./node_modules/@docusaurus/mdx-loader/lib/index.js):
SyntaxError: /Users/dgordiyevsky/equs/vade-docs/docs/usage samples/bbs_issue_credential_and_exchange.mdx: Unexpected token, expected "}" (892:24)

890 | <TabItem value="vade_evan_cli" label="vade_evan_cli">
891 | ```sh
> 892 | payload='{"presentation":{"@context":["https://www.w3.org/2018/credentials/v1","https://schema.org","https://w3id.org/vc-revocation-list-2020/v1"],"id":"2846708b-62ab-4c33-a7f6-a4c86a1779d6","type":["VerifiablePresentation"],"verifiableCredential":[{"@context":["https://www.w3.org/2018/credentials/v1","https://schema.org","https://w3id.org/vc-revocation-list-2020/v1"],"id":"uuid:any","type":
````

try to insert a new line between <TabItem ... and ```sh

---

````
Compiled with problems:X

ERROR in ./docs/usage samples/bbs_issue_credential_and_exchange.mdx

Module build failed (from ./node_modules/@docusaurus/mdx-loader/lib/index.js):
SyntaxError: /Users/dgordiyevsky/equs/vade-docs/docs/usage samples/bbs_issue_credential_and_exchange.mdx: Unterminated JSX contents. (905:16)

903 | `}</code></pre>
904 | <p><img alt={"State diagram"} src={require("!url-loader?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=file-loader!./assets/bbs_issue_credential_and_exchange_08.drawio.png").default} /></p>
> 905 |     </MDXLayout>
|                 ^
906 |   )
907 | };
908 | MDXContent.isMDXComponent = true
````
And the above error appears when closing backticks are in the same line with the text, like this:
````

./vade_evan_cli vc_zkp verify_proof --method "did:evan" --options $option --payload $payload```
````

So, just move them backticks to the next line:

````
./vade_evan_cli vc_zkp verify_proof --method "did:evan" --options $option --payload $payload
```
````
