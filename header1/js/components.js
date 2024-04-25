(() => {
  const components = [
    {
      name: 'slr2PhoneComponent',
      message: 'Компонент телефон',
      event: 'slr2PhoneLoaded',
      method: 'show',
    },
    {
      name: 'slr2BasketComponent',
      message: 'Компонент корзины',
      event: 'slr2BasketLoaded',
      method: 'show',
    },
    {
      name: 'slr2MenuComponent',
      message: 'Компонент меню',
      event: 'slr2MenuLoaded',
      method: 'show',
    },
    {
      name: 'slr2ProfileComponent',
      message: 'Компонент профиля',
      event: 'slr2ProfileLoaded',
      method: 'show',
    },
    {
      name: 'slr2SearchComponent',
      message: 'Компонент поиска',
      event: 'slr2SearchLoaded',
      method: 'show',
    },
  ];

  setTimeout(() => {
    components.forEach((componentObj, index) => {
      const event = new Event(componentObj.event);
      document.documentElement.dispatchEvent(event);

      window[componentObj.name] = {};
      window[componentObj.name][componentObj.method] = function () {
        const div = document.createElement('div');
        div.textContent = componentObj.message;
        document.querySelector('body').appendChild(div);
      };

      if (index === 1) {
        //basket
        window[componentObj.name].getCount = function () {
          return 10;
        };

        setTimeout(() => {
          const basketEvent = new CustomEvent('slr2BasketCountChanged', {
            detail: { count: 1012 },
          });
          document.documentElement.dispatchEvent(basketEvent);
        }, 1000);
      }
    });
  }, 2000);
})();
