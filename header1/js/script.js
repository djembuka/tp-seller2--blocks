window.addEventListener('DOMContentLoaded', () => {
  const icons = [
    {
      name: 'phone',
      event: 'slr2PhoneLoaded',
      component: 'slr2PhoneComponent',
      method: 'show',
    },
    {
      name: 'basket',
      event: 'slr2BasketLoaded',
      component: 'slr2BasketComponent',
      method: 'show',
    },
    {
      name: 'menu',
      event: 'slr2MenuLoaded',
      component: 'slr2MenuComponent',
      method: 'show',
    },
    {
      name: 'profile',
      event: 'slr2ProfileLoaded',
      component: 'slr2ProfileComponent',
      method: 'show',
    },
    {
      name: 'search',
      event: 'slr2SearchLoaded',
      component: 'slr2SearchComponent',
      method: 'show',
    },
  ];

  document.querySelectorAll('.slr2-header1').forEach((slr2Header1) => {
    icons.forEach((iconObj, index) => {
      slr2Header1
        .querySelectorAll(`.slr2-header1__${iconObj.name}-icon`)
        .forEach((icon) => {
          if (window[iconObj.component]) {
            onComponentLoaded(icon, iconObj);
          } else {
            document.documentElement.addEventListener(iconObj.event, () => {
              onComponentLoaded(icon, iconObj);
            });
          }
        });

      if (index === 1) {
        //basket
        if (window[iconObj.component]) {
          onBasketChanged(
            slr2Header1,
            iconObj,
            window[iconObj.component].getCount()
          );
        }
        document.documentElement.addEventListener(
          'slr2BasketCountChanged',
          (e) => {
            onBasketChanged(slr2Header1, iconObj, e.detail.count);
          }
        );
      }
    });
  });

  function onBasketChanged(header, iconObj, count) {
    header
      .querySelectorAll(`.slr2-header1__${iconObj.name}-icon`)
      .forEach((basket) => {
        if (Number(count) > 0 && basket.querySelector('span')) {
          basket.querySelector('span').textContent = count;
          basket.classList.add('slr2-header1__basket-full');
        } else {
          basket.classList.remove('slr2-header1__basket-full');
        }
      });
  }

  function onComponentLoaded(icon, iconObj) {
    icon.classList.remove('slr2--icon-preloader');
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        window[iconObj.component] &&
        window[iconObj.component][iconObj.method]
      ) {
        window[iconObj.component][iconObj.method]();
      }
    });
  }
});
