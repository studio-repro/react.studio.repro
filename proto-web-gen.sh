#!/bin/bash
protoc -I=./src/proto/ ./src/proto/*.proto \
  --js_out=import_style=commonjs:./src/proto/ \
  --grpc-web_out=import_style=typescript,mode=grpcweb:./src/proto/
