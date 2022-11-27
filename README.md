### Diagram

```mermaid
graph TD;
    Amplify-->SNS;
    SNS-->Lambda;
    Lambda-->Webhook;
```
