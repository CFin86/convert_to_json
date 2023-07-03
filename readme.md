# Convert to JSON String
Just a simple way take in a bunch of domain names and convert them to a json string for our migration tool.

## To Install
``` 
git clone https://github.com/CFin86/convert_to_json.git
cd convert_to_json
npm i
```

## To Use

1. Paste in the string of domains in the `input.txt` 
2. Run `node index.js`

The tool uses the [clipboardy library](https://app.soos.io/research/packages/NPM/-/clipboardy-commonjs) to access your system's clipboard.