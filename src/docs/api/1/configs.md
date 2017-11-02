# Configs

## Set Configs

Using the `io3d.config` method you can specify one or multiple configuration parameters:

```javascript
io3d.config({
  publishableApiKey: 'YOUR_PUBLISHABLE_API_KEY'
})
```

## Read Configs

The config parameters are exposed as properties of `io3d.config`. You can read them directly:

```javascript
console.log(io3d.config.publishableApiKey)
```

## Config Parameters

| Parameter | Type | Dafault | Description |
| --- | --- | --- | --- |
| `publishableApiKey` | String | 'null' | Your publishable API key |
| `secretApiKey` | String | 'null' | Your secret API key |

## Advanced Config Parameters

This configs paramters are mainly for debugging and local development. 

| Parameter | Type | Dafault | Description |
| --- | --- | --- | --- |
| `logLevel` | String | `warn` | Log level. Can be one of: `debug`, `warn`, `error` |
| `servicesUrl` | String | `https://spaces.archilogic.com/api/v2` | Server side endpoints URL |
| `storageDomain` | String | 'storage.3d.io' | Storage API domain |
| `storageDomainNoCdn` | String | `storage-nocdn.3d.io` | Storage API domain without CDN cache |