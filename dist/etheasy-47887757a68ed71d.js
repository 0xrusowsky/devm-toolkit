let O=0,V=`Object`,S=1,X=4,L=`utf-8`,N=null,Q=128,K=`undefined`,T=`string`,U=`function`,P=Array,M=Error,W=FinalizationRegistry,Y=Object,R=undefined;var E=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var z=(a=>a===R||a===N);var d=(()=>{if(c===N||c.byteLength===O){c=new Uint8Array(a.memory.buffer)};return c});var C=((a,b)=>{a=a>>>O;const c=B();const d=c.subarray(a/X,a/X+ b);const e=[];for(let a=O;a<d.length;a++){e.push(k(d[a]))};return e});var r=(()=>{if(q===N||q.byteLength===O){q=new Int32Array(a.memory.buffer)};return q});var x=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=O;try{return e(c,f.b,...b)}finally{if(--f.cnt===O){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var k=(a=>{const b=i(a);j(a);return b});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==T&&b.length>O){return `Function(${b})`}else{return `Function`}};if(P.isArray(a)){const b=a.length;let c=`[`;if(b>O){c+=l(a[O])};for(let d=S;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>S){d=c[S]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof M){return `${a.name}: ${a.message}\n${a.stack}`};return d});var J=(async(b)=>{if(a!==R)return a;if(typeof b===K){b=new URL(`etheasy_bg.wasm`,import.meta.url)};const c=F();if(typeof b===T||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var B=(()=>{if(A===N||A.byteLength===O){A=new Uint32Array(a.memory.buffer)};return A});var H=((b,d)=>{a=b.exports;J.__wbindgen_wasm_module=d;q=N;A=N;c=N;a.__wbindgen_start();return a});var h=(a=>{if(g===f.length)f.push(f.length+ S);const b=g;g=f[b];f[b]=a;return b});var I=(b=>{if(a!==R)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var w=((b,c,d)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he583fdd4cd5e47b9(b,c,v(d))}finally{f[u++]=R}});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h90e3b3e9622906f1(b,c,h(d))});var e=((a,c)=>{a=a>>>O;return b.decode(d().subarray(a,a+ c))});var v=(a=>{if(u==S)throw new M(`out of js stack`);f[--u]=a;return u});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===O){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=O;s.unregister(f)}}};g.original=f;s.register(g,f,f);return g});var j=(a=>{if(a<132)return;f[a]=g;g=a});var i=(a=>f[a]);var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_string_new=((a,b)=>{const c=e(a,b);return h(c)});b.wbg.__wbindgen_number_new=(a=>{const b=a;return h(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{k(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=i(a);return h(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=k(a).original;if(b.cnt--==S){b.a=O;return !0};const c=!1;return c});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const c=i(b).__yew_listener_id;r()[a/X+ S]=z(c)?O:c;r()[a/X+ O]=!z(c)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{i(a).__yew_listener_id=b>>>O});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{i(a).__yew_subtree_id=b>>>O});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const c=i(b).__yew_subtree_id;r()[a/X+ S]=z(c)?O:c;r()[a/X+ O]=!z(c)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const c=i(b).__yew_subtree_cache_key;r()[a/X+ S]=z(c)?O:c;r()[a/X+ O]=!z(c)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{i(a).__yew_subtree_cache_key=b>>>O});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new M();return h(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,c)=>{const d=i(c).stack;const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let f;try{d=b;f=c;console.error(e(b,c))}finally{a.__wbindgen_free(d,f,S)}});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(i(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=i(a).queueMicrotask;return h(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof i(a)===U;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.log(...d)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=i(a).body;return z(b)?O:h(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return D(((a,b,c)=>{const d=i(a).createElement(e(b,c));return h(d)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return D(((a,b,c,d,f)=>{const g=i(a).createElementNS(b===O?R:e(b,c),e(d,f));return h(g)}),arguments)};b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,c)=>{const d=i(a).createTextNode(e(b,c));return h(d)});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=i(a) instanceof Window}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=i(a).document;return z(b)?O:h(b)});b.wbg.__wbg_instanceof_Element_6945fc210db80ea9=(a=>{let b;try{b=i(a) instanceof Element}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_namespaceURI_5235ee79fd5f6781=((b,c)=>{const d=i(c).namespaceURI;var e=z(d)?O:p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);var f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_clientHeight_d24efa25aa66e844=(a=>{const b=i(a).clientHeight;return b});b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,c)=>{i(a).innerHTML=e(b,c)});b.wbg.__wbg_outerHTML_e073aa84e7bc1eaf=((b,c)=>{const d=i(c).outerHTML;const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return D(((a,b,c)=>{i(a).removeAttribute(e(b,c))}),arguments)};b.wbg.__wbg_scrollIntoView_0c1a31f3d0dce6ae=(a=>{i(a).scrollIntoView()});b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return D(((a,b,c,d,f)=>{i(a).setAttribute(e(b,c),e(d,f))}),arguments)};b.wbg.__wbg_scrollHeight_2d7f990052968501=(a=>{const b=i(a).scrollHeight;return b});b.wbg.__wbg_focus_39d4b8ba8ff9df14=function(){return D((a=>{i(a).focus()}),arguments)};b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=i(a).parentNode;return z(b)?O:h(b)});b.wbg.__wbg_parentElement_347524db59fc2976=(a=>{const b=i(a).parentElement;return z(b)?O:h(b)});b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=i(a).childNodes;return h(b)});b.wbg.__wbg_lastChild_83efe6d5da370e1f=(a=>{const b=i(a).lastChild;return z(b)?O:h(b)});b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=i(a).nextSibling;return z(b)?O:h(b)});b.wbg.__wbg_setnodeValue_94b86af0cda24b90=((a,b,c)=>{i(a).nodeValue=b===O?R:e(b,c)});b.wbg.__wbg_textContent_8e392d624539e731=((b,c)=>{const d=i(c).textContent;var e=z(d)?O:p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);var f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return D((a=>{const b=i(a).cloneNode();return h(b)}),arguments)};b.wbg.__wbg_insertBefore_d2a001abf538c1f8=function(){return D(((a,b,c)=>{const d=i(a).insertBefore(i(b),i(c));return h(d)}),arguments)};b.wbg.__wbg_removeChild_96bbfefd2f5a0261=function(){return D(((a,b)=>{const c=i(a).removeChild(i(b));return h(c)}),arguments)};b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return D(((a,b,c,d,f)=>{i(a).addEventListener(e(b,c),i(d),i(f))}),arguments)};b.wbg.__wbg_setchecked_931ff2ed2cd3ebfd=((a,b)=>{i(a).checked=b!==O});b.wbg.__wbg_value_47fe6384562f52ab=((b,c)=>{const d=i(c).value;const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_setvalue_78cb4f1fef58ae98=((a,b,c)=>{i(a).value=e(b,c)});b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=i(a) instanceof ShadowRoot}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=i(a).host;return h(b)});b.wbg.__wbg_value_d7f5bfbd9302c14b=((b,c)=>{const d=i(c).value;const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_setvalue_090972231f0a4f6f=((a,b,c)=>{i(a).value=e(b,c)});b.wbg.__wbg_target_2fc177e386c8b7b0=(a=>{const b=i(a).target;return z(b)?O:h(b)});b.wbg.__wbg_bubbles_abce839854481bc6=(a=>{const b=i(a).bubbles;return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=i(a).cancelBubble;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=i(a).composedPath();return h(b)});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{i(a).preventDefault()});b.wbg.__wbg_shiftKey_5911baf439ab232b=(a=>{const b=i(a).shiftKey;return b});b.wbg.__wbg_key_dccf9e8aa1315a8e=((b,c)=>{const d=i(c).key;const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const c=i(a)[b>>>O];return h(c)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=i(a).length;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{const c=new Function(e(a,b));return h(c)});b.wbg.__wbg_call_27c0f87801dedf93=function(){return D(((a,b)=>{const c=i(a).call(i(b));return h(c)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new Y();return h(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return D((()=>{const a=self.self;return h(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return D((()=>{const a=window.window;return h(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return D((()=>{const a=globalThis.globalThis;return h(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return D((()=>{const a=global.global;return h(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=i(a)===R;return b});b.wbg.__wbg_from_89e3fc3ba5e6fb48=(a=>{const b=P.from(i(a));return h(b)});b.wbg.__wbg_getTime_2bc4375165f02d15=(a=>{const b=i(a).getTime();return b});b.wbg.__wbg_new0_7d84e5b2cd9fdc73=(()=>{const a=new Date();return h(a)});b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const c=Y.is(i(a),i(b));return c});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=Promise.resolve(i(a));return h(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const c=i(a).then(i(b));return h(c)});b.wbg.__wbg_set_1f9b04f170055d33=function(){return D(((a,b,c)=>{const d=Reflect.set(i(a),i(b),i(c));return d}),arguments)};b.wbg.__wbindgen_debug_string=((b,c)=>{const d=l(i(c));const e=p(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=m;r()[b/X+ S]=f;r()[b/X+ O]=e});b.wbg.__wbindgen_throw=((a,b)=>{throw new M(e(a,b))});b.wbg.__wbindgen_closure_wrapper965=((a,b,c)=>{const d=t(a,b,424,w);return h(d)});b.wbg.__wbindgen_closure_wrapper1322=((a,b,c)=>{const d=x(a,b,538,y);return h(d)});return b});var G=((a,b)=>{});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(h(b))}}var p=((a,b,c)=>{if(c===R){const c=n.encode(a);const e=b(c.length,S)>>>O;d().subarray(e,e+ c.length).set(c);m=c.length;return e};let e=a.length;let f=b(e,S)>>>O;const g=d();let h=O;for(;h<e;h++){const b=a.charCodeAt(h);if(b>127)break;g[f+ h]=b};if(h!==e){if(h!==O){a=a.slice(h)};f=c(f,e,e=h+ a.length*3,S)>>>O;const b=d().subarray(f+ h,f+ e);const g=o(a,b);h+=g.written;f=c(f,e,h,S)>>>O};m=h;return f});let a;const b=typeof TextDecoder!==K?new TextDecoder(L,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw M(`TextDecoder not available`)}};if(typeof TextDecoder!==K){b.decode()};let c=N;const f=new P(Q).fill(R);f.push(R,N,!0,!1);let g=f.length;let m=O;const n=typeof TextEncoder!==K?new TextEncoder(L):{encode:()=>{throw M(`TextEncoder not available`)}};const o=typeof n.encodeInto===U?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;const s=typeof W===K?{register:()=>{},unregister:()=>{}}:new W(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let u=Q;let A=N;export default J;export{I as initSync}