# nano-egret-client
nano javascript WebSocket client SDK for egret engine.

## Integret to `egret engine`
Change egret project file `egretProperties.json` and add `nano` client sdk reference to modules, likes below:
```
{
  "native": {
    "path_ignore": []
  },
  "publish": {
    "web": 0,
    "native": 1,
    "path": "bin-release"
  },
  "egret_version": "5.0.7",
  "template": {},
  "eui": {
    "exmlRoot": [
      "resource/eui_skins"
    ],
    "themes": [
      "resource/default.thm.json"
    ],
    "exmlPublishPolicy": "content"
  },
  "modules": [
    {
      "name": "egret"
    },
    {
      "name": "res"
    },
    {
      "name": "eui"
    },
    {
      "name": "tween"
    },
    {
      "name": "promise",
      "path": "./promise"
    },
    {
      "name": "nano",
      "path": "path/to/nano"
    }
  ]
}
```

## Usage
```typescript
public static connectServer(host:string, port:number):void {
    nano.init({
        host:host,
        port:port,
        reconnect: true,
    }, this.onConnected);
}

private static onConnected() {
    console.log("connect to nano")
    // do something
}
```

## API

### Connect to server

```javascript
nano.init(params, callback);
```

Examples

```javascript
nano.init({
    host: host,
    port: port,
	user: {},
	handshakeCallback : function(){}
}, function() {
	console.log('success');
});
```

### Send request to server with callback

```javascript
nano.request(route, msg, callback);
```

Examples

```javascript
nano.request(route, {
	rid: rid
}, function(data) {
	console.log(dta);	
});
```

### Send request to server without callback

```javascript
nano.notify(route, params);
```

### Receive message from server

```javascript
nano.on(route, callback); 
```

Examples

```javascript
nano.on('onChat', function(data) {
	addMessage(data.from, data.target, data.msg);
	$("#chatHistory").show();
});
```

### Disconnect from server

```javascript
nano.disconnect();
```

## License

[MIT License](./LICENSE)
