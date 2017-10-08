This is a ionic project using webrtc and peerjs.
## Environment
This is my develop environment.
```shell-session
% node -v
v8.6.0
```

```shell-session
% ionic -v
3.12.0
```

```shell-session
% cordova -v
7.0.1
```

## Setup

```shell-session
% npm install
```

iOS  
```shell-session
% cordova platform add ios
% ionic cordova build ios
```

## Run
PC  
```shell-session
% ionic serve
```

iOS  
```shell-session
% cordova build ios
```
  
open `xcworkspace` file in the `platform/ios` and run on your device.
### PostScript
Xcode which version > 9.0 cannot build this source because Xcode cannot convert swift2.x to 3.x.
