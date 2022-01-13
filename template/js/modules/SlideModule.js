export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });


    if (document.querySelector('#slide-one')) {
        const swiper = document.querySelector('#slide-one');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },


            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-ramie')) {
        const swiper = document.querySelector('#slide-ramie');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // autoHeight: true,
                //spaceBetween: 20,
                slidesPerView: 4,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },

                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    }
                },
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-showroom')) {
        const swiper = document.querySelector('#slide-showroom');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // autoHeight: true,
                //spaceBetween: 20,
                slidesPerView: 4,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },

                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    }
                },
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-showroom-detail')) {
        const swiper = document.querySelector('#slide-showroom-detail');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                //     disableOnInteraction: false,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-thumb')) {
        const swiper = document.querySelector('#slide-thumb');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper2 = new Swiper('.product-thumb-small .swiper-container', {
                speed: 1000,
                //loop: true,
                spaceBetween: 10,
                slidesPerView: 6,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 4,
                    },
                   
                    900: {
                        spaceBetween: 10,
                        slidesPerView: 5,
                    },
                    1200: {
                        spaceBetween: 10,
                        slidesPerView: 6,
                    }
                },

            })
            const swiper = new Swiper('.product-thumb-big .swiper-container', {
                speed: 1000,
                // loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper2,
                },

            })
           
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-product-related')) {
        const swiper = document.querySelector('#slide-product-related');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },

                    576: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 5,
                    }
                },

            })
            
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-related-news')) {
        const swiper = document.querySelector('#slide-related-news');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // autoHeight: true,
                //spaceBetween: 20,
                slidesPerView: 3,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },

                    576: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    }
                },
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}