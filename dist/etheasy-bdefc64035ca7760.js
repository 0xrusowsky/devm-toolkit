let W=1,X=`function`,O=128,R=`undefined`,a1=402,S=`utf-8`,$=4,Q=null,Y=`string`,U=0,Z=`Object`,N=Array,T=Error,_=FinalizationRegistry,a0=Object,V=Uint8Array,P=undefined;var C=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h90e3b3e9622906f1(b,c,k(d))});var p=(a=>a===P||a===Q);var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;q=Q;E=Q;h=Q;a.__wbindgen_start();return a});var A=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===U){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=U;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var k=(a=>{if(d===b.length)b.push(b.length+ W);const c=d;d=b[c];b[c]=a;return c});var G=((a,b)=>{a=a>>>U;const c=F();const d=c.subarray(a/$,a/$+ b);const e=[];for(let a=U;a<d.length;a++){e.push(f(d[a]))};return e});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var x=(a=>{if(w==W)throw new T(`out of js stack`);b[--w]=a;return w});var M=(async(b)=>{if(a!==P)return a;if(typeof b===R){b=new URL(`etheasy_bg.wasm`,import.meta.url)};const c=I();if(typeof b===Y||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});var L=(b=>{if(a!==P)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var z=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h38b8a8b68ae6afc8(b,c,k(d))});var F=(()=>{if(E===Q||E.byteLength===U){E=new Uint32Array(a.memory.buffer)};return E});var y=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__h32a39b50c5149aed(c,d,x(e))}finally{b[w++]=P}});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=U;try{return e(c,f.b,...b)}finally{if(--f.cnt===U){a.__wbindgen_export_2.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var r=(()=>{if(q===Q||q.byteLength===U){q=new Int32Array(a.memory.buffer)};return q});var H=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var j=((a,b)=>{a=a>>>U;return g.decode(i().subarray(a,a+ b))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var J=((a,b)=>{});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==Q){return `${a}`};if(b==Y){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==Y&&b.length>U){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>U){c+=s(a[U])};for(let d=W;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>W){d=c[W]}else{return toString.call(a)};if(d==Z){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Z}};if(a instanceof T){return `${a.name}: ${a.message}\n${a.stack}`};return d});var o=((a,b,c)=>{if(c===P){const c=m.encode(a);const d=b(c.length,W)>>>U;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,W)>>>U;const f=i();let g=U;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==U){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,W)>>>U;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,W)>>>U};l=g;return e});var f=(a=>{const b=c(a);e(a);return b});var i=(()=>{if(h===Q||h.byteLength===U){h=new V(a.memory.buffer)};return h});var c=(a=>b[a]);var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==W){b.a=U;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===Y?e:P;var g=p(f)?U:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/$+ W]=h;r()[b/$+ U]=g});b.wbg.__wbg_instanceof_Window_6faa18fbaad60885=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_ClipboardItem_f68dca2b15f12ca4=(a=>{let b;try{b=c(a) instanceof ClipboardItem}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_read_f3915f795a505cff=(a=>{const b=c(a).read();return k(b)});b.wbg.__wbg_readText_57eee82b45ff69bf=(a=>{const b=c(a).readText();return k(b)});b.wbg.__wbg_write_ea7f24b79f380473=((a,b)=>{const d=c(a).write(c(b));return k(d)});b.wbg.__wbg_writeText_168aa980f3ae6365=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_clipboard_c45a65d94018d435=(a=>{const b=c(a).clipboard;return p(b)?U:k(b)});b.wbg.__wbg_navigator_5e4972bacd50a0cb=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_new_859e9d4be18d3aaa=function(){return D((a=>{const b=new ClipboardItem(c(a));return k(b)}),arguments)};b.wbg.__wbg_types_dfe555355d13be1e=(a=>{const b=c(a).types;return k(b)});b.wbg.__wbg_getType_d8891fee06a3d3fd=((a,b,d)=>{const e=c(a).getType(j(b,d));return k(e)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/$+ W]=p(d)?U:d;r()[a/$+ U]=!p(d)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>U});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/$+ W]=p(d)?U:d;r()[a/$+ U]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>U});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/$+ W]=p(d)?U:d;r()[a/$+ U]=!p(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>U});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new T();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,W)}});b.wbg.__wbg_setTimeout_7d81d052875b0f4f=function(){return D(((a,b)=>{const d=setTimeout(c(a),b);return k(d)}),arguments)};b.wbg.__wbg_clearTimeout_541ac0980ffcef74=(a=>{const b=clearTimeout(f(a));return k(b)});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=G(b,c).slice();a.__wbindgen_free(b,c*$,$);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=G(b,c).slice();a.__wbindgen_free(b,c*$,$);console.log(...d)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return p(b)?U:k(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return D(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return D(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===U?P:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return p(b)?U:k(b)});b.wbg.__wbg_instanceof_Element_6945fc210db80ea9=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_5235ee79fd5f6781=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?U:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_clientHeight_d24efa25aa66e844=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_outerHTML_e073aa84e7bc1eaf=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return D(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_scrollIntoView_0c1a31f3d0dce6ae=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_instanceof_HtmlElement_3bcc4ff70cfdcba5=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_scrollHeight_2d7f990052968501=(a=>{const b=c(a).scrollHeight;return b});b.wbg.__wbg_click_897b305b2e10b9cf=(a=>{c(a).click()});b.wbg.__wbg_focus_39d4b8ba8ff9df14=function(){return D((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_KeyboardEvent_d51b1a079e0c6a46=(a=>{let b;try{b=c(a) instanceof KeyboardEvent}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_ctrlKey_bb5b6fef87339703=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_5911baf439ab232b=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_6bf4ae4e83a11278=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_key_dccf9e8aa1315a8e=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_createObjectURL_ad8244759309f204=function(){return D(((b,d)=>{const e=URL.createObjectURL(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f}),arguments)};b.wbg.__wbg_revokeObjectURL_16a2051ee9d99da9=function(){return D(((a,b)=>{URL.revokeObjectURL(j(a,b))}),arguments)};b.wbg.__wbg_instanceof_Blob_83ad3dd4c9c406f0=(a=>{let b;try{b=c(a) instanceof Blob}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_newwithu8arraysequenceandoptions_366f462e1b363808=function(){return D(((a,b)=>{const d=new Blob(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_newwithstrsequenceandoptions_ce1f1ca2d522b8aa=function(){return D(((a,b)=>{const d=new Blob(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_arrayBuffer_307ddd1bd1d04e23=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_result_77ceeec1e3a16df7=function(){return D((a=>{const b=c(a).result;return k(b)}),arguments)};b.wbg.__wbg_setonloadend_1a1d3155e6949495=((a,b)=>{c(a).onloadend=c(b)});b.wbg.__wbg_new_c1e4a76f0b5c28b8=function(){return D((()=>{const a=new FileReader();return k(a)}),arguments)};b.wbg.__wbg_readAsText_ac9afc9ae3f40e0a=function(){return D(((a,b)=>{c(a).readAsText(c(b))}),arguments)};b.wbg.__wbg_value_d7f5bfbd9302c14b=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_setvalue_090972231f0a4f6f=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_target_2fc177e386c8b7b0=(a=>{const b=c(a).target;return p(b)?U:k(b)});b.wbg.__wbg_bubbles_abce839854481bc6=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{c(a).preventDefault()});b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=c(a).parentNode;return p(b)?U:k(b)});b.wbg.__wbg_parentElement_347524db59fc2976=(a=>{const b=c(a).parentElement;return p(b)?U:k(b)});b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_lastChild_83efe6d5da370e1f=(a=>{const b=c(a).lastChild;return p(b)?U:k(b)});b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=c(a).nextSibling;return p(b)?U:k(b)});b.wbg.__wbg_setnodeValue_94b86af0cda24b90=((a,b,d)=>{c(a).nodeValue=b===U?P:j(b,d)});b.wbg.__wbg_textContent_8e392d624539e731=((b,d)=>{const e=c(d).textContent;var f=p(e)?U:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return D((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_insertBefore_d2a001abf538c1f8=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_removeChild_96bbfefd2f5a0261=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_setchecked_931ff2ed2cd3ebfd=((a,b)=>{c(a).checked=b!==U});b.wbg.__wbg_files_8b6e6eff43af0f6d=(a=>{const b=c(a).files;return p(b)?U:k(b)});b.wbg.__wbg_value_47fe6384562f52ab=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_setvalue_78cb4f1fef58ae98=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_name_f35eb93a73d94973=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_get_58f6d5f6aee3f846=((a,b)=>{const d=c(a)[b>>>U];return p(d)?U:k(d)});b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_5d31483804421bfa=function(){return D(((a,b,d,e,f)=>{c(a).removeEventListener(j(b,d),c(e),f!==U)}),arguments)};b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>U];return k(d)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_16b304a2cfa7ff4a=(()=>{const a=new N();return k(a)});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_27c0f87801dedf93=function(){return D(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new a0();return k(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return D((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return D((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return D((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return D((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbg_from_89e3fc3ba5e6fb48=(a=>{const b=N.from(c(a));return k(b)});b.wbg.__wbg_of_4a2b313a453ec059=(a=>{const b=N.of(c(a));return k(b)});b.wbg.__wbg_push_a5b05aedc7234f9f=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_getTime_2bc4375165f02d15=(a=>{const b=c(a).getTime();return b});b.wbg.__wbg_new0_7d84e5b2cd9fdc73=(()=>{const a=new Date();return k(a)});b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const d=a0.is(c(a),c(b));return d});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_a73caa9a87991566=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,d)=>{const e=new V(c(a),b>>>U,d>>>U);return k(e)});b.wbg.__wbg_new_63b92bc8671ed464=(a=>{const b=new V(c(a));return k(b)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,d)=>{c(a).set(c(b),d>>>U)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_set_1f9b04f170055d33=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/$+ W]=g;r()[b/$+ U]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new T(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper868=((a,b,c)=>{const d=u(a,b,a1,v);return k(d)});b.wbg.__wbindgen_closure_wrapper870=((a,b,c)=>{const d=u(a,b,a1,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1441=((a,b,c)=>{const d=u(a,b,677,z);return k(d)});b.wbg.__wbindgen_closure_wrapper1600=((a,b,c)=>{const d=A(a,b,763,B);return k(d)});b.wbg.__wbindgen_closure_wrapper1960=((a,b,c)=>{const d=u(a,b,885,C);return k(d)});return b});var v=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h6079e273fd38eb97(b,c)});var B=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h14c1e49350ae65bc(c,d,x(e))}finally{b[w++]=P}});let a;const b=new N(O).fill(P);b.push(P,Q,!0,!1);let d=b.length;const g=typeof TextDecoder!==R?new TextDecoder(S,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw T(`TextDecoder not available`)}};if(typeof TextDecoder!==R){g.decode()};let h=Q;let l=U;const m=typeof TextEncoder!==R?new TextEncoder(S):{encode:()=>{throw T(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=Q;const t=typeof _===R?{register:()=>{},unregister:()=>{}}:new _(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let w=O;let E=Q;export default M;export{L as initSync}