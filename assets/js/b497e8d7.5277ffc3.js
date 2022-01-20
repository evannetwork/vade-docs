"use strict";(self.webpackChunkvade_docs=self.webpackChunkvade_docs||[]).push([[1847],{8903:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Congratulations!","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/congratulations","source":"@site/blog/tutorial-basics/congratulations.md","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template.","date":"2021-11-04T08:11:48.391Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.385,"truncated":false,"authors":[],"nextItem":{"title":"Create a Blog Post","permalink":"/vade-docs/blog/tutorial-basics/create-a-blog-post"}},"content":"You have just learned the **basics of Docusaurus** and made some changes to the **initial template**.\\n\\nDocusaurus has **much more to offer**!\\n\\nHave **5 more minutes**? Take a look at **[versioning](../tutorial-extras/manage-docs-versions.md)** and **[i18n](../tutorial-extras/translate-your-site.md)**.\\n\\nAnything **unclear** or **buggy** in this tutorial? [Please report it!](https://github.com/facebook/docusaurus/discussions/4610)\\n\\n## What\'s next?\\n\\n- Read the [official documentation](https://docusaurus.io/).\\n- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)\\n- Add a [search bar](https://docusaurus.io/docs/search)\\n- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)\\n- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)"},{"id":"Create a Blog Post","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/create-a-blog-post","source":"@site/blog/tutorial-basics/create-a-blog-post.md","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...","date":"2021-11-04T08:11:48.391Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.475,"truncated":false,"authors":[],"prevItem":{"title":"Congratulations!","permalink":"/vade-docs/blog/tutorial-basics/congratulations"},"nextItem":{"title":"Create a Document","permalink":"/vade-docs/blog/tutorial-basics/create-a-document"}},"content":"Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...\\n\\n## Create your first Post\\n\\nCreate a file at `blog/2021-02-28-greetings.md`:\\n\\n```md title=\\"blog/2021-02-28-greetings.md\\"\\n---\\nslug: greetings\\ntitle: Greetings!\\nauthors:\\n  - name: Joel Marcey\\n    title: Co-creator of Docusaurus 1\\n    url: https://github.com/JoelMarcey\\n    image_url: https://github.com/JoelMarcey.png\\n  - name: S\xe9bastien Lorber\\n    title: Docusaurus maintainer\\n    url: https://sebastienlorber.com\\n    image_url: https://github.com/slorber.png\\ntags: [greetings]\\n---\\n\\nCongratulations, you have made your first post!\\n\\nFeel free to play around and edit this post as much you like.\\n```\\n\\nA new blog post is now available at `http://localhost:3000/blog/greetings`."},{"id":"Create a Document","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/create-a-document","source":"@site/blog/tutorial-basics/create-a-document.md","title":"Create a Document","description":"Documents are groups of pages connected through:","date":"2021-11-04T08:11:48.391Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.59,"truncated":false,"authors":[],"prevItem":{"title":"Create a Blog Post","permalink":"/vade-docs/blog/tutorial-basics/create-a-blog-post"},"nextItem":{"title":"Create a Page","permalink":"/vade-docs/blog/tutorial-basics/create-a-page"}},"content":"Documents are **groups of pages** connected through:\\n\\n- a **sidebar**\\n- **previous/next navigation**\\n- **versioning**\\n\\n## Create your first Doc\\n\\nCreate a markdown file at `docs/hello.md`:\\n\\n```md title=\\"docs/hello.md\\"\\n# Hello\\n\\nThis is my **first Docusaurus document**!\\n```\\n\\nA new document is now available at `http://localhost:3000/docs/hello`.\\n\\n## Configure the Sidebar\\n\\nDocusaurus automatically **creates a sidebar** from the `docs` folder.\\n\\nAdd metadatas to customize the sidebar label and position:\\n\\n```md title=\\"docs/hello.md\\" {1-4}\\n---\\nsidebar_label: \'Hi!\'\\nsidebar_position: 3\\n---\\n\\n# Hello\\n\\nThis is my **first Docusaurus document**!\\n```\\n\\nIt is also possible to create your sidebar explicitly in `sidebars.js`:\\n\\n```diff title=\\"sidebars.js\\"\\nmodule.exports = {\\n  tutorialSidebar: [\\n    {\\n      type: \'category\',\\n      label: \'Tutorial\',\\n-     items: [...],\\n+     items: [\'hello\'],\\n    },\\n  ],\\n};\\n```"},{"id":"Create a Page","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/create-a-page","source":"@site/blog/tutorial-basics/create-a-page.md","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","date":"2021-11-04T08:11:48.390Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.52,"truncated":false,"authors":[],"prevItem":{"title":"Create a Document","permalink":"/vade-docs/blog/tutorial-basics/create-a-document"},"nextItem":{"title":"Deploy your site","permalink":"/vade-docs/blog/tutorial-basics/deploy-your-site"}},"content":"Add **Markdown or React** files to `src/pages` to create a **standalone page**:\\n\\n- `src/pages/index.js` -> `localhost:3000/`\\n- `src/pages/foo.md` -> `localhost:3000/foo`\\n- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`\\n\\n## Create your first React Page\\n\\nCreate a file at `src/pages/my-react-page.js`:\\n\\n```jsx title=\\"src/pages/my-react-page.js\\"\\nimport React from \'react\';\\nimport Layout from \'@theme/Layout\';\\n\\nexport default function MyReactPage() {\\n  return (\\n    <Layout>\\n      <h1>My React page</h1>\\n      <p>This is a React page</p>\\n    </Layout>\\n  );\\n}\\n```\\n\\nA new page is now available at `http://localhost:3000/my-react-page`.\\n\\n## Create your first Markdown Page\\n\\nCreate a file at `src/pages/my-markdown-page.md`:\\n\\n```mdx title=\\"src/pages/my-markdown-page.md\\"\\n# My Markdown page\\n\\nThis is a Markdown page\\n```\\n\\nA new page is now available at `http://localhost:3000/my-markdown-page`."},{"id":"Deploy your site","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/deploy-your-site","source":"@site/blog/tutorial-basics/deploy-your-site.md","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","date":"2021-11-04T08:11:48.390Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.42,"truncated":false,"authors":[],"prevItem":{"title":"Create a Page","permalink":"/vade-docs/blog/tutorial-basics/create-a-page"},"nextItem":{"title":"Markdown Features","permalink":"/vade-docs/blog/tutorial-basics/markdown-features"}},"content":"Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).\\n\\nIt builds your site as simple **static HTML, JavaScript and CSS files**.\\n\\n## Build your site\\n\\nBuild your site **for production**:\\n\\n```bash\\nnpm run build\\n```\\n\\nThe static files are generated in the `build` folder.\\n\\n## Deploy your site\\n\\nTest your production build locally:\\n\\n```bash\\nnpm run serve\\n```\\n\\nThe `build` folder is now served at `http://localhost:3000/`.\\n\\nYou can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**)."},{"id":"Markdown Features","metadata":{"permalink":"/vade-docs/blog/tutorial-basics/markdown-features","source":"@site/blog/tutorial-basics/markdown-features.mdx","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","date":"2021-11-04T08:11:48.389Z","formattedDate":"November 4, 2021","tags":[],"readingTime":1.545,"truncated":false,"authors":[],"prevItem":{"title":"Deploy your site","permalink":"/vade-docs/blog/tutorial-basics/deploy-your-site"},"nextItem":{"title":"Manage Docs Versions","permalink":"/vade-docs/blog/tutorial-extras/manage-docs-versions"}},"content":"Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.\\n\\n## Front Matter\\n\\nMarkdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):\\n\\n```text title=\\"my-doc.md\\"\\n// highlight-start\\n---\\nid: my-doc-id\\ntitle: My document title\\ndescription: My document description\\nslug: /my-custom-url\\n---\\n// highlight-end\\n\\n## Markdown heading\\n\\nMarkdown text with [links](./hello.md)\\n```\\n\\n## Links\\n\\nRegular Markdown links are supported, using url paths or relative file paths.\\n\\n```md\\nLet\'s see how to [Create a page](/create-a-page).\\n```\\n\\n```md\\nLet\'s see how to [Create a page](./create-a-page.md).\\n```\\n\\n**Result:** Let\'s see how to [Create a page](./create-a-page.md).\\n\\n## Images\\n\\nRegular Markdown images are supported.\\n\\nAdd an image at `static/img/docusaurus.png` and display it in Markdown:\\n\\n```md\\n![Docusaurus logo](/img/docusaurus.png)\\n```\\n\\n![Docusaurus logo](/img/docusaurus.png)\\n\\n## Code Blocks\\n\\nMarkdown code blocks are supported with Syntax highlighting.\\n\\n    ```jsx title=\\"src/components/HelloDocusaurus.js\\"\\n    function HelloDocusaurus() {\\n        return (\\n            <h1>Hello, Docusaurus!</h1>\\n        )\\n    }\\n    ```\\n\\n```jsx title=\\"src/components/HelloDocusaurus.js\\"\\nfunction HelloDocusaurus() {\\n  return <h1>Hello, Docusaurus!</h1>;\\n}\\n```\\n\\n## Admonitions\\n\\nDocusaurus has a special syntax to create admonitions and callouts:\\n\\n    :::tip My tip\\n\\n    Use this awesome feature option\\n\\n    :::\\n\\n    :::danger Take care\\n\\n    This action is dangerous\\n\\n    :::\\n\\n:::tip My tip\\n\\nUse this awesome feature option\\n\\n:::\\n\\n:::danger Take care\\n\\nThis action is dangerous\\n\\n:::\\n\\n## MDX and React Components\\n\\n[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:\\n\\n```jsx\\nexport const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'20px\',\\n      color: \'#fff\',\\n      padding: \'10px\',\\n      cursor: \'pointer\',\\n    }}\\n    onClick={() => {\\n      alert(`You clicked the color ${color} with label ${children}`)\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\nThis is <Highlight color=\\"#25c2a0\\">Docusaurus green</Highlight> !\\n\\nThis is <Highlight color=\\"#1877F2\\">Facebook blue</Highlight> !\\n```\\n\\nexport const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'20px\',\\n      color: \'#fff\',\\n      padding: \'10px\',\\n      cursor: \'pointer\',\\n    }}\\n    onClick={() => {\\n      alert(`You clicked the color ${color} with label ${children}`);\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\nThis is <Highlight color=\\"#25c2a0\\">Docusaurus green</Highlight> !\\n\\nThis is <Highlight color=\\"#1877F2\\">Facebook blue</Highlight> !"},{"id":"Manage Docs Versions","metadata":{"permalink":"/vade-docs/blog/tutorial-extras/manage-docs-versions","source":"@site/blog/tutorial-extras/manage-docs-versions.md","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","date":"2021-11-04T08:11:48.388Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.695,"truncated":false,"authors":[],"prevItem":{"title":"Markdown Features","permalink":"/vade-docs/blog/tutorial-basics/markdown-features"},"nextItem":{"title":"Translate your site","permalink":"/vade-docs/blog/tutorial-extras/translate-your-site"}},"content":"Docusaurus can manage multiple versions of your docs.\\n\\n## Create a docs version\\n\\nRelease a version 1.0 of your project:\\n\\n```bash\\nnpm run docusaurus docs:version 1.0\\n```\\n\\nThe `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.\\n\\nYour docs now have 2 versions:\\n\\n- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs\\n- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**\\n\\n## Add a Version Dropdown\\n\\nTo navigate seamlessly across versions, add a version dropdown.\\n\\nModify the `docusaurus.config.js` file:\\n\\n```js title=\\"docusaurus.config.js\\"\\nmodule.exports = {\\n  themeConfig: {\\n    navbar: {\\n      items: [\\n        // highlight-start\\n        {\\n          type: \'docsVersionDropdown\',\\n        },\\n        // highlight-end\\n      ],\\n    },\\n  },\\n};\\n```\\n\\nThe docs version dropdown appears in your navbar:\\n\\n![Docs Version Dropdown](/img/tutorial/docsVersionDropdown.png)\\n\\n## Update an existing version\\n\\nIt is possible to edit versioned docs in their respective folder:\\n\\n- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`\\n- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`"},{"id":"Translate your site","metadata":{"permalink":"/vade-docs/blog/tutorial-extras/translate-your-site","source":"@site/blog/tutorial-extras/translate-your-site.md","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","date":"2021-11-04T08:11:48.388Z","formattedDate":"November 4, 2021","tags":[],"readingTime":0.96,"truncated":false,"authors":[],"prevItem":{"title":"Manage Docs Versions","permalink":"/vade-docs/blog/tutorial-extras/manage-docs-versions"},"nextItem":{"title":"Welcome","permalink":"/vade-docs/blog/welcome"}},"content":"Let\'s translate `docs/intro.md` to French.\\n\\n## Configure i18n\\n\\nModify `docusaurus.config.js` to add support for the `fr` locale:\\n\\n```js title=\\"docusaurus.config.js\\"\\nmodule.exports = {\\n  i18n: {\\n    defaultLocale: \'en\',\\n    locales: [\'en\', \'fr\'],\\n  },\\n};\\n```\\n\\n## Translate a doc\\n\\nCopy the `docs/intro.md` file to the `i18n/fr` folder:\\n\\n```bash\\nmkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\\n\\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\\n```\\n\\nTranslate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.\\n\\n## Start your localized site\\n\\nStart your site on the French locale:\\n\\n```bash\\nnpm run start -- --locale fr\\n```\\n\\nYour localized site is accessible at `http://localhost:3000/fr/` and the `Getting Started` page is translated.\\n\\n:::caution\\n\\nIn development, you can only use one locale at a same time.\\n\\n:::\\n\\n## Add a Locale Dropdown\\n\\nTo navigate seamlessly across languages, add a locale dropdown.\\n\\nModify the `docusaurus.config.js` file:\\n\\n```js title=\\"docusaurus.config.js\\"\\nmodule.exports = {\\n  themeConfig: {\\n    navbar: {\\n      items: [\\n        // highlight-start\\n        {\\n          type: \'localeDropdown\',\\n        },\\n        // highlight-end\\n      ],\\n    },\\n  },\\n};\\n```\\n\\nThe locale dropdown now appears in your navbar:\\n\\n![Locale Dropdown](/img/tutorial/localeDropdown.png)\\n\\n## Build your localized site\\n\\nBuild your site for a specific locale:\\n\\n```bash\\nnpm run build -- --locale fr\\n```\\n\\nOr build your site to include all the locales at once:\\n\\n```bash\\nnpm run build\\n```"},{"id":"welcome","metadata":{"permalink":"/vade-docs/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/vade-docs/blog/tags/facebook"},{"label":"hello","permalink":"/vade-docs/blog/tags/hello"},{"label":"docusaurus","permalink":"/vade-docs/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"prevItem":{"title":"Translate your site","permalink":"/vade-docs/blog/tutorial-extras/translate-your-site"},"nextItem":{"title":"MDX Blog Post","permalink":"/vade-docs/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/vade-docs/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/vade-docs/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"prevItem":{"title":"Welcome","permalink":"/vade-docs/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/vade-docs/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/vade-docs/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/vade-docs/blog/tags/hello"},{"label":"docusaurus","permalink":"/vade-docs/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"prevItem":{"title":"MDX Blog Post","permalink":"/vade-docs/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/vade-docs/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/vade-docs/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/vade-docs/blog/tags/hola"},{"label":"docusaurus","permalink":"/vade-docs/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"prevItem":{"title":"Long Blog Post","permalink":"/vade-docs/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);