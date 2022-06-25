(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mvirtual-mvirtual-module"],{

/***/ "./node_modules/dom-to-image-improved/src/dom-to-image-improved.js":
/*!*************************************************************************!*\
  !*** ./node_modules/dom-to-image-improved/src/dom-to-image-improved.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false,
        // Use (existing) authentication credentials for external URIs (CORS requests)
        useCredentials: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        toCanvas: toCanvas,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
     defaults to 1.0.
     * @param {Number} options.scale - a Number multiplier to scale up the canvas before rendering to reduce fuzzy images, defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
        .then(function(node) {
            return cloneNode(node, options.filter, true);
        })
        .then(embedFonts)
        .then(inlineImages)
        .then(applyOptions)
        .then(function(clone) {
            return makeSvgDataUri(clone,
              options.width || util.width(node),
              options.height || util.height(node)
            );
        });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function(property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
        .then(function(canvas) {
            return canvas.getContext('2d').getImageData(
              0,
              0,
              util.width(node),
              util.height(node)
            ).data;
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
        .then(function(canvas) {
            return canvas.toDataURL();
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
        .then(function(canvas) {
            return canvas.toDataURL('image/jpeg', options.quality || 1.0);
        });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
        .then(util.canvasToBlob);
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a canvas object
     * */
    function toCanvas(node, options) {
        return draw(node, options || {});
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if (typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }

        if(typeof(options.useCredentials) === 'undefined') {
            domtoimage.impl.options.useCredentials = defaultOptions.useCredentials;
        } else {
            domtoimage.impl.options.useCredentials = options.useCredentials;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
        .then(util.makeImage)
        .then(util.delay(100))
        .then(function(image) {
            var scale = typeof(options.scale) !== 'number' ? 1 : options.scale;
            console.log('scale', scale);
            var canvas = newCanvas(domNode, scale);
            var ctx = canvas.getContext('2d');
            if (image) {
                //console.log('should be scaled', image);
                ctx.scale(scale, scale);
                //canvas.height = 620;
                //ctx.drawImage(image, 150, 600, 1150, 700, 0, 0, 1150, 700);
                // canvas.height = options.image.height + 50;
                // //canvas.width = options.image.width - 135;// - options.image.offsetRight
                // canvas.width = options.image.width - options.image.offsetRight - options.image.offsetLeft + 60;
                // ctx.drawImage(image, options.image.offsetLeft, options.image.offsetTop - 50, options.image.width, options.image.height + 50, 0, 0, options.image.width, options.image.height);

                if (options.canvas && options.canvas.width) {
                    canvas.width = options.canvas.width;
                }

                if (options.canvas && options.canvas.height) {
                    canvas.height = options.canvas.height;
                }

                if (options.canvas) {
                    console.log('canv', options.canvas);
                    ctx.drawImage(
                      image,
                      options.canvas.sx  || 0,
                      options.canvas.sy || 0,
                      options.canvas.sw || options.width,
                      options.canvas.sh || options.height,
                      options.canvas.dx || 0,
                      options.canvas.dy || 0,
                      options.canvas.dw || options.width,
                      options.canvas.dh || options.height
                    );
                } else {
                    ctx.drawImage(image, 0, 0);
                }

            }
            return canvas;
        });

        function newCanvas(domNode, scale) {
            var canvas = document.createElement('canvas');
            canvas.width = (options.width || util.width(domNode)) * scale;
            canvas.height = (options.height || util.height(domNode)) * scale;

            console.log(canvas.width, canvas.height);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
        .then(makeNodeCopy)
        .then(function(clone) {
            return cloneChildren(node, clone, filter);
        })
        .then(function(clone) {
            return processClone(node, clone);
        });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.tagName === 'use' ? copyShadowChild(original) : original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
            .then(function() {
                return clone;
            });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function(child) {
                    done = done
                    .then(function() {
                        return cloneNode(child, filter);
                    })
                    .then(function(childClone) {
                        if (childClone) parent.appendChild(childClone);
                    });
                });
                return done;
            }
        }

        function copyShadowChild(original) {
            var child = document.getElementById(original.href.baseVal.replace('#', ''));
            return [child.cloneNode(true)];
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
            .then(cloneStyle)
            .then(clonePseudoElements)
            .then(copyUserInput)
            .then(fixSvg)
            .then(function() {
                return clone;
            });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                if (util.isChrome() && clone.style.marker && ( clone.tagName === 'line' || clone.tagName === 'path')) {
                    clone.style.marker = '';
                }

                function copyStyle(source, target) {
                    if (source.cssText) {
                        target.cssText = source.cssText;
                        target.font = source.font; // here, we re-assign the font prop.
                    } else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function(name) {
                            target.setProperty(
                              name,
                              source.getPropertyValue(name),
                              source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function(element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    var currentClass = clone.getAttribute('class');
                    if (currentClass) {
                        clone.setAttribute('class', currentClass + ' ' + className);
                    }

                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                            .map(formatProperty)
                            .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                  style.getPropertyValue(name) +
                                  (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function(attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
        .then(function(cssText) {
            var styleNode = document.createElement('style');
            node.appendChild(styleNode);
            styleNode.appendChild(document.createTextNode(cssText));
            return node;
        });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
        .then(function() {
            return node;
        });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
        .then(function(node) {
            node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
            return new XMLSerializer().serializeToString(node);
        })
        .then(util.escapeXhtml)
        .then(function(xhtml) {
            return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
        })
        .then(function(foreignObject) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
              foreignObject + '</svg>';
        })
        .then(function(svg) {
            return 'data:image/svg+xml;charset=utf-8,' + svg;
        });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            isChrome: isChrome,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)(\?|$)/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function(resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function(resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function() {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            if (uri === 'data:,') return Promise.resolve();
            return new Promise(function(resolve, reject) {
                var image = new Image();
                if(domtoimage.impl.options.useCredentials) {
                    image.crossOrigin = 'use-credentials';
                }
                image.onload = function() {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function(resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                if(domtoimage.impl.options.useCredentials) {
                    request.withCredentials = true;
                }
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if (placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function() {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if (placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function isChrome() {
            return /chrome/i.test( navigator.userAgent );
        }

        function delay(ms) {
            return function(arg) {
                return new Promise(function(resolve) {
                    setTimeout(function() {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function(url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
            .then(function(url) {
                return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            })
            .then(get || util.getAndEncode)
            .then(function(data) {
                return util.dataAsUrl(data, util.mimeType(url));
            })
            .then(function(dataUrl) {
                return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
            });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
            .then(readUrls)
            .then(function(urls) {
                var done = Promise.resolve(string);
                urls.forEach(function(url) {
                    done = done.then(function(string) {
                        return inline(string, url, baseUrl, get);
                    });
                });
                return done;
            });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
            .then(function(webFonts) {
                return Promise.all(
                  webFonts.map(function(webFont) {
                      return webFont.resolve();
                  })
                );
            })
            .then(function(cssStrings) {
                return cssStrings.join('\n');
            });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
            .then(getCssRules)
            .then(selectWebFontRules)
            .then(function(rules) {
                return rules.map(newWebFont);
            });

            function selectWebFontRules(cssRules) {
                return cssRules
                .filter(function(rule) {
                    return rule.type === CSSRule.FONT_FACE_RULE;
                })
                .filter(function(rule) {
                    return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function(sheet) {
                    if (sheet.hasOwnProperty("cssRules")) {
                        try {
                            util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                        } catch (e) {
                            console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                        }
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function() {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                .then(get || util.getAndEncode)
                .then(function(data) {
                    return util.dataAsUrl(data, util.mimeType(element.src));
                })
                .then(function(dataUrl) {
                    return new Promise(function(resolve, reject) {
                        element.onload = resolve;
                        // for any image with invalid src(such as <img src />), just ignore it
                        element.onerror = resolve;
                        element.src = dataUrl;
                    });
                });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
            .then(function() {
                if (node instanceof HTMLImageElement)
                    return newImage(node).inline();
                else
                    return Promise.all(
                      util.asArray(node.childNodes).map(function(child) {
                          return inlineAll(child);
                      })
                    );
            });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                .then(function(inlined) {
                    node.style.setProperty(
                      'background',
                      inlined,
                      node.style.getPropertyPriority('background')
                    );
                })
                .then(function() {
                    return node;
                });
            }
        }
    }
})(this);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mvirtual/mvirtual.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mvirtual/mvirtual.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" >\n  <div class=\"toolbar\">\n    <img (click)=\"navegar('virtual')\" src=\"assets/imgs/Botones/Botón_atras.png\" class=\"atras\">\n    <a class=\"selected\" id=\"open\" (click)=\"Guardar();\"\n      ><img src=\"assets/imgs/Iconos/save-icon.png\"\n    /></a>\n    <a  id=\"text\" (click)=\"ChangeTool('text');\"\n      ><img src=\"assets/imgs/Iconos/text-icon.png\"\n    /></a>\n    <a id=\"brush\" (click)=\"ChangeTool('brush');\"\n      ><img src=\"assets/imgs/Iconos/brush-icon.png\"\n    /></a>\n    <a id=\"line\" (click)=\"ChangeTool('line');\"\n      ><img src=\"assets/imgs/Iconos/line-icon.png\"\n    /></a>\n    <a  id=\"rectangle\" (click)=\"ChangeTool('rectangle');\"\n      ><img src=\"assets/imgs/Iconos/rectangle-icon.png\"\n    /></a>\n    <a  id=\"circle\" (click)=\"ChangeTool('circle');\"\n      ><img src=\"assets/imgs/Iconos/circle-icon.png\"\n    /></a>\n    <a  id=\"ellipse\" (click)=\"ChangeTool('ellipse');\"\n      ><img src=\"assets/imgs/Iconos/ellipse-icon.png\"\n    /></a>\n    <a  id=\"polygon\" (click)=\"ChangeTool('polygon');\"\n      ><img src=\"assets/imgs/Iconos/polygon-icon.png\"\n    /></a>\n    <a  id=\"eraser\" (click)=\"ChangeTool('eraser');\"\n    ><img src=\"assets/imgs/Iconos/eraser-icon.png\"\n  /></a>\n  </div>\n</div>\n<ion-content class=\"fondo\" [forceOverscroll]=\"false\">\n  <ion-row>\n    <ion-col *ngFor=\"let color of colors\" [style.background]=\"color\" class=\"color-block\" tappable\n      (click)=\"selectColor(color)\"></ion-col>\n  </ion-row>\n  <ion-radio-group [(ngModel)]=\"selectedColor\">\n    <ion-row>\n      <ion-col class=\"llenado\" *ngFor=\"let color of colors\" class=\"ion-text-center\">\n        <ion-radio  [value]=\"color\"></ion-radio>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n \n  <ion-range min=\"2\" max=\"20\"[(ngModel)]=\"lineWidth\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n  </ion-range>\n \n  <canvas id=\"imageCanvas\" #imageCanvas (mousedown)=\"startDrawing($event)\" (touchstart)=\"startDrawing($event)\"\n    (touchmove)=\"moved($event)\" (mousemove)=\"moved($event)\" (mouseup)=\"endDrawing($event)\" (touchend)=\"endDrawing($event)\"></canvas>\n    <ion-textarea *ngIf=\"boton==false\"\n    class=\"input_Text\"\n    [(ngModel)]=\"Textcontaux\"\n    autofocus=\"true\"\n    placeholder=\" Escribe aqui...\"\n    autoGrow=\"false\"\n    wrap=\"hard\"\n    rows=\"3\"\n  ></ion-textarea>\n  <ion-button (click)=\"navegar('fisico/ultimas')\" expand=\"full\" *ngIf=\"(boton==true) && (avanzar==true)\">\n    <ion-icon slot=\"start\"></ion-icon>\n      FINALIZAR\n  </ion-button>\n  <ion-button expand=\"full\" *ngIf=\"boton==false\" >\n    <ion-icon slot=\"start\"></ion-icon>\n    PONER NOTA\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mvirtual/mvirtual-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mvirtual/mvirtual-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MvirtualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvirtualPageRoutingModule", function() { return MvirtualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mvirtual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mvirtual.page */ "./src/app/pages/mvirtual/mvirtual.page.ts");




const routes = [
    {
        path: '',
        component: _mvirtual_page__WEBPACK_IMPORTED_MODULE_3__["MvirtualPage"]
    }
];
let MvirtualPageRoutingModule = class MvirtualPageRoutingModule {
};
MvirtualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MvirtualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mvirtual/mvirtual.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mvirtual/mvirtual.module.ts ***!
  \***************************************************/
/*! exports provided: MvirtualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvirtualPageModule", function() { return MvirtualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mvirtual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mvirtual-routing.module */ "./src/app/pages/mvirtual/mvirtual-routing.module.ts");
/* harmony import */ var _mvirtual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mvirtual.page */ "./src/app/pages/mvirtual/mvirtual.page.ts");







let MvirtualPageModule = class MvirtualPageModule {
};
MvirtualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mvirtual_routing_module__WEBPACK_IMPORTED_MODULE_5__["MvirtualPageRoutingModule"]
        ],
        declarations: [_mvirtual_page__WEBPACK_IMPORTED_MODULE_6__["MvirtualPage"]]
    })
], MvirtualPageModule);



/***/ }),

/***/ "./src/app/pages/mvirtual/mvirtual.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/mvirtual/mvirtual.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  background-color: #9b9999;\n  max-width: 900px;\n  font-family: \"Arial\";\n}\n\n.fondo {\n  background-color: #FFFF;\n}\n\nion-page {\n  background-color: #FFFF;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nbackground-content {\n  left: 0px;\n  right: 0px;\n  top: calc(var(--offset-top) * -1);\n  bottom: calc(var(--offset-bottom) * -1);\n  position: absolute;\n  background: #9b9999;\n}\n\nion-content {\n  background-color: #FFFF;\n}\n\nion-radio-group {\n  background-color: #FFFF;\n}\n\n#imageCanvas {\n  background-color: #FFFF;\n}\n\n#cont {\n  height: auto;\n  width: 100vw;\n}\n\n.toolbar {\n  width: 100%;\n  background-color: #9b9999;\n  overflow: auto;\n  height: 6vh;\n}\n\n.llenado {\n  background-color: whitesmoke;\n}\n\n.toolbar a {\n  float: left;\n  width: 11%;\n  text-align: center;\n  padding: 6px 5px;\n  transition: all 0.5s ease;\n  color: white;\n}\n\n.hydrated {\n  visibility: inherit;\n  background-color: #6d6c6c;\n}\n\n/* Change color on hover */\n\n.toolbar a:hover {\n  background-color: #000;\n}\n\n/* Change color on selected icon */\n\n.selected {\n  background-color: #8b8b8b;\n}\n\n#mycanvas {\n  width: 100%;\n}\n\n#img-data-div {\n  width: 100%;\n  max-width: 900px;\n  height: 200px;\n}\n\n/* Resize image to container */\n\n.toolbar a img {\n  max-width: 100%;\n  height: auto;\n}\n\n.input_Text {\n  background-color: #FFFF;\n  border-radius: 5px;\n  font-family: \"Delius\";\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.atras {\n  position: absolute;\n  position: absolute;\n  left: 1.5vh;\n  top: 93.5vh;\n  width: 10vw;\n  height: 6vh;\n  z-index: 1;\n}\n\nion-range {\n  background-color: #141414;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-button {\n  height: 6vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXZpcnR1YWwvbXZpcnR1YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLHVCQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVFGOztBQU5FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFTSjs7QUFQRTtFQUNFLDRCQUFBO0FBVUo7O0FBUkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFURTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFZSjs7QUFWRSwwQkFBQTs7QUFDQTtFQUNFLHNCQUFBO0FBYUo7O0FBVkUsa0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtBQWFKOztBQVZFO0VBQ0UsV0FBQTtBQWFKOztBQVZFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWFKOztBQVZFLDhCQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFlSjs7QUFiQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksV0FBQTtBQWlCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL212aXJ0dWFsL212aXJ0dWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliOTk5OTtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gIH1cbi5mb25kb3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XG59XG5pb24tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbn1cbmJhY2tncm91bmQtY29udGVudCB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiBjYWxjKHZhcigtLW9mZnNldC10b3ApICogLTEpO1xuICBib3R0b206IGNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDojOWI5OTk5IDtcbn1cbmlvbi1jb250ZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjtcbn1cbmlvbi1yYWRpby1ncm91cHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XG59XG4jaW1hZ2VDYW52YXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGO1xufVxuI2NvbnR7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6MTAwdncgO1xufVxuICAudG9vbGJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliOTk5OTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgfVxuICAubGxlbmFkb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXG4gIH1cbiAgLnRvb2xiYXIgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDExJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaHlkcmF0ZWQge1xuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA4LCAxMDgpO1xufVxuICAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbiAgLnRvb2xiYXIgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLyogQ2hhbmdlIGNvbG9yIG9uIHNlbGVjdGVkIGljb24gKi9cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XG4gIH1cbiAgXG4gICNteWNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNpbWctZGF0YS1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICBcbiAgLyogUmVzaXplIGltYWdlIHRvIGNvbnRhaW5lciAqL1xuICAudG9vbGJhciBhIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuLmlucHV0X1RleHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRlbGl1c1wiO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmF0cmFze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMS41dmg7XG4gICAgdG9wOiA5My41dmg7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgaGVpZ2h0OiA2dmg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuaW9uLXJhbmdle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mvirtual/mvirtual.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mvirtual/mvirtual.page.ts ***!
  \*************************************************/
/*! exports provided: MvirtualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvirtualPage", function() { return MvirtualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var dom_to_image_improved__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-to-image-improved */ "./node_modules/dom-to-image-improved/src/dom-to-image-improved.js");
/* harmony import */ var dom_to_image_improved__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_to_image_improved__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/servicio.service */ "./src/app/services/servicio.service.ts");






let MvirtualPage = class MvirtualPage {
    constructor(serv, plt, router) {
        this.serv = serv;
        this.plt = plt;
        this.router = router;
        this.pdf = {
            id: '',
            num: '',
            nombre: '',
            ambiente: '',
            factor: '',
            personaje: '',
            solitario: true,
            solido: '',
            gaseoso: '',
            liquido: '',
            P1: '',
            P2: '',
            P3_1: '',
            P3_2: '',
            P3_3: '',
            P3_4: '',
            tarjeta: '',
            tarjeta2: '',
            idea1: '',
            idea2: '',
            idea3: '',
            idea4: '',
            ideaselecionada: '',
            aprendizaje: '',
            V: '',
            C: '',
            R: '',
            P: '',
            tipo: '',
            img: ''
        };
        this.cont = 0;
        this.currentTool = 'brush';
        this.drawing = false;
        this.usingBrush = false;
        this.canvasWidth = 600;
        this.canvasHeight = 600;
        this.polygonSides = 6;
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.lineWidth = 5;
        this.loc = { x: null, y: null };
        this.locI = { x: null, y: null };
        this.shapeBoundingBox = { left: 0, top: 0, width: 0, height: 0 };
        this.mousedown = { x: 0, y: 0 };
    }
    // navegar atras y adelante
    navegar(ruta) {
        this.router.navigateByUrl(ruta);
    }
    //zloc = new Location;
    // envio de imagen
    Guardar() {
        const w = document.getElementById("imageCanvas").style.width;
        const h = document.getElementById("imageCanvas").style.height;
        dom_to_image_improved__WEBPACK_IMPORTED_MODULE_4___default.a.toPng(document.getElementById("imageCanvas"), { width: this.canvasElement.widt, height: this.canvasElement.height }).then((canvas) => {
            if (canvas) {
                var img = canvas;
                this.pdf.img = img;
                this.serv.AddItem(this.pdf);
                this.serv.addItem(this.pdf);
                this.serv.editar2(this.pdf.id, this.pdf, this.pdf.num);
            }
            return null;
        }).catch((res) => {
            console.log("Este es el error", res);
            return res;
        });
        this.avanzar = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.avanzar = false;
            this.mipromesa();
            this.canvasElement = document.getElementById('imageCanvas');
            this.canvasElement.width = this.plt.width() + '';
            this.canvasWidth = this.canvasElement.width;
            this.canvasElement.height = 445;
            this.canvasHeight = this.canvasElement.height;
            this.boton = true;
            this.ctx = this.canvasElement.getContext('2d');
        });
    }
    mipromesa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            new Promise((resolve) => {
                this.objaux = JSON.parse(this.serv.getItem('_cap_pdf2'));
                this.pdf = this.objaux;
            });
        });
    }
    ChangeTool(toolClicked) {
        console.log("herramienta:", toolClicked);
        document.getElementById("open").className = "";
        document.getElementById("text").className = "";
        document.getElementById("brush").className = "";
        document.getElementById("line").className = "";
        document.getElementById("rectangle").className = "";
        document.getElementById("circle").className = "";
        document.getElementById("ellipse").className = "";
        document.getElementById("polygon").className = "";
        document.getElementById("eraser").className = "";
        document.getElementById(toolClicked).className = "selected";
        this.currentTool = toolClicked;
        if (this.currentTool == 'text') {
            this.boton = false;
        }
    }
    startDrawing(ev) {
        this.drawing = true;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        if (ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend') {
            var touch = ev.touches[0] || ev.changedTouches[0];
            this.saveX = touch.pageX - canvasPosition.x;
            this.saveY = touch.pageY - canvasPosition.y;
        }
        else {
            this.saveX = ev.pageX - canvasPosition.x;
            this.saveY = ev.pageY - canvasPosition.y;
        }
        this.loc.x = this.saveX;
        this.loc.y = this.saveY;
        this.SaveCanvasImage();
    }
    endDrawing(ev) {
        if (this.currentTool == 'brush' || this.currentTool == 'eraser') {
            this.brush(ev);
        }
        else if (this.usingBrush == false) {
            this.RedrawCanvasImage();
            this.UpdateRubberbandOnMove(this.loc, ev);
        }
        this.cont = 0;
        this.drawing = false;
        this.usingBrush = false;
    }
    brush(ev) {
        let selectcolor;
        if (!this.drawing)
            return;
        if (this.currentTool == 'eraser') {
            selectcolor = '#FFFF';
            selectcolor = '#FFFF';
        }
        else {
            selectcolor = this.selectedColor;
            selectcolor = this.selectedColor;
        }
        let currentX;
        let currentY;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        if (ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend') {
            var touch = ev.touches[0] || ev.changedTouches[0];
            currentX = touch.pageX - canvasPosition.x;
            currentY = touch.pageY - canvasPosition.y;
        }
        else {
            currentX = ev.pageX - canvasPosition.x;
            currentY = ev.pageY - canvasPosition.y;
        }
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = selectcolor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(this.saveX, this.saveY);
        this.ctx.lineTo(currentX, currentY);
        this.ctx.closePath();
        this.ctx.stroke();
        this.saveX = currentX;
        this.saveY = currentY;
        this.mousedown.x = this.saveX;
        this.mousedown.y = this.saveY;
    }
    seguimiento(ev) {
        let currentX;
        let currentY;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        if (ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend') {
            var touch = ev.touches[0] || ev.changedTouches[0];
            currentX = touch.pageX - canvasPosition.x;
            currentY = touch.pageY - canvasPosition.y;
        }
        else {
            currentX = ev.pageX - canvasPosition.x;
            currentY = ev.pageY - canvasPosition.y;
        }
        this.saveX = currentX;
        this.saveY = currentY;
        this.mousedown.x = this.saveX;
        this.mousedown.y = this.saveY;
    }
    selectColor(color) {
        this.selectedColor = color;
    }
    MousePosition(ev) {
        let currentX;
        let currentY;
        // Get canvas size and position in web page
        let canvasSizeData = this.canvasElement.getBoundingClientRect();
        if (ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend') {
            var touch = ev.touches[0] || ev.changedTouches[0];
            currentX = touch.pageX - canvasSizeData.x;
            currentY = touch.pageY - canvasSizeData.y;
        }
        else {
            currentX = ev.pageX - canvasSizeData.x;
            currentY = ev.pageY - canvasSizeData.y;
        }
        return { X: currentX,
            Y: currentY
        };
    }
    moved(ev) {
        if (this.currentTool == 'brush' || this.currentTool == 'eraser') {
            this.brush(ev);
        }
        else if (this.usingBrush == false) {
            if (this.drawing) {
                this.seguimiento(ev);
                this.RedrawCanvasImage();
                this.UpdateRubberbandOnMove(this.loc, ev);
            }
        }
        this.cont = 0;
    }
    SaveCanvasImage() {
        // Save image
        this.savedImageData = this.ctx.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    RedrawCanvasImage() {
        // Restore image
        this.ctx.putImageData(this.savedImageData, 0, 0);
    }
    radiansToDegrees(rad) {
        if (rad < 0) {
            // Correct the bottom error by adding the negative
            // angle to 360 to get the correct result around
            // the whole circle
            return (360.0 + (rad * (180 / Math.PI))).toFixed(2);
        }
        else {
            return (rad * (180 / Math.PI)).toFixed(2);
        }
    }
    getPolygon() {
        let polygonPoints = this.getPolygonPoints();
        this.ctx.beginPath();
        this.ctx.moveTo(polygonPoints[0].x, polygonPoints[0].y);
        for (let i = 1; i < this.polygonSides; i++) {
            this.ctx.lineTo(polygonPoints[i].x, polygonPoints[i].y);
        }
        this.ctx.closePath();
    }
    // Converts degrees to radians
    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    getAngleUsingXAndY(mouselocX, mouselocY) {
        let adjacent = this.mousedown.x - mouselocX;
        let opposite = this.mousedown.y - mouselocY;
        return this.radiansToDegrees(Math.atan2(opposite, adjacent));
    }
    getPolygonPoints() {
        // Get angle in radians based on x & y of mouse location
        let angle = this.degreesToRadians(this.getAngleUsingXAndY(this.loc.x, this.loc.y));
        // X & Y for the X & Y point representing the radius is equal to
        // the X & Y of the bounding rubberband box
        let radiusX = this.shapeBoundingBox.width;
        let radiusY = this.shapeBoundingBox.height;
        // Stores all points in the polygon
        let polygonPoints = [];
        // Each point in the polygon is found by breaking the 
        // parts of the polygon into triangles
        // Then I can use the known angle and adjacent side length
        // to find the X = mouseLoc.x + radiusX * Sin(angle)
        // You find the Y = mouseLoc.y + radiusY * Cos(angle)
        for (let i = 0; i < this.polygonSides; i++) {
            polygonPoints.push(new PolygonPoint(this.loc.x + radiusX * Math.sin(angle), this.loc.y - radiusY * Math.cos(angle)));
            // 2 * PI equals 360 degrees
            // Divide 360 into parts based on how many polygon 
            // sides you want 
            angle += 2 * Math.PI / this.polygonSides;
        }
        return polygonPoints;
    }
    drawRubberbandShape(loc, ev) {
        this.ctx.strokeStyle = this.selectedColor;
        this.ctx.fillStyle = this.selectedColor;
        if (this.currentTool === "line") {
            this.ctx.beginPath();
            this.ctx.moveTo(this.mousedown.x, this.mousedown.y);
            this.ctx.lineTo(this.loc.x, this.loc.y);
            this.ctx.stroke();
        }
        else if (this.currentTool === "rectangle") {
            // Creates rectangles
            this.ctx.strokeRect(this.shapeBoundingBox.left, this.shapeBoundingBox.top, this.shapeBoundingBox.width, this.shapeBoundingBox.height);
        }
        else if (this.currentTool === "circle") {
            // Create circles
            //this.RedrawCanvasImage();
            let radius = this.shapeBoundingBox.width;
            this.ctx.beginPath();
            this.ctx.arc(this.mousedown.x, this.mousedown.y, radius, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        else if (this.currentTool === "ellipse") {
            // Create ellipses
            // Create ellipses
            // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
            let radiusX = this.shapeBoundingBox.width / 2;
            let radiusY = this.shapeBoundingBox.height / 2;
            this.ctx.beginPath();
            this.ctx.ellipse(this.mousedown.x, this.mousedown.y, radiusX, radiusY, Math.PI / 4, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        else if (this.currentTool === "polygon") {
            // Create polygons
            this.getPolygon();
            this.ctx.stroke();
        }
        else if (this.currentTool === "text") {
            // Text
            this.boton = true;
            this.ctx.beginPath();
            this.ctx.font = "40px Arial";
            this.ctx.fillText(this.Textcontaux, this.loc.x, this.loc.y, this.shapeBoundingBox.width);
        }
    }
    UpdateRubberbandSizeData(loc) {
        // Height & width are the difference between were clicked
        // and current mouse position
        this.shapeBoundingBox.width = Math.abs(loc.x - this.mousedown.x);
        this.shapeBoundingBox.height = Math.abs(loc.y - this.mousedown.y);
        // If mouse is below where mouse was clicked originally
        if (loc.x > this.mousedown.x) {
            // Store mousedown because it is farthest left
            this.shapeBoundingBox.left = this.mousedown.x;
        }
        else {
            // Store mouse location because it is most left
            this.shapeBoundingBox.left = loc.x;
        }
        // If mouse location is below where clicked originally
        if (loc.y > this.mousedown.y) {
            // Store mousedown because it is closer to the top
            // of the canvas
            this.shapeBoundingBox.top = this.mousedown.y;
        }
        else {
            // Otherwise store mouse position
            this.shapeBoundingBox.top = loc.y;
        }
    }
    UpdateRubberbandOnMove(loc, ev) {
        // Stores changing height, width, x & y position of most 
        // top left point being either the click or mouse location
        this.UpdateRubberbandSizeData(loc);
        // Redraw the shape
        this.drawRubberbandShape(loc, ev);
    }
    setBackground() {
        var background = new Image();
        background.src = './assets/code.png';
        let ctx = this.canvasElement.getContext('2d');
        background.onload = () => {
            ctx.drawImage(background, 0, 0, this.canvasElement.width, this.canvasElement.height);
        };
    }
    guardarnote() {
        this.Textcont = this.Textcontaux;
    }
};
MvirtualPage.ctorParameters = () => [
    { type: src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_5__["ServicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MvirtualPage.propDecorators = {
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mycanvas', { static: false },] }]
};
MvirtualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mvirtual',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mvirtual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mvirtual/mvirtual.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mvirtual.page.scss */ "./src/app/pages/mvirtual/mvirtual.page.scss")).default]
    })
    // Stores size data used to create rubber band shapes
    // that will redraw as the user moves the mouse
], MvirtualPage);

class PolygonPoint {
    constructor(X, Y) {
        this.x = X,
            this.y = Y;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-mvirtual-mvirtual-module-es2015.js.map