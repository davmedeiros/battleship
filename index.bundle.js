/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  --color-base: #000000;
  --color-alpha: #ffe74c;
  --color-beta: #ff5964;
  --color-gamma: #ffffff;
  --color-psi: #6bf178;
  --color-omega: #35a7ff;
  --shadow: 0 8px 8px rgba(0, 0, 0, 0.4);
}

body {
  min-height: 100svh;
  display: grid;
  grid-template-rows: 150px 1fr;
}

header {
  background-color: var(--color-beta);
  display: grid;
  justify-content: center;
  box-shadow: var(--shadow);
  z-index: 2;
}

main {
  background-color: var(--color-omega);
  display: grid;
  grid-template: 100px 1fr / 250px 1fr 250px;
  justify-content: center;
  gap: 32px;
}

h1 {
  color: var(--color-alpha);
  font-size: 8rem;
  margin: 0;
  text-shadow: var(--shadow);
  box-shadow: var(--shadow);
  background: linear-gradient(90deg, var(--color-omega), var(--color-psi));
  border-radius: 12px;
  margin-top: 20px;
  z-index: 3;
  padding: 0 10px;
}

#screen {
  background-color: var(--color-base);
  display: grid;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  border-radius: 0 0 32px 32px;
  font-size: 2rem;
  box-shadow: var(--shadow);
}

#screen p {
  margin: 0;
  color: var(--color-psi);
}

#play-area {
  grid-row: 2 / -1;
  grid-column: 2 / 3;
  display: grid;
  gap: 32px;
  grid-template: 1fr / repeat(2, 1fr);
}

#player,
#enemy {
  cursor: crosshair;
}

.board {
  background-color: white;
  aspect-ratio: 1 / 1;
  border-radius: 11px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  gap: 5px;
  background-color: var(--color-omega);
  overflow: hidden;
}

.spot {
  background-color: var(--color-gamma);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.shot {
  background-color: var(--color-beta);
  pointer-events: none;
}

.ship {
  background-color: var(--color-alpha);
}

.locked {
  pointer-events: none;
}

.board:not(.locked) {
  outline: 4px solid var(--color-alpha);
}

#actions-area {
  grid-row: 1 / -1;
  grid-column: 3 / -1;
  display: grid;
  place-items: center;
}

button {
  cursor: pointer;
  border: none;
  background-color: var(--color-gamma);
  height: 50px;
  width: 100px;
  border-radius: 11px;
}

button:hover,
button.enabled,
.free:hover {
  background-color: var(--color-psi);
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE;;;;;;;;;;;cAWY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,sBAAsB;EACtB,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,0BAA0B;EAC1B,yBAAyB;EACzB,wEAAwE;EACxE,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,mCAAmC;AACrC;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,gDAAgD;EAChD,QAAQ;EACR,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;EAGE,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import 'normalize.css/normalize.css';\n\n:root {\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n  --color-base: #000000;\n  --color-alpha: #ffe74c;\n  --color-beta: #ff5964;\n  --color-gamma: #ffffff;\n  --color-psi: #6bf178;\n  --color-omega: #35a7ff;\n  --shadow: 0 8px 8px rgba(0, 0, 0, 0.4);\n}\n\nbody {\n  min-height: 100svh;\n  display: grid;\n  grid-template-rows: 150px 1fr;\n}\n\nheader {\n  background-color: var(--color-beta);\n  display: grid;\n  justify-content: center;\n  box-shadow: var(--shadow);\n  z-index: 2;\n}\n\nmain {\n  background-color: var(--color-omega);\n  display: grid;\n  grid-template: 100px 1fr / 250px 1fr 250px;\n  justify-content: center;\n  gap: 32px;\n}\n\nh1 {\n  color: var(--color-alpha);\n  font-size: 8rem;\n  margin: 0;\n  text-shadow: var(--shadow);\n  box-shadow: var(--shadow);\n  background: linear-gradient(90deg, var(--color-omega), var(--color-psi));\n  border-radius: 12px;\n  margin-top: 20px;\n  z-index: 3;\n  padding: 0 10px;\n}\n\n#screen {\n  background-color: var(--color-base);\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-column: 2 / 3;\n  border-radius: 0 0 32px 32px;\n  font-size: 2rem;\n  box-shadow: var(--shadow);\n}\n\n#screen p {\n  margin: 0;\n  color: var(--color-psi);\n}\n\n#play-area {\n  grid-row: 2 / -1;\n  grid-column: 2 / 3;\n  display: grid;\n  gap: 32px;\n  grid-template: 1fr / repeat(2, 1fr);\n}\n\n#player,\n#enemy {\n  cursor: crosshair;\n}\n\n.board {\n  background-color: white;\n  aspect-ratio: 1 / 1;\n  border-radius: 11px;\n  box-shadow: var(--shadow);\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n  gap: 5px;\n  background-color: var(--color-omega);\n  overflow: hidden;\n}\n\n.spot {\n  background-color: var(--color-gamma);\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n\n.shot {\n  background-color: var(--color-beta);\n  pointer-events: none;\n}\n\n.ship {\n  background-color: var(--color-alpha);\n}\n\n.locked {\n  pointer-events: none;\n}\n\n.board:not(.locked) {\n  outline: 4px solid var(--color-alpha);\n}\n\n#actions-area {\n  grid-row: 1 / -1;\n  grid-column: 3 / -1;\n  display: grid;\n  place-items: center;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  background-color: var(--color-gamma);\n  height: 50px;\n  width: 100px;\n  border-radius: 11px;\n}\n\nbutton:hover,\nbutton.enabled,\n.free:hover {\n  background-color: var(--color-psi);\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");


const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])('Admiral');
const boardViews = document.querySelectorAll('.board');
const message = document.querySelector('#message');
const toggleVertical = document.querySelector('#toggle-vertical');
const playerBoardView = document.querySelector('#player');
const enemyBoardView = document.querySelector('#enemy');
const playerShipsToPlace = [2, 3, 3, 4, 5];
const enemyShipsToPlace = [2, 3, 3, 4, 5];
let isToggledVertical = false;
const gameDelay = 1000;

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const endGame = () => {
  boardViews.forEach((boardView) => {
    boardView.classList.add('locked');
  });
};

const placeShip = (placer, length, coordinatesY, coordinatesX, isVertical) =>
  placer
    .getGameBoard()
    .placeShip(length, coordinatesY, coordinatesX, isVertical);

const attack = (attacker, target, coordinatesY, coordinatesX) => {
  let hasWon = false;
  const result = attacker.attack(
    target.getGameBoard(),
    coordinatesY,
    coordinatesX
  );

  if (result) {
    if (result.isSunk()) {
      if (target.getGameBoard().hasAllSunk()) {
        message.textContent = `${attacker.name} sunk all ships!`;
        endGame();
        hasWon = true;
      } else {
        message.textContent = `${attacker.name} sunk a ${result.name}`;
      }
    } else {
      message.textContent = `${attacker.name} hit a ship!`;
    }
  } else {
    message.textContent = `${attacker.name} missed!`;
  }

  return hasWon;
};

const renderBoards = () => {
  const playerBoard = game.player.getGameBoard().getBoard();
  const enemyBoard = game.enemy.getGameBoard().getBoard();
  const boards = [playerBoard, enemyBoard];
  let index = 0;

  boardViews.forEach((boardView) => {
    clearContainer(boardView);
    boards[index].forEach((rows, coordinatesY) => {
      rows.forEach((spot, coordinatesX) => {
        const spotView = document.createElement('div');
        spotView.classList.add('spot');

        if (spot === 'shot') {
          spotView.classList.add('shot');
        } else if (spot && index === 0) {
          spotView.classList.add('ship');
        } else {
          spotView.classList.add('free');
        }

        spotView.textContent = `${coordinatesY}/${coordinatesX}`;
        spotView.dataset.coordinatesY = coordinatesY;
        spotView.dataset.coordinatesX = coordinatesX;

        spotView.addEventListener('click', () => {
          message.textContent = `${game.player.name} is aiming...`;
          boardView.classList.toggle('locked');

          let hasWon = false;
          let playerHasPlaced = true;

          setTimeout(() => {
            if (playerShipsToPlace.length <= 0) {
              hasWon = attack(
                game.player,
                game.enemy,
                coordinatesY,
                coordinatesX
              );
            } else {
              const popped = playerShipsToPlace.pop();
              const result = placeShip(
                game.player,
                popped,
                coordinatesY,
                coordinatesX,
                isToggledVertical
              );

              if (result) {
                message.textContent = `${game.player.name} placed a ${result.name}`;
              } else {
                playerShipsToPlace.push(popped);
                playerHasPlaced = false;
                message.textContent = `${game.player.name} ship was sent out of bounds. Try again.`;
                boardView.classList.toggle('locked');
              }
            }
            renderBoards();
          }, gameDelay);

          setTimeout(() => {
            if (playerHasPlaced) {
              if (!hasWon) {
                message.textContent = `${game.enemy.name} is aiming...`;

                setTimeout(() => {
                  if (enemyShipsToPlace.length <= 0) {
                    hasWon = attack(game.enemy, game.player);
                  } else {
                    let result;
                    do {
                      const popped = enemyShipsToPlace.pop();
                      result = placeShip(
                        game.enemy,
                        popped,
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 2) === 0
                      );

                      if (!result) {
                        enemyShipsToPlace.push(popped);
                      } else {
                        message.textContent = `${game.enemy.name} placed a ${result.name}`;
                        if (enemyShipsToPlace.length === 0) {
                          toggleVertical.classList.add('hidden');
                          playerBoardView.classList.toggle('locked');
                          enemyBoardView.classList.toggle('locked');
                          setTimeout(() => {
                            message.textContent =
                              'End of placement phase: Awaiting orders to fire...';
                            renderBoards();
                          }, 1000);
                        }
                      }
                    } while (!result);
                  }
                  renderBoards();
                  if (!hasWon) {
                    boardView.classList.toggle('locked');
                  }
                }, gameDelay);
              }
            }
          }, gameDelay + gameDelay);
        });

        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

toggleVertical.addEventListener('click', () => {
  isToggledVertical = !isToggledVertical;
  toggleVertical.classList.toggle('enabled');
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoards);


/***/ }),

/***/ "./src/js/game-board.js":
/*!******************************!*\
  !*** ./src/js/game-board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


const GameBoard = () => {
  const board = [...Array(10)].map(() => [...Array(10)]);

  const placeShip = (
    shipLength,
    coordinatesY,
    coordinatesX,
    isVertical = false
  ) => {
    let result;

    if (
      coordinatesX >= 0 &&
      coordinatesY >= 0 &&
      coordinatesX <= 9 &&
      coordinatesY <= 9 &&
      ((!isVertical && coordinatesX + (shipLength - 1) <= 9) ||
        (isVertical && coordinatesY + (shipLength - 1) <= 9))
    ) {
      if (!board[coordinatesY][coordinatesX]) {
        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);

        for (let i = 0; i < ship.length; i += 1) {
          if (isVertical) {
            board[coordinatesY + i][coordinatesX] = ship;
          } else {
            board[coordinatesY][coordinatesX + i] = ship;
          }
        }

        result = board[coordinatesY][coordinatesX];
      }
    }

    return result;
  };

  const receiveAttack = (coordinatesY, coordinatesX) => {
    const target = board[coordinatesY][coordinatesX];

    if (target && target !== 'shot') {
      target.hit();
    }

    board[coordinatesY][coordinatesX] = 'shot';
    return target;
  };

  const hasAllSunk = () => {
    let result = true;
    const flatBoard = board.flat(1);

    flatBoard.forEach((item) => {
      if (typeof item === 'object') {
        result = false;
      }
    });

    return result;
  };

  const getBoard = () => board;

  return { placeShip, receiveAttack, hasAllSunk, getBoard };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/player.js");


const Game = (playerName) => {
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerName);
  const enemy = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('R.O.B.O.T.', true);

  return { player, enemy };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");



(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board */ "./src/js/game-board.js");


const Player = (name, isAI = false) => {
  const board = (0,_game_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // AI variables
  let originalHitCoordinatesY = -1;
  let originalHitCoordinatesX = -1;
  let lastHitCoordinatesY = -1;
  let lastHitCoordinatesX = -1;
  let isHittingVertical = false;
  let isHittingHorizontal = false;
  let shotsLandedOnCurrent = 0;
  let hasHitLastTime = false;

  const aiAttack = (enemyBoard) => {
    let result;
    let coordinatesY;
    let coordinatesX;
    let target = 'shot';
    let loopCount = 0;

    while (target === 'shot' && !enemyBoard.hasAllSunk()) {
      if (lastHitCoordinatesY === -1 && lastHitCoordinatesX === -1) {
        coordinatesY = Math.floor(Math.random() * 10);
        coordinatesX = Math.floor(Math.random() * 10);
        target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
      } else {
        if (isHittingHorizontal) {
          if (!hasHitLastTime && (!target || target === 'shot')) {
            coordinatesX =
              originalHitCoordinatesX +
              (Math.floor(Math.random() * 2) ? 1 : -1);
          } else {
            coordinatesX =
              lastHitCoordinatesX + (Math.floor(Math.random() * 2) ? 1 : -1);
          }

          coordinatesY = lastHitCoordinatesY;
        } else if (isHittingVertical) {
          if (!hasHitLastTime && (!target || target === 'shot')) {
            coordinatesY =
              originalHitCoordinatesY +
              (Math.floor(Math.random() * 2) ? 1 : -1);
          } else {
            coordinatesY =
              lastHitCoordinatesY + (Math.floor(Math.random() * 2) ? 1 : -1);
          }

          coordinatesX = lastHitCoordinatesX;
        } else {
          let offset = Math.floor(Math.random() * (2 - -1) + -1);
          coordinatesY = lastHitCoordinatesY + offset;

          if (offset) {
            offset = 0;
          } else {
            offset = Math.floor(Math.random() * (2 - -1) + -1);
          }

          coordinatesX = lastHitCoordinatesX + offset;
        }

        if (coordinatesY > 9) {
          coordinatesY = 9;
        }

        if (coordinatesY < 0) {
          coordinatesY = 0;
        }

        if (coordinatesX > 9) {
          coordinatesX = 9;
        }

        if (coordinatesX < 0) {
          coordinatesX = 0;
        }

        target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
      }

      loopCount += 1;

      if (loopCount > 100) {
        // failsafe to prevent unknown infinite loops from breaking the browser
        break;
      }
    }

    if (!enemyBoard.hasAllSunk()) {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);

      if (result && result !== 'shot') {
        if (shotsLandedOnCurrent === 0) {
          originalHitCoordinatesY = coordinatesY;
          originalHitCoordinatesX = coordinatesX;
        }

        hasHitLastTime = true;
        shotsLandedOnCurrent += 1;

        if (result.isSunk()) {
          [lastHitCoordinatesY, lastHitCoordinatesX] = [-1, -1];
          isHittingVertical = false;
          isHittingHorizontal = false;
          shotsLandedOnCurrent = 0;
        } else {
          if (lastHitCoordinatesY === coordinatesY) {
            isHittingHorizontal = true;
          } else if (lastHitCoordinatesX === coordinatesX) {
            isHittingVertical = true;
          }

          [lastHitCoordinatesY, lastHitCoordinatesX] = [
            coordinatesY,
            coordinatesX,
          ];
        }
      } else {
        hasHitLastTime = false;
      }
    }

    return result;
  };

  const attack = (enemyBoard, coordinatesY, coordinatesX) => {
    let result;

    if (isAI) {
      result = aiAttack(enemyBoard);
    } else {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);
    }

    return result;
  };

  const getGameBoard = () => board;

  return { name, isAI, attack, getGameBoard };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  let timesHit = 0;
  let name;

  switch (length) {
    case 5:
      name = 'Carrier';
      break;
    case 4:
      name = 'Battleship';
      break;
    case 3:
      name = 'Cruiser';
      break;
    case 2:
      name = 'Destroyer';
      break;
    default:
      name = 'UFO';
      break;
  }

  const isSunk = () => timesHit >= length;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  return { length, isSunk, hit, name };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_cjs_js_node_modules_normalize_css_normalize_css-node_mod-1e580f"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LWZhbWlseTpcbiAgICBzeXN0ZW0tdWksXG4gICAgLWFwcGxlLXN5c3RlbSxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgJ1NlZ29lIFVJJyxcbiAgICBSb2JvdG8sXG4gICAgT3h5Z2VuLFxuICAgIFVidW50dSxcbiAgICBDYW50YXJlbGwsXG4gICAgJ09wZW4gU2FucycsXG4gICAgJ0hlbHZldGljYSBOZXVlJyxcbiAgICBzYW5zLXNlcmlmO1xuICAtLWNvbG9yLWJhc2U6ICMwMDAwMDA7XG4gIC0tY29sb3ItYWxwaGE6ICNmZmU3NGM7XG4gIC0tY29sb3ItYmV0YTogI2ZmNTk2NDtcbiAgLS1jb2xvci1nYW1tYTogI2ZmZmZmZjtcbiAgLS1jb2xvci1wc2k6ICM2YmYxNzg7XG4gIC0tY29sb3Itb21lZ2E6ICMzNWE3ZmY7XG4gIC0tc2hhZG93OiAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwc3ZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmcjtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmV0YSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICB6LWluZGV4OiAyO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb21lZ2EpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgLyAyNTBweCAxZnIgMjUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMycHg7XG59XG5cbmgxIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFscGhhKTtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWNvbG9yLW9tZWdhKSwgdmFyKC0tY29sb3ItcHNpKSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHotaW5kZXg6IDM7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuI3NjcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMzJweCAzMnB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbiNzY3JlZW4gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXBzaSk7XG59XG5cbiNwbGF5LWFyZWEge1xuICBncmlkLXJvdzogMiAvIC0xO1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMzJweDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDIsIDFmcik7XG59XG5cbiNwbGF5ZXIsXG4jZW5lbXkge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmJvYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9tZWdhKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNwb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1nYW1tYSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmV0YSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFscGhhKTtcbn1cblxuLmxvY2tlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9hcmQ6bm90KC5sb2NrZWQpIHtcbiAgb3V0bGluZTogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWFscGhhKTtcbn1cblxuI2FjdGlvbnMtYXJlYSB7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1nYW1tYSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuXG5idXR0b246aG92ZXIsXG5idXR0b24uZW5hYmxlZCxcbi5mcmVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHNpKTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0U7Ozs7Ozs7Ozs7O2NBV1k7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix3RUFBd0U7RUFDeEUsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLFxcbiAgICBSb2JvdG8sXFxuICAgIE94eWdlbixcXG4gICAgVWJ1bnR1LFxcbiAgICBDYW50YXJlbGwsXFxuICAgICdPcGVuIFNhbnMnLFxcbiAgICAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLS1jb2xvci1iYXNlOiAjMDAwMDAwO1xcbiAgLS1jb2xvci1hbHBoYTogI2ZmZTc0YztcXG4gIC0tY29sb3ItYmV0YTogI2ZmNTk2NDtcXG4gIC0tY29sb3ItZ2FtbWE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXBzaTogIzZiZjE3ODtcXG4gIC0tY29sb3Itb21lZ2E6ICMzNWE3ZmY7XFxuICAtLXNoYWRvdzogMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZXRhKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9tZWdhKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgLyAyNTBweCAxZnIgMjUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFscGhhKTtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tY29sb3Itb21lZ2EpLCB2YXIoLS1jb2xvci1wc2kpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMztcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3NjcmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMzJweCAzMnB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuI3NjcmVlbiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wc2kpO1xcbn1cXG5cXG4jcGxheS1hcmVhIHtcXG4gIGdyaWQtcm93OiAyIC8gLTE7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNwbGF5ZXIsXFxuI2VuZW15IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbWVnYSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc3BvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1nYW1tYSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJldGEpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFscGhhKTtcXG59XFxuXFxuLmxvY2tlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvYXJkOm5vdCgubG9ja2VkKSB7XFxuICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3ItYWxwaGEpO1xcbn1cXG5cXG4jYWN0aW9ucy1hcmVhIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1nYW1tYSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uLmVuYWJsZWQsXFxuLmZyZWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHNpKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZ2FtZSA9IEdhbWUoJ0FkbWlyYWwnKTtcbmNvbnN0IGJvYXJkVmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuY29uc3QgdG9nZ2xlVmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLXZlcnRpY2FsJyk7XG5jb25zdCBwbGF5ZXJCb2FyZFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyJyk7XG5jb25zdCBlbmVteUJvYXJkVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteScpO1xuY29uc3QgcGxheWVyU2hpcHNUb1BsYWNlID0gWzIsIDMsIDMsIDQsIDVdO1xuY29uc3QgZW5lbXlTaGlwc1RvUGxhY2UgPSBbMiwgMywgMywgNCwgNV07XG5sZXQgaXNUb2dnbGVkVmVydGljYWwgPSBmYWxzZTtcbmNvbnN0IGdhbWVEZWxheSA9IDEwMDA7XG5cbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICBib2FyZFZpZXdzLmZvckVhY2goKGJvYXJkVmlldykgPT4ge1xuICAgIGJvYXJkVmlldy5jbGFzc0xpc3QuYWRkKCdsb2NrZWQnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwbGFjZVNoaXAgPSAocGxhY2VyLCBsZW5ndGgsIGNvb3JkaW5hdGVzWSwgY29vcmRpbmF0ZXNYLCBpc1ZlcnRpY2FsKSA9PlxuICBwbGFjZXJcbiAgICAuZ2V0R2FtZUJvYXJkKClcbiAgICAucGxhY2VTaGlwKGxlbmd0aCwgY29vcmRpbmF0ZXNZLCBjb29yZGluYXRlc1gsIGlzVmVydGljYWwpO1xuXG5jb25zdCBhdHRhY2sgPSAoYXR0YWNrZXIsIHRhcmdldCwgY29vcmRpbmF0ZXNZLCBjb29yZGluYXRlc1gpID0+IHtcbiAgbGV0IGhhc1dvbiA9IGZhbHNlO1xuICBjb25zdCByZXN1bHQgPSBhdHRhY2tlci5hdHRhY2soXG4gICAgdGFyZ2V0LmdldEdhbWVCb2FyZCgpLFxuICAgIGNvb3JkaW5hdGVzWSxcbiAgICBjb29yZGluYXRlc1hcbiAgKTtcblxuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5pc1N1bmsoKSkge1xuICAgICAgaWYgKHRhcmdldC5nZXRHYW1lQm9hcmQoKS5oYXNBbGxTdW5rKCkpIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke2F0dGFja2VyLm5hbWV9IHN1bmsgYWxsIHNoaXBzIWA7XG4gICAgICAgIGVuZEdhbWUoKTtcbiAgICAgICAgaGFzV29uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHthdHRhY2tlci5uYW1lfSBzdW5rIGEgJHtyZXN1bHQubmFtZX1gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7YXR0YWNrZXIubmFtZX0gaGl0IGEgc2hpcCFgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7YXR0YWNrZXIubmFtZX0gbWlzc2VkIWA7XG4gIH1cblxuICByZXR1cm4gaGFzV29uO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUucGxheWVyLmdldEdhbWVCb2FyZCgpLmdldEJvYXJkKCk7XG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBnYW1lLmVuZW15LmdldEdhbWVCb2FyZCgpLmdldEJvYXJkKCk7XG4gIGNvbnN0IGJvYXJkcyA9IFtwbGF5ZXJCb2FyZCwgZW5lbXlCb2FyZF07XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgYm9hcmRWaWV3cy5mb3JFYWNoKChib2FyZFZpZXcpID0+IHtcbiAgICBjbGVhckNvbnRhaW5lcihib2FyZFZpZXcpO1xuICAgIGJvYXJkc1tpbmRleF0uZm9yRWFjaCgocm93cywgY29vcmRpbmF0ZXNZKSA9PiB7XG4gICAgICByb3dzLmZvckVhY2goKHNwb3QsIGNvb3JkaW5hdGVzWCkgPT4ge1xuICAgICAgICBjb25zdCBzcG90VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcG90Vmlldy5jbGFzc0xpc3QuYWRkKCdzcG90Jyk7XG5cbiAgICAgICAgaWYgKHNwb3QgPT09ICdzaG90Jykge1xuICAgICAgICAgIHNwb3RWaWV3LmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzcG90ICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc3BvdFZpZXcuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwb3RWaWV3LmNsYXNzTGlzdC5hZGQoJ2ZyZWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwb3RWaWV3LnRleHRDb250ZW50ID0gYCR7Y29vcmRpbmF0ZXNZfS8ke2Nvb3JkaW5hdGVzWH1gO1xuICAgICAgICBzcG90Vmlldy5kYXRhc2V0LmNvb3JkaW5hdGVzWSA9IGNvb3JkaW5hdGVzWTtcbiAgICAgICAgc3BvdFZpZXcuZGF0YXNldC5jb29yZGluYXRlc1ggPSBjb29yZGluYXRlc1g7XG5cbiAgICAgICAgc3BvdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke2dhbWUucGxheWVyLm5hbWV9IGlzIGFpbWluZy4uLmA7XG4gICAgICAgICAgYm9hcmRWaWV3LmNsYXNzTGlzdC50b2dnbGUoJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgbGV0IGhhc1dvbiA9IGZhbHNlO1xuICAgICAgICAgIGxldCBwbGF5ZXJIYXNQbGFjZWQgPSB0cnVlO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyU2hpcHNUb1BsYWNlLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgIGhhc1dvbiA9IGF0dGFjayhcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllcixcbiAgICAgICAgICAgICAgICBnYW1lLmVuZW15LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWSxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1hcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBvcHBlZCA9IHBsYXllclNoaXBzVG9QbGFjZS5wb3AoKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLFxuICAgICAgICAgICAgICAgIHBvcHBlZCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc1ksXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNYLFxuICAgICAgICAgICAgICAgIGlzVG9nZ2xlZFZlcnRpY2FsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtnYW1lLnBsYXllci5uYW1lfSBwbGFjZWQgYSAke3Jlc3VsdC5uYW1lfWA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcHNUb1BsYWNlLnB1c2gocG9wcGVkKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJIYXNQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Z2FtZS5wbGF5ZXIubmFtZX0gc2hpcCB3YXMgc2VudCBvdXQgb2YgYm91bmRzLiBUcnkgYWdhaW4uYDtcbiAgICAgICAgICAgICAgICBib2FyZFZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnbG9ja2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlckJvYXJkcygpO1xuICAgICAgICAgIH0sIGdhbWVEZWxheSk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIYXNQbGFjZWQpIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNXb24pIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7Z2FtZS5lbmVteS5uYW1lfSBpcyBhaW1pbmcuLi5gO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZW5lbXlTaGlwc1RvUGxhY2UubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzV29uID0gYXR0YWNrKGdhbWUuZW5lbXksIGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3BwZWQgPSBlbmVteVNoaXBzVG9QbGFjZS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZW15LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15U2hpcHNUb1BsYWNlLnB1c2gocG9wcGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke2dhbWUuZW5lbXkubmFtZX0gcGxhY2VkIGEgJHtyZXN1bHQubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZW15U2hpcHNUb1BsYWNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVWZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmRWaWV3LmNsYXNzTGlzdC50b2dnbGUoJ2xvY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteUJvYXJkVmlldy5jbGFzc0xpc3QudG9nZ2xlKCdsb2NrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRW5kIG9mIHBsYWNlbWVudCBwaGFzZTogQXdhaXRpbmcgb3JkZXJzIHRvIGZpcmUuLi4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKCFyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVuZGVyQm9hcmRzKCk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWhhc1dvbikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnbG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZ2FtZURlbGF5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGdhbWVEZWxheSArIGdhbWVEZWxheSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJvYXJkVmlldy5hcHBlbmRDaGlsZChzcG90Vmlldyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcbn07XG5cbnRvZ2dsZVZlcnRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpc1RvZ2dsZWRWZXJ0aWNhbCA9ICFpc1RvZ2dsZWRWZXJ0aWNhbDtcbiAgdG9nZ2xlVmVydGljYWwuY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkcztcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gWy4uLkFycmF5KDEwKV0pO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwTGVuZ3RoLFxuICAgIGNvb3JkaW5hdGVzWSxcbiAgICBjb29yZGluYXRlc1gsXG4gICAgaXNWZXJ0aWNhbCA9IGZhbHNlXG4gICkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoXG4gICAgICBjb29yZGluYXRlc1ggPj0gMCAmJlxuICAgICAgY29vcmRpbmF0ZXNZID49IDAgJiZcbiAgICAgIGNvb3JkaW5hdGVzWCA8PSA5ICYmXG4gICAgICBjb29yZGluYXRlc1kgPD0gOSAmJlxuICAgICAgKCghaXNWZXJ0aWNhbCAmJiBjb29yZGluYXRlc1ggKyAoc2hpcExlbmd0aCAtIDEpIDw9IDkpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIGNvb3JkaW5hdGVzWSArIChzaGlwTGVuZ3RoIC0gMSkgPD0gOSkpXG4gICAgKSB7XG4gICAgICBpZiAoIWJvYXJkW2Nvb3JkaW5hdGVzWV1bY29vcmRpbmF0ZXNYXSkge1xuICAgICAgICBjb25zdCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgYm9hcmRbY29vcmRpbmF0ZXNZICsgaV1bY29vcmRpbmF0ZXNYXSA9IHNoaXA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVzWV1bY29vcmRpbmF0ZXNYICsgaV0gPSBzaGlwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IGJvYXJkW2Nvb3JkaW5hdGVzWV1bY29vcmRpbmF0ZXNYXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXNZLCBjb29yZGluYXRlc1gpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBib2FyZFtjb29yZGluYXRlc1ldW2Nvb3JkaW5hdGVzWF07XG5cbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ3Nob3QnKSB7XG4gICAgICB0YXJnZXQuaGl0KCk7XG4gICAgfVxuXG4gICAgYm9hcmRbY29vcmRpbmF0ZXNZXVtjb29yZGluYXRlc1hdID0gJ3Nob3QnO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgaGFzQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBjb25zdCBmbGF0Qm9hcmQgPSBib2FyZC5mbGF0KDEpO1xuXG4gICAgZmxhdEJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBoYXNBbGxTdW5rLCBnZXRCb2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IEdhbWUgPSAocGxheWVyTmFtZSkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gIGNvbnN0IGVuZW15ID0gUGxheWVyKCdSLk8uQi5PLlQuJywgdHJ1ZSk7XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBlbmVteSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlQm9hcmRzIGZyb20gJy4vZG9tJztcblxuY3JlYXRlQm9hcmRzKCk7XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZS1ib2FyZCc7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBpc0FJID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgLy8gQUkgdmFyaWFibGVzXG4gIGxldCBvcmlnaW5hbEhpdENvb3JkaW5hdGVzWSA9IC0xO1xuICBsZXQgb3JpZ2luYWxIaXRDb29yZGluYXRlc1ggPSAtMTtcbiAgbGV0IGxhc3RIaXRDb29yZGluYXRlc1kgPSAtMTtcbiAgbGV0IGxhc3RIaXRDb29yZGluYXRlc1ggPSAtMTtcbiAgbGV0IGlzSGl0dGluZ1ZlcnRpY2FsID0gZmFsc2U7XG4gIGxldCBpc0hpdHRpbmdIb3Jpem9udGFsID0gZmFsc2U7XG4gIGxldCBzaG90c0xhbmRlZE9uQ3VycmVudCA9IDA7XG4gIGxldCBoYXNIaXRMYXN0VGltZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGFpQXR0YWNrID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBjb29yZGluYXRlc1k7XG4gICAgbGV0IGNvb3JkaW5hdGVzWDtcbiAgICBsZXQgdGFyZ2V0ID0gJ3Nob3QnO1xuICAgIGxldCBsb29wQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKHRhcmdldCA9PT0gJ3Nob3QnICYmICFlbmVteUJvYXJkLmhhc0FsbFN1bmsoKSkge1xuICAgICAgaWYgKGxhc3RIaXRDb29yZGluYXRlc1kgPT09IC0xICYmIGxhc3RIaXRDb29yZGluYXRlc1ggPT09IC0xKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29vcmRpbmF0ZXNYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB0YXJnZXQgPSBlbmVteUJvYXJkLmdldEJvYXJkKClbY29vcmRpbmF0ZXNZXVtjb29yZGluYXRlc1hdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzSGl0dGluZ0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAoIWhhc0hpdExhc3RUaW1lICYmICghdGFyZ2V0IHx8IHRhcmdldCA9PT0gJ3Nob3QnKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXNYID1cbiAgICAgICAgICAgICAgb3JpZ2luYWxIaXRDb29yZGluYXRlc1ggK1xuICAgICAgICAgICAgICAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPyAxIDogLTEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZGluYXRlc1ggPVxuICAgICAgICAgICAgICBsYXN0SGl0Q29vcmRpbmF0ZXNYICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gMSA6IC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb29yZGluYXRlc1kgPSBsYXN0SGl0Q29vcmRpbmF0ZXNZO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSGl0dGluZ1ZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKCFoYXNIaXRMYXN0VGltZSAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT09ICdzaG90JykpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzWSA9XG4gICAgICAgICAgICAgIG9yaWdpbmFsSGl0Q29vcmRpbmF0ZXNZICtcbiAgICAgICAgICAgICAgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gMSA6IC0xKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXNZID1cbiAgICAgICAgICAgICAgbGFzdEhpdENvb3JkaW5hdGVzWSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/IDEgOiAtMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29vcmRpbmF0ZXNYID0gbGFzdEhpdENvb3JkaW5hdGVzWDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIgLSAtMSkgKyAtMSk7XG4gICAgICAgICAgY29vcmRpbmF0ZXNZID0gbGFzdEhpdENvb3JkaW5hdGVzWSArIG9mZnNldDtcblxuICAgICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyIC0gLTEpICsgLTEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvb3JkaW5hdGVzWCA9IGxhc3RIaXRDb29yZGluYXRlc1ggKyBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNZID4gOSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzWSA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNZIDwgMCkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzWSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNYID4gOSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzWCA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNYIDwgMCkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQgPSBlbmVteUJvYXJkLmdldEJvYXJkKClbY29vcmRpbmF0ZXNZXVtjb29yZGluYXRlc1hdO1xuICAgICAgfVxuXG4gICAgICBsb29wQ291bnQgKz0gMTtcblxuICAgICAgaWYgKGxvb3BDb3VudCA+IDEwMCkge1xuICAgICAgICAvLyBmYWlsc2FmZSB0byBwcmV2ZW50IHVua25vd24gaW5maW5pdGUgbG9vcHMgZnJvbSBicmVha2luZyB0aGUgYnJvd3NlclxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWVuZW15Qm9hcmQuaGFzQWxsU3VuaygpKSB7XG4gICAgICByZXN1bHQgPSBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNZLCBjb29yZGluYXRlc1gpO1xuXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCAhPT0gJ3Nob3QnKSB7XG4gICAgICAgIGlmIChzaG90c0xhbmRlZE9uQ3VycmVudCA9PT0gMCkge1xuICAgICAgICAgIG9yaWdpbmFsSGl0Q29vcmRpbmF0ZXNZID0gY29vcmRpbmF0ZXNZO1xuICAgICAgICAgIG9yaWdpbmFsSGl0Q29vcmRpbmF0ZXNYID0gY29vcmRpbmF0ZXNYO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzSGl0TGFzdFRpbWUgPSB0cnVlO1xuICAgICAgICBzaG90c0xhbmRlZE9uQ3VycmVudCArPSAxO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaXNTdW5rKCkpIHtcbiAgICAgICAgICBbbGFzdEhpdENvb3JkaW5hdGVzWSwgbGFzdEhpdENvb3JkaW5hdGVzWF0gPSBbLTEsIC0xXTtcbiAgICAgICAgICBpc0hpdHRpbmdWZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgICAgIGlzSGl0dGluZ0hvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgICBzaG90c0xhbmRlZE9uQ3VycmVudCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxhc3RIaXRDb29yZGluYXRlc1kgPT09IGNvb3JkaW5hdGVzWSkge1xuICAgICAgICAgICAgaXNIaXR0aW5nSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChsYXN0SGl0Q29vcmRpbmF0ZXNYID09PSBjb29yZGluYXRlc1gpIHtcbiAgICAgICAgICAgIGlzSGl0dGluZ1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBbbGFzdEhpdENvb3JkaW5hdGVzWSwgbGFzdEhpdENvb3JkaW5hdGVzWF0gPSBbXG4gICAgICAgICAgICBjb29yZGluYXRlc1ksXG4gICAgICAgICAgICBjb29yZGluYXRlc1gsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzSGl0TGFzdFRpbWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9IChlbmVteUJvYXJkLCBjb29yZGluYXRlc1ksIGNvb3JkaW5hdGVzWCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoaXNBSSkge1xuICAgICAgcmVzdWx0ID0gYWlBdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1ksIGNvb3JkaW5hdGVzWCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBnZXRHYW1lQm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICByZXR1cm4geyBuYW1lLCBpc0FJLCBhdHRhY2ssIGdldEdhbWVCb2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgbGV0IG5hbWU7XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ0NhcnJpZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbmFtZSA9ICdCYXR0bGVzaGlwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5hbWUgPSAnQ3J1aXNlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBuYW1lID0gJ0Rlc3Ryb3llcic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmFtZSA9ICdVRk8nO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB0aW1lc0hpdCA+PSBsZW5ndGg7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHRpbWVzSGl0ICs9IDE7XG4gICAgcmV0dXJuIHRpbWVzSGl0O1xuICB9O1xuXG4gIHJldHVybiB7IGxlbmd0aCwgaXNTdW5rLCBoaXQsIG5hbWUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmF0dGxlc2hpcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19ub3JtYWxpemVfY3NzX25vcm1hbGl6ZV9jc3Mtbm9kZV9tb2QtMWU1ODBmXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=