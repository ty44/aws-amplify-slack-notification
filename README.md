## Install dependencies

```
yarn
```

## Start local environment

```
yarn run start
```


### Diagram

```mermaid
graph TD;
    Amplify-->SNS;
    SNS-->Lambda;
    Lambda-->Webhook;
```
