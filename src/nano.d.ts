declare interface EventEmitter {
	on(route:string,cb:()=>void):void;
}

declare interface NanoClientParams{
    host : string;
    port : number;
    reconnect  ?: boolean;
}
declare interface NanoClient extends EventEmitter{
    init(params:NanoClientParams, cb:()=>void) : void;
    request(route:string,msg:any,cb:(response:any)=>void);
    disconnect():void;
    notify(route:string, msg:any);
}

declare var nano:NanoClient;