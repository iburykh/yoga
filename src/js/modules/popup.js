const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              fixScroll = document.querySelectorAll('.lock'),
              scroll = calcScroll();

            trigger.forEach(function(item) {
                item.addEventListener('click', function(e) {
                    let target = e.target
                    if (target) {
                        e.preventDefault();
                    }
                    windows.forEach(item => {
                        item.classList.remove('active');
                    });
        
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    document.body.style.paddingRight = `${scroll}px`;
                    if (fixScroll.length > 0) {
                        fixScroll.forEach(item => {
                            item.style.left = `-${scroll}px`;
                        })
                    }
                });
            });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.remove('active');
            });

            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.paddingRight = `0px`;
            if (fixScroll.length > 0) {
                fixScroll.forEach(item => {
                    item.style.left = `-${scroll}px`;
                })
            }
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                windows.forEach(item => {
                    item.classList.remove('active');
                });

                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.body.style.paddingRight = `0px`;
                if (fixScroll.length > 0) {
                    fixScroll.forEach(item => {
                        item.style.left = `-${scroll}px`;
                    })
                }
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup-btn', '.popup', '.popup-close');
};
export default modals;