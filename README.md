# Get More Brain bitmark-JSON to HTML converter

Converting bitmark JSON into HTML.

## Installation

This library is made for the use with Node. Add it to your project by running `$ npm install getmorebrain-bitmark-json-html-converter` or `$ yarn add getmorebrain-bitmark-json-html-converter`. If you want to use this library as a standalone, simple download the repository. Run `$ npm install` or `$ yarn install` then to load the projects' dependencies.

## Usage

The converter can be used via CLI by running `$ bin/bitmark-json-to-pdf.js json:convert`. 

It expects two arguments: 

1. The **input** file or stream with the bitmark JSON content.
2. The **output** file where the HTML should be written to. If this argument is missing, the HTML will be displayed in the console.

So a conversion could look like that:

```text
$ bin/bitmark-json-to-pdf.js json:convert /path/to/input.json /path/to/output.html
```

### Options

Per default, all images will be converted to base64-encoded strings, as they are easier to handle in case you want to convert that HTML into a PDF later. To deactivate that behaviour, add the option `--link-images`.

## Help

If you have any questions, feel free to contact us under `hello@bitandblack.com`.

Further information about Bit&Black can be found under [www.bitandblack.com](https://www.bitandblack.com).