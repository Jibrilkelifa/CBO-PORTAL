"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64URLUnescape = exports.base64URLEscape = exports.base64URLDecode = exports.base64URLEncode = exports.base64Decode = exports.base64Encode = void 0;
/*
Copyright 2022 The Sigstore Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const BASE64_ENCODING = 'base64';
const UTF8_ENCODING = 'utf-8';
function base64Encode(str) {
    return Buffer.from(str, UTF8_ENCODING).toString(BASE64_ENCODING);
}
exports.base64Encode = base64Encode;
function base64Decode(str) {
    return Buffer.from(str, BASE64_ENCODING).toString(UTF8_ENCODING);
}
exports.base64Decode = base64Decode;
function base64URLEncode(str) {
    return base64URLEscape(base64Encode(str));
}
exports.base64URLEncode = base64URLEncode;
function base64URLDecode(str) {
    return base64Decode(base64URLUnescape(str));
}
exports.base64URLDecode = base64URLDecode;
function base64URLEscape(str) {
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
exports.base64URLEscape = base64URLEscape;
function base64URLUnescape(str) {
    // Repad the base64 string if necessary
    str += '='.repeat((4 - (str.length % 4)) % 4);
    return str.replace(/-/g, '+').replace(/_/g, '/');
}
exports.base64URLUnescape = base64URLUnescape;
