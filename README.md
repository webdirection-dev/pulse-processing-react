# Pulse SPA

## Fetch
Классические запросы

```javascript
pulseService.getResource(_url, milk)
    .then(response => console.log(response))
    .catch(error => console.error(error));

fetch(`${_url}${tires}`)
    .then(response => {
        return response.json()
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```
