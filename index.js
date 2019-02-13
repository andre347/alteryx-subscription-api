"use strict";

var _oauthSignature = _interopRequireDefault(require("oauth-signature"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Gallery =
  /*#__PURE__*/
  (function() {
    function Gallery(apiLocation, apiKey, apiSecret) {
      _classCallCheck(this, Gallery);

      this.apiKey = apiKey;
      this.apiSecret = apiSecret;
      this.apiLocation = apiLocation;
    }

    _createClass(Gallery, [
      {
        key: "getSubscriptionWorkflows",
        value: (function() {
          var _getSubscriptionWorkflows = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var type, url, params, signature, newParams, response;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        type = "GET";
                        url = "".concat(
                          this.apiLocation,
                          "/workflows/subscription/?"
                        );
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            oauth_signature: signature
                          })
                        );
                        _context.next = 7;
                        return fetch(url + newParams);

                      case 7:
                        response = _context.sent;
                        return _context.abrupt("return", response);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this
              );
            })
          );

          function getSubscriptionWorkflows() {
            return _getSubscriptionWorkflows.apply(this, arguments);
          }

          return getSubscriptionWorkflows;
        })()
      },
      {
        key: "getAppQuestions",
        value: (function() {
          var _getAppQuestions = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(id) {
              var type, url, params, signature, newParams, response;
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        type = "GET";
                        url = ""
                          .concat(this.apiLocation, "/workflows/")
                          .concat(id, "/questions/?");
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            oauth_signature: signature
                          })
                        );
                        _context2.next = 7;
                        return fetch(url + newParams);

                      case 7:
                        response = _context2.sent;
                        return _context2.abrupt("return", response);

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                this
              );
            })
          );

          function getAppQuestions(_x) {
            return _getAppQuestions.apply(this, arguments);
          }

          return getAppQuestions;
        })()
      },
      {
        key: "executeWorkflow",
        value: (function() {
          var _executeWorkflow = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3(id, questions) {
              var type, url, params, signature, newParams, response;
              return regeneratorRuntime.wrap(
                function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        type = "POST";
                        url = ""
                          .concat(this.apiLocation, "/workflows/")
                          .concat(id, "/jobs/?");
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            oauth_signature: signature
                          })
                        );
                        _context3.next = 7;
                        return fetch(url + newParams, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                            questions: questions
                          })
                        });

                      case 7:
                        response = _context3.sent;
                        return _context3.abrupt("return", response);

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                },
                _callee3,
                this
              );
            })
          );

          function executeWorkflow(_x2, _x3) {
            return _executeWorkflow.apply(this, arguments);
          }

          return executeWorkflow;
        })()
      },
      {
        key: "getJobsByWorkflow",
        value: (function() {
          var _getJobsByWorkflow = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4(id) {
              var type, url, params, signature, newParams, response;
              return regeneratorRuntime.wrap(
                function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        type = "GET";
                        url = ""
                          .concat(this.apiLocation, "/workflows/")
                          .concat(id, "/jobs/?");
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            oauth_signature: signature
                          })
                        );
                        _context4.next = 7;
                        return fetch(url + newParams);

                      case 7:
                        response = _context4.sent;
                        return _context4.abrupt("return", response);

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                },
                _callee4,
                this
              );
            })
          );

          function getJobsByWorkflow(_x4) {
            return _getJobsByWorkflow.apply(this, arguments);
          }

          return getJobsByWorkflow;
        })()
      },
      {
        key: "getJob",
        value: (function() {
          var _getJob = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5(id) {
              var type, url, params, signature, newParams, response;
              return regeneratorRuntime.wrap(
                function _callee5$(_context5) {
                  while (1) {
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        type = "GET";
                        url = ""
                          .concat(this.apiLocation, "/jobs/")
                          .concat(id, "/?");
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            oauth_signature: signature
                          })
                        );
                        _context5.next = 7;
                        return fetch(url + newParams);

                      case 7:
                        response = _context5.sent;
                        return _context5.abrupt("return", response);

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                },
                _callee5,
                this
              );
            })
          );

          function getJob(_x5) {
            return _getJob.apply(this, arguments);
          }

          return getJob;
        })()
      },
      {
        key: "getOutputFileURL",
        value: (function() {
          var _getOutputFileURL = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6(jobId, outputId, format) {
              var type,
                url,
                params,
                signature,
                newParams,
                outputParams,
                response;
              return regeneratorRuntime.wrap(
                function _callee6$(_context6) {
                  while (1) {
                    switch ((_context6.prev = _context6.next)) {
                      case 0:
                        type = "GET";
                        url = ""
                          .concat(this.apiLocation, "/jobs/")
                          .concat(jobId, "/output/")
                          .concat(outputId, "/?");
                        params = buildOauthParams(this.apiKey);
                        signature = generateSignature(
                          type,
                          url,
                          params,
                          this.apiSecret
                        );
                        newParams = setParams(
                          _objectSpread({}, params, {
                            format: format || "Raw"
                          })
                        );
                        outputParams = setParams(
                          _objectSpread({}, newParams, {
                            oauth_signature: signature
                          })
                        );
                        _context6.next = 8;
                        return fetch(url + outputParams);

                      case 8:
                        response = _context6.sent;
                        return _context6.abrupt("return", response);

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                },
                _callee6,
                this
              );
            })
          );

          function getOutputFileURL(_x6, _x7, _x8) {
            return _getOutputFileURL.apply(this, arguments);
          }

          return getOutputFileURL;
        })()
      }
    ]);

    return Gallery;
  })();

function buildOauthParams(apiKey) {
  return {
    oauth_consumer_key: apiKey,
    oauth_signature_method: "HMAC-SHA1",
    oauth_nonce: Math.floor(Math.random() * 1e9).toString(),
    oauth_timestamp: Math.floor(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  };
}

function generateSignature(httpMethod, url, parameters, secret) {
  return _oauthSignature.default.generate(
    httpMethod,
    url,
    parameters,
    secret,
    null,
    {
      encodeSignature: false
    }
  );
}

function setParams(params) {
  return Object.keys(params)
    .map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    })
    .join("&");
}

module.exports = Gallery;
