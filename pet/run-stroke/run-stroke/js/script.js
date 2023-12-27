function marquee() {
  /*
		Інструкція:
		Структура: Можна вказувати будь які класи та теги елементам.
		<div data-marquee>
			<span>element one</span>
			<div>element two</div>
		</div>
		Додаткові налаштування (Можна не вказувати):
		data-marquee-space='30' - Відступ між елементами (За замовчанням 30px)
		data-marquee-speed='1000' - Швидкість анімації (За замовчанням 1000) Вказувати в ms 1s = 1000
		data-marquee-pause-mouse-enter - Зупиняти анімацію при наведенні миші.
		data-marquee-direction='left' - Направлення анімації "top, right, bottom, left" (За замовчанням left)
		!Важливо: При використанні data-marquee-direction 'top' або 'bottom' має бути фіксована висота + overflow: hidden;
	*/

  const $marqueeArray = document.querySelectorAll("[data-marquee]");
  const CLASS_NAMES = {
    wrapper: "marquee-wrapper",
    inner: "marquee-inner",
    item: "marquee-item",
  };

  if (!$marqueeArray.length) return;

  const { head } = document;

  // Функція(фільтр) зменшення кількості викликів функції при зміні розмірів вьюпорта. (Зменшення навантаження на систему)
  const debounce = (delay, fn) => {
    let timerId;
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  };
  // Подія зміни розмірів вьюпорта
  const onWindowResize = (cb) => {
    if (!cb && !isFunction(cb)) return;

    const handleResize = () => {
      cb();
    };

    window.addEventListener("resize", debounce(15, handleResize));

    handleResize();
  };

  // Створюємо структуру
  const buildMarquee = (marqueeNode) => {
    if (!marqueeNode) return;

    const $marquee = marqueeNode;
    const $childElements = $marquee.children;

    if (!$childElements.length) return;
    $marquee.classList.add(CLASS_NAMES.wrapper);
    Array.from($childElements).forEach(($childItem) => $childItem.classList.add(CLASS_NAMES.item));

    const htmlStructure = `<div class="${CLASS_NAMES.inner}">${$marquee.innerHTML}</div>`;
    $marquee.innerHTML = htmlStructure;
  };

  // Функція отримання розмірів елементів
  const getElSize = ($el, isVertical) => {
    if (isVertical) return $el.getBoundingClientRect().height;
    return $el.getBoundingClientRect().width;
  };

  $marqueeArray.forEach(($wrapper) => {
    if (!$wrapper) return;

    buildMarquee($wrapper);

    const $marqueeInner = $wrapper.firstElementChild;
    let cacheArray = [];

    if (!$marqueeInner) return;

    const dataMarqueeSpace = parseFloat($wrapper.getAttribute("data-marquee-space"));
    const spaceBetween = !isNaN(dataMarqueeSpace) ? dataMarqueeSpace : 30;
    const speed = parseFloat($wrapper.getAttribute("data-marquee-speed")) / 10 || 100;
    const isMousePaused = $wrapper.hasAttribute("data-marquee-pause-mouse-enter");
    const direction = $wrapper.getAttribute("data-marquee-direction");
    const isVertical = direction === "bottom" || direction === "top";
    const animName = `marqueeAnimation-${Math.floor(Math.random() * 10000000)}`;

    // Динамічні данні, вираховуються при роботі скрипту.
    let sumSize = 0;
    let firstScreenVisibleSize = 0;
    let initialSizeElements = 0;
    let initialElementsLength = $marqueeInner.children.length;
    let index = 0;
    let counterDublicateElements = 0;

    // Ініціалізація івентів.
    const initEvents = () => {
      if (!isMousePaused) return;
      $marqueeInner.addEventListener("mouseenter", onChangePaused);
      $marqueeInner.addEventListener("mouseleave", onChangePaused);
    };

    // Додавання базових стилів для корректної роботи анімації.
    const setBaseStyles = (firstScreenVisibleSize) => {
      let baseStyle = "display: flex; flex-wrap: nowrap;";

      if (isVertical) {
        baseStyle += `
		  	flex-direction: column;
			position: relative;
			will-change: transform;`;

        if (direction === "bottom") {
          baseStyle += `top: -${firstScreenVisibleSize}px;`;
        }
      } else {
        baseStyle += `
		  	position: relative;
			will-change: transform;`;

        if (direction === "right") {
          baseStyle += `left: -${firstScreenVisibleSize}px;;`;
        }
      }

      $marqueeInner.style.cssText = baseStyle;
    };

    // Функція повертає значення на яке потрібно змістити елементи при анімації.
    const setdirectionAnim = (totalWidth) => {
      switch (direction) {
        case "right":
        case "bottom":
          return totalWidth;
        default:
          return -totalWidth;
      }
    };

    // Функція анімації.
    const animation = () => {
      const keyFrameCss = `@keyframes ${animName} {
					100% {
						transform: translate${isVertical ? "Y" : "X"}(${setdirectionAnim(firstScreenVisibleSize)}px);
					}
				}`;
      const $style = document.createElement("style");

      $style.classList.add(animName);
      $style.innerHTML = keyFrameCss;
      head.append($style);

      $marqueeInner.style.animation = `${animName} ${firstScreenVisibleSize / speed}s infinite linear forwards`;
    };

    // Функція роботи з елементами. (дублювання, вказання \ підрахунок розмірів)
    const addDublicateElements = () => {
      // Після зміни розмірів екрану, обнуляємо всі динамічні данні.
      sumSize = firstScreenVisibleSize = initialSizeElements = counterDublicateElements = index = 0;

      const $parentNodeWidth = getElSize($wrapper, isVertical);

      let $childrenEl = Array.from($marqueeInner.children);

      if (!$childrenEl.length) return;

      if (!cacheArray.length) {
        cacheArray = $childrenEl.map(($item) => $item);
      } else {
        $childrenEl = [...cacheArray];
      }
console.log('');
      // Додаємо базові стилів флексів для коректного підрахунку розмірів елементів.
      $marqueeInner.style.display = "flex";
      if (isVertical) $marqueeInner.style.flexDirection = "column";
      // Обнуляємо кількість елементів щоб уникнути дублювання при зміні розмірів екрану.
      $marqueeInner.innerHTML = "";
      $childrenEl.forEach(($item) => {
        $marqueeInner.append($item);
      });

      // Перед дублюванням елементів додаємо стилі відступів та вносимо розміри елементів до динамічних данних.
      $childrenEl.forEach(($item) => {
        if (isVertical) {
          $item.style.marginBottom = `${spaceBetween}px`;
        } else {
          $item.style.marginRight = `${spaceBetween}px`;
          $item.style.flexShrink = 0;
        }

        const sizeEl = getElSize($item, isVertical);

        sumSize += sizeEl + spaceBetween;
        firstScreenVisibleSize += sizeEl + spaceBetween;
        initialSizeElements += sizeEl + spaceBetween;
        counterDublicateElements += 1;

        return sizeEl;
      });

      const $multiplyWidth = $parentNodeWidth * 2 + initialSizeElements;

      // Дублюємо елементи за необхідності.
      for (; sumSize < $multiplyWidth; index += 1) {
        if (!$childrenEl[index]) index = 0;

        const $cloneNone = $childrenEl[index].cloneNode(true);
        const $lastElement = $marqueeInner.children[index];

        $marqueeInner.append($cloneNone);

        sumSize += getElSize($lastElement, isVertical) + spaceBetween;

        if (firstScreenVisibleSize < $parentNodeWidth || counterDublicateElements % initialElementsLength !== 0) {
          counterDublicateElements += 1;
          firstScreenVisibleSize += getElSize($lastElement, isVertical) + spaceBetween;
        }
      }

      // Додаємо базові стилі враховуючи обчислені значення ширин елементів.
      setBaseStyles(firstScreenVisibleSize);
    };

    // Функція ініціалізації.
    const init = () => {
      addDublicateElements();
      animation();
      initEvents();
    };

    // Функція перезапуску анімації при зміні розмірів вьюпорта.
    const onResize = () => {
      head.querySelector(`.${animName}`)?.remove();
      init();
    };

    // Функція паузи при наведенні миші.
    const onChangePaused = (e) => {
      const { type, target } = e;

      target.style.animationPlayState = type === "mouseenter" ? "paused" : "running";
    };

    onWindowResize(onResize);
  });
}

function gridKeywords() {
  /*
		Інструкція:
		Структура:.
		<div data-grid-keywords-wrapper>
			...prev text (content)
			<div data-grid-keywords>
				<span data-grid-keywords-sizer>First Text</span>
				<span>Second Text</span>
				<span>Third Text</span>
			</div>
			...next text (content)
		</div>
		Додаткові налаштування (Можна не вказувати):
		data-grid-keywords-speed='1000' - Швидкість анімації. Вказувати в ms 1s = 1000 (За замовчанням 2000)
		data-grid-keywords-delay='500' - Затримка між зманою елементів. Вказувати в ms 1s = 1000 (За замовчанням 500)
		data-grid-keywords-direction='top' - Зміна направлення анімації вгору. (За замовчанням bottom)
		data-grid-keywords-ease="easeOut" - Тип анімації "easeOut", "easeIn", 'easeInOut. (За замовчанням easeOut)
	*/

  const $wrappers = document.querySelectorAll("[data-grid-keywords-wrapper]");

  if (!$wrappers.length) return;

  const BASE_STYLES = {
    inner: `
			overflow: hidden;
			position: relative;
		`,
    sizer: `
			opacity: 0;
			visibility: hidden;
		`,
    words: `
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			white-sapce: nowrap;
			width: inherit;
			will-change: transform;
			height: 100%;
		`,
  };

  // Функції плавності анімації
  const BASE_EASING = {
    easeOut: (time) => {
      // Корегування сповільнення анімації в кінці
      const decelerationFactor = 2.4;
      return 1 - Math.pow(1 - time, decelerationFactor);
    },
    easeIn: (time) => {
      // Корегування сповільнення анімації на старті
      const accelerationFactor = 2.4;
      return Math.pow(time, accelerationFactor);
    },
    easeInOut: (time) => {
      // Корегування сповільнення анімації на старті та в кінці
      const accelerationFactor = 2.4;
      const decelerationFactor = 2.4;

      const acceleration = Math.pow(time, accelerationFactor);
      const deceleration = 1 - Math.pow(1 - time, decelerationFactor);

      return acceleration * (1 - time) + deceleration * time;
    },
  };

  $wrappers.forEach(($wrapper) => {
    if (!$wrapper) return;

    const $inner = $wrapper.querySelector("[data-grid-keywords]");
    const duration = parseFloat($wrapper.getAttribute("data-grid-keywords-speed")) || 2000;
    const delay = parseFloat($wrapper.getAttribute("data-grid-keywords-delay")) || 500;
    const direction = $wrapper.getAttribute("data-grid-keywords-direction") || "bottom";
    const ease = $wrapper.getAttribute("data-grid-keywords-ease") || "easeOut";
    const DISTANCE = direction === "top" ? -120 : 120;
    const translateYStart = -1 * DISTANCE;

    let index = 0;
    let pause = false;

    const updateTextContent = () => {
      const $words = Array.from($inner.children);

      if (!$words.length) return;

      const $sizer = $inner.querySelector("[data-grid-keywords-sizer]");

      if ($sizer) {
        // Шукаємо самий широкий елемент.
        const largestWord = $words.reduce(
          (largest, current) => {
            const width = current.offsetWidth;
            if (width > largest.width) {
              return { element: current, width };
            }
            return largest;
          },
          { element: null, width: 0 }
        );

        // Створюємо клон елемента який задає розмір блоку і поміщаємо в кінець блоку.
        const clone = $sizer.cloneNode(true);
        clone.removeAttribute("data-grid-keywords-sizer");
        $inner.appendChild(clone);
        $words.push(clone);

        // Поміщаємо самий велики текст в елемент який задає розмір блоку.
        $sizer.textContent = largestWord.element.textContent;

        // Додаємо базові стилі для функціонування скрипту.
        $inner.style = BASE_STYLES.inner;
        $sizer.style = BASE_STYLES.sizer;
        $words.forEach(($word) => {
          if (!$word.hasAttribute("data-grid-keywords-sizer")) $word.style = BASE_STYLES.words;
        });

        // Функція зміни позиції елементів.
        const onChangeElements = ($el, transformValue, opacityValue) => {
          $el.style.transform = `translate3D(0,${transformValue}%,0)`;
          $el.style.opacity = opacityValue;
        };

        // Ініціалізація анімації.
        const initAnimElement = () => {
          // Перше слово при першій ініціалізації розміщаємо в початкове положення не анімуючи.
          if (!index) {
            setTimeout(() => {
              index = $words.length - 1;
              onChangeElements($words[index], 0, 1);
              setTimeout(() => {
                index = 1;
                // Запускаємо перший раз анімацію.
                requestAnimationFrame(step);
              }, delay);
            }, 0);
          } else {
            requestAnimationFrame(step);
          }

          let startTime;

          // Анімація.
          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const prevIndex = index - 1 || $words.length - 1;
            let timeOut = null;

            if (progress <= 1) {
              const easedProgress = BASE_EASING[ease](progress, 1);
              const newYPercentStart = DISTANCE * easedProgress - DISTANCE;
              const newYPercentEnd = DISTANCE * easedProgress;

              onChangeElements($words[index], newYPercentStart, 1 * progress);
              onChangeElements($words[prevIndex], newYPercentEnd, 1 - progress * 2);



              requestAnimationFrame(step);
            } else {
					onChangeElements($words[index], 0, 1);
					onChangeElements($words[prevIndex], DISTANCE, 0);

              // Перезапуск анімації після кожної ітерації.
              timeOut = setTimeout(() => {
                index += 1;
                if (index >= $words.length) index = 1;

                initAnimElement();
              }, delay);

              if (pause) clearInterval(timeOut);
            }
          }
        };

      //   setTimeout(() => {
      //     pause = true;
      //     setTimeout(() => {
      //       pause = false;
      //       initAnimElement();
      //     }, 2500);
      //   }, 4000);

        const init = () => {
          // Розміщаємо всі елементи в початкове положення і запускаємо анімацію.
          $words.forEach(($item, index) => {
            if (index) onChangeElements($item, translateYStart, 0);
          });
          initAnimElement();
        };
        init();
      }
    };
    updateTextContent();
  });
}

window.addEventListener("load", marquee);
document.addEventListener("DOMContentLoaded", gridKeywords);
