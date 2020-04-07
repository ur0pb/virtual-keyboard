const keyboard = {
  elements: {
    main: null,
    keysWrapper: null,
    keys: [],
    textArea: null
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false
  },

  init() {
    this._createHTMLElements();

    document.querySelectorAll('.input-area').forEach(element => {
      element.focus();
      element.addEventListener('blur', () => {
        element.focus();
      });
    });


    this.open(document.querySelector('.input-area').value, function(currentValue){
      document.querySelector('.input-area').value = currentValue;
    }, function(currentValue) {

    });

    document.onkeydown = function(event) {
      const keyPressed = document.querySelector(`[data='`+ event.code +`']`);

      if(keyPressed) {
        event.preventDefault()
        keyPressed.classList.add('active');
        keyPressed.dispatchEvent(new MouseEvent('click'));
      }
    };

    document.onkeyup = function(event) {
      const keyPressed = document.querySelector(`[data='`+ event.code +`']`);
      if(keyPressed) {
        document.querySelectorAll('.key').forEach(x => x.classList.remove('active'));
      }

    };

  },

  _createHTMLElements() {
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.keysWrapper = document.createElement('div');
    this.elements.keysWrapper.classList.add('keys');
    this.elements.textArea = document.createElement('textarea');
    this.elements.textArea.classList.add("input-area");

    this.elements.keysWrapper.appendChild(this.elements.textArea);
    this.elements.keysWrapper.appendChild(document.createElement('br'));
    this.elements.keysWrapper.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysWrapper.querySelectorAll(".key");

    this.elements.main.appendChild(this.elements.keysWrapper);

    document.body.appendChild(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    // const keyLayout = [
    //   "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
    //   "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del",
    //   "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
    //   "lshift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "rshift",
    //   "ctrl", "win", "alt", "space", "alt", "ctrl", "←", "↓", "→"
    // ];
    const keyLayout = {
      Backquote : {
        en: "`",
        enShift: "~",
        ru: "ё",
        ruShift: "Ё"
      },
      Digit1 : {
        en: "1",
        enShift: "!",
        ru: "1",
        ruShift: "!"
      },
      Digit2 : {
        en: "2",
        enShift: "@",
        ru: "2",
        ruShift: "\""
      },
      Digit3 : {
        en: "3",
        enShift: "#",
        ru: "3",
        ruShift: "№"
      },
      Digit4 : {
        en: "4",
        enShift: "$",
        ru: "4",
        ruShift: ";"
      },
      Digit5 : {
        en: "5",
        enShift: "%",
        ru: "5",
        ruShift: "%"
      },
      Digit6 : {
        en: "6",
        enShift: "^",
        ru: "6",
        ruShift: ":"
      },
      Digit7 : {
        en: "7",
        enShift: "&",
        ru: "7",
        ruShift: "?"
      },
      Digit8 : {
        en: "8",
        enShift: "*",
        ru: "8",
        ruShift: "*"
      },
      Digit9 : {
        en: "9",
        enShift: "(",
        ru: "9",
        ruShift: "("
      },
      Digit0 : {
        en: "0",
        enShift: ")",
        ru: "0",
        ruShift: ")"
      },
      Minus : {
        en: "-",
        enShift: ")",
        ru: "-",
        ruShift: ")"
      },
      Equal : {
        en: "=",
        enShift: ")",
        ru: "=",
        ruShift: ")"
      },
      Backspace : {
        en: "BackSpace",
        enShift: "BackSpace",
        ru: "BackSpace",
        ruShift: "BackSpace"
      },
      Tab : {
        en: "Tab",
        enShift: "Tab",
        ru: "Tab",
        ruShift: "Tab"
      },
      KeyQ : {
        en: "q",
        enShift: "Q",
        ru: "й",
        ruShift: "Й"
      },
      KeyW : {
        en: "w",
        enShift: "W",
        ru: "ц",
        ruShift: "Ц"
      },
      KeyE : {
        en: "e",
        enShift: "E",
        ru: "у",
        ruShift: "У"
      },
      KeyR : {
        en: "r",
        enShift: "R",
        ru: "к",
        ruShift: "К"
      },
      KeyT : {
        en: "t",
        enShift: "T",
        ru: "е",
        ruShift: "Е"
      },
      KeyY : {
        en: "y",
        enShift: "Y",
        ru: "н",
        ruShift: "Н"
      },
      KeyU : {
        en: "u",
        enShift: "U",
        ru: "г",
        ruShift: "Г"
      },
      KeyI : {
        en: "i",
        enShift: "I",
        ru: "ш",
        ruShift: "Ш"
      },
      KeyO : {
        en: "o",
        enShift: "O",
        ru: "щ",
        ruShift: "Щ"
      },
      KeyP : {
        en: "p",
        enShift: "P",
        ru: "з",
        ruShift: "З"
      },
      BracketLeft : {
        en: "[",
        enShift: "{",
        ru: "х",
        ruShift: "Х"
      },
      BracketRight : {
        en: "]",
        enShift: "}",
        ru: "ъ",
        ruShift: "Ъ"
      },
      Backslash : {
        en: "\\",
        enShift: "|",
        ru: "\\",
        ruShift: "//"
      },
      Delete : {
        en: "Del",
        enShift: "Del",
        ru: "Del",
        ruShift: "Del"
      },
      CapsLock : {
        en: "CapsLock",
        enShift: "CapsLock",
        ru: "CapsLock",
        ruShift: "CapsLock"
      },
      KeyA : {
        en: "a",
        enShift: "A",
        ru: "ф",
        ruShift: "Ф"
      },
      KeyS : {
        en: "s",
        enShift: "S",
        ru: "ы",
        ruShift: "Ы"
      },
      KeyD : {
        en: "d",
        enShift: "D",
        ru: "в",
        ruShift: "В"
      },
      KeyF : {
        en: "f",
        enShift: "F",
        ru: "а",
        ruShift: "А"
      },
      KeyG : {
        en: "g",
        enShift: "G",
        ru: "п",
        ruShift: "П"
      },
      KeyH : {
        en: "h",
        enShift: "H",
        ru: "р",
        ruShift: "Р"
      },
      KeyJ : {
        en: "j",
        enShift: "J",
        ru: "о",
        ruShift: "О"
      },
      KeyK : {
        en: "k",
        enShift: "K",
        ru: "л",
        ruShift: "Л"
      },
      KeyL : {
        en: "l",
        enShift: "L",
        ru: "д",
        ruShift: "Д"
      },
      Semicolon : {
        en: ";",
        enShift: ":",
        ru: "ж",
        ruShift: "ж"
      },
      Quote : {
        en: "'",
        enShift: "\"",
        ru: "э",
        ruShift: "Э"
      },
      Enter : {
        en: "Enter",
        enShift: "Enter",
        ru: "Enter",
        ruShift: "Enter"
      },
      ShiftLeft : {
        en: "Shift",
        enShift: "Shift",
        ru: "Shift",
        ruShift: "Shift"
      },
      KeyZ : {
        en: "z",
        enShift: "Z",
        ru: "я",
        ruShift: "Я"
      },
      KeyX : {
        en: "x",
        enShift: "X",
        ru: "ч",
        ruShift: "Ч"
      },
      KeyC : {
        en: "c",
        enShift: "C",
        ru: "с",
        ruShift: "С"
      },
      KeyV : {
        en: "v",
        enShift: "V",
        ru: "м",
        ruShift: "М"
      },
      KeyB : {
        en: "b",
        enShift: "B",
        ru: "и",
        ruShift: "И"
      },
      KeyN : {
        en: "n",
        enShift: "N",
        ru: "т",
        ruShift: "Т"
      },
      KeyM : {
        en: "m",
        enShift: "M",
        ru: "ь",
        ruShift: "Ь"
      },
      Comma : {
        en: ",",
        enShift: "<",
        ru: "б",
        ruShift: "Б"
      },
      Period : {
        en: ".",
        enShift: ">",
        ru: "ю",
        ruShift: "Ю"
      },
      Slash : {
        en: "/",
        enShift: "?",
        ru: ".",
        ruShift: ","
      },
      ArrowUp : {
        en: "↑",
        enShift: "↑",
        ru: "↑",
        ruShift: "↑"
      },
      ShiftRight : {
        en: "Shift",
        enShift: "Shift",
        ru: "Shift",
        ruShift: "Shift"
      },
      ControlLeft : {
        en: "Ctrl",
        enShift: "Ctrl",
        ru: "Ctrl",
        ruShift: "Ctrl"
      },
      MetaLeft : {
        en: "Win",
        enShift: "Win",
        ru: "Win",
        ruShift: "Win"
      },
      AltLeft : {
        en: "Alt",
        enShift: "Alt",
        ru: "Alt",
        ruShift: "Alt"
      },
      Space : {
        en: " ",
        enShift: " ",
        ru: " ",
        ruShift: " "
      },
      AltRight : {
        en: "Alt",
        enShift: "Alt",
        ru: "Alt",
        ruShift: "Alt"
      },
      ControlRight : {
        en: "Ctrl",
        enShift: "Ctrl",
        ru: "Ctrl",
        ruShift: "Ctrl"
      },
      ArrowLeft : {
        en: "←",
        enShift: "←",
        ru: "←",
        ruShift: "←"
      },
      ArrowDown : {
        en: "↓",
        enShift: "↓",
        ru: "↓",
        ruShift: "↓"
      },
      ArrowRight : {
        en: "→",
        enShift: "→",
        ru: "→",
        ruShift: "→"
      },
    };

    const double = ["Backspace", "Tab", "Delete", "CapsLock",
                    "Enter", "ShiftLeft", "ShiftRight"];

    //keyLayout.forEach(key => {
    for(let key in keyLayout) {
      const keyElement = document.createElement('button');
      const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");
      //keyElement.classList.add(double.indexOf(key) !== -1 ? "double-wide" : "key");

      switch(key) {
        case "Backspace":
          keyElement.classList.add("double-wide");
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value =
              this.properties.value.substring(0, this.properties.value.length - 1);
              this._triggerEvent("oninput");
          });
          break;

        case "CapsLock":
          keyElement.classList.add("double-wide", "switched-mode");
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('active', this.properties.capsLock);
          });
          break;

        case "Enter":
          keyElement.classList.add("double-wide");
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });
          break;

        case "Space":
          keyElement.classList.add("mega-wide");
          keyElement.addEventListener('click', () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });
          break;

        default:
          keyElement.textContent = keyLayout[key].ru;// .toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock || this.properties.shift
                                      ? keyLayout[key].ru.toUpperCase()
                                      : keyLayout[key].ru.toLowerCase();
          this._triggerEvent("oninput");
          });
          break;
      };

      keyElement.setAttribute('data', key);

      fragment.appendChild(keyElement);
      if(insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    };

    return fragment;
  },

  _triggerEvent(handlerName) {
    if(typeof this.eventHandlers[handlerName] == "function"){
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for(const key of this.elements.keys){
      if(key.childElementCount === 0){
        key.textContent = this.properties.capsLock
                          ? key.textContent.toUpperCase()
                          : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose){
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  }

}

window.addEventListener('DOMContentLoaded', function(){
  keyboard.init();
});
