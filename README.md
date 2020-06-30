### Napkin Math

`npm run test`

```

 PASS  ./jcs-vs-base64url-gzip.spec.js
  ● Console

    console.log
      canonicalize compressed buffer length  695

      at Object.<anonymous> (jcs-vs-base64url-gzip.spec.js:28:13)

    console.log
      base64url compressed buffer length  901

      at Object.<anonymous> (jcs-vs-base64url-gzip.spec.js:35:13)

    console.log
      canonicalize space savings:  29.640287769784173 %

      at Object.<anonymous> (jcs-vs-base64url-gzip.spec.js:41:13)

 PASS  ./jcs-vs-stringify.spec.js
  ● Console

    console.log
      stringify took 0.3081160000000125 milliseconds.

      at Object.<anonymous> (jcs-vs-stringify.spec.js:15:13)

    console.log
      canonicalize took 1.2837839999999971 milliseconds.

      at Object.<anonymous> (jcs-vs-stringify.spec.js:21:13)

 PASS  ./jcs-vs-base64url.spec.js
  ● Console

    console.log
      canonicalize took 1.26616700000001 milliseconds.

      at Object.<anonymous> (jcs-vs-base64url.spec.js:16:13)

    console.log
      base64url took 2.618736999999996 milliseconds.

      at Object.<anonymous> (jcs-vs-base64url.spec.js:26:13)
```
