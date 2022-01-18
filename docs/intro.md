---
sidebar_position: 1
---

# Overview

Vade is a framework for working with VCs and DIDs from different providers and on different platforms in a constant manner. Even if the actual implementation and logic behind them may change, Vade offers a consistent interface to work with them. It has been developed with wasm support in mind to allow it not only to run on servers but also on different clients with limited resources like IoT devices.

The name "Vade" is an acronym for "VC and DID engine" and focuses on working with VCs and DIDs. It has been designed with the idea of offering a consistent interface to work with while supporting to move the actual work into plugins.

This library is currently under development. Behavior, as well as provided exports, may change over time.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.
