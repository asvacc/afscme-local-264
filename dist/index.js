// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iF67N":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a9ae35caf2427ece";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5lBMl":[function(require,module,exports) {
var _mainCss = require("./css/main.css");
var _mainJs = require("./js/main.js");

},{"./css/main.css":"gdeW1","./js/main.js":"5wnyu"}],"gdeW1":[function() {},{}],"5wnyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _glightboxJs = require("./components/glightbox.js");
var _glightboxJsDefault = parcelHelpers.interopDefault(_glightboxJs);
var _swiperJs = require("./components/swiper.js");
var _swiperJsDefault = parcelHelpers.interopDefault(_swiperJs);
(0, _alpinejsDefault.default).data("swiper", (0, _swiperJsDefault.default));
window.Alpine = (0, _alpinejsDefault.default);
(0, _alpinejsDefault.default).start();

},{"alpinejs":"69hXP","./components/glightbox.js":"7mqeZ","./components/swiper.js":"jmBbq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69hXP":[function(require,module,exports) {
// packages/alpinejs/src/scheduler.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alpine", ()=>src_default);
parcelHelpers.export(exports, "default", ()=>module_default);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = /* @__PURE__ */ new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(()=>{
        let value = getter();
        JSON.stringify(value);
        if (!firstTime) queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>release(effectReference);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
    if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
var initInterceptors = [];
function interceptInit(callback) {
    initInterceptors.push(callback);
}
function initTree(el, walker = walk, intercept = ()=>{}) {
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            intercept(el2, skip);
            initInterceptors.forEach((i)=>i(el2, skip));
            directives(el2, el2.attributes).forEach((handle)=>handle());
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root) {
    walk(root, (el)=>{
        cleanupAttributes(el);
        cleanupElement(el);
    });
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    if (el._x_cleanups) while(el._x_cleanups.length)el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(()=>records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(()=>{
        if (queuedMutations.length === queueLengthWhenTriggered) while(queuedMutations.length > 0)queuedMutations.shift()();
    });
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = /* @__PURE__ */ new Set();
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.add(node));
            mutations[i].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.add(node));
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.has(node)) continue;
        onElRemoveds.forEach((i)=>i(node));
        destroyTree(node);
    }
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node of addedNodes){
        if (removedNodes.has(node)) continue;
        if (!node.isConnected) continue;
        delete node._x_ignoreSelf;
        delete node._x_ignore;
        onElAddeds.forEach((i)=>i(node));
        node._x_ignore = true;
        node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    return new Proxy({
        objects
    }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys ({ objects }) {
        return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
    },
    has ({ objects }, name) {
        if (name == Symbol.unscopables) return false;
        return objects.some((obj)=>Object.prototype.hasOwnProperty.call(obj, name));
    },
    get ({ objects }, name, thisProxy) {
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || {}, name, thisProxy);
    },
    set ({ objects }, name, value, thisProxy) {
        const target = objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if (descriptor?.set && descriptor?.get) return Reflect.set(target, name, value, thisProxy);
        return Reflect.set(target, name, value);
    }
};
function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key)=>{
        acc[key] = Reflect.get(this, key);
        return acc;
    }, {});
}
// packages/alpinejs/src/interceptor.js
function initInterceptors2(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }])=>{
            if (enumerable === false || value === void 0) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback])=>{
        let memoizedUtilities = null;
        function getUtilities() {
            if (memoizedUtilities) return memoizedUtilities;
            else {
                let [utilities, cleanup2] = getElementBoundUtilities(el);
                memoizedUtilities = {
                    interceptor,
                    ...utilities
                };
                onElRemoved(el, cleanup2);
                return memoizedUtilities;
            }
        }
        Object.defineProperty(obj, `$${name}`, {
            get () {
                return callback(el, getUtilities());
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    error2 = Object.assign(error2 ?? {
        message: "No error message given."
    }, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            let func2 = new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
            Object.defineProperty(func2, "name", {
                value: `[Alpine] ${expression}`
            });
            return func2;
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else if (typeof value === "object" && value instanceof Promise) value.then((i)=>receiver(i));
    else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
        before (directive2) {
            if (!directiveHandlers[directive2]) {
                console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
                return;
            }
            const pos = directiveOrder.indexOf(directive2);
            directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
    };
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name, value })=>{
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (expression === false) return;
    if (!expression || typeof expression === "boolean") registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
    interceptors.push(callback);
}
function cloneNode(from, to) {
    interceptors.forEach((i)=>i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        initTree(to, (el, callback)=>{
            callback(el, ()=>{});
        });
    });
    isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(el, name, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (el.type === "radio") {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) {
            if (typeof value === "boolean") el.checked = safeParseBoolean(el.value) === value;
            else el.checked = checkedAttrLooseCompare(el.value, value);
        }
    } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) el.value = value;
        else if (!Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function safeParseBoolean(rawValue) {
    if ([
        1,
        "1",
        "true",
        "on",
        "yes",
        true
    ].includes(rawValue)) return true;
    if ([
        0,
        "0",
        "false",
        "off",
        "no",
        false
    ].includes(rawValue)) return false;
    return rawValue ? Boolean(rawValue) : null;
}
function isBooleanAttr(attrName) {
    const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
    ];
    return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(()=>{
            return evaluate(el, binding.expression);
        });
    }
    return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(()=>{
        let outer = outerGet();
        let inner = innerGet();
        if (firstRun) {
            innerSet(cloneIfObject(outer));
            firstRun = false;
        } else {
            let outerHashLatest = JSON.stringify(outer);
            let innerHashLatest = JSON.stringify(inner);
            if (outerHashLatest !== outerHash) innerSet(cloneIfObject(outer));
            else if (outerHashLatest !== innerHashLatest) outerSet(cloneIfObject(inner));
        }
        outerHash = JSON.stringify(outerGet());
        innerHash = JSON.stringify(innerGet());
    });
    return ()=>{
        release(reference);
    };
}
function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [
        callback
    ];
    callbacks.forEach((i)=>i(alpine_default));
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
    initInterceptors2(stores[name]);
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) return applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
    return ()=>{};
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
    return ()=>{
        while(cleanupRunners.length)cleanupRunners.pop()();
    };
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.13.5",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = /* @__PURE__ */ new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let getter = ()=>{
            let value;
            evaluate2((i)=>value = i);
            return value;
        };
        let unwatch = watch(getter, callback);
        cleanup2(unwatch);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while(currentEl){
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
    }
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el, { cleanup: cleanup2 })=>(name, key = null)=>{
        let cacheKey = `${name}${key ? `-${key}` : ""}`;
        return cacheIdByNameOnElement(el, cacheKey, cleanup2, ()=>{
            let root = closestIdRoot(el, name);
            let id = root ? root._x_ids[name] : findAndIncrementId(name);
            return key ? `${name}-${id}-${key}` : `${name}-${id}`;
        });
    });
interceptClone((from, to)=>{
    if (from._x_id) to._x_id = from._x_id;
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id) el._x_id = {};
    if (el._x_id[cacheKey]) return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(()=>{
        delete el._x_id[cacheKey];
    });
    return output;
}
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle({
            get () {
                return outerGet();
            },
            set (value) {
                outerSet(value);
            }
        }, {
            get () {
                return innerGet();
            },
            set (value) {
                innerSet(value);
            }
        });
        cleanup2(releaseEntanglement);
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2)=>{
        if (modifiers2.includes("prepend")) target2.parentNode.insertBefore(clone3, target2);
        else if (modifiers2.includes("append")) target2.parentNode.insertBefore(clone3, target2.nextSibling);
        else target2.appendChild(clone3);
    };
    mutateDom(()=>{
        placeInDom(clone2, target, modifiers);
        initTree(clone2);
        clone2._x_ignore = true;
    });
    el._x_teleportPutBack = ()=>{
        let target2 = getTarget(expression);
        mutateDom(()=>{
            placeInDom(el._x_teleport, target2, modifiers);
        });
    };
    cleanup2(()=>clone2.remove());
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
    let target = skipDuringClone(()=>{
        return document.querySelector(expression);
    }, ()=>{
        return teleportContainerDuringClone;
    })();
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
}
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 })=>{
    effect3(evaluateLater(el, expression));
}));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("self")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.target === el && next(e);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("once")) handler4 = wrapHandler(handler4, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
    });
    handler4 = wrapHandler(handler4, (next, e)=>{
        if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        }
        next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler4, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    if ([
        " ",
        "_"
    ].includes(subject)) return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once",
            "capture"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let scopeTarget = el;
    if (modifiers.includes("parent")) scopeTarget = el.parentNode;
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    else if (typeof expression === "function" && typeof expression() === "string") evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    else evaluateSet = ()=>{};
    let getValue = ()=>{
        let result;
        evaluateGet((value)=>result = value);
        return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value)=>{
        let result;
        evaluateGet((value2)=>result = value2);
        if (isGetterSetter(result)) result.set(value);
        else evaluateSet(()=>{}, {
            scope: {
                "__placeholder": value
            }
        });
    };
    if (typeof expression === "string" && el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? ()=>{} : on(el, event, modifiers, (e)=>{
        setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
        if ([
            void 0,
            null,
            ""
        ].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) el.dispatchEvent(new Event(event, {}));
    }
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e)=>{
            nextTick(()=>el._x_model && el._x_model.set(el.value));
        });
        cleanup2(()=>removeResetListener());
    }
    el._x_model = {
        get () {
            return getValue();
        },
        set (value) {
            setValue(value);
        }
    };
    el._x_forceModelUpdate = (value)=>{
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(()=>bind(el, "value", value));
        delete window.fromModel;
    };
    effect3(()=>{
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
    });
});
function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(()=>{
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (el.type === "checkbox") {
            if (Array.isArray(currentValue)) {
                let newValue = null;
                if (modifiers.includes("number")) newValue = safeParseNumber(event.target.value);
                else if (modifiers.includes("boolean")) newValue = safeParseBoolean(event.target.value);
                else newValue = event.target.value;
                return event.target.checked ? currentValue.concat([
                    newValue
                ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
            } else return event.target.checked;
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            if (modifiers.includes("number")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            });
            else if (modifiers.includes("boolean")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseBoolean(rawValue);
            });
            return Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
        } else {
            if (modifiers.includes("number")) return safeParseNumber(event.target.value);
            else if (modifiers.includes("boolean")) return safeParseBoolean(event.target.value);
            return modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
        }
    });
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) return;
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
};
handler2.inline = (el, { value, modifiers, expression })=>{
    if (!value) return;
    if (!el._x_inlineBindings) el._x_inlineBindings = {};
    el._x_inlineBindings[value] = {
        expression,
        extract: false
    };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 })=>{
    if (shouldSkipRegisteringDataDuringClone(el)) return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0 || data2 === true) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors2(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
});
interceptClone((from, to)=>{
    if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
    }
});
function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning) return false;
    if (isCloningLegacy) return true;
    return el.hasAttribute("data-has-alpine-state");
}
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>el2.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>keys.push(value2), {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>keys.push(value), {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i = 0; i < prevKeys.length; i++){
            let key = prevKeys[i];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i, 0, key);
                adds.push([
                    lastKey,
                    i
                ]);
            } else if (prevIndex !== i) {
                let keyInSpot = prevKeys.splice(i, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i = 0; i < removes.length; i++){
            let key = removes[i];
            if (!!lookup[key]._x_effects) lookup[key]._x_effects.forEach(dequeueJob);
            lookup[key].remove();
            lookup[key] = null;
            delete lookup[key];
        }
        for(let i = 0; i < moves.length; i++){
            let [keyInSpot, keyForSpot] = moves[i];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                if (!elForSpot) warn(`x-for ":key" is undefined or invalid`, templateEl);
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i = 0; i < adds.length; i++){
            let [lastKey2, index] = adds[i];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            let reactiveScope = reactive(scope2);
            addScopeToNode(clone2, reactiveScope, templateEl);
            clone2._x_refreshXForScope = (newScope)=>{
                Object.entries(newScope).forEach(([key2, value])=>{
                    reactiveScope[key2] = value;
                });
            };
            mutateDom(()=>{
                lastEl.after(clone2);
                initTree(clone2);
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i = 0; i < sames.length; i++)lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler3);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            initTree(clone2);
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            walk(clone2, (node)=>{
                if (!!node._x_effects) node._x_effects.forEach(dequeueJob);
            });
            clone2.remove();
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
interceptClone((from, to)=>{
    if (from._x_ids) to._x_ids = from._x_ids;
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el)=>warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7mqeZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _glightbox = require("glightbox");
var _glightboxDefault = parcelHelpers.interopDefault(_glightbox);
var _glightboxMinCss = require("glightbox/dist/css/glightbox.min.css");
document.addEventListener("DOMContentLoaded", function(event) {
    const lightbox = (0, _glightboxDefault.default)();
});

},{"glightbox":"kBGcU","glightbox/dist/css/glightbox.min.css":"etoij","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBGcU":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
    }
    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        for(var i = 0; i < t.length; i++){
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    var s = Date.now();
    function l() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n]);
        }; i < n; i++){
            var o = arguments[i];
            s(o);
        }
        return e;
    }
    function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [
            e
        ]), A(e) || L(e) || (e = [
            e
        ]), 0 != P(e)) {
            if (A(e) && !L(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (L(e)) {
                for(var s in e)if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[s] = e[s] || [], l = {
            all: n,
            evt: null,
            found: null
        };
        return t && i && P(n) > 0 && o(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
        }), l;
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement, n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, a = t.once, h = void 0 !== a && a, d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];
        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy();
        }
        return C(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            o(g, function(t) {
                var i = r(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
            });
        }, o(g, function(t) {
            var i = r(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }));
        }), v;
    }
    function h(e, t) {
        o(t.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function d(e, t) {
        o(t.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function c(e, t) {
        return e.classList.contains(t);
    }
    function u(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return T(i) && i(), !1;
        var n = x(), s = t.split(" ");
        o(s, function(t) {
            h(e, "g" + t);
        }), a(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                o(s, function(e) {
                    d(t, "g" + e);
                }), T(i) && i();
            }
        });
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function f(e) {
        e.style.display = "block";
    }
    function p(e) {
        e.style.display = "none";
    }
    function m(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function x() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function b(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error");
        else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (C(t)) return b(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (T(i)) {
                        if (C(t)) return b(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function T(e) {
        return "function" == typeof e;
    }
    function C(e) {
        return "string" == typeof e;
    }
    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function E(e) {
        return Array.isArray(e);
    }
    function A(e) {
        return e && e.length && isFinite(e.length);
    }
    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t);
    }
    function I(e) {
        return null == e;
    }
    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)O(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'));
    }
    function X(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z();
                        return void (r && (r.focus(), h(r, "focused")));
                    }
                    var a = z(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function q(e, t) {
        var i = function(e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e, t);
        return function(e, t) {
            return e.x * t.y - t.x * e.y;
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
    }
    var N = function() {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i;
        }
        return n(e, [
            {
                key: "add",
                value: function(e) {
                    this.handlers.push(e);
                }
            },
            {
                key: "del",
                value: function(e) {
                    e || (this.handlers = []);
                    for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
                }
            },
            {
                key: "dispatch",
                value: function() {
                    for(var e = 0, t = this.handlers.length; e < t; e++){
                        var i = this.handlers[e];
                        "function" == typeof i && i.apply(this.el, arguments);
                    }
                }
            }
        ]), e;
    }();
    function D(e, t) {
        var i = new N(e);
        return i.add(t), i;
    }
    var _ = function() {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {};
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            };
        }
        return n(e, [
            {
                key: "start",
                value: function(e) {
                    if (e.touches) {
                        if (e.target && e.target.nodeName && [
                            "a",
                            "button",
                            "input"
                        ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        else {
                            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                            var t = this.preV;
                            if (e.touches.length > 1) {
                                this._cancelLongTap(), this._cancelSingleTap();
                                var i = {
                                    x: e.touches[1].pageX - this.x1,
                                    y: e.touches[1].pageY - this.y1
                                };
                                t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element);
                            }
                            this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                                this.longTap.dispatch(e, this.element), this._preventTap = !0;
                            }).bind(this), 750);
                        }
                    }
                }
            },
            {
                key: "move",
                value: function(e) {
                    if (e.touches) {
                        var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                        if (this.isDoubleTap = !1, i > 1) {
                            var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                        } else {
                            if (null !== this.x2) {
                                e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                                (a > 10 || h > 10) && (this._preventTap = !0);
                            } else e.deltaX = 0, e.deltaY = 0;
                            this.pressMove.dispatch(e, this.element);
                        }
                        this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                    }
                }
            },
            {
                key: "end",
                value: function(e) {
                    if (e.changedTouches) {
                        this._cancelLongTap();
                        var t = this;
                        e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                            t.swipe.dispatch(e, t.element);
                        }, 0)) : (this.tapTimeout = setTimeout(function() {
                            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                        }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                            t.singleTap.dispatch(e, t.element);
                        }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                    }
                }
            },
            {
                key: "cancelAll",
                value: function() {
                    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                }
            },
            {
                key: "cancel",
                value: function(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                }
            },
            {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout);
                }
            },
            {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout);
                }
            },
            {
                key: "_swipeDirection",
                value: function(e, t, i, n) {
                    return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    this[e] && this[e].add(t);
                }
            },
            {
                key: "off",
                value: function(e, t) {
                    this[e] && this[e].del(t);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
                }
            }
        ]), e;
    }();
    function W(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = u(n, ".ginner-container"), l = e.querySelector(".gslide-description");
        i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                d(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = y(), l = s.width, o = s.height, r = !1, a = null, g = null, f = null, p = !1, m = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X, {
            touchStart: function(t) {
                if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n && n.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                    if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                    v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                    e.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m = x || 1;
            },
            pinch: function(e) {
                if (!f || p) return !1;
                b = !0, f.scaleX = f.scaleY = m * e.zoom;
                var t = m * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return W(g);
                            e.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return W(g);
                            e.prevSlide();
                        }
                    }
                }
            }
        });
        e.events.touch = q;
    }
    var H = function() {
        function e(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                return s.dragStart(e);
            }, !1), this.img.addEventListener("mouseup", function(e) {
                return s.dragEnd(e);
            }, !1), this.img.addEventListener("mousemove", function(e) {
                return s.drag(e);
            }, !1), this.img.addEventListener("click", function(e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
            }, !1), this.img.setZoomEvents = !0;
        }
        return n(e, [
            {
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0);
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                    }
                }
            },
            {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
                }
            },
            {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
                }
            },
            {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i);
                    }
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                }
            },
            {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                }
            }
        ]), e;
    }(), V = function() {
        function e() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
                return i.dragStart(e);
            }, !1), this.el.addEventListener("mouseup", function(e) {
                return i.dragEnd(e);
            }, !1), this.el.addEventListener("mousemove", function(e) {
                return i.drag(e);
            }, !1);
        }
        return n(e, [
            {
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== [
                            "input",
                            "select",
                            "textarea",
                            "button",
                            "a"
                        ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")));
                    }
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                        }
                    }
                }
            },
            {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                    }
                    return e;
                }
            },
            {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                }
            }
        ]), e;
    }();
    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            T(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function F(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"), a = this.getAllPlayers();
        h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>");
            }
            var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, T(n) && n();
            }), b(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e);
            }), f.on("enterfullscreen", R), f.on("exitfullscreen", R);
        });
    }
    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"), "exitfullscreen" === e.type && d(t, "fullscreen");
    }
    function G(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), T(n) && n();
    }
    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, h(l, "node-ready"), T(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t.href,
            callback: n
        });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
    }
    var U = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.defaults = {
                href: "",
                sizes: "",
                srcset: "",
                title: "",
                type: "",
                videoProvider: "",
                description: "",
                alt: "",
                descPosition: "bottom",
                effect: "",
                width: "",
                height: "",
                content: !1,
                zoomable: !0,
                draggable: !0
            }, L(i) && (this.defaults = l(this.defaults, i));
        }
        return n(e, [
            {
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
                }
            },
            {
                key: "parseConfig",
                value: function(e, t) {
                    var i = this, n = l({
                        descPosition: t.descPosition
                    }, this.defaults);
                    if (L(e) && !k(e)) {
                        O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l(n, e);
                        return this.setSize(s, t), s;
                    }
                    var r = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, function(s, l) {
                        O(t, l) && "width" !== l && (n[l] = t[l]);
                        var o = e.dataset[l];
                        I(o) || (n[l] = i.sanitizeValue(o));
                    }), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I(d) || "" === d || (n.title = d);
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I(c) || "" === c || (n.title = c);
                        }
                    } else {
                        var u = [];
                        o(n, function(e, t) {
                            u.push(";\\s?" + t);
                        }), u = u.join("\\s?:|"), "" !== a.trim() && o(n, function(e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r);
                            }
                        });
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML;
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e;
                        }
                        g && (n.description = g);
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML);
                    }
                    return this.setSize(n, t, e), this.slideConfig = n, n;
                }
            },
            {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                    return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
                }
            },
            {
                key: "checkSize",
                value: function(e) {
                    return M(e) ? "".concat(e, "px") : e;
                }
            },
            {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e;
                }
            }
        ]), e;
    }(), $ = function() {
        function e(i, n, s) {
            t(this, e), this.element = i, this.instance = n, this.index = s;
        }
        return n(e, [
            {
                key: "setContent",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1
                    });
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (v = function() {
                        T(i) && i(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        });
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [
                            t,
                            s,
                            this.index,
                            v
                        ]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, function() {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, function() {
                                e.instance.resize();
                            })), T(v) && v();
                        }));
                        Z.apply(this, [
                            t,
                            s,
                            this.index,
                            v
                        ]);
                    } else F.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                }
            },
            {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
                }
            },
            {
                key: "descriptionEvents",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    a("click", {
                        onElement: n,
                        withCallback: function(e, n) {
                            e.preventDefault();
                            var s = document.body, l = u(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h(s, "gdesc-open");
                            var o = a("click", {
                                onElement: [
                                    s,
                                    u(l, ".gslide-description")
                                ],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                        d(s, "gdesc-closed");
                                    }, 400), o.destroy());
                                }
                            });
                        }
                    });
                }
            },
            {
                key: "create",
                value: function() {
                    return m(this.instance.settings.slideHTML);
                }
            },
            {
                key: "getConfig",
                value: function() {
                    k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
                }
            }
        ]), e;
    }(), J = w(), K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, te = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
        }
        return n(e, [
            {
                key: "init",
                value: function() {
                    var e = this, t = this.getSelector();
                    t && (this.baseEvents = a("click", {
                        onElement: t,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i);
                        }
                    })), this.elements = this.getElements();
                }
            },
            {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M(t) ? t : this.settings.startAt;
                    if (k(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                    }
                    M(i) || (i = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer");
                    }
                    h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
                }
            },
            {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e);
                }
            },
            {
                key: "showSlide",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader);
                    else {
                        f(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                        });
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
                }
            },
            {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                        n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", l);
                        });
                    }, 200) : n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }
            },
            {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1);
                }
            },
            {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1);
                }
            },
            {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
                }
            },
            {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t), n = i.getConfig(), s = l({}, n), o = i.create(), r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o);
                        else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d);
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: a,
                        player: h
                    });
                }
            },
            {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                }
            },
            {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                    else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                l,
                                o
                            ]);
                        });
                    }
                    setTimeout(function() {
                        i.resize(e);
                    }, 100), h(e, "current");
                }
            },
            {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d(e, this.effectsClasses), h(e, "prev");
                    var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                        {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, function() {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev");
                    });
                }
            },
            {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers;
                }
            },
            {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t];
                }
            },
            {
                key: "stopSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "slidePlayerPause",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "playSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play();
                }
            },
            {
                key: "slidePlayerPlay",
                value: function(e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"));
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                    }
                }
            },
            {
                key: "setElements",
                value: function(e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && o(e, function(e, n) {
                        var s = new $(e, t, n), o = s.getConfig(), r = l({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
                        var e = m(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e);
                    }), this.showSlide(0, !0)));
                }
            },
            {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return o(this.elements, function(i, n) {
                        if (O(i, "node") && i.node == e) return t = n, !0;
                    }), t;
                }
            },
            {
                key: "getElements",
                value: function() {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
                    });
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                    }), t) : t;
                }
            },
            {
                key: "getGalleryElements",
                value: function(e, t) {
                    return e.filter(function(e) {
                        return e.gallery == t;
                    });
                }
            },
            {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                }
            },
            {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                }
            },
            {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index;
                }
            },
            {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out));
                    }
                    return e.join(" ");
                }
            },
            {
                key: "build",
                value: function() {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes, i = [];
                    o(t, function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                    });
                    var n = O(this.settings.svg, "next") ? this.settings.svg.next : "", s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = O(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                        onElement: g,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.close();
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.nextSlide();
                        }
                    })), this.prevButton && (this.events.prev = a("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.prevSlide();
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                        onElement: d,
                        withCallback: function(t, i) {
                            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close();
                        }
                    })), o(this.elements, function(t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
                    }), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                        onElement: window,
                        withCallback: function() {
                            e.resize();
                        }
                    }), this.built = !0;
                }
            },
            {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
                        var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n) {
                                if (l <= 768) n.querySelector("img");
                                else if (r) {
                                    var a = s.offsetHeight, u = n.querySelector("img");
                                    u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
                                }
                            }
                            if (i) {
                                var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p);
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth, S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {
                                        width: w * C,
                                        height: T * C
                                    };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
                            }
                        }
                    }
                }
            },
            {
                key: "reload",
                value: function() {
                    this.init();
                }
            },
            {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled");
                }
            },
            {
                key: "loop",
                value: function() {
                    var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O(this.settings, "loop") ? this.settings.loop : e, e;
                }
            },
            {
                key: "close",
                value: function() {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null;
                        }
                        return !1;
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(e) {
                        e.removeAttribute("aria-hidden");
                    }), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for(var t in e.events)e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null;
                        }
                        var i = document.body;
                        d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    });
                }
            },
            {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0);
                }
            },
            {
                key: "trigger",
                value: function(e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o(this.apiEvents, function(t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e && (r(i), o && n.push(s));
                    }), n.length && o(n, function(e) {
                        return t.apiEvents.splice(e, 1);
                    });
                }
            },
            {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length);
                }
            },
            {
                key: "version",
                value: function() {
                    return "3.1.0";
                }
            }
        ]), e;
    }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new te(e);
        return t.init(), t;
    };
});

},{}],"etoij":[function() {},{}],"jmBbq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiperBundleMinMjs = require("swiper/swiper-bundle.min.mjs");
var _swiperBundleMinMjsDefault = parcelHelpers.interopDefault(_swiperBundleMinMjs);
var _swiperBundleCss = require("swiper/swiper-bundle.css");
exports.default = (options)=>({
        swiper: null,
        init () {
            this.swiper = new (0, _swiperBundleMinMjsDefault.default)(this.$refs.swiper, options);
        }
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","swiper/swiper-bundle.css":"aErfw","swiper/swiper-bundle.min.mjs":"lPavB"}],"aErfw":[function() {},{}],"lPavB":[function(require,module,exports) {
/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMinMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMinMjs.S));
var _swiperCoreMinMjs = require("./shared/swiper-core.min.mjs");
var _virtualMinMjs = require("./modules/virtual.min.mjs");
var _virtualMinMjsDefault = parcelHelpers.interopDefault(_virtualMinMjs);
var _keyboardMinMjs = require("./modules/keyboard.min.mjs");
var _keyboardMinMjsDefault = parcelHelpers.interopDefault(_keyboardMinMjs);
var _mousewheelMinMjs = require("./modules/mousewheel.min.mjs");
var _mousewheelMinMjsDefault = parcelHelpers.interopDefault(_mousewheelMinMjs);
var _navigationMinMjs = require("./modules/navigation.min.mjs");
var _navigationMinMjsDefault = parcelHelpers.interopDefault(_navigationMinMjs);
var _paginationMinMjs = require("./modules/pagination.min.mjs");
var _paginationMinMjsDefault = parcelHelpers.interopDefault(_paginationMinMjs);
var _scrollbarMinMjs = require("./modules/scrollbar.min.mjs");
var _scrollbarMinMjsDefault = parcelHelpers.interopDefault(_scrollbarMinMjs);
var _parallaxMinMjs = require("./modules/parallax.min.mjs");
var _parallaxMinMjsDefault = parcelHelpers.interopDefault(_parallaxMinMjs);
var _zoomMinMjs = require("./modules/zoom.min.mjs");
var _zoomMinMjsDefault = parcelHelpers.interopDefault(_zoomMinMjs);
var _controllerMinMjs = require("./modules/controller.min.mjs");
var _controllerMinMjsDefault = parcelHelpers.interopDefault(_controllerMinMjs);
var _a11YMinMjs = require("./modules/a11y.min.mjs");
var _a11YMinMjsDefault = parcelHelpers.interopDefault(_a11YMinMjs);
var _historyMinMjs = require("./modules/history.min.mjs");
var _historyMinMjsDefault = parcelHelpers.interopDefault(_historyMinMjs);
var _hashNavigationMinMjs = require("./modules/hash-navigation.min.mjs");
var _hashNavigationMinMjsDefault = parcelHelpers.interopDefault(_hashNavigationMinMjs);
var _autoplayMinMjs = require("./modules/autoplay.min.mjs");
var _autoplayMinMjsDefault = parcelHelpers.interopDefault(_autoplayMinMjs);
var _thumbsMinMjs = require("./modules/thumbs.min.mjs");
var _thumbsMinMjsDefault = parcelHelpers.interopDefault(_thumbsMinMjs);
var _freeModeMinMjs = require("./modules/free-mode.min.mjs");
var _freeModeMinMjsDefault = parcelHelpers.interopDefault(_freeModeMinMjs);
var _gridMinMjs = require("./modules/grid.min.mjs");
var _gridMinMjsDefault = parcelHelpers.interopDefault(_gridMinMjs);
var _manipulationMinMjs = require("./modules/manipulation.min.mjs");
var _manipulationMinMjsDefault = parcelHelpers.interopDefault(_manipulationMinMjs);
var _effectFadeMinMjs = require("./modules/effect-fade.min.mjs");
var _effectFadeMinMjsDefault = parcelHelpers.interopDefault(_effectFadeMinMjs);
var _effectCubeMinMjs = require("./modules/effect-cube.min.mjs");
var _effectCubeMinMjsDefault = parcelHelpers.interopDefault(_effectCubeMinMjs);
var _effectFlipMinMjs = require("./modules/effect-flip.min.mjs");
var _effectFlipMinMjsDefault = parcelHelpers.interopDefault(_effectFlipMinMjs);
var _effectCoverflowMinMjs = require("./modules/effect-coverflow.min.mjs");
var _effectCoverflowMinMjsDefault = parcelHelpers.interopDefault(_effectCoverflowMinMjs);
var _effectCreativeMinMjs = require("./modules/effect-creative.min.mjs");
var _effectCreativeMinMjsDefault = parcelHelpers.interopDefault(_effectCreativeMinMjs);
var _effectCardsMinMjs = require("./modules/effect-cards.min.mjs");
var _effectCardsMinMjsDefault = parcelHelpers.interopDefault(_effectCardsMinMjs);
const modules = [
    (0, _virtualMinMjsDefault.default),
    (0, _keyboardMinMjsDefault.default),
    (0, _mousewheelMinMjsDefault.default),
    (0, _navigationMinMjsDefault.default),
    (0, _paginationMinMjsDefault.default),
    (0, _scrollbarMinMjsDefault.default),
    (0, _parallaxMinMjsDefault.default),
    (0, _zoomMinMjsDefault.default),
    (0, _controllerMinMjsDefault.default),
    (0, _a11YMinMjsDefault.default),
    (0, _historyMinMjsDefault.default),
    (0, _hashNavigationMinMjsDefault.default),
    (0, _autoplayMinMjsDefault.default),
    (0, _thumbsMinMjsDefault.default),
    (0, _freeModeMinMjsDefault.default),
    (0, _gridMinMjsDefault.default),
    (0, _manipulationMinMjsDefault.default),
    (0, _effectFadeMinMjsDefault.default),
    (0, _effectCubeMinMjsDefault.default),
    (0, _effectFlipMinMjsDefault.default),
    (0, _effectCoverflowMinMjsDefault.default),
    (0, _effectCreativeMinMjsDefault.default),
    (0, _effectCardsMinMjsDefault.default)
];
(0, _swiperCoreMinMjs.S).use(modules);

},{"./shared/swiper-core.min.mjs":"5yFv0","./modules/virtual.min.mjs":"gtD4C","./modules/keyboard.min.mjs":"g564D","./modules/mousewheel.min.mjs":"a1h1i","./modules/navigation.min.mjs":"kRi9Q","./modules/pagination.min.mjs":"56ScH","./modules/scrollbar.min.mjs":"hsCU0","./modules/parallax.min.mjs":"26fXf","./modules/zoom.min.mjs":"1OJfQ","./modules/controller.min.mjs":"gDERx","./modules/a11y.min.mjs":"8Xwor","./modules/history.min.mjs":"fnAE4","./modules/hash-navigation.min.mjs":"8JnJn","./modules/autoplay.min.mjs":"9xfb8","./modules/thumbs.min.mjs":"6ESRs","./modules/free-mode.min.mjs":"eOW0L","./modules/grid.min.mjs":"dI2Xv","./modules/manipulation.min.mjs":"i7tKB","./modules/effect-fade.min.mjs":"7b8YE","./modules/effect-cube.min.mjs":"4Xe5q","./modules/effect-flip.min.mjs":"q2K6E","./modules/effect-coverflow.min.mjs":"1wJjZ","./modules/effect-creative.min.mjs":"gJMVE","./modules/effect-cards.min.mjs":"dfbka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yFv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
var _utilsMinMjs = require("./utils.min.mjs");
let support, deviceCached, browser;
function calcSupport() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = (0, _ssrWindowEsmMinMjs.g)();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    };
}
function getSupport() {
    return support || (support = calcSupport()), support;
}
function calcDevice(e) {
    let { userAgent: t } = void 0 === e ? {} : e;
    const s = getSupport(), i = (0, _ssrWindowEsmMinMjs.a)(), r = i.navigator.platform, n = t || i.navigator.userAgent, a = {
        ios: !1,
        android: !1
    }, l = i.screen.width, o = i.screen.height, d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === r;
    let m = "MacIntel" === r;
    return !c && m && s.touch && [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ].indexOf(`${l}x${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [
        0,
        1,
        "13_0_0"
    ]), m = !1), d && !h && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a;
}
function getDevice(e) {
    return void 0 === e && (e = {}), deviceCached || (deviceCached = calcDevice(e)), deviceCached;
}
function calcBrowser() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = getDevice();
    let s = !1;
    function i() {
        const t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
    }
    if (i()) {
        const t = String(e.navigator.userAgent);
        if (t.includes("Version/")) {
            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e)=>Number(e));
            s = e < 16 || 16 === e && i < 2;
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = i();
    return {
        isSafari: s || n,
        needPerspectiveFix: s,
        need3dFix: n || r && t.ios,
        isWebView: r
    };
}
function getBrowser() {
    return browser || (browser = calcBrowser()), browser;
}
function Resize(e) {
    let { swiper: t, on: s, emit: i } = e;
    const r = (0, _ssrWindowEsmMinMjs.a)();
    let n = null, a = null;
    const l = ()=>{
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
    }, o = ()=>{
        t && !t.destroyed && t.initialized && i("orientationchange");
    };
    s("init", ()=>{
        t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e)=>{
            a = r.requestAnimationFrame(()=>{
                const { width: s, height: i } = t;
                let r = s, n = i;
                e.forEach((e)=>{
                    let { contentBoxSize: s, contentRect: i, target: a } = e;
                    a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
                }), r === s && n === i || l();
            });
        }), n.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", o));
    }), s("destroy", ()=>{
        a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", o);
    });
}
function Observer(e) {
    let { swiper: t, extendParams: s, on: i, emit: r } = e;
    const n = [], a = (0, _ssrWindowEsmMinMjs.a)(), l = function(e, s) {
        void 0 === s && (s = {});
        const i = new (a.MutationObserver || a.WebkitMutationObserver)((e)=>{
            if (t.__preventObserver__) return;
            if (1 === e.length) return void r("observerUpdate", e[0]);
            const s = function() {
                r("observerUpdate", e[0]);
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0);
        });
        i.observe(e, {
            attributes: void 0 === s.attributes || s.attributes,
            childList: void 0 === s.childList || s.childList,
            characterData: void 0 === s.characterData || s.characterData
        }), n.push(i);
    };
    s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", ()=>{
        if (t.params.observer) {
            if (t.params.observeParents) {
                const e = (0, _utilsMinMjs.a)(t.hostEl);
                for(let t = 0; t < e.length; t += 1)l(e[t]);
            }
            l(t.hostEl, {
                childList: t.params.observeSlideChildren
            }), l(t.wrapperEl, {
                attributes: !1
            });
        }
    }), i("destroy", ()=>{
        n.forEach((e)=>{
            e.disconnect();
        }), n.splice(0, n.length);
    });
}
var eventsEmitter = {
    on (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return e.split(" ").forEach((e)=>{
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
        }), i;
    },
    once (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for(var s = arguments.length, n = new Array(s), a = 0; a < s; a++)n[a] = arguments[a];
            t.apply(i, n);
        }
        return r.__emitterProxy = t, i.on(e, r, s);
    },
    onAny (e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny (e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off (e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e)=>{
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((i, r)=>{
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
            });
        }), s) : s;
    },
    emit () {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for(var r = arguments.length, n = new Array(r), a = 0; a < r; a++)n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
        return (Array.isArray(t) ? t : t.split(" ")).forEach((t)=>{
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e)=>{
                e.apply(i, [
                    t,
                    ...s
                ]);
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e)=>{
                e.apply(i, s);
            });
        }), e;
    }
};
function updateSize() {
    const e = this;
    let t, s;
    const i = e.el;
    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, _utilsMinMjs.o)(i, "padding-left") || 0, 10) - parseInt((0, _utilsMinMjs.o)(i, "padding-right") || 0, 10), s = s - parseInt((0, _utilsMinMjs.o)(i, "padding-top") || 0, 10) - parseInt((0, _utilsMinMjs.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }));
}
function updateSlides() {
    const e = this;
    function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
    }
    const s = e.params, { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: l } = e, o = e.virtual && s.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = (0, _utilsMinMjs.e)(r, `.${e.params.slideClass}, swiper-slide`), p = o ? e.virtual.slides.length : c.length;
    let u = [];
    const h = [], m = [];
    let f = s.slidesOffsetBefore;
    "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
    let v = s.slidesOffsetAfter;
    "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
    const g = e.snapGrid.length, w = e.slidesGrid.length;
    let S = s.spaceBetween, T = -f, b = 0, x = 0;
    if (void 0 === n) return;
    "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * n : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, c.forEach((e)=>{
        a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
    }), s.centeredSlides && s.cssMode && ((0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", ""), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", ""));
    const y = s.grid && s.grid.rows > 1 && e.grid;
    let E;
    y ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
    const C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e)=>void 0 !== s.breakpoints[e].slidesPerView).length > 0;
    for(let i = 0; i < p; i += 1){
        let r;
        if (E = 0, c[i] && (r = c[i]), y && e.grid.updateSlide(i, r, c), !c[i] || "none" !== (0, _utilsMinMjs.o)(r, "display")) {
            if ("auto" === s.slidesPerView) {
                C && (c[i].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(r), a = r.style.transform, l = r.style.webkitTransform;
                if (a && (r.style.transform = "none"), l && (r.style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? (0, _utilsMinMjs.f)(r, "width", !0) : (0, _utilsMinMjs.f)(r, "height", !0);
                else {
                    const e = t(n, "width"), s = t(n, "padding-left"), i = t(n, "padding-right"), a = t(n, "margin-left"), l = t(n, "margin-right"), o = n.getPropertyValue("box-sizing");
                    if (o && "border-box" === o) E = e + a + l;
                    else {
                        const { clientWidth: t, offsetWidth: n } = r;
                        E = e + s + i + a + l + (n - t);
                    }
                }
                a && (r.style.transform = a), l && (r.style.webkitTransform = l), s.roundLengths && (E = Math.floor(E));
            } else E = (n - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${E}px`);
            c[i] && (c[i].swiperSlideSize = E), m.push(E), s.centeredSlides ? (T = T + E / 2 + b / 2 + S, 0 === b && 0 !== i && (T = T - n / 2 - S), 0 === i && (T = T - n / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && u.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(T), h.push(T), T = T + E + S), e.virtualSize += E + S, b = E, x += 1;
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, n) + v, a && l && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + S}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + S}px`), y && e.grid.updateWrapperSize(E, u), !s.centeredSlides) {
        const t = [];
        for(let i = 0; i < u.length; i += 1){
            let r = u[i];
            s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r);
        }
        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
    }
    if (o && s.loop) {
        const t = m[0] + S;
        if (s.slidesPerGroup > 1) {
            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup), r = t * s.slidesPerGroup;
            for(let e = 0; e < i; e += 1)u.push(u[u.length - 1] + r);
        }
        for(let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t;
    }
    if (0 === u.length && (u = [
        0
    ]), 0 !== S) {
        const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter((e, t)=>!(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e)=>{
            e.style[t] = `${S}px`;
        });
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = e - n;
        u = u.map((e)=>e <= 0 ? -f : e > t ? t + v : e);
    }
    if (s.centerInsufficientSlides) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < n) {
            const s = (n - e - t) / 2;
            u.forEach((e, t)=>{
                u[t] = e - s;
            }), h.forEach((e, t)=>{
                h[t] = e + s;
            });
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", -u[0] + "px"), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
        const t = -e.snapGrid[0], s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map((e)=>e + t), e.slidesGrid = e.slidesGrid.map((e)=>e + s);
    }
    if (p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
        const t = `${s.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
    }
}
function updateAutoHeight(e) {
    const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
    let r, n = 0;
    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
    const a = (e)=>i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e)=>{
            s.push(e);
        });
        else for(r = 0; r < Math.ceil(t.params.slidesPerView); r += 1){
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
        }
    } else s.push(a(t.activeIndex));
    for(r = 0; r < s.length; r += 1)if (void 0 !== s[r]) {
        const e = s[r].offsetHeight;
        n = e > n ? e : n;
    }
    (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
}
function updateSlidesOffset() {
    const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for(let i = 0; i < t.length; i += 1)t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
}
const toggleSlideClasses$1 = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesProgress(e) {
    void 0 === e && (e = this && this.translate || 0);
    const t = this, s = t.params, { slides: i, rtlTranslate: r, snapGrid: n } = t;
    if (0 === i.length) return;
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    let a = -e;
    r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let l = s.spaceBetween;
    "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
    for(let e = 0; e < i.length; e += 1){
        const o = i[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), u = -(a - d), h = u + t.slidesSizesGrid[e], m = u >= 0 && u <= t.size - t.slidesSizesGrid[e], f = u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size;
        f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), toggleSlideClasses$1(o, f, s.slideVisibleClass), toggleSlideClasses$1(o, m, s.slideFullyVisibleClass), o.progress = r ? -c : c, o.originalProgress = r ? -p : p;
    }
}
function updateProgress(e) {
    const t = this;
    if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
    }
    const s = t.params, i = t.maxTranslate() - t.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = t;
    const o = n, d = a;
    if (0 === i) r = 0, n = !0, a = !0;
    else {
        r = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
        n = s || r <= 0, a = l || r >= 1, s && (r = 0), l && (r = 1);
    }
    if (s.loop) {
        const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1), r = t.slidesGrid[s], n = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
        l = o >= r ? (o - r) / a : (o + a - n) / a, l > 1 && (l -= 1);
    }
    Object.assign(t, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: a
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
}
const toggleSlideClasses = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesClasses() {
    const e = this, { slides: t, params: s, slidesEl: i, activeIndex: r } = e, n = e.virtual && s.virtual.enabled, a = e.grid && s.grid && s.grid.rows > 1, l = (e)=>(0, _utilsMinMjs.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
    let o, d, c;
    if (n) {
        if (s.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`);
        } else o = l(`[data-swiper-slide-index="${r}"]`);
    } else a ? (o = t.filter((e)=>e.column === r)[0], c = t.filter((e)=>e.column === r + 1)[0], d = t.filter((e)=>e.column === r - 1)[0]) : o = t[r];
    o && (a || (c = (0, _utilsMinMjs.p)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = (0, _utilsMinMjs.q)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop)), t.forEach((e)=>{
        toggleSlideClasses(e, e === o, s.slideActiveClass), toggleSlideClasses(e, e === c, s.slideNextClass), toggleSlideClasses(e, e === d, s.slidePrevClass);
    }), e.emitSlidesClasses();
}
const processLazyPreloader = (e, t)=>{
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
    if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove());
        })), t && t.remove();
    }
}, unlazy = (e, t)=>{
    if (!e.slides[t]) return;
    const s = e.slides[t].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
}, preload = (e)=>{
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const s = e.slides.length;
    if (!s || !t || t < 0) return;
    t = Math.min(t, s);
    const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), r = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const s = r, n = [
            s - t
        ];
        return n.push(...Array.from({
            length: t
        }).map((e, t)=>s + i + t)), void e.slides.forEach((t, s)=>{
            n.includes(t.column) && unlazy(e, s);
        });
    }
    const n = r + i - 1;
    if (e.params.rewind || e.params.loop) for(let i = r - t; i <= n + t; i += 1){
        const t = (i % s + s) % s;
        (t < r || t > n) && unlazy(e, t);
    }
    else for(let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)i !== r && (i > n || i < r) && unlazy(e, i);
};
function getActiveIndexByTranslate(e) {
    const { slidesGrid: t, params: s } = e, i = e.rtlTranslate ? e.translate : -e.translate;
    let r;
    for(let e = 0; e < t.length; e += 1)void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
    return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
}
function updateActiveIndex(e) {
    const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: l } = t;
    let o, d = e;
    const c = (e)=>{
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
    };
    if (void 0 === d && (d = getActiveIndexByTranslate(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
    else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / r.slidesPerGroup);
    }
    if (o >= i.length && (o = i.length - 1), d === n && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
    if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
    const p = t.grid && r.grid && r.grid.rows > 1;
    let u;
    if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
    else if (p) {
        const e = t.slides.filter((e)=>e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows);
    } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
    } else u = d;
    Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: d
    }), t.initialized && preload(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
}
function updateClickedSlide(e, t) {
    const s = this, i = s.params;
    let r = e.closest(`.${i.slideClass}, swiper-slide`);
    !r && s.isElement && t && t.length > 1 && t.includes(e) && [
        ...t.slice(t.indexOf(e) + 1, t.length)
    ].forEach((e)=>{
        !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
    });
    let n, a = !1;
    if (r) {
        for(let e = 0; e < s.slides.length; e += 1)if (s.slides[e] === r) {
            a = !0, n = e;
            break;
        }
    }
    if (!r || !a) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
    s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
};
function getSwiperTranslate(e) {
    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
    const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
    if (t.virtualTranslate) return s ? -i : i;
    if (t.cssMode) return i;
    let n = (0, _utilsMinMjs.j)(r, e);
    return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0;
}
function setTranslate(e, t) {
    const s = this, { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
    let l = 0, o = 0;
    let d;
    s.isHorizontal() ? l = i ? -e : e : o = e, r.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : o, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -o : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${o}px, 0px)`);
    const c = s.maxTranslate() - s.minTranslate();
    d = 0 === c ? 0 : (e - s.minTranslate()) / c, d !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
    const n = this, { params: a, wrapperEl: l } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const o = n.minTranslate(), d = n.maxTranslate();
    let c;
    if (c = i && e > o ? o : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
        const e = n.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.r)({
                swiper: n,
                targetPosition: -c,
                side: e ? "left" : "top"
            }), !0;
            l.scrollTo({
                [e ? "left" : "top"]: -c,
                behavior: "smooth"
            });
        }
        return !0;
    }
    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
};
function setTransition(e, t) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
}
function transitionEmit(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let l = i;
    if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
        if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`), "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
    }
}
function transitionStart(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }));
}
function transitionEnd(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    s.animating = !1, i.cssMode || (s.setTransition(0), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }));
}
var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
};
function slideTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
    const n = this;
    let a = e;
    a < 0 && (a = 0);
    const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = n;
    if (!m && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
    void 0 === t && (t = n.params.speed);
    const f = Math.min(n.params.slidesPerGroupSkip, a);
    let v = f + Math.floor((a - f) / n.params.slidesPerGroup);
    v >= o.length && (v = o.length - 1);
    const g = -o[v];
    if (l.normalizeSlideIndex) for(let e = 0; e < d.length; e += 1){
        const t = -Math.floor(100 * g), s = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e);
    }
    if (n.initialized && a !== p) {
        if (!n.allowSlideNext && (u ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate())) return !1;
        if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a) return !1;
    }
    let w;
    if (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(g), w = a > p ? "next" : a < p ? "prev" : "reset", u && -g === n.translate || !u && g === n.translate) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(g), "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;
    if (l.cssMode) {
        const e = n.isHorizontal(), s = u ? g : -g;
        if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(()=>{
                h[e ? "scrollLeft" : "scrollTop"] = s;
            })) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(()=>{
                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
            });
        } else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.r)({
                swiper: n,
                targetPosition: s,
                side: e ? "left" : "top"
            }), !0;
            h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
            });
        }
        return !0;
    }
    return n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, w));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function slideToLoop(e, t, s, i) {
    if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) e = parseInt(e, 10);
    const r = this;
    if (r.destroyed) return;
    void 0 === t && (t = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = e;
    if (r.params.loop) {
        if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
        else {
            let e;
            if (n) {
                const t = a * r.params.grid.rows;
                e = r.slides.filter((e)=>1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
            } else e = r.getSlideIndexByData(a);
            const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, { centeredSlides: s } = r.params;
            let l = r.params.slidesPerView;
            "auto" === l ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
            let o = t - e < l;
            if (s && (o = o || e < Math.ceil(l / 2)), i && s && "auto" !== r.params.slidesPerView && !n && (o = !1), o) {
                const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                });
            }
            if (n) {
                const e = a * r.params.grid.rows;
                a = r.slides.filter((t)=>1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
            } else a = r.getSlideIndexByData(a);
        }
    }
    return requestAnimationFrame(()=>{
        r.slideTo(a, t, s, i);
    }), r;
}
function slideNext(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { enabled: r, params: n, animating: a } = i;
    if (!r || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    let l = n.slidesPerGroup;
    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, d = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        if (i.loopFix({
            direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(()=>{
            i.slideTo(i.activeIndex + o, e, t, s);
        }), !0;
    }
    return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s);
}
function slidePrev(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d } = i;
    if (!o || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
    }
    const u = p(l ? i.translate : -i.translate), h = n.map((e)=>p(e));
    let m = n[h.indexOf(u) - 1];
    if (void 0 === m && r.cssMode) {
        let e;
        n.forEach((t, s)=>{
            u >= t && (e = s);
        }), void 0 !== e && (m = n[e > 0 ? e - 1 : e]);
    }
    let f = 0;
    if (void 0 !== m && (f = a.indexOf(m), f < 0 && (f = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), r.rewind && i.isBeginning) {
        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(r, e, t, s);
    }
    return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(()=>{
        i.slideTo(f, e, t, s);
    }), !0) : i.slideTo(f, e, t, s);
}
function slideReset(e, t, s) {
    void 0 === t && (t = !0);
    const i = this;
    if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
}
function slideToClosest(e, t, s, i) {
    void 0 === t && (t = !0), void 0 === i && (i = .5);
    const r = this;
    if (r.destroyed) return;
    void 0 === e && (e = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n), l = a + Math.floor((n - a) / r.params.slidesPerGroup), o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const e = r.snapGrid[l];
        o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup);
    } else {
        const e = r.snapGrid[l - 1];
        o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
}
function slideToClickedSlide() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: s } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r, n = e.clickedIndex;
    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n);
    } else e.slideTo(n);
}
var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
};
function loopCreate(e) {
    const t = this, { params: s, slidesEl: i } = t;
    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
    const r = ()=>{
        (0, _utilsMinMjs.e)(i, `.${s.slideClass}, swiper-slide`).forEach((e, t)=>{
            e.setAttribute("data-swiper-slide-index", t);
        });
    }, n = t.grid && s.grid && s.grid.rows > 1, a = s.slidesPerGroup * (n ? s.grid.rows : 1), l = t.slides.length % a != 0, o = n && t.slides.length % s.grid.rows != 0, d = (e)=>{
        for(let i = 0; i < e; i += 1){
            const e = t.isElement ? (0, _utilsMinMjs.c)("swiper-slide", [
                s.slideBlankClass
            ]) : (0, _utilsMinMjs.c)("div", [
                s.slideClass,
                s.slideBlankClass
            ]);
            t.slidesEl.append(e);
        }
    };
    if (l) {
        if (s.loopAddBlankSlides) d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides();
        else (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r();
    } else if (o) {
        if (s.loopAddBlankSlides) d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides();
        else (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r();
    } else r();
    t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
    });
}
function loopFix(e) {
    let { slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: r, activeSlideIndex: n, byController: a, byMousewheel: l } = void 0 === e ? {} : e;
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: h } = o, { centeredSlides: m } = h;
    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== o.snapIndex ? h.centeredSlides && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
    let f = h.slidesPerView;
    "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(h.slidesPerView, 10)), m && f % 2 == 0 && (f += 1));
    const v = h.slidesPerGroupAuto ? f : h.slidesPerGroup;
    let g = v;
    g % v != 0 && (g += v - g % v), g += h.loopAdditionalSlides, o.loopedSlides = g;
    const w = o.grid && h.grid && h.grid.rows > 1;
    d.length < f + g ? (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && "row" === h.grid.fill && (0, _utilsMinMjs.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const S = [], T = [];
    let b = o.activeIndex;
    void 0 === n ? n = o.getSlideIndex(d.filter((e)=>e.classList.contains(h.slideActiveClass))[0]) : b = n;
    const x = "next" === i || !i, y = "prev" === i || !i;
    let E = 0, C = 0;
    const M = w ? Math.ceil(d.length / h.grid.rows) : d.length, P = (w ? d[n].column : n) + (m && void 0 === r ? -f / 2 + .5 : 0);
    if (P < g) {
        E = Math.max(g - P, v);
        for(let e = 0; e < g - P; e += 1){
            const t = e - Math.floor(e / M) * M;
            if (w) {
                const e = M - t - 1;
                for(let t = d.length - 1; t >= 0; t -= 1)d[t].column === e && S.push(t);
            } else S.push(M - t - 1);
        }
    } else if (P + f > M - g) {
        C = Math.max(P - (M - 2 * g), v);
        for(let e = 0; e < C; e += 1){
            const t = e - Math.floor(e / M) * M;
            w ? d.forEach((e, s)=>{
                e.column === t && T.push(s);
            }) : T.push(t);
        }
    }
    if (o.__preventObserver__ = !0, requestAnimationFrame(()=>{
        o.__preventObserver__ = !1;
    }), y && S.forEach((e)=>{
        d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
    }), x && T.forEach((e)=>{
        d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
    }), o.recalcSlides(), "auto" === h.slidesPerView ? o.updateSlides() : w && (S.length > 0 && y || T.length > 0 && x) && o.slides.forEach((e, t)=>{
        o.grid.updateSlide(t, e, o.slides);
    }), h.watchSlidesProgress && o.updateSlidesOffset(), s) {
        if (S.length > 0 && y) {
            if (void 0 === t) {
                const e = o.slidesGrid[b], t = o.slidesGrid[b + E] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(b + Math.ceil(E), 0, !1, !0), r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
            } else if (r) {
                const e = w ? S.length / h.grid.rows : S.length;
                o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
            }
        } else if (T.length > 0 && x) {
            if (void 0 === t) {
                const e = o.slidesGrid[b], t = o.slidesGrid[b - C] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(b - C, 0, !1, !0), r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
            } else {
                const e = w ? T.length / h.grid.rows : T.length;
                o.slideTo(o.activeIndex - e, 0, !1, !0);
            }
        }
    }
    if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !a) {
        const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach((t)=>{
            !t.destroyed && t.params.loop && t.loopFix({
                ...e,
                slideTo: t.params.slidesPerView === h.slidesPerView && s
            });
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
            ...e,
            slideTo: o.controller.control.params.slidesPerView === h.slidesPerView && s
        });
    }
    o.emit("loopFix");
}
function loopDestroy() {
    const e = this, { params: t, slidesEl: s } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach((e)=>{
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        i[t] = e;
    }), e.slides.forEach((e)=>{
        e.removeAttribute("data-swiper-slide-index");
    }), i.forEach((e)=>{
        s.append(e);
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
};
function setGrabCursor(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1;
    });
}
function unsetGrabCursor() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1;
    }));
}
var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
};
function closestElement(e, t) {
    return void 0 === t && (t = this), function t(s) {
        if (!s || s === (0, _ssrWindowEsmMinMjs.g)() || s === (0, _ssrWindowEsmMinMjs.a)()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
    }(t);
}
function preventEdgeSwipe(e, t, s) {
    const i = (0, _ssrWindowEsmMinMjs.a)(), { params: r } = e, n = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
    return !n || !(s <= a || s >= i.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0);
}
function onTouchStart(e) {
    const t = this, s = (0, _ssrWindowEsmMinMjs.g)();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const r = t.touchEventsData;
    if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
    } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void preventEdgeSwipe(t, i, i.targetTouches[0].pageX);
    const { params: n, touches: a, enabled: l } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && n.preventInteractionOnTransition) return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let o = i.target;
    if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(o)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const d = !!n.noSwipingClass && "" !== n.noSwipingClass, c = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && c && (o = c[0]);
    const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, u = !(!i.target || !i.target.shadowRoot);
    if (n.noSwiping && (u ? closestElement(p, o) : o.closest(p))) return void (t.allowClick = !0);
    if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
    a.currentX = i.pageX, a.currentY = i.pageY;
    const h = a.currentX, m = a.currentY;
    if (!preventEdgeSwipe(t, i, h)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), a.startX = h, a.startY = m, r.touchStartTime = (0, _utilsMinMjs.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    o.matches(r.focusableElements) && (f = !1, "SELECT" === o.nodeName && (r.isTouched = !1)), s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== o && s.activeElement.blur();
    const v = f && t.allowTouchMove && n.touchStartPreventDefault;
    !n.touchStartForcePreventDefault && !v || o.isContentEditable || i.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
}
function onTouchMove(e) {
    const t = (0, _ssrWindowEsmMinMjs.g)(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: a, enabled: l } = s;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let o, d = e;
    if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
        if (null !== i.touchId) return;
        if (d.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === d.type) {
        if (o = [
            ...d.changedTouches
        ].filter((e)=>e.identifier === i.touchId)[0], !o || o.identifier !== i.touchId) return;
    } else o = d;
    if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
    const c = o.pageX, p = o.pageY;
    if (d.preventedByNestedSwiper) return n.startX = c, void (n.startY = p);
    if (!s.allowTouchMove) return d.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p
    }), i.touchStartTime = (0, _utilsMinMjs.d)()));
    if (r.touchReleaseOnEdges && !r.loop) {
        if (s.isVertical()) {
            if (p < n.startY && s.translate <= s.maxTranslate() || p > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate()) return;
    }
    if (t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", d), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = p;
    const u = n.currentX - n.startX, h = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
        let e;
        s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
    let m = s.isHorizontal() ? u : h, f = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), f = Math.abs(f) * (a ? 1 : -1)), n.diff = m, m *= r.touchRatio, a && (m = -m, f = -f);
    const v = s.touchesDirection;
    s.swipeDirection = m > 0 ? "prev" : "next", s.touchesDirection = f > 0 ? "prev" : "next";
    const g = s.params.loop && !r.cssMode, w = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
    if (!i.isMoved) {
        if (g && w && s.loopFix({
            direction: s.swipeDirection
        }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            s.wrapperEl.dispatchEvent(e);
        }
        i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d);
    }
    if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && v !== s.touchesDirection && g && w && Math.abs(m) >= 1) return Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p,
        startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
    s.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
    let S = !0, T = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (T = 0), m > 0 ? (g && w && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** T))) : m < 0 && (g && w && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** T))), S && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
        if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
}
function onTouchEnd(e) {
    const t = this, s = t.touchEventsData;
    let i, r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
        if (i = [
            ...r.changedTouches
        ].filter((e)=>e.identifier === s.touchId)[0], !i || i.identifier !== s.touchId) return;
    } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
    }
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(r.type)) {
        if (!([
            "pointercancel",
            "contextmenu"
        ].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    s.pointerId = null, s.touchId = null;
    const { params: n, touches: a, rtlTranslate: l, slidesGrid: o, enabled: d } = t;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const c = (0, _utilsMinMjs.d)(), p = c - s.touchStartTime;
    if (t.allowClick) {
        const e = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (s.lastClickTime = (0, _utilsMinMjs.d)(), (0, _utilsMinMjs.n)(()=>{
        t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let u;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = n.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
    if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: u
    });
    const h = u >= -t.maxTranslate() && !t.params.loop;
    let m = 0, f = t.slidesSizesGrid[0];
    for(let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup){
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t] ? (h || u >= o[e] && u < o[e + t]) && (m = e, f = o[e + t] - o[e]) : (h || u >= o[e]) && (m = e, f = o[o.length - 1] - o[o.length - 2]);
    }
    let v = null, g = null;
    n.rewind && (t.isBeginning ? g = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const w = (u - o[m]) / f, S = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (p > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? v : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - n.longSwipesRatio ? t.slideTo(m + S) : null !== g && w < 0 && Math.abs(w) > n.longSwipesRatio ? t.slideTo(g) : t.slideTo(m));
    } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + S), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
    }
}
function onResize() {
    const e = this, { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e, a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function onClick(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function onScroll() {
    const e = this, { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function onLoad(e) {
    const t = this;
    processLazyPreloader(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
}
function onDocumentTouchStart() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const events = (e, t)=>{
    const s = (0, _ssrWindowEsmMinMjs.g)(), { params: i, el: r, wrapperEl: n, device: a } = e, l = !!i.nested, o = "on" === t ? "addEventListener" : "removeEventListener", d = t;
    r && "string" != typeof r && (s[o]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), r[o]("touchstart", e.onTouchStart, {
        passive: !1
    }), r[o]("pointerdown", e.onTouchStart, {
        passive: !1
    }), s[o]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("touchend", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerup", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerout", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), s[o]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[o]("click", e.onClick, !0), i.cssMode && n[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[d]("observerUpdate", onResize, !0), r[o]("load", e.onLoad, {
        capture: !0
    }));
};
function attachEvents() {
    const e = this, { params: t } = e;
    e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), e.onDocumentTouchStart = onDocumentTouchStart.bind(e), t.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), e.onLoad = onLoad.bind(e), events(e, "on");
}
function detachEvents() {
    events(this, "off");
}
var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
};
const isGridEnabled = (e, t)=>e.grid && t.grid && t.grid.rows > 1;
function setBreakpoint() {
    const e = this, { realIndex: t, initialized: s, params: i, el: r } = e, n = i.breakpoints;
    if (!n || n && 0 === Object.keys(n).length) return;
    const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
    if (!a || e.currentBreakpoint === a) return;
    const l = (a in n ? n[a] : void 0) || e.originalParams, o = isGridEnabled(e, i), d = isGridEnabled(e, l), c = e.params.grabCursor, p = l.grabCursor, u = i.enabled;
    o && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (r.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(), [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((t)=>{
        if (void 0 === l[t]) return;
        const s = i[t] && i[t].enabled, r = l[t] && l[t].enabled;
        s && !r && e[t].disable(), !s && r && e[t].enable();
    });
    const h = l.direction && l.direction !== i.direction, m = i.loop && (l.slidesPerView !== i.slidesPerView || h), f = i.loop;
    h && s && e.changeDirection(), (0, _utilsMinMjs.u)(e.params, l);
    const v = e.params.enabled, g = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), u && !v ? e.disable() : !u && v && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && g ? (e.loopCreate(t), e.updateSlides()) : f && !g && e.loopDestroy()), e.emit("breakpoint", l);
}
function getBreakpoint(e, t, s) {
    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
    let i = !1;
    const r = (0, _ssrWindowEsmMinMjs.a)(), n = "window" === t ? r.innerHeight : s.clientHeight, a = Object.keys(e).map((e)=>{
        if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return {
                value: n * t,
                point: e
            };
        }
        return {
            value: e,
            point: e
        };
    });
    a.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
    for(let e = 0; e < a.length; e += 1){
        const { point: n, value: l } = a[e];
        "window" === t ? r.matchMedia(`(min-width: ${l}px)`).matches && (i = n) : l <= s.clientWidth && (i = n);
    }
    return i || "max";
}
var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
};
function prepareClasses(e, t) {
    const s = [];
    return e.forEach((e)=>{
        "object" == typeof e ? Object.keys(e).forEach((i)=>{
            e[i] && s.push(t + i);
        }) : "string" == typeof e && s.push(t + e);
    }), s;
}
function addClasses() {
    const e = this, { classNames: t, params: s, rtl: i, el: r, device: n } = e, a = prepareClasses([
        "initialized",
        s.direction,
        {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        },
        {
            autoheight: s.autoHeight
        },
        {
            rtl: i
        },
        {
            grid: s.grid && s.grid.rows > 1
        },
        {
            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        },
        {
            android: n.android
        },
        {
            ios: n.ios
        },
        {
            "css-mode": s.cssMode
        },
        {
            centered: s.cssMode && s.centeredSlides
        },
        {
            "watch-progress": s.watchSlidesProgress
        }
    ], s.containerModifierClass);
    t.push(...a), r.classList.add(...t), e.emitContainerClasses();
}
function removeClasses() {
    const { el: e, classNames: t } = this;
    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
}
var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
};
function checkOverflow() {
    const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: i } = s;
    if (i) {
        const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
        e.isLocked = e.size > s;
    } else e.isLocked = 1 === e.snapGrid.length;
    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow: checkOverflow
}, defaults = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function moduleExtendParams(e, t) {
    return function(s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0], r = s[i];
        "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
        }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), [
            "pagination",
            "scrollbar"
        ].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
        }), (0, _utilsMinMjs.u)(t, s)) : (0, _utilsMinMjs.u)(t, s)) : (0, _utilsMinMjs.u)(t, s);
    };
}
const prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes
}, extendedDefaults = {};
class Swiper {
    constructor(){
        let e, t;
        for(var s = arguments.length, i = new Array(s), r = 0; r < s; r++)i[r] = arguments[r];
        1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, _utilsMinMjs.u)({}, t), e && !t.el && (t.el = e);
        const n = (0, _ssrWindowEsmMinMjs.g)();
        if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach((s)=>{
                const i = (0, _utilsMinMjs.u)({}, t, {
                    el: s
                });
                e.push(new Swiper(i));
            }), e;
        }
        const a = this;
        a.__swiper__ = !0, a.support = getSupport(), a.device = getDevice({
            userAgent: t.userAgent
        }), a.browser = getBrowser(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [
            ...a.__modules__
        ], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach((e)=>{
            e({
                params: t,
                swiper: a,
                extendParams: moduleExtendParams(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            });
        });
        const o = (0, _utilsMinMjs.u)({}, defaults, l);
        return a.params = (0, _utilsMinMjs.u)({}, o, extendedDefaults, t), a.originalParams = (0, _utilsMinMjs.u)({}, a.params), a.passedParams = (0, _utilsMinMjs.u)({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e)=>{
            a.on(e, a.params.on[e]);
        }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: ()=>"horizontal" === a.params.direction,
            isVertical: ()=>"vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment () {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : ({
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        })[e];
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: s } = this, i = (0, _utilsMinMjs.e)(t, `.${s.slideClass}, swiper-slide`), r = (0, _utilsMinMjs.h)(i[0]);
        return (0, _utilsMinMjs.h)(e) - r;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter((t)=>1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = (0, _utilsMinMjs.e)(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(), r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s)=>{
            const i = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: i
            }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const { params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: l } = this;
        let o = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
            let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for(let s = l + 1; s < i.length; s += 1)i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for(let s = l - 1; s >= 0; s -= 1)i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0));
        } else if ("current" === e) for(let e = l + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
        else for(let e = l - 1; e >= 0; e -= 1)r[l] - r[e] < a && (o += 1);
        return o;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (s.breakpoints && e.setBreakpoint(), [
            ...e.el.querySelectorAll('[loading="lazy"]')
        ].forEach((t)=>{
            t.complete && processLazyPreloader(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
        else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this, i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t)=>{
            "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (()=>{
            if (s && s.shadowRoot && s.shadowRoot.querySelector) return s.shadowRoot.querySelector(i());
            return (0, _utilsMinMjs.e)(s, i())[0];
        })();
        return !r && t.params.createElements && (r = (0, _utilsMinMjs.c)("div", t.params.wrapperClass), s.append(r), (0, _utilsMinMjs.e)(s, `.${t.params.slideClass}`).forEach((e)=>{
            r.append(e);
        })), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.o)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.o)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, _utilsMinMjs.o)(r, "display")
        }), !0;
    }
    init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const s = [
            ...t.el.querySelectorAll('[loading="lazy"]')
        ];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e)=>{
            e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", (e)=>{
                processLazyPreloader(t, e.target);
            });
        }), preload(t), t.initialized = !0, preload(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this, { params: i, el: r, wrapperEl: n, slides: a } = s;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e)=>{
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
            s.off(e);
        }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), (0, _utilsMinMjs.v)(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
        (0, _utilsMinMjs.u)(extendedDefaults, e);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(e) {
        Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
        const t = Swiper.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach((e)=>Swiper.installModule(e)), Swiper) : (Swiper.installModule(e), Swiper);
    }
}
Object.keys(prototypes).forEach((e)=>{
    Object.keys(prototypes[e]).forEach((t)=>{
        Swiper.prototype[t] = prototypes[e][t];
    });
}), Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.min.mjs":"kCr4Q","./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCr4Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
function isObject(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}
function extend(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((n)=>{
        void 0 === e[n] ? e[n] = t[n] : isObject(t[n]) && isObject(e[n]) && Object.keys(t[n]).length > 0 && extend(e[n], t[n]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector: ()=>null,
    querySelectorAll: ()=>[],
    getElementById: ()=>null,
    createEvent: ()=>({
            initEvent () {}
        }),
    createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName: ()=>[]
        }),
    createElementNS: ()=>({}),
    importNode: ()=>null,
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const e = "undefined" != typeof document ? document : {};
    return extend(e, ssrDocument), e;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia: ()=>({}),
    requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
    }
};
function getWindow() {
    const e = "undefined" != typeof window ? window : {};
    return extend(e, ssrWindow), e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ma1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "h", ()=>elementIndex);
parcelHelpers.export(exports, "i", ()=>classesToTokens);
parcelHelpers.export(exports, "j", ()=>getTranslate);
parcelHelpers.export(exports, "k", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "l", ()=>isObject);
parcelHelpers.export(exports, "m", ()=>makeElementsArray);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>elementStyle);
parcelHelpers.export(exports, "p", ()=>elementNextAll);
parcelHelpers.export(exports, "q", ()=>elementPrevAll);
parcelHelpers.export(exports, "r", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
parcelHelpers.export(exports, "t", ()=>showWarning);
parcelHelpers.export(exports, "u", ()=>extend);
parcelHelpers.export(exports, "v", ()=>deleteProps);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
function classesToTokens(e) {
    return void 0 === e && (e = ""), e.trim().split(" ").filter((e)=>!!e.trim());
}
function deleteProps(e) {
    const t = e;
    Object.keys(t).forEach((e)=>{
        try {
            t[e] = null;
        } catch (e) {}
        try {
            delete t[e];
        } catch (e) {}
    });
}
function nextTick(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
}
function now() {
    return Date.now();
}
function getComputedStyle(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function getTranslate(e, t) {
    void 0 === t && (t = "x");
    const n = (0, _ssrWindowEsmMinMjs.a)();
    let r, o, l;
    const s = getComputedStyle(e);
    return n.WebKitCSSMatrix ? (o = s.transform || s.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map((e)=>e.replace(",", ".")).join(", ")), l = new n.WebKitCSSMatrix("none" === o ? "" : o)) : (l = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = l.toString().split(",")), "x" === t && (o = n.WebKitCSSMatrix ? l.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (o = n.WebKitCSSMatrix ? l.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), o || 0;
}
function isObject(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}
function isNode(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
}
function extend() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let n = 1; n < arguments.length; n += 1){
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != r && !isNode(r)) {
            const n = Object.keys(Object(r)).filter((e)=>t.indexOf(e) < 0);
            for(let t = 0, o = n.length; t < o; t += 1){
                const o = n[t], l = Object.getOwnPropertyDescriptor(r, o);
                void 0 !== l && l.enumerable && (isObject(e[o]) && isObject(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : extend(e[o], r[o]) : !isObject(e[o]) && isObject(r[o]) ? (e[o] = {}, r[o].__swiper__ ? e[o] = r[o] : extend(e[o], r[o])) : e[o] = r[o]);
            }
        }
    }
    return e;
}
function setCSSProperty(e, t, n) {
    e.style.setProperty(t, n);
}
function animateCSSModeScroll(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const o = (0, _ssrWindowEsmMinMjs.a)(), l = -t.translate;
    let s, i = null;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(t.cssModeFrameID);
    const c = n > l ? "next" : "prev", m = (e, t)=>"next" === c && e >= t || "prev" === c && e <= t, u = ()=>{
        s = (new Date).getTime(), null === i && (i = s);
        const e = Math.max(Math.min((s - i) / a, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
        let p = l + c * (n - l);
        if (m(p, n) && (p = n), t.wrapperEl.scrollTo({
            [r]: p
        }), m(p, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: p
            });
        }), void o.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = o.requestAnimationFrame(u);
    };
    u();
}
function getSlideTransformEl(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
}
function elementChildren(e, t) {
    return void 0 === t && (t = ""), [
        ...e.children
    ].filter((e)=>e.matches(t));
}
function showWarning(e) {
    try {
        return void console.warn(e);
    } catch (e) {}
}
function createElement(e, t) {
    void 0 === t && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : classesToTokens(t)), n;
}
function elementOffset(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)(), n = (0, _ssrWindowEsmMinMjs.g)(), r = e.getBoundingClientRect(), o = n.body, l = e.clientTop || o.clientTop || 0, s = e.clientLeft || o.clientLeft || 0, i = e === t ? t.scrollY : e.scrollTop, a = e === t ? t.scrollX : e.scrollLeft;
    return {
        top: r.top + i - l,
        left: r.left + a - s
    };
}
function elementPrevAll(e, t) {
    const n = [];
    for(; e.previousElementSibling;){
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), e = r;
    }
    return n;
}
function elementNextAll(e, t) {
    const n = [];
    for(; e.nextElementSibling;){
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), e = r;
    }
    return n;
}
function elementStyle(e, t) {
    return (0, _ssrWindowEsmMinMjs.a)().getComputedStyle(e, null).getPropertyValue(t);
}
function elementIndex(e) {
    let t, n = e;
    if (n) {
        for(t = 0; null !== (n = n.previousSibling);)1 === n.nodeType && (t += 1);
        return t;
    }
}
function elementParents(e, t) {
    const n = [];
    let r = e.parentElement;
    for(; r;)t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
    return n;
}
function elementTransitionEnd(e, t) {
    t && e.addEventListener("transitionend", function n(r) {
        r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
    });
}
function elementOuterSize(e, t, n) {
    const r = (0, _ssrWindowEsmMinMjs.a)();
    return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
function makeElementsArray(e) {
    return (Array.isArray(e) ? e : [
        e
    ]).filter((e)=>!!e);
}

},{"./ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtD4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Virtual(e) {
    let s, { swiper: t, extendParams: i, on: r, emit: a } = e;
    i({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    const l = (0, _ssrWindowEsmMinMjs.g)();
    t.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const d = l.createElement("div");
    function n(e, s) {
        const i = t.params.virtual;
        if (i.cache && t.virtual.cache[s]) return t.virtual.cache[s];
        let r;
        return i.renderSlide ? (r = i.renderSlide.call(t, e, s), "string" == typeof r && (d.innerHTML = r, r = d.children[0])) : r = t.isElement ? (0, _utilsMinMjs.c)("swiper-slide") : (0, _utilsMinMjs.c)("div", t.params.slideClass), r.setAttribute("data-swiper-slide-index", s), i.renderSlide || (r.innerHTML = e), i.cache && (t.virtual.cache[s] = r), r;
    }
    function c(e, s) {
        const { slidesPerView: i, slidesPerGroup: r, centeredSlides: l, loop: d, initialSlide: c } = t.params;
        if (s && !d && c > 0) return;
        const { addSlidesBefore: o, addSlidesAfter: u } = t.params.virtual, { from: p, to: h, slides: f, slidesGrid: v, offset: m } = t.virtual;
        t.params.cssMode || t.updateActiveIndex();
        const g = t.activeIndex || 0;
        let E, x, w;
        E = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", l ? (x = Math.floor(i / 2) + r + u, w = Math.floor(i / 2) + r + o) : (x = i + (r - 1) + u, w = (d ? i : r) + o);
        let S = g - w, b = g + x;
        d || (S = Math.max(S, 0), b = Math.min(b, f.length - 1));
        let A = (t.slidesGrid[S] || 0) - (t.slidesGrid[0] || 0);
        function M() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), a("virtualUpdate");
        }
        if (d && g >= w ? (S -= w, l || (A += t.slidesGrid[0])) : d && g < w && (S = -w, l && (A += t.slidesGrid[0])), Object.assign(t.virtual, {
            from: S,
            to: b,
            offset: A,
            slidesGrid: t.slidesGrid,
            slidesBefore: w,
            slidesAfter: x
        }), p === S && h === b && !e) return t.slidesGrid !== v && A !== m && t.slides.forEach((e)=>{
            e.style[E] = A - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), t.updateProgress(), void a("virtualUpdate");
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: A,
            from: S,
            to: b,
            slides: function() {
                const e = [];
                for(let s = S; s <= b; s += 1)e.push(f[s]);
                return e;
            }()
        }), void (t.params.virtual.renderExternalUpdate ? M() : a("virtualUpdate"));
        const y = [], P = [], j = (e)=>{
            let s = e;
            return e < 0 ? s = f.length + e : s >= f.length && (s -= f.length), s;
        };
        if (e) t.slides.filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`)).forEach((e)=>{
            e.remove();
        });
        else for(let e = p; e <= h; e += 1)if (e < S || e > b) {
            const s = j(e);
            t.slides.filter((e)=>e.matches(`.${t.params.slideClass}[data-swiper-slide-index="${s}"], swiper-slide[data-swiper-slide-index="${s}"]`)).forEach((e)=>{
                e.remove();
            });
        }
        const C = d ? -f.length : 0, G = d ? 2 * f.length : f.length;
        for(let s = C; s < G; s += 1)if (s >= S && s <= b) {
            const t = j(s);
            void 0 === h || e ? P.push(t) : (s > h && P.push(t), s < p && y.push(t));
        }
        if (P.forEach((e)=>{
            t.slidesEl.append(n(f[e], e));
        }), d) for(let e = y.length - 1; e >= 0; e -= 1){
            const s = y[e];
            t.slidesEl.prepend(n(f[s], s));
        }
        else y.sort((e, s)=>s - e), y.forEach((e)=>{
            t.slidesEl.prepend(n(f[e], e));
        });
        (0, _utilsMinMjs.e)(t.slidesEl, ".swiper-slide, swiper-slide").forEach((e)=>{
            e.style[E] = A - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), M();
    }
    r("beforeInit", ()=>{
        if (!t.params.virtual.enabled) return;
        let e;
        if (void 0 === t.passedParams.virtual.slides) {
            const s = [
                ...t.slidesEl.children
            ].filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`));
            s && s.length && (t.virtual.slides = [
                ...s
            ], e = !0, s.forEach((e, s)=>{
                e.setAttribute("data-swiper-slide-index", s), t.virtual.cache[s] = e, e.remove();
            }));
        }
        e || (t.virtual.slides = t.params.virtual.slides), t.classNames.push(`${t.params.containerModifierClass}virtual`), t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0, c(!1, !0);
    }), r("setTranslate", ()=>{
        t.params.virtual.enabled && (t.params.cssMode && !t._immediateVirtual ? (clearTimeout(s), s = setTimeout(()=>{
            c();
        }, 100)) : c());
    }), r("init update resize", ()=>{
        t.params.virtual.enabled && t.params.cssMode && (0, _utilsMinMjs.s)(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
    }), Object.assign(t.virtual, {
        appendSlide: function(e) {
            if ("object" == typeof e && "length" in e) for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.push(e[s]);
            else t.virtual.slides.push(e);
            c(!0);
        },
        prependSlide: function(e) {
            const s = t.activeIndex;
            let i = s + 1, r = 1;
            if (Array.isArray(e)) {
                for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.unshift(e[s]);
                i = s + e.length, r = e.length;
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache, s = {};
                Object.keys(e).forEach((t)=>{
                    const i = e[t], a = i.getAttribute("data-swiper-slide-index");
                    a && i.setAttribute("data-swiper-slide-index", parseInt(a, 10) + r), s[parseInt(t, 10) + r] = i;
                }), t.virtual.cache = s;
            }
            c(!0), t.slideTo(i, 0);
        },
        removeSlide: function(e) {
            if (null == e) return;
            let s = t.activeIndex;
            if (Array.isArray(e)) for(let i = e.length - 1; i >= 0; i -= 1)t.params.virtual.cache && (delete t.virtual.cache[e[i]], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e[i], 1), e[i] < s && (s -= 1), s = Math.max(s, 0);
            else t.params.virtual.cache && (delete t.virtual.cache[e], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e, 1), e < s && (s -= 1), s = Math.max(s, 0);
            c(!0), t.slideTo(s, 0);
        },
        removeAllSlides: function() {
            t.virtual.slides = [], t.params.virtual.cache && (t.virtual.cache = {}), c(!0), t.slideTo(0, 0);
        },
        update: c
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g564D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Keyboard(e) {
    let { swiper: t, extendParams: n, on: a, emit: r } = e;
    const l = (0, _ssrWindowEsmMinMjs.g)(), i = (0, _ssrWindowEsmMinMjs.a)();
    function o(e) {
        if (!t.enabled) return;
        const { rtlTranslate: n } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const o = a.keyCode || a.charCode, s = t.params.keyboard.pageUpDown, d = s && 33 === o, f = s && 34 === o, m = 37 === o, b = 39 === o, c = 38 === o, p = 40 === o;
        if (!t.allowSlideNext && (t.isHorizontal() && b || t.isVertical() && p || f)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && c || d)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (d || f || m || b || c || p)) {
                let e = !1;
                if ((0, _utilsMinMjs.a)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, _utilsMinMjs.a)(t.el, `.${t.params.slideActiveClass}`).length) return;
                const a = t.el, r = a.clientWidth, l = a.clientHeight, o = i.innerWidth, s = i.innerHeight, d = (0, _utilsMinMjs.b)(a);
                n && (d.left -= a.scrollLeft);
                const f = [
                    [
                        d.left,
                        d.top
                    ],
                    [
                        d.left + r,
                        d.top
                    ],
                    [
                        d.left,
                        d.top + l
                    ],
                    [
                        d.left + r,
                        d.top + l
                    ]
                ];
                for(let t = 0; t < f.length; t += 1){
                    const n = f[t];
                    if (n[0] >= 0 && n[0] <= o && n[1] >= 0 && n[1] <= s) {
                        if (0 === n[0] && 0 === n[1]) continue;
                        e = !0;
                    }
                }
                if (!e) return;
            }
            t.isHorizontal() ? ((d || f || m || b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((f || b) && !n || (d || m) && n) && t.slideNext(), ((d || m) && !n || (f || b) && n) && t.slidePrev()) : ((d || f || c || p) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (f || p) && t.slideNext(), (d || c) && t.slidePrev()), r("keyPress", o);
        }
    }
    function s() {
        t.keyboard.enabled || (l.addEventListener("keydown", o), t.keyboard.enabled = !0);
    }
    function d() {
        t.keyboard.enabled && (l.removeEventListener("keydown", o), t.keyboard.enabled = !1);
    }
    t.keyboard = {
        enabled: !1
    }, n({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    }), a("init", ()=>{
        t.params.keyboard.enabled && s();
    }), a("destroy", ()=>{
        t.keyboard.enabled && d();
    }), Object.assign(t.keyboard, {
        enable: s,
        disable: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1h1i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Mousewheel(e) {
    let { swiper: t, extendParams: a, on: s, emit: n } = e;
    const l = (0, _ssrWindowEsmMinMjs.a)();
    let i;
    a({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }), t.mousewheel = {
        enabled: !1
    };
    let r, o = (0, _utilsMinMjs.d)();
    const d = [];
    function m() {
        t.enabled && (t.mouseEntered = !0);
    }
    function p() {
        t.enabled && (t.mouseEntered = !1);
    }
    function u(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && (0, _utilsMinMjs.d)() - o < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0, _utilsMinMjs.d)() - o < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), n("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), n("scroll", e.raw)), o = (new l.Date).getTime(), !1));
    }
    function h(e) {
        let a = e, s = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
        const l = t.params.mousewheel;
        t.params.cssMode && a.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const m = o && o.contains(a.target);
        if (!t.mouseEntered && !m && !l.releaseOnEdges) return !0;
        a.originalEvent && (a = a.originalEvent);
        let p = 0;
        const h = t.rtlTranslate ? -1 : 1, c = function(e) {
            let t = 0, a = 0, s = 0, n = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), s = 10 * t, n = 10 * a, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !a && (a = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: s,
                pixelY: n
            };
        }(a);
        if (l.forceToAxis) {
            if (t.isHorizontal()) {
                if (!(Math.abs(c.pixelX) > Math.abs(c.pixelY))) return !0;
                p = -c.pixelX * h;
            } else {
                if (!(Math.abs(c.pixelY) > Math.abs(c.pixelX))) return !0;
                p = -c.pixelY;
            }
        } else p = Math.abs(c.pixelX) > Math.abs(c.pixelY) ? -c.pixelX * h : -c.pixelY;
        if (0 === p) return !0;
        l.invert && (p = -p);
        let w = t.getTranslate() + p * l.sensitivity;
        if (w >= t.minTranslate() && (w = t.minTranslate()), w <= t.maxTranslate() && (w = t.maxTranslate()), s = !!t.params.loop || !(w === t.minTranslate() || w === t.maxTranslate()), s && t.params.nested && a.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
            const e = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p)
            }, s = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
            if (!s) {
                r = void 0;
                let o = t.getTranslate() + p * l.sensitivity;
                const m = t.isBeginning, u = t.isEnd;
                if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!m && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }), t.params.freeMode.sticky) {
                    clearTimeout(i), i = void 0, d.length >= 15 && d.shift();
                    const a = d.length ? d[d.length - 1] : void 0, s = d[0];
                    if (d.push(e), a && (e.delta > a.delta || e.direction !== a.direction)) d.splice(0);
                    else if (d.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                        const a = p > 0 ? .8 : .2;
                        r = e, d.splice(0), i = (0, _utilsMinMjs.n)(()=>{
                            t.slideToClosest(t.params.speed, !0, void 0, a);
                        }, 0);
                    }
                    i || (i = (0, _utilsMinMjs.n)(()=>{
                        r = e, d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
                    }, 500));
                }
                if (s || n("scroll", a), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), l.releaseOnEdges && (o === t.minTranslate() || o === t.maxTranslate())) return !0;
            }
        } else {
            const a = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p),
                raw: e
            };
            d.length >= 2 && d.shift();
            const s = d.length ? d[d.length - 1] : void 0;
            if (d.push(a), s ? (a.direction !== s.direction || a.delta > s.delta || a.time > s.time + 150) && u(a) : u(a), function(e) {
                const a = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
                return !1;
            }(a)) return !0;
        }
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
    }
    function c(e) {
        let a = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (a = document.querySelector(t.params.mousewheel.eventsTarget)), a[e]("mouseenter", m), a[e]("mouseleave", p), a[e]("wheel", h);
    }
    function w() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (c("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function f() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (c("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    s("init", ()=>{
        !t.params.mousewheel.enabled && t.params.cssMode && f(), t.params.mousewheel.enabled && w();
    }), s("destroy", ()=>{
        t.params.cssMode && w(), t.mousewheel.enabled && f();
    }), Object.assign(t.mousewheel, {
        enable: w,
        disable: f
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRi9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Navigation(a) {
    let { swiper: e, extendParams: n, on: i, emit: t } = a;
    function s(a) {
        let n;
        return a && "string" == typeof a && e.isElement && (n = e.el.querySelector(a), n) ? n : (a && ("string" == typeof a && (n = [
            ...document.querySelectorAll(a)
        ]), e.params.uniqueNavElements && "string" == typeof a && n && n.length > 1 && 1 === e.el.querySelectorAll(a).length ? n = e.el.querySelector(a) : n && 1 === n.length && (n = n[0])), a && !n ? a : n);
    }
    function l(a, n) {
        const i = e.params.navigation;
        (a = (0, _utilsMinMjs.m)(a)).forEach((a)=>{
            a && (a.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === a.tagName && (a.disabled = n), e.params.watchOverflow && e.enabled && a.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
    }
    function r() {
        const { nextEl: a, prevEl: n } = e.navigation;
        if (e.params.loop) return l(n, !1), void l(a, !1);
        l(n, e.isBeginning && !e.params.rewind), l(a, e.isEnd && !e.params.rewind);
    }
    function o(a) {
        a.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), t("navigationPrev"));
    }
    function d(a) {
        a.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), t("navigationNext"));
    }
    function c() {
        const a = e.params.navigation;
        if (e.params.navigation = (0, _createElementIfNotDefinedMinMjs.c)(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }), !a.nextEl && !a.prevEl) return;
        let n = s(a.nextEl), i = s(a.prevEl);
        Object.assign(e.navigation, {
            nextEl: n,
            prevEl: i
        }), n = (0, _utilsMinMjs.m)(n), i = (0, _utilsMinMjs.m)(i);
        const t = (n, i)=>{
            n && n.addEventListener("click", "next" === i ? d : o), !e.enabled && n && n.classList.add(...a.lockClass.split(" "));
        };
        n.forEach((a)=>t(a, "next")), i.forEach((a)=>t(a, "prev"));
    }
    function m() {
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n);
        const i = (a, n)=>{
            a.removeEventListener("click", "next" === n ? d : o), a.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        a.forEach((a)=>i(a, "next")), n.forEach((a)=>i(a, "prev"));
    }
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    }, i("init", ()=>{
        !1 === e.params.navigation.enabled ? p() : (c(), r());
    }), i("toEdge fromEdge lock unlock", ()=>{
        r();
    }), i("destroy", ()=>{
        m();
    }), i("enable disable", ()=>{
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n), e.enabled ? r() : [
            ...a,
            ...n
        ].filter((a)=>!!a).forEach((a)=>a.classList.add(e.params.navigation.lockClass));
    }), i("click", (a, n)=>{
        let { nextEl: i, prevEl: s } = e.navigation;
        i = (0, _utilsMinMjs.m)(i), s = (0, _utilsMinMjs.m)(s);
        const l = n.target;
        let r = s.includes(l) || i.includes(l);
        if (e.isElement && !r) {
            const a = n.path || n.composedPath && n.composedPath();
            a && (r = a.find((a)=>i.includes(a) || s.includes(a)));
        }
        if (e.params.navigation.hideOnClick && !r) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l))) return;
            let a;
            i.length ? a = i[0].classList.contains(e.params.navigation.hiddenClass) : s.length && (a = s[0].classList.contains(e.params.navigation.hiddenClass)), t(!0 === a ? "navigationShow" : "navigationHide"), [
                ...i,
                ...s
            ].filter((a)=>!!a).forEach((a)=>a.classList.toggle(e.params.navigation.hiddenClass));
        }
    });
    const p = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), m();
    };
    Object.assign(e.navigation, {
        enable: ()=>{
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), r();
        },
        disable: p,
        update: r,
        init: c,
        destroy: m
    });
}

},{"../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6zDwV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createElementIfNotDefined);
var _utilsMinMjs = require("./utils.min.mjs");
function createElementIfNotDefined(e, t, n, a) {
    return e.params.createElements && Object.keys(a).forEach((l)=>{
        if (!n[l] && !0 === n.auto) {
            let r = (0, _utilsMinMjs.e)(e.el, `.${a[l]}`)[0];
            r || (r = (0, _utilsMinMjs.c)("div", a[l]), r.className = a[l], e.el.append(r)), n[l] = r, t[l] = r;
        }
    }), n;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56ScH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Pagination(e) {
    let { swiper: a, extendParams: s, on: l, emit: t } = e;
    const i = "swiper-pagination";
    let n;
    s({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e)=>e,
            formatFractionTotal: (e)=>e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
            paginationDisabledClass: `${i}-disabled`
        }
    }), a.pagination = {
        el: null,
        bullets: []
    };
    let r = 0;
    function o() {
        return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length;
    }
    function p(e, s) {
        const { bulletActiveClass: l } = a.params.pagination;
        e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${l}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${l}-${s}-${s}`));
    }
    function c(e) {
        const s = e.target.closest((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const l = (0, _utilsMinMjs.h)(s) * a.params.slidesPerGroup;
        if (a.params.loop) {
            if (a.realIndex === l) return;
            a.slideToLoop(l);
        } else a.slideTo(l);
    }
    function d() {
        const e = a.rtl, s = a.params.pagination;
        if (o()) return;
        let l, i, c = a.pagination.el;
        c = (0, _utilsMinMjs.m)(c);
        const d = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length, m = a.params.loop ? Math.ceil(d / a.params.slidesPerGroup) : a.snapGrid.length;
        if (a.params.loop ? (i = a.previousRealIndex || 0, l = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (l = a.snapIndex, i = a.previousSnapIndex) : (i = a.previousIndex || 0, l = a.activeIndex || 0), "bullets" === s.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const t = a.pagination.bullets;
            let o, d, m;
            if (s.dynamicBullets && (n = (0, _utilsMinMjs.f)(t[0], a.isHorizontal() ? "width" : "height", !0), c.forEach((e)=>{
                e.style[a.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
            }), s.dynamicMainBullets > 1 && void 0 !== i && (r += l - (i || 0), r > s.dynamicMainBullets - 1 ? r = s.dynamicMainBullets - 1 : r < 0 && (r = 0)), o = Math.max(l - r, 0), d = o + (Math.min(t.length, s.dynamicMainBullets) - 1), m = (d + o) / 2), t.forEach((e)=>{
                const a = [
                    ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`)
                ].map((e)=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a);
            }), c.length > 1) t.forEach((e)=>{
                const t = (0, _utilsMinMjs.h)(e);
                t === l ? e.classList.add(...s.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (t >= o && t <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), t === o && p(e, "prev"), t === d && p(e, "next"));
            });
            else {
                const e = t[l];
                if (e && e.classList.add(...s.bulletActiveClass.split(" ")), a.isElement && t.forEach((e, a)=>{
                    e.setAttribute("part", a === l ? "bullet-active" : "bullet");
                }), s.dynamicBullets) {
                    const e = t[o], a = t[d];
                    for(let e = o; e <= d; e += 1)t[e] && t[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                    p(e, "prev"), p(a, "next");
                }
            }
            if (s.dynamicBullets) {
                const l = Math.min(t.length, s.dynamicMainBullets + 4), i = (n * l - n) / 2 - m * n, r = e ? "right" : "left";
                t.forEach((e)=>{
                    e.style[a.isHorizontal() ? r : "top"] = `${i}px`;
                });
            }
        }
        c.forEach((e, i)=>{
            if ("fraction" === s.type && (e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.currentClass)).forEach((e)=>{
                e.textContent = s.formatFractionCurrent(l + 1);
            }), e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.totalClass)).forEach((e)=>{
                e.textContent = s.formatFractionTotal(m);
            })), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                const i = (l + 1) / m;
                let n = 1, r = 1;
                "horizontal" === t ? n = i : r = i, e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.progressbarFillClass)).forEach((e)=>{
                    e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`, e.style.transitionDuration = `${a.params.speed}ms`;
                });
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(a, l + 1, m), 0 === i && t("paginationRender", e)) : (0 === i && t("paginationRender", e), t("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass);
        });
    }
    function m() {
        const e = a.params.pagination;
        if (o()) return;
        const s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
        let l = a.pagination.el;
        l = (0, _utilsMinMjs.m)(l);
        let i = "";
        if ("bullets" === e.type) {
            let l = a.params.loop ? Math.ceil(s / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && l > s && (l = s);
            for(let s = 0; s < l; s += 1)e.renderBullet ? i += e.renderBullet.call(a, s, e.bulletClass) : i += `<${e.bulletElement} ${a.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
        }
        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], l.forEach((s)=>{
            "custom" !== e.type && (s.innerHTML = i || ""), "bullets" === e.type && a.pagination.bullets.push(...s.querySelectorAll((0, _classesToSelectorMinMjs.c)(e.bulletClass)));
        }), "custom" !== e.type && t("paginationRender", l[0]);
    }
    function u() {
        a.params.pagination = (0, _createElementIfNotDefinedMinMjs.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
        });
        const e = a.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el && a.isElement && (s = a.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [
            ...document.querySelectorAll(e.el)
        ]), s || (s = e.el), s && 0 !== s.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [
            ...a.el.querySelectorAll(e.el)
        ], s.length > 1 && (s = s.filter((e)=>(0, _utilsMinMjs.a)(e, ".swiper")[0] === a.el)[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(a.pagination, {
            el: s
        }), s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), r = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), a.enabled || s.classList.add(e.lockClass);
        }));
    }
    function g() {
        const e = a.params.pagination;
        if (o()) return;
        let s = a.pagination.el;
        s && (s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c));
        })), a.pagination.bullets && a.pagination.bullets.forEach((a)=>a.classList.remove(...e.bulletActiveClass.split(" ")));
    }
    l("changeDirection", ()=>{
        if (!a.pagination || !a.pagination.el) return;
        const e = a.params.pagination;
        let { el: s } = a.pagination;
        s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass);
        });
    }), l("init", ()=>{
        !1 === a.params.pagination.enabled ? b() : (u(), m(), d());
    }), l("activeIndexChange", ()=>{
        void 0 === a.snapIndex && d();
    }), l("snapIndexChange", ()=>{
        d();
    }), l("snapGridLengthChange", ()=>{
        m(), d();
    }), l("destroy", ()=>{
        g();
    }), l("enable disable", ()=>{
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)));
    }), l("lock unlock", ()=>{
        d();
    }), l("click", (e, s)=>{
        const l = s.target, i = (0, _utilsMinMjs.m)(a.pagination.el);
        if (a.params.pagination.el && a.params.pagination.hideOnClick && i && i.length > 0 && !l.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && l === a.navigation.nextEl || a.navigation.prevEl && l === a.navigation.prevEl)) return;
            const e = i[0].classList.contains(a.params.pagination.hiddenClass);
            t(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e)=>e.classList.toggle(a.params.pagination.hiddenClass));
        }
    });
    const b = ()=>{
        a.el.classList.add(a.params.pagination.paginationDisabledClass);
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.add(a.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(a.pagination, {
        enable: ()=>{
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let { el: e } = a.pagination;
            e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.remove(a.params.pagination.paginationDisabledClass))), u(), m(), d();
        },
        disable: b,
        render: m,
        update: d,
        init: u,
        destroy: g
    });
}

},{"../shared/classes-to-selector.min.mjs":"a0Ggo","../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0Ggo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>classesToSelector);
function classesToSelector(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsCU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
function Scrollbar(s) {
    let { swiper: l, extendParams: e, on: a, emit: r } = s;
    const t = (0, _ssrWindowEsmMinMjs.g)();
    let o, n, i, c, p = !1, m = null, d = null;
    function b() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s, rtlTranslate: e } = l, { dragEl: a, el: r } = s, t = l.params.scrollbar, o = l.params.loop ? l.progressLoop : l.progress;
        let c = n, p = (i - n) * o;
        e ? (p = -p, p > 0 ? (c = n - p, p = 0) : -p + n > i && (c = i + p)) : p < 0 ? (c = n + p, p = 0) : p + n > i && (c = i - p), l.isHorizontal() ? (a.style.transform = `translate3d(${p}px, 0, 0)`, a.style.width = `${c}px`) : (a.style.transform = `translate3d(0px, ${p}px, 0)`, a.style.height = `${c}px`), t.hide && (clearTimeout(m), r.style.opacity = 1, m = setTimeout(()=>{
            r.style.opacity = 0, r.style.transitionDuration = "400ms";
        }, 1e3));
    }
    function u() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s } = l, { dragEl: e, el: a } = s;
        e.style.width = "", e.style.height = "", i = l.isHorizontal() ? a.offsetWidth : a.offsetHeight, c = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), n = "auto" === l.params.scrollbar.dragSize ? i * c : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? e.style.width = `${n}px` : e.style.height = `${n}px`, a.style.display = c >= 1 ? "none" : "", l.params.scrollbar.hide && (a.style.opacity = 0), l.params.watchOverflow && l.enabled && s.el.classList[l.isLocked ? "add" : "remove"](l.params.scrollbar.lockClass);
    }
    function f(s) {
        return l.isHorizontal() ? s.clientX : s.clientY;
    }
    function g(s) {
        const { scrollbar: e, rtlTranslate: a } = l, { el: r } = e;
        let t;
        t = (f(s) - (0, _utilsMinMjs.b)(r)[l.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (i - n), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t);
        const c = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * t;
        l.updateProgress(c), l.setTranslate(c), l.updateActiveIndex(), l.updateSlidesClasses();
    }
    function y(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: n, dragEl: i } = a;
        p = !0, o = s.target === i ? f(s) - s.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, s.preventDefault(), s.stopPropagation(), t.style.transitionDuration = "100ms", i.style.transitionDuration = "100ms", g(s), clearTimeout(d), n.style.transitionDuration = "0ms", e.hide && (n.style.opacity = 1), l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", s);
    }
    function h(s) {
        const { scrollbar: e, wrapperEl: a } = l, { el: t, dragEl: o } = e;
        p && (s.preventDefault && s.cancelable ? s.preventDefault() : s.returnValue = !1, g(s), a.style.transitionDuration = "0ms", t.style.transitionDuration = "0ms", o.style.transitionDuration = "0ms", r("scrollbarDragMove", s));
    }
    function T(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: o } = a;
        p && (p = !1, l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "", t.style.transitionDuration = ""), e.hide && (clearTimeout(d), d = (0, _utilsMinMjs.n)(()=>{
            o.style.opacity = 0, o.style.transitionDuration = "400ms";
        }, 1e3)), r("scrollbarDragEnd", s), e.snapOnRelease && l.slideToClosest());
    }
    function v(s) {
        const { scrollbar: e, params: a } = l, r = e.el;
        if (!r) return;
        const o = r, n = !!a.passiveListeners && {
            passive: !1,
            capture: !1
        }, i = !!a.passiveListeners && {
            passive: !0,
            capture: !1
        };
        if (!o) return;
        const c = "on" === s ? "addEventListener" : "removeEventListener";
        o[c]("pointerdown", y, n), t[c]("pointermove", h, n), t[c]("pointerup", T, i);
    }
    function D() {
        const { scrollbar: s, el: e } = l;
        l.params.scrollbar = (0, _createElementIfNotDefinedMinMjs.c)(l, l.originalParams.scrollbar, l.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const a = l.params.scrollbar;
        if (!a.el) return;
        let r, o;
        if ("string" == typeof a.el && l.isElement && (r = l.el.querySelector(a.el)), r || "string" != typeof a.el) r || (r = a.el);
        else if (r = t.querySelectorAll(a.el), !r.length) return;
        l.params.uniqueNavElements && "string" == typeof a.el && r.length > 1 && 1 === e.querySelectorAll(a.el).length && (r = e.querySelector(a.el)), r.length > 0 && (r = r[0]), r.classList.add(l.isHorizontal() ? a.horizontalClass : a.verticalClass), r && (o = r.querySelector((0, _classesToSelectorMinMjs.c)(l.params.scrollbar.dragClass)), o || (o = (0, _utilsMinMjs.c)("div", l.params.scrollbar.dragClass), r.append(o))), Object.assign(s, {
            el: r,
            dragEl: o
        }), a.draggable && l.params.scrollbar.el && l.scrollbar.el && v("on"), r && r.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }
    function C() {
        const s = l.params.scrollbar, e = l.scrollbar.el;
        e && e.classList.remove(...(0, _utilsMinMjs.i)(l.isHorizontal() ? s.horizontalClass : s.verticalClass)), l.params.scrollbar.el && l.scrollbar.el && v("off");
    }
    e({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }), l.scrollbar = {
        el: null,
        dragEl: null
    }, a("changeDirection", ()=>{
        if (!l.scrollbar || !l.scrollbar.el) return;
        const s = l.params.scrollbar;
        let { el: e } = l.scrollbar;
        e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>{
            e.classList.remove(s.horizontalClass, s.verticalClass), e.classList.add(l.isHorizontal() ? s.horizontalClass : s.verticalClass);
        });
    }), a("init", ()=>{
        !1 === l.params.scrollbar.enabled ? E() : (D(), u(), b());
    }), a("update resize observerUpdate lock unlock changeDirection", ()=>{
        u();
    }), a("setTranslate", ()=>{
        b();
    }), a("setTransition", (s, e)=>{
        !function(s) {
            l.params.scrollbar.el && l.scrollbar.el && (l.scrollbar.dragEl.style.transitionDuration = `${s}ms`);
        }(e);
    }), a("enable disable", ()=>{
        const { el: s } = l.scrollbar;
        s && s.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }), a("destroy", ()=>{
        C();
    });
    const E = ()=>{
        l.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), C();
    };
    Object.assign(l.scrollbar, {
        enable: ()=>{
            l.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), D(), u(), b();
        },
        disable: E,
        updateSize: u,
        setTranslate: b,
        init: D,
        destroy: C
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/classes-to-selector.min.mjs":"a0Ggo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26fXf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Parallax(a) {
    let { swiper: e, extendParams: t, on: l } = a;
    t({
        parallax: {
            enabled: !1
        }
    });
    const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", s = (a, t)=>{
        const { rtl: l } = e, r = l ? -1 : 1, s = a.getAttribute("data-swiper-parallax") || "0";
        let i = a.getAttribute("data-swiper-parallax-x"), p = a.getAttribute("data-swiper-parallax-y");
        const n = a.getAttribute("data-swiper-parallax-scale"), o = a.getAttribute("data-swiper-parallax-opacity"), d = a.getAttribute("data-swiper-parallax-rotate");
        if (i || p ? (i = i || "0", p = p || "0") : e.isHorizontal() ? (i = s, p = "0") : (p = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * r + "%" : i * t * r + "px", p = p.indexOf("%") >= 0 ? parseInt(p, 10) * t + "%" : p * t + "px", null != o) {
            const e = o - (o - 1) * (1 - Math.abs(t));
            a.style.opacity = e;
        }
        let x = `translate3d(${i}, ${p}, 0px)`;
        if (null != n) x += ` scale(${n - (n - 1) * (1 - Math.abs(t))})`;
        if (d && null != d) x += ` rotate(${d * t * -1}deg)`;
        a.style.transform = x;
    }, i = ()=>{
        const { el: a, slides: t, progress: l, snapGrid: i, isElement: p } = e, n = (0, _utilsMinMjs.e)(a, r);
        e.isElement && n.push(...(0, _utilsMinMjs.e)(e.hostEl, r)), n.forEach((a)=>{
            s(a, l);
        }), t.forEach((a, t)=>{
            let p = a.progress;
            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (p += Math.ceil(t / 2) - l * (i.length - 1)), p = Math.min(Math.max(p, -1), 1), a.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((a)=>{
                s(a, p);
            });
        });
    };
    l("beforeInit", ()=>{
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), l("init", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTranslate", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTransition", (a, t)=>{
        e.params.parallax.enabled && function(a) {
            void 0 === a && (a = e.params.speed);
            const { el: t, hostEl: l } = e, s = [
                ...t.querySelectorAll(r)
            ];
            e.isElement && s.push(...l.querySelectorAll(r)), s.forEach((e)=>{
                let t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || a;
                0 === a && (t = 0), e.style.transitionDuration = `${t}ms`;
            });
        }(t);
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1OJfQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Zoom(e) {
    let { swiper: t, extendParams: i, on: a, emit: r } = e;
    const s = (0, _ssrWindowEsmMinMjs.a)();
    i({
        zoom: {
            enabled: !1,
            limitToOriginalSize: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }), t.zoom = {
        enabled: !1
    };
    let o, n, l = 1, m = !1;
    const c = [], d = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }, u = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
    }, p = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let g, h = 1;
    function E() {
        if (c.length < 2) return 1;
        const e = c[0].pageX, t = c[0].pageY, i = c[1].pageX, a = c[1].pageY;
        return Math.sqrt((i - e) ** 2 + (a - t) ** 2);
    }
    function v() {
        const e = t.params.zoom, i = d.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
            const e = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
            return Math.min(e, i);
        }
        return i;
    }
    function f(e) {
        const i = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return !!e.target.matches(i) || t.slides.filter((t)=>t.contains(e.target)).length > 0;
    }
    function x(e) {
        if ("mouse" === e.pointerType && c.splice(0, c.length), !f(e)) return;
        const i = t.params.zoom;
        if (o = !1, n = !1, c.push(e), !(c.length < 2)) {
            if (o = !0, d.scaleStart = E(), !d.slideEl) {
                d.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), d.slideEl || (d.slideEl = t.slides[t.activeIndex]);
                let a = d.slideEl.querySelector(`.${i.containerClass}`);
                if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = a, d.imageWrapEl = a ? (0, _utilsMinMjs.a)(d.imageEl, `.${i.containerClass}`)[0] : void 0, !d.imageWrapEl) return void (d.imageEl = void 0);
                d.maxRatio = v();
            }
            if (d.imageEl) {
                const [e, t] = function() {
                    if (c.length < 2) return {
                        x: null,
                        y: null
                    };
                    const e = d.imageEl.getBoundingClientRect();
                    return [
                        (c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - e.x - s.scrollX) / l,
                        (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - e.y - s.scrollY) / l
                    ];
                }();
                d.originX = e, d.originY = t, d.imageEl.style.transitionDuration = "0ms";
            }
            m = !0;
        }
    }
    function X(e) {
        if (!f(e)) return;
        const i = t.params.zoom, a = t.zoom, r = c.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && (c[r] = e), c.length < 2 || (n = !0, d.scaleMove = E(), d.imageEl && (a.scale = d.scaleMove / d.scaleStart * l, a.scale > d.maxRatio && (a.scale = d.maxRatio - 1 + (a.scale - d.maxRatio + 1) ** .5), a.scale < i.minRatio && (a.scale = i.minRatio + 1 - (i.minRatio - a.scale + 1) ** .5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
    }
    function Y(e) {
        if (!f(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const i = t.params.zoom, a = t.zoom, r = c.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && c.splice(r, 1), o && n && (o = !1, n = !1, d.imageEl && (a.scale = Math.max(Math.min(a.scale, d.maxRatio), i.minRatio), d.imageEl.style.transitionDuration = `${t.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, l = a.scale, m = !1, a.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${i.zoomedSlideClass}`) : a.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === a.scale && (d.originX = 0, d.originY = 0, d.slideEl = void 0)));
    }
    function y() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function z(e) {
        if (!f(e) || !function(e) {
            const i = `.${t.params.zoom.containerClass}`;
            return !!e.target.matches(i) || [
                ...t.hostEl.querySelectorAll(i)
            ].filter((t)=>t.contains(e.target)).length > 0;
        }(e)) return;
        const i = t.zoom;
        if (!d.imageEl) return;
        if (!u.isTouched || !d.slideEl) return;
        u.isMoved || (u.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, u.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, u.startX = (0, _utilsMinMjs.j)(d.imageWrapEl, "x") || 0, u.startY = (0, _utilsMinMjs.j)(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
        const a = u.width * i.scale, r = u.height * i.scale;
        u.minX = Math.min(d.slideWidth / 2 - a / 2, 0), u.maxX = -u.minX, u.minY = Math.min(d.slideHeight / 2 - r / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = c.length > 0 ? c[0].pageX : e.pageX, u.touchesCurrent.y = c.length > 0 ? c[0].pageY : e.pageY;
        if (Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (t.allowClick = !1), !u.isMoved && !m) {
            if (t.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) return u.isTouched = !1, void y();
            if (!t.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) return u.isTouched = !1, void y();
        }
        e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(g), t.touchEventsData.preventTouchMoveFromPointerMove = !0, g = setTimeout(()=>{
            y();
        }), u.isMoved = !0;
        const s = (i.scale - l) / (d.maxRatio - t.params.zoom.minRatio), { originX: o, originY: n } = d;
        u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + s * (u.width - 2 * o), u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + s * (u.height - 2 * n), u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** .8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** .8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** .8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** .8), p.prevPositionX || (p.prevPositionX = u.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = u.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (u.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (u.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(u.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(u.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = u.touchesCurrent.x, p.prevPositionY = u.touchesCurrent.y, p.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
    }
    function C() {
        const e = t.zoom;
        d.slideEl && t.activeIndex !== t.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, l = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0);
    }
    function M(e) {
        const i = t.zoom, a = t.params.zoom;
        if (!d.slideEl) {
            e && e.target && (d.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), d.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : d.slideEl = t.slides[t.activeIndex]);
            let i = d.slideEl.querySelector(`.${a.containerClass}`);
            i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = i, d.imageWrapEl = i ? (0, _utilsMinMjs.a)(d.imageEl, `.${a.containerClass}`)[0] : void 0;
        }
        if (!d.imageEl || !d.imageWrapEl) return;
        let r, o, n, m, c, p, g, h, E, f, x, X, Y, y, z, C, M, w;
        t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === u.touchesStart.x && e ? (r = e.pageX, o = e.pageY) : (r = u.touchesStart.x, o = u.touchesStart.y);
        const W = "number" == typeof e ? e : null;
        1 === l && W && (r = void 0, o = void 0);
        const b = v();
        i.scale = W || b, l = W || b, !e || 1 === l && W ? (g = 0, h = 0) : (M = d.slideEl.offsetWidth, w = d.slideEl.offsetHeight, n = (0, _utilsMinMjs.b)(d.slideEl).left + s.scrollX, m = (0, _utilsMinMjs.b)(d.slideEl).top + s.scrollY, c = n + M / 2 - r, p = m + w / 2 - o, E = d.imageEl.offsetWidth || d.imageEl.clientWidth, f = d.imageEl.offsetHeight || d.imageEl.clientHeight, x = E * i.scale, X = f * i.scale, Y = Math.min(M / 2 - x / 2, 0), y = Math.min(w / 2 - X / 2, 0), z = -Y, C = -y, g = c * i.scale, h = p * i.scale, g < Y && (g = Y), g > z && (g = z), h < y && (h = y), h > C && (h = C)), W && 1 === i.scale && (d.originX = 0, d.originY = 0), d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${g}px, ${h}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`;
    }
    function w() {
        const e = t.zoom, i = t.params.zoom;
        if (!d.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual ? d.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : d.slideEl = t.slides[t.activeIndex];
            let e = d.slideEl.querySelector(`.${i.containerClass}`);
            e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = e, d.imageWrapEl = e ? (0, _utilsMinMjs.a)(d.imageEl, `.${i.containerClass}`)[0] : void 0;
        }
        d.imageEl && d.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, l = 1, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${i.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0);
    }
    function W(e) {
        const i = t.zoom;
        i.scale && 1 !== i.scale ? w() : M(e);
    }
    function b() {
        return {
            passiveListener: !!t.params.passiveListeners && {
                passive: !0,
                capture: !1
            },
            activeListenerWithCapture: !t.params.passiveListeners || {
                passive: !1,
                capture: !0
            }
        };
    }
    function S() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: i, activeListenerWithCapture: a } = b();
        t.wrapperEl.addEventListener("pointerdown", x, i), t.wrapperEl.addEventListener("pointermove", X, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.addEventListener(e, Y, i);
        }), t.wrapperEl.addEventListener("pointermove", z, a);
    }
    function $() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: i, activeListenerWithCapture: a } = b();
        t.wrapperEl.removeEventListener("pointerdown", x, i), t.wrapperEl.removeEventListener("pointermove", X, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.removeEventListener(e, Y, i);
        }), t.wrapperEl.removeEventListener("pointermove", z, a);
    }
    Object.defineProperty(t.zoom, "scale", {
        get: ()=>h,
        set (e) {
            if (h !== e) {
                const t = d.imageEl, i = d.slideEl;
                r("zoomChange", e, t, i);
            }
            h = e;
        }
    }), a("init", ()=>{
        t.params.zoom.enabled && S();
    }), a("destroy", ()=>{
        $();
    }), a("touchStart", (e, i)=>{
        t.zoom.enabled && function(e) {
            const i = t.device;
            if (!d.imageEl) return;
            if (u.isTouched) return;
            i.android && e.cancelable && e.preventDefault(), u.isTouched = !0;
            const a = c.length > 0 ? c[0] : e;
            u.touchesStart.x = a.pageX, u.touchesStart.y = a.pageY;
        }(i);
    }), a("touchEnd", (e, i)=>{
        t.zoom.enabled && function() {
            const e = t.zoom;
            if (!d.imageEl) return;
            if (!u.isTouched || !u.isMoved) return u.isTouched = !1, void (u.isMoved = !1);
            u.isTouched = !1, u.isMoved = !1;
            let i = 300, a = 300;
            const r = p.x * i, s = u.currentX + r, o = p.y * a, n = u.currentY + o;
            0 !== p.x && (i = Math.abs((s - u.currentX) / p.x)), 0 !== p.y && (a = Math.abs((n - u.currentY) / p.y));
            const l = Math.max(i, a);
            u.currentX = s, u.currentY = n;
            const m = u.width * e.scale, c = u.height * e.scale;
            u.minX = Math.min(d.slideWidth / 2 - m / 2, 0), u.maxX = -u.minX, u.minY = Math.min(d.slideHeight / 2 - c / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), d.imageWrapEl.style.transitionDuration = `${l}ms`, d.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
        }();
    }), a("doubleTap", (e, i)=>{
        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && W(i);
    }), a("transitionEnd", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
        enable: S,
        disable: $,
        in: M,
        out: w,
        toggle: W
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDERx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Controller(t) {
    let { swiper: e, extendParams: n, on: r } = t;
    function o(t, e) {
        const n = function() {
            let t, e, n;
            return (r, o)=>{
                for(e = -1, t = r.length; t - e > 1;)n = t + e >> 1, r[n] <= o ? e = n : t = n;
                return t;
            };
        }();
        let r, o;
        return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) {
            return t ? (o = n(this.x, t), r = o - 1, (t - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0;
        }, this;
    }
    function l() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }
    n({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }), e.controller = {
        control: void 0
    }, r("beforeInit", ()=>{
        if ("undefined" != typeof window && ("string" == typeof e.params.controller.control || e.params.controller.control instanceof HTMLElement)) {
            const t = document.querySelector(e.params.controller.control);
            if (t && t.swiper) e.controller.control = t.swiper;
            else if (t) {
                const n = (r)=>{
                    e.controller.control = r.detail[0], e.update(), t.removeEventListener("init", n);
                };
                t.addEventListener("init", n);
            }
        } else e.controller.control = e.params.controller.control;
    }), r("update", ()=>{
        l();
    }), r("resize", ()=>{
        l();
    }), r("observerUpdate", ()=>{
        l();
    }), r("setTranslate", (t, n, r)=>{
        e.controller.control && !e.controller.control.destroyed && e.controller.setTranslate(n, r);
    }), r("setTransition", (t, n, r)=>{
        e.controller.control && !e.controller.control.destroyed && e.controller.setTransition(n, r);
    }), Object.assign(e.controller, {
        setTranslate: function(t, n) {
            const r = e.controller.control;
            let l, s;
            const i = e.constructor;
            function a(t) {
                if (t.destroyed) return;
                const n = e.rtlTranslate ? -e.translate : e.translate;
                "slide" === e.params.controller.by && (!function(t) {
                    e.controller.spline = e.params.loop ? new o(e.slidesGrid, t.slidesGrid) : new o(e.snapGrid, t.snapGrid);
                }(t), s = -e.controller.spline.interpolate(-n)), s && "container" !== e.params.controller.by || (l = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), !Number.isNaN(l) && Number.isFinite(l) || (l = 1), s = (n - e.minTranslate()) * l + t.minTranslate()), e.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, e), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            if (Array.isArray(r)) for(let t = 0; t < r.length; t += 1)r[t] !== n && r[t] instanceof i && a(r[t]);
            else r instanceof i && n !== r && a(r);
        },
        setTransition: function(t, n) {
            const r = e.constructor, o = e.controller.control;
            let l;
            function s(n) {
                n.destroyed || (n.setTransition(t, e), 0 !== t && (n.transitionStart(), n.params.autoHeight && (0, _utilsMinMjs.n)(()=>{
                    n.updateAutoHeight();
                }), (0, _utilsMinMjs.k)(n.wrapperEl, ()=>{
                    o && n.transitionEnd();
                })));
            }
            if (Array.isArray(o)) for(l = 0; l < o.length; l += 1)o[l] !== n && o[l] instanceof r && s(o[l]);
            else o instanceof r && n !== o && s(o);
        }
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Xwor":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function A11y(e) {
    let { swiper: a, extendParams: t, on: i } = e;
    t({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }), a.a11y = {
        clicked: !1
    };
    let n, s, r = null, l = (new Date).getTime();
    function o(e) {
        const a = r;
        0 !== a.length && (a.innerHTML = "", a.innerHTML = e);
    }
    function c(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "0");
        });
    }
    function d(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "-1");
        });
    }
    function m(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("role", a);
        });
    }
    function p(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-roledescription", a);
        });
    }
    function g(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-label", a);
        });
    }
    function u(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !0);
        });
    }
    function E(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !1);
        });
    }
    function f(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const t = a.params.a11y, i = e.target;
        if (!a.pagination || !a.pagination.el || i !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
                const e = (0, _utilsMinMjs.m)(a.navigation.prevEl);
                (0, _utilsMinMjs.m)(a.navigation.nextEl).includes(i) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? o(t.lastSlideMessage) : o(t.nextSlideMessage)), e.includes(i) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? o(t.firstSlideMessage) : o(t.prevSlideMessage));
            }
            a.pagination && i.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass)) && i.click();
        }
    }
    function v() {
        return a.pagination && a.pagination.bullets && a.pagination.bullets.length;
    }
    function y() {
        return v() && a.params.pagination.clickable;
    }
    const b = (e, a, t)=>{
        c(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", f)), g(e, t), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-controls", a);
            });
        }(e, a);
    }, h = (e)=>{
        s && s !== e.target && !s.contains(e.target) && (n = !0), a.a11y.clicked = !0;
    }, A = ()=>{
        n = !1, requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                a.destroyed || (a.a11y.clicked = !1);
            });
        });
    }, k = (e)=>{
        l = (new Date).getTime();
    }, M = (e)=>{
        if (a.a11y.clicked) return;
        if ((new Date).getTime() - l < 100) return;
        const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
        if (!t || !a.slides.includes(t)) return;
        s = t;
        const i = a.slides.indexOf(t) === a.activeIndex, r = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
        i || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(()=>{
            n || (a.params.loop ? a.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")), 0) : a.slideTo(a.slides.indexOf(t), 0), n = !1);
        }));
    }, x = ()=>{
        const e = a.params.a11y;
        e.itemRoleDescriptionMessage && p(a.slides, e.itemRoleDescriptionMessage), e.slideRole && m(a.slides, e.slideRole);
        const t = a.slides.length;
        e.slideLabelMessage && a.slides.forEach((i, n)=>{
            const s = a.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
            g(i, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, t));
        });
    }, L = ()=>{
        const e = a.params.a11y;
        a.el.append(r);
        const t = a.el;
        e.containerRoleDescriptionMessage && p(t, e.containerRoleDescriptionMessage), e.containerMessage && g(t, e.containerMessage);
        const i = a.wrapperEl, n = e.id || i.getAttribute("id") || `swiper-wrapper-${s = 16, void 0 === s && (s = 16), "x".repeat(s).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16))}`;
        var s;
        const l = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
        var o;
        o = n, (0, _utilsMinMjs.m)(i).forEach((e)=>{
            e.setAttribute("id", o);
        }), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-live", a);
            });
        }(i, l), x();
        let { nextEl: c, prevEl: d } = a.navigation ? a.navigation : {};
        if (c = (0, _utilsMinMjs.m)(c), d = (0, _utilsMinMjs.m)(d), c && c.forEach((a)=>b(a, n, e.nextSlideMessage)), d && d.forEach((a)=>b(a, n, e.prevSlideMessage)), y()) (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
            e.addEventListener("keydown", f);
        });
        (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", k), a.el.addEventListener("focus", M, !0), a.el.addEventListener("focus", M, !0), a.el.addEventListener("pointerdown", h, !0), a.el.addEventListener("pointerup", A, !0);
    };
    i("beforeInit", ()=>{
        r = (0, _utilsMinMjs.c)("span", a.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true");
    }), i("afterInit", ()=>{
        a.params.a11y.enabled && L();
    }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        a.params.a11y.enabled && x();
    }), i("fromEdge toEdge afterInit lock unlock", ()=>{
        a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const { nextEl: e, prevEl: t } = a.navigation;
            t && (a.isBeginning ? (u(t), d(t)) : (E(t), c(t))), e && (a.isEnd ? (u(e), d(e)) : (E(e), c(e)));
        }();
    }), i("paginationUpdate", ()=>{
        a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            v() && a.pagination.bullets.forEach((t)=>{
                a.params.pagination.clickable && (c(t), a.params.pagination.renderBullet || (m(t, "button"), g(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _utilsMinMjs.h)(t) + 1)))), t.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current");
            });
        }();
    }), i("destroy", ()=>{
        a.params.a11y.enabled && function() {
            r && r.remove();
            let { nextEl: e, prevEl: t } = a.navigation ? a.navigation : {};
            e = (0, _utilsMinMjs.m)(e), t = (0, _utilsMinMjs.m)(t), e && e.forEach((e)=>e.removeEventListener("keydown", f)), t && t.forEach((e)=>e.removeEventListener("keydown", f)), y() && (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
                e.removeEventListener("keydown", f);
            });
            (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", k), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", M, !0), a.el.removeEventListener("pointerdown", h, !0), a.el.removeEventListener("pointerup", A, !0));
        }();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/classes-to-selector.min.mjs":"a0Ggo","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnAE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function History(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let r = !1, i = {};
    const l = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = (e)=>{
        const t = (0, _ssrWindowEsmMinMjs.a)();
        let a;
        a = e ? new URL(e) : t.location;
        const s = a.pathname.slice(1).split("/").filter((e)=>"" !== e), r = s.length;
        return {
            key: s[r - 2],
            value: s[r - 1]
        };
    }, n = (e, a)=>{
        const s = (0, _ssrWindowEsmMinMjs.a)();
        if (!r || !t.params.history.enabled) return;
        let i;
        i = t.params.url ? new URL(t.params.url) : s.location;
        const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${a}"]`) : t.slides[a];
        let n = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
            let a = t.params.history.root;
            "/" === a[a.length - 1] && (a = a.slice(0, a.length - 1)), n = `${a}/${e ? `${e}/` : ""}${n}`;
        } else i.pathname.includes(e) || (n = `${e ? `${e}/` : ""}${n}`);
        t.params.history.keepQuery && (n += i.search);
        const p = s.history.state;
        p && p.value === n || (t.params.history.replaceState ? s.history.replaceState({
            value: n
        }, null, n) : s.history.pushState({
            value: n
        }, null, n));
    }, p = (e, a, s)=>{
        if (a) for(let r = 0, i = t.slides.length; r < i; r += 1){
            const i = t.slides[r];
            if (l(i.getAttribute("data-history")) === a) {
                const a = t.getSlideIndex(i);
                t.slideTo(a, e, s);
            }
        }
        else t.slideTo(0, e, s);
    }, d = ()=>{
        i = o(t.params.url), p(t.params.speed, i.value, !1);
    };
    s("init", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            if (t.params.history) {
                if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                r = !0, i = o(t.params.url), i.key || i.value ? (p(0, i.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", d)) : t.params.history.replaceState || e.addEventListener("popstate", d);
            }
        })();
    }), s("destroy", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            t.params.history.replaceState || e.removeEventListener("popstate", d);
        })();
    }), s("transitionEnd _freeModeNoMomentumRelease", ()=>{
        r && n(t.params.history.key, t.activeIndex);
    }), s("slideChange", ()=>{
        r && t.params.cssMode && n(t.params.history.key, t.activeIndex);
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JnJn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function HashNavigation(a) {
    let { swiper: e, extendParams: t, emit: s, on: i } = a, n = !1;
    const r = (0, _ssrWindowEsmMinMjs.g)(), h = (0, _ssrWindowEsmMinMjs.a)();
    t({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex (a, t) {
                if (e.virtual && e.params.virtual.enabled) {
                    const a = e.slides.filter((a)=>a.getAttribute("data-hash") === t)[0];
                    if (!a) return 0;
                    return parseInt(a.getAttribute("data-swiper-slide-index"), 10);
                }
                return e.getSlideIndex((0, _utilsMinMjs.e)(e.slidesEl, `.${e.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`)[0]);
            }
        }
    });
    const d = ()=>{
        s("hashChange");
        const a = r.location.hash.replace("#", ""), t = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
        if (a !== (t ? t.getAttribute("data-hash") : "")) {
            const t = e.params.hashNavigation.getSlideIndex(e, a);
            if (void 0 === t || Number.isNaN(t)) return;
            e.slideTo(t);
        }
    }, l = ()=>{
        if (!n || !e.params.hashNavigation.enabled) return;
        const a = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], t = a ? a.getAttribute("data-hash") || a.getAttribute("data-history") : "";
        e.params.hashNavigation.replaceState && h.history && h.history.replaceState ? (h.history.replaceState(null, null, `#${t}` || ""), s("hashSet")) : (r.location.hash = t || "", s("hashSet"));
    };
    i("init", ()=>{
        e.params.hashNavigation.enabled && (()=>{
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            n = !0;
            const a = r.location.hash.replace("#", "");
            if (a) {
                const t = 0, s = e.params.hashNavigation.getSlideIndex(e, a);
                e.slideTo(s || 0, t, e.params.runCallbacksOnInit, !0);
            }
            e.params.hashNavigation.watchState && h.addEventListener("hashchange", d);
        })();
    }), i("destroy", ()=>{
        e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && h.removeEventListener("hashchange", d);
    }), i("transitionEnd _freeModeNoMomentumRelease", ()=>{
        n && l();
    }), i("slideChange", ()=>{
        n && e.params.cssMode && l();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xfb8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function Autoplay(e) {
    let a, t, { swiper: n, extendParams: i, on: r, emit: o, params: s } = e;
    n.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, i({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let l, p, u, d, y, m, c, g, v = s && s.autoplay ? s.autoplay.delay : 3e3, T = s && s.autoplay ? s.autoplay.delay : 3e3, f = (new Date).getTime();
    function w(e) {
        n && !n.destroyed && n.wrapperEl && e.target === n.wrapperEl && (n.wrapperEl.removeEventListener("transitionend", w), g || e.detail && e.detail.bySwiperTouchMove || S());
    }
    const b = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        n.autoplay.paused ? p = !0 : p && (T = l, p = !1);
        const e = n.autoplay.paused ? l : f + T - (new Date).getTime();
        n.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), t = requestAnimationFrame(()=>{
            b();
        });
    }, E = (e)=>{
        if (n.destroyed || !n.autoplay.running) return;
        cancelAnimationFrame(t), b();
        let i = void 0 === e ? n.params.autoplay.delay : e;
        v = n.params.autoplay.delay, T = n.params.autoplay.delay;
        const r = (()=>{
            let e;
            if (e = n.virtual && n.params.virtual.enabled ? n.slides.filter((e)=>e.classList.contains("swiper-slide-active"))[0] : n.slides[n.activeIndex], !e) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (i = r, v = r, T = r), l = i;
        const s = n.params.speed, p = ()=>{
            n && !n.destroyed && (n.params.autoplay.reverseDirection ? !n.isBeginning || n.params.loop || n.params.rewind ? (n.slidePrev(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(n.slides.length - 1, s, !0, !0), o("autoplay")) : !n.isEnd || n.params.loop || n.params.rewind ? (n.slideNext(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(0, s, !0, !0), o("autoplay")), n.params.cssMode && (f = (new Date).getTime(), requestAnimationFrame(()=>{
                E();
            })));
        };
        return i > 0 ? (clearTimeout(a), a = setTimeout(()=>{
            p();
        }, i)) : requestAnimationFrame(()=>{
            p();
        }), i;
    }, L = ()=>{
        f = (new Date).getTime(), n.autoplay.running = !0, E(), o("autoplayStart");
    }, D = ()=>{
        n.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(t), o("autoplayStop");
    }, O = (e, t)=>{
        if (n.destroyed || !n.autoplay.running) return;
        clearTimeout(a), e || (c = !0);
        const i = ()=>{
            o("autoplayPause"), n.params.autoplay.waitForTransition ? n.wrapperEl.addEventListener("transitionend", w) : S();
        };
        if (n.autoplay.paused = !0, t) return m && (l = n.params.autoplay.delay), m = !1, void i();
        const r = l || n.params.autoplay.delay;
        l = r - ((new Date).getTime() - f), n.isEnd && l < 0 && !n.params.loop || (l < 0 && (l = 0), i());
    }, S = ()=>{
        n.isEnd && l < 0 && !n.params.loop || n.destroyed || !n.autoplay.running || (f = (new Date).getTime(), c ? (c = !1, E(l)) : E(), n.autoplay.paused = !1, o("autoplayResume"));
    }, M = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        const e = (0, _ssrWindowEsmMinMjs.g)();
        "hidden" === e.visibilityState && (c = !0, O(!0)), "visible" === e.visibilityState && S();
    }, h = (e)=>{
        "mouse" === e.pointerType && (c = !0, g = !0, n.animating || n.autoplay.paused || O(!0));
    }, A = (e)=>{
        "mouse" === e.pointerType && (g = !1, n.autoplay.paused && S());
    };
    r("init", ()=>{
        n.params.autoplay.enabled && (n.params.autoplay.pauseOnMouseEnter && (n.el.addEventListener("pointerenter", h), n.el.addEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", M), L());
    }), r("destroy", ()=>{
        n.el && "string" != typeof n.el && (n.el.removeEventListener("pointerenter", h), n.el.removeEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", M), n.autoplay.running && D();
    }), r("_freeModeStaticRelease", ()=>{
        (d || c) && S();
    }), r("_freeModeNoMomentumRelease", ()=>{
        n.params.autoplay.disableOnInteraction ? D() : O(!0, !0);
    }), r("beforeTransitionStart", (e, a, t)=>{
        !n.destroyed && n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? O(!0, !0) : D());
    }), r("sliderFirstMove", ()=>{
        !n.destroyed && n.autoplay.running && (n.params.autoplay.disableOnInteraction ? D() : (u = !0, d = !1, c = !1, y = setTimeout(()=>{
            c = !0, d = !0, O(!0);
        }, 200)));
    }), r("touchEnd", ()=>{
        if (!n.destroyed && n.autoplay.running && u) {
            if (clearTimeout(y), clearTimeout(a), n.params.autoplay.disableOnInteraction) return d = !1, void (u = !1);
            d && n.params.cssMode && S(), d = !1, u = !1;
        }
    }), r("slideChange", ()=>{
        !n.destroyed && n.autoplay.running && (m = !0);
    }), Object.assign(n.autoplay, {
        start: L,
        stop: D,
        pause: O,
        resume: S
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ESRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Thumb(e) {
    let { swiper: s, extendParams: i, on: t } = e;
    i({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let r = !1, a = !1;
    function l() {
        const e = s.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex, t = e.clickedSlide;
        if (t && t.classList.contains(s.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let r;
        r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, s.params.loop ? s.slideToLoop(r) : s.slideTo(r);
    }
    function n() {
        const { thumbs: e } = s.params;
        if (r) return !1;
        r = !0;
        const i = s.constructor;
        if (e.swiper instanceof i) s.thumbs.swiper = e.swiper, Object.assign(s.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), Object.assign(s.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), s.thumbs.swiper.update();
        else if ((0, _utilsMinMjs.l)(e.swiper)) {
            const t = Object.assign({}, e.swiper);
            Object.assign(t, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), s.thumbs.swiper = new i(t), a = !0;
        }
        return s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass), s.thumbs.swiper.on("tap", l), !0;
    }
    function d(e) {
        const i = s.thumbs.swiper;
        if (!i || i.destroyed) return;
        const t = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
        let r = 1;
        const a = s.params.thumbs.slideThumbActiveClass;
        if (s.params.slidesPerView > 1 && !s.params.centeredSlides && (r = s.params.slidesPerView), s.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach((e)=>e.classList.remove(a)), i.params.loop || i.params.virtual && i.params.virtual.enabled) for(let e = 0; e < r; e += 1)(0, _utilsMinMjs.e)(i.slidesEl, `[data-swiper-slide-index="${s.realIndex + e}"]`).forEach((e)=>{
            e.classList.add(a);
        });
        else for(let e = 0; e < r; e += 1)i.slides[s.realIndex + e] && i.slides[s.realIndex + e].classList.add(a);
        const l = s.params.thumbs.autoScrollOffset, n = l && !i.params.loop;
        if (s.realIndex !== i.realIndex || n) {
            const r = i.activeIndex;
            let a, d;
            if (i.params.loop) {
                const e = i.slides.filter((e)=>e.getAttribute("data-swiper-slide-index") === `${s.realIndex}`)[0];
                a = i.slides.indexOf(e), d = s.activeIndex > s.previousIndex ? "next" : "prev";
            } else a = s.realIndex, d = a > s.previousIndex ? "next" : "prev";
            n && (a += "next" === d ? l : -1 * l), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(a) < 0 && (i.params.centeredSlides ? a = a > r ? a - Math.floor(t / 2) + 1 : a + Math.floor(t / 2) - 1 : a > r && i.params.slidesPerGroup, i.slideTo(a, e ? 0 : void 0));
        }
    }
    s.thumbs = {
        swiper: null
    }, t("beforeInit", ()=>{
        const { thumbs: e } = s.params;
        if (e && e.swiper) {
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                const i = (0, _ssrWindowEsmMinMjs.g)(), t = ()=>{
                    const t = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                    if (t && t.swiper) e.swiper = t.swiper, n(), d(!0);
                    else if (t) {
                        const i = (r)=>{
                            e.swiper = r.detail[0], t.removeEventListener("init", i), n(), d(!0), e.swiper.update(), s.update();
                        };
                        t.addEventListener("init", i);
                    }
                    return t;
                }, r = ()=>{
                    if (s.destroyed) return;
                    t() || requestAnimationFrame(r);
                };
                requestAnimationFrame(r);
            } else n(), d(!0);
        }
    }), t("slideChange update resize observerUpdate", ()=>{
        d();
    }), t("setTransition", (e, i)=>{
        const t = s.thumbs.swiper;
        t && !t.destroyed && t.setTransition(i);
    }), t("beforeDestroy", ()=>{
        const e = s.thumbs.swiper;
        e && !e.destroyed && a && e.destroy();
    }), Object.assign(s.thumbs, {
        init: n,
        update: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOW0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function freeMode(e) {
    let { swiper: t, extendParams: o, emit: n, once: s } = e;
    o({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    }), Object.assign(t, {
        freeMode: {
            onTouchStart: function() {
                if (t.params.cssMode) return;
                const e = t.getTranslate();
                t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate
                });
            },
            onTouchMove: function() {
                if (t.params.cssMode) return;
                const { touchEventsData: e, touches: o } = t;
                0 === e.velocities.length && e.velocities.push({
                    position: o[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime
                }), e.velocities.push({
                    position: o[t.isHorizontal() ? "currentX" : "currentY"],
                    time: (0, _utilsMinMjs.d)()
                });
            },
            onTouchEnd: function(e) {
                let { currentPos: o } = e;
                if (t.params.cssMode) return;
                const { params: i, wrapperEl: a, rtlTranslate: r, snapGrid: l, touchEventsData: m } = t, c = (0, _utilsMinMjs.d)() - m.touchStartTime;
                if (o < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (o > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                else {
                    if (i.freeMode.momentum) {
                        if (m.velocities.length > 1) {
                            const e = m.velocities.pop(), o = m.velocities.pop(), n = e.position - o.position, s = e.time - o.time;
                            t.velocity = n / s, t.velocity /= 2, Math.abs(t.velocity) < i.freeMode.minimumVelocity && (t.velocity = 0), (s > 150 || (0, _utilsMinMjs.d)() - e.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        t.velocity *= i.freeMode.momentumVelocityRatio, m.velocities.length = 0;
                        let e = 1e3 * i.freeMode.momentumRatio;
                        const o = t.velocity * e;
                        let c = t.translate + o;
                        r && (c = -c);
                        let d, u = !1;
                        const f = 20 * Math.abs(t.velocity) * i.freeMode.momentumBounceRatio;
                        let p;
                        if (c < t.maxTranslate()) i.freeMode.momentumBounce ? (c + t.maxTranslate() < -f && (c = t.maxTranslate() - f), d = t.maxTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.maxTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (c > t.minTranslate()) i.freeMode.momentumBounce ? (c - t.minTranslate() > f && (c = t.minTranslate() + f), d = t.minTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.minTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (i.freeMode.sticky) {
                            let e;
                            for(let t = 0; t < l.length; t += 1)if (l[t] > -c) {
                                e = t;
                                break;
                            }
                            c = Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) || "next" === t.swipeDirection ? l[e] : l[e - 1], c = -c;
                        }
                        if (p && s("transitionEnd", ()=>{
                            t.loopFix();
                        }), 0 !== t.velocity) {
                            if (e = r ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), i.freeMode.sticky) {
                                const o = Math.abs((r ? -c : c) - t.translate), n = t.slidesSizesGrid[t.activeIndex];
                                e = o < n ? i.speed : o < 2 * n ? 1.5 * i.speed : 2.5 * i.speed;
                            }
                        } else if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode.momentumBounce && u ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && m.allowMomentumBounce && (n("momentumBounce"), t.setTransition(i.speed), setTimeout(()=>{
                                t.setTranslate(d), (0, _utilsMinMjs.k)(a, ()=>{
                                    t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        })) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && t.transitionEnd();
                        }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
                    } else {
                        if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode && n("_freeModeNoMomentumRelease");
                    }
                    (!i.freeMode.momentum || c >= i.longSwipesMs) && (n("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                }
            }
        }
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI2Xv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid(e) {
    let i, r, a, t, { swiper: s, extendParams: l, on: o } = e;
    l({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    const n = ()=>{
        let e = s.params.spaceBetween;
        return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * s.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    o("init", ()=>{
        t = s.params.grid && s.params.grid.rows > 1;
    }), o("update", ()=>{
        const { params: e, el: i } = s, r = e.grid && e.grid.rows > 1;
        t && !r ? (i.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, s.emitContainerClasses()) : !t && r && (i.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && i.classList.add(`${e.containerModifierClass}grid-column`), s.emitContainerClasses()), t = r;
    }), s.grid = {
        initSlides: (e)=>{
            const { slidesPerView: t } = s.params, { rows: l, fill: o } = s.params.grid, n = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : e.length;
            a = Math.floor(n / l), i = Math.floor(n / l) === n / l ? n : Math.ceil(n / l) * l, "auto" !== t && "row" === o && (i = Math.max(i, t * l)), r = i / l;
        },
        unsetSlides: ()=>{
            s.slides && s.slides.forEach((e)=>{
                e.swiperSlideGridSet && (e.style.height = "", e.style[s.getDirectionLabel("margin-top")] = "");
            });
        },
        updateSlide: (e, t, l)=>{
            const { slidesPerGroup: o } = s.params, d = n(), { rows: p, fill: c } = s.params.grid, g = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : l.length;
            let u, h, m;
            if ("row" === c && o > 1) {
                const r = Math.floor(e / (o * p)), a = e - p * o * r, s = 0 === r ? o : Math.min(Math.ceil((g - r * p * o) / p), o);
                m = Math.floor(a / s), h = a - m * s + r * o, u = h + m * i / p, t.style.order = u;
            } else "column" === c ? (h = Math.floor(e / p), m = e - h * p, (h > a || h === a && m === p - 1) && (m += 1, m >= p && (m = 0, h += 1))) : (m = Math.floor(e / r), h = e - m * r);
            t.row = m, t.column = h, t.style.height = `calc((100% - ${(p - 1) * d}px) / ${p})`, t.style[s.getDirectionLabel("margin-top")] = 0 !== m ? d && `${d}px` : "", t.swiperSlideGridSet = !0;
        },
        updateWrapperSize: (e, r)=>{
            const { centeredSlides: a, roundLengths: t } = s.params, l = n(), { rows: o } = s.params.grid;
            if (s.virtualSize = (e + l) * i, s.virtualSize = Math.ceil(s.virtualSize / o) - l, s.params.cssMode || (s.wrapperEl.style[s.getDirectionLabel("width")] = `${s.virtualSize + l}px`), a) {
                const e = [];
                for(let i = 0; i < r.length; i += 1){
                    let a = r[i];
                    t && (a = Math.floor(a)), r[i] < s.virtualSize + r[0] && e.push(a);
                }
                r.splice(0, r.length), r.push(...e);
            }
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7tKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
function appendSlide(e) {
    const l = this, { params: o, slidesEl: i } = l;
    o.loop && l.loopDestroy();
    const t = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, i.append(l.children[0]), l.innerHTML = "";
        } else i.append(e);
    };
    if ("object" == typeof e && "length" in e) for(let l = 0; l < e.length; l += 1)e[l] && t(e[l]);
    else t(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update();
}
function prependSlide(e) {
    const l = this, { params: o, activeIndex: i, slidesEl: t } = l;
    o.loop && l.loopDestroy();
    let n = i + 1;
    const d = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, t.prepend(l.children[0]), l.innerHTML = "";
        } else t.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
        for(let l = 0; l < e.length; l += 1)e[l] && d(e[l]);
        n = i + e.length;
    } else d(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), l.slideTo(n, 0, !1);
}
function addSlide(e, l) {
    const o = this, { params: i, activeIndex: t, slidesEl: n } = o;
    let d = t;
    i.loop && (d -= o.loopedSlides, o.loopDestroy(), o.recalcSlides());
    const s = o.slides.length;
    if (e <= 0) return void o.prependSlide(l);
    if (e >= s) return void o.appendSlide(l);
    let p = d > e ? d + 1 : d;
    const r = [];
    for(let l = s - 1; l >= e; l -= 1){
        const e = o.slides[l];
        e.remove(), r.unshift(e);
    }
    if ("object" == typeof l && "length" in l) {
        for(let e = 0; e < l.length; e += 1)l[e] && n.append(l[e]);
        p = d > e ? d + l.length : d;
    } else n.append(l);
    for(let e = 0; e < r.length; e += 1)n.append(r[e]);
    o.recalcSlides(), i.loop && o.loopCreate(), i.observer && !o.isElement || o.update(), i.loop ? o.slideTo(p + o.loopedSlides, 0, !1) : o.slideTo(p, 0, !1);
}
function removeSlide(e) {
    const l = this, { params: o, activeIndex: i } = l;
    let t = i;
    o.loop && (t -= l.loopedSlides, l.loopDestroy());
    let n, d = t;
    if ("object" == typeof e && "length" in e) {
        for(let o = 0; o < e.length; o += 1)n = e[o], l.slides[n] && l.slides[n].remove(), n < d && (d -= 1);
        d = Math.max(d, 0);
    } else n = e, l.slides[n] && l.slides[n].remove(), n < d && (d -= 1), d = Math.max(d, 0);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), o.loop ? l.slideTo(d + l.loopedSlides, 0, !1) : l.slideTo(d, 0, !1);
}
function removeAllSlides() {
    const e = this, l = [];
    for(let o = 0; o < e.slides.length; o += 1)l.push(o);
    e.removeSlide(l);
}
function Manipulation(e) {
    let { swiper: l } = e;
    Object.assign(l, {
        appendSlide: appendSlide.bind(l),
        prependSlide: prependSlide.bind(l),
        addSlide: addSlide.bind(l),
        removeSlide: removeSlide.bind(l),
        removeAllSlides: removeAllSlides.bind(l)
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7b8YE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFade(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        fadeEffect: {
            crossFade: !1
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "fade",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { slides: e } = t, s = t.params.fadeEffect;
            for(let a = 0; a < e.length; a += 1){
                const e = t.slides[a];
                let r = -e.swiperSlideOffset;
                t.params.virtualTranslate || (r -= t.translate);
                let i = 0;
                t.isHorizontal() || (i = r, r = 0);
                const f = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0), n = (0, _effectTargetMinMjs.e)(s, e);
                n.style.opacity = f, n.style.transform = `translate3d(${r}px, ${i}px, 0px)`;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`;
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0
            });
        },
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccCbC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectInit);
function effectInit(e) {
    const { effect: s, swiper: a, on: t, setTranslate: r, setTransition: i, overwriteParams: n, perspective: o, recreateShadows: f, getEffectParams: l } = e;
    let c;
    t("beforeInit", ()=>{
        if (a.params.effect !== s) return;
        a.classNames.push(`${a.params.containerModifierClass}${s}`), o && o() && a.classNames.push(`${a.params.containerModifierClass}3d`);
        const e = n ? n() : {};
        Object.assign(a.params, e), Object.assign(a.originalParams, e);
    }), t("setTranslate", ()=>{
        a.params.effect === s && r();
    }), t("setTransition", (e, t)=>{
        a.params.effect === s && i(t);
    }), t("transitionEnd", ()=>{
        if (a.params.effect === s && f) {
            if (!l || !l().slideShadows) return;
            a.slides.forEach((e)=>{
                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e)=>e.remove());
            }), f();
        }
    }), t("virtualUpdate", ()=>{
        a.params.effect === s && (a.slides.length || (c = !0), requestAnimationFrame(()=>{
            c && a.slides && a.slides.length && (r(), c = !1);
        }));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70LY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectTarget);
var _utilsMinMjs = require("./utils.min.mjs");
function effectTarget(e, i) {
    const t = (0, _utilsMinMjs.g)(i);
    return t !== i && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AS5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectVirtualTransitionEnd);
var _utilsMinMjs = require("./utils.min.mjs");
function effectVirtualTransitionEnd(e) {
    let { swiper: t, duration: n, transformElements: r, allSlides: i } = e;
    const { activeIndex: a } = t;
    if (t.params.virtualTranslate && 0 !== n) {
        let e, n = !1;
        e = i ? r : r.filter((e)=>{
            const n = e.classList.contains("swiper-slide-transform") ? ((e)=>{
                if (!e.parentElement) return t.slides.filter((t)=>t.shadowRoot && t.shadowRoot === e.parentNode)[0];
                return e.parentElement;
            })(e) : e;
            return t.getSlideIndex(n) === a;
        }), e.forEach((e)=>{
            (0, _utilsMinMjs.k)(e, ()=>{
                if (n) return;
                if (!t || t.destroyed) return;
                n = !0, t.animating = !1;
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                t.wrapperEl.dispatchEvent(e);
            });
        });
    }
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xe5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCube(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (e, t, s)=>{
        let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), r = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), r || (r = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(r)), a && (a.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { el: e, wrapperEl: s, slides: a, width: o, height: i, rtlTranslate: l, size: d, browser: n } = t, p = t.params.cubeEffect, c = t.isHorizontal(), w = t.virtual && t.params.virtual.enabled;
            let h, f = 0;
            p.shadow && (c ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${o}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), e.append(h))));
            for(let e = 0; e < a.length; e += 1){
                const s = a[e];
                let o = e;
                w && (o = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                let i = 90 * o, n = Math.floor(i / 360);
                l && (i = -i, n = Math.floor(-i / 360));
                const h = Math.max(Math.min(s.progress, 1), -1);
                let m = 0, u = 0, b = 0;
                o % 4 == 0 ? (m = 4 * -n * d, b = 0) : (o - 1) % 4 == 0 ? (m = 0, b = 4 * -n * d) : (o - 2) % 4 == 0 ? (m = d + 4 * n * d, b = d) : (o - 3) % 4 == 0 && (m = -d, b = 3 * d + 4 * d * n), l && (m = -m), c || (u = m, m = 0);
                const x = `rotateX(${c ? 0 : -i}deg) rotateY(${c ? i : 0}deg) translate3d(${m}px, ${u}px, ${b}px)`;
                h <= 1 && h > -1 && (f = 90 * o + 90 * h, l && (f = 90 * -o - 90 * h), t.browser && t.browser.need3dFix && Math.abs(f) / 90 % 2 == 1 && (f += .001)), s.style.transform = x, p.slideShadows && r(s, h, c);
            }
            if (s.style.transformOrigin = `50% 50% -${d / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`, p.shadow) {
                if (c) h.style.transform = `translate3d(0px, ${o / 2 + p.shadowOffset}px, ${-o / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
                else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, r = p.shadowOffset;
                    h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${i / 2 + r}px, ${-i / 2 / a}px) rotateX(-89.99deg)`;
                }
            }
            const m = (n.isSafari || n.isWebView) && n.needPerspectiveFix ? -d / 2 : 0;
            s.style.transform = `translate3d(0px,0,${m}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${m}px`);
        },
        setTransition: (e)=>{
            const { el: s, slides: a } = t;
            if (a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                const t = s.querySelector(".swiper-cube-shadow");
                t && (t.style.transitionDuration = `${e}ms`);
            }
        },
        recreateShadows: ()=>{
            const e = t.isHorizontal();
            t.slides.forEach((t)=>{
                const s = Math.max(Math.min(t.progress, 1), -1);
                r(t, s, e);
            });
        },
        getEffectParams: ()=>t.params.cubeEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
    });
}

},{"../shared/effect-init.min.mjs":"ccCbC","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"q2K6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFlip(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const a = (e, s)=>{
        let r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        r || (r = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "left" : "top")), a || (a = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "right" : "bottom")), r && (r.style.opacity = Math.max(-s, 0)), a && (a.style.opacity = Math.max(s, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "flip",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { slides: e, rtlTranslate: s } = t, r = t.params.flipEffect;
            for(let i = 0; i < e.length; i += 1){
                const o = e[i];
                let l = o.progress;
                t.params.flipEffect.limitRotation && (l = Math.max(Math.min(o.progress, 1), -1));
                const f = o.swiperSlideOffset;
                let n = -180 * l, d = 0, p = t.params.cssMode ? -f - t.translate : -f, m = 0;
                t.isHorizontal() ? s && (n = -n) : (m = p, p = 0, d = -n, n = 0), t.browser && t.browser.need3dFix && (Math.abs(n) / 90 % 2 == 1 && (n += .001), Math.abs(d) / 90 % 2 == 1 && (d += .001)), o.style.zIndex = -Math.abs(Math.round(l)) + e.length, r.slideShadows && a(o, l);
                const c = `translate3d(${p}px, ${m}px, 0px) rotateX(${d}deg) rotateY(${n}deg)`;
                (0, _effectTargetMinMjs.e)(r, o).style.transform = c;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s
            });
        },
        recreateShadows: ()=>{
            t.params.flipEffect, t.slides.forEach((e)=>{
                let s = e.progress;
                t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), a(e, s);
            });
        },
        getEffectParams: ()=>t.params.flipEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NWMW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createShadow);
var _utilsMinMjs = require("./utils.min.mjs");
function createShadow(e, t, r) {
    const s = `swiper-slide-shadow${r ? `-${r}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, a = (0, _utilsMinMjs.g)(t);
    let i = a.querySelector(`.${s.split(" ").join(".")}`);
    return i || (i = (0, _utilsMinMjs.c)("div", s.split(" ")), a.append(i)), i;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wJjZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCoverflow(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "coverflow",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { width: e, height: s, slides: r, slidesSizesGrid: a } = t, o = t.params.coverflowEffect, i = t.isHorizontal(), l = t.translate, f = i ? e / 2 - l : s / 2 - l, d = i ? o.rotate : -o.rotate, h = o.depth;
            for(let e = 0, s = r.length; e < s; e += 1){
                const s = r[e], l = a[e], c = (f - s.swiperSlideOffset - l / 2) / l, n = "function" == typeof o.modifier ? o.modifier(c) : c * o.modifier;
                let w = i ? d * n : 0, p = i ? 0 : d * n, m = -h * Math.abs(n), b = o.stretch;
                "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(o.stretch) / 100 * l);
                let g = i ? 0 : b * n, y = i ? b * n : 0, S = 1 - (1 - o.scale) * Math.abs(n);
                Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(w) < .001 && (w = 0), Math.abs(p) < .001 && (p = 0), Math.abs(S) < .001 && (S = 0), t.browser && t.browser.need3dFix && (Math.abs(w) / 90 % 2 == 1 && (w += .001), Math.abs(p) / 90 % 2 == 1 && (p += .001));
                const u = `translate3d(${y}px,${g}px,${m}px)  rotateX(${p}deg) rotateY(${w}deg) scale(${S})`;
                if ((0, _effectTargetMinMjs.e)(o, s).style.transform = u, s.style.zIndex = 1 - Math.abs(Math.round(n)), o.slideShadows) {
                    let e = i ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"), t = i ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                    e || (e = (0, _createShadowMinMjs.c)("coverflow", s, i ? "left" : "top")), t || (t = (0, _createShadowMinMjs.c)("coverflow", s, i ? "right" : "bottom")), e && (e.style.opacity = n > 0 ? n : 0), t && (t.style.opacity = -n > 0 ? -n : 0);
                }
            }
        },
        setTransition: (e)=>{
            t.slides.map((e)=>(0, _utilsMinMjs.g)(e)).forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gJMVE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCreative(e) {
    let { swiper: t, extendParams: r, on: s } = e;
    r({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const a = (e)=>"string" == typeof e ? e : `${e}px`;
    (0, _effectInitMinMjs.e)({
        effect: "creative",
        swiper: t,
        on: s,
        setTranslate: ()=>{
            const { slides: e, wrapperEl: r, slidesSizesGrid: s } = t, i = t.params.creativeEffect, { progressMultiplier: o } = i, l = t.params.centeredSlides;
            if (l) {
                const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                r.style.transform = `translateX(calc(50% - ${e}px))`;
            }
            for(let r = 0; r < e.length; r += 1){
                const s = e[r], n = s.progress, c = Math.min(Math.max(s.progress, -i.limitProgress), i.limitProgress);
                let f = c;
                l || (f = Math.min(Math.max(s.originalProgress, -i.limitProgress), i.limitProgress));
                const m = s.swiperSlideOffset, p = [
                    t.params.cssMode ? -m - t.translate : -m,
                    0,
                    0
                ], d = [
                    0,
                    0,
                    0
                ];
                let h = !1;
                t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                let g = {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    scale: 1,
                    opacity: 1
                };
                c < 0 ? (g = i.next, h = !0) : c > 0 && (g = i.prev, h = !0), p.forEach((e, t)=>{
                    p[t] = `calc(${e}px + (${a(g.translate[t])} * ${Math.abs(c * o)}))`;
                }), d.forEach((e, r)=>{
                    let s = g.rotate[r] * Math.abs(c * o);
                    t.browser && t.browser.need3dFix && Math.abs(s) / 90 % 2 == 1 && (s += .001), d[r] = s;
                }), s.style.zIndex = -Math.abs(Math.round(n)) + e.length;
                const w = p.join(", "), y = `rotateX(${d[0]}deg) rotateY(${d[1]}deg) rotateZ(${d[2]}deg)`, M = f < 0 ? `scale(${1 + (1 - g.scale) * f * o})` : `scale(${1 - (1 - g.scale) * f * o})`, u = f < 0 ? 1 + (1 - g.opacity) * f * o : 1 - (1 - g.opacity) * f * o, v = `translate3d(${w}) ${y} ${M}`;
                if (h && g.shadow || !h) {
                    let e = s.querySelector(".swiper-slide-shadow");
                    if (!e && g.shadow && (e = (0, _createShadowMinMjs.c)("creative", s)), e) {
                        const t = i.shadowPerProgress ? c * (1 / i.limitProgress) : c;
                        e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                    }
                }
                const E = (0, _effectTargetMinMjs.e)(i, s);
                E.style.transform = v, E.style.opacity = u, g.origin && (E.style.transformOrigin = g.origin);
            }
        },
        setTransition: (e)=>{
            const r = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            r.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: r,
                allSlides: !0
            });
        },
        perspective: ()=>t.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfbka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCards(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "cards",
        swiper: t,
        on: s,
        setTranslate: ()=>{
            const { slides: e, activeIndex: a, rtlTranslate: s } = t, r = t.params.cardsEffect, { startTranslate: i, isTouched: n } = t.touchEventsData, o = s ? -t.translate : t.translate;
            for(let l = 0; l < e.length; l += 1){
                const d = e[l], f = d.progress, c = Math.min(Math.max(f, -4), 4);
                let m = d.swiperSlideOffset;
                t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (m -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -m - t.translate : -m, h = 0;
                const M = -100 * Math.abs(c);
                let u = 1, w = -r.perSlideRotate * c, S = r.perSlideOffset - .75 * Math.abs(c);
                const $ = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, E = ($ === a || $ === a - 1) && c > 0 && c < 1 && (n || t.params.cssMode) && o < i, T = ($ === a || $ === a + 1) && c < 0 && c > -1 && (n || t.params.cssMode) && o > i;
                if (E || T) {
                    const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                    w += -28 * c * e, u += -0.5 * e, S += 96 * e, h = -25 * e * Math.abs(c) + "%";
                }
                if (p = c < 0 ? `calc(${p}px ${s ? "-" : "+"} (${S * Math.abs(c)}%))` : c > 0 ? `calc(${p}px ${s ? "-" : "+"} (-${S * Math.abs(c)}%))` : `${p}px`, !t.isHorizontal()) {
                    const e = h;
                    h = p, p = e;
                }
                const g = c < 0 ? "" + (1 + (1 - u) * c) : "" + (1 - (1 - u) * c), x = `\n        translate3d(${p}, ${h}, ${M}px)\n        rotateZ(${r.rotate ? s ? -w : w : 0}deg)\n        scale(${g})\n      `;
                if (r.slideShadows) {
                    let e = d.querySelector(".swiper-slide-shadow");
                    e || (e = (0, _createShadowMinMjs.c)("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1));
                }
                d.style.zIndex = -Math.abs(Math.round(f)) + e.length;
                (0, _effectTargetMinMjs.e)(r, d).style.transform = x;
            }
        },
        setTransition: (e)=>{
            const a = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: a
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iF67N","5lBMl"], "5lBMl", "parcelRequiree5c9")

//# sourceMappingURL=index.js.map
