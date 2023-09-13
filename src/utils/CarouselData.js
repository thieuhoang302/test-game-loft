import Image from "../assets/images/image.png"
export const data = [
    {
        description:
            'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
        image: Image,
    },
    {
        description: 'Learn more about our security systems to make sure your utils is always safe',
        image: Image,
    },
    {
        description: 'Our team consists of the best experts in the industry, learn about them',
        image: Image,
    },
    {
        description: 'Find more about hardware and software used for your service',
        image: Image,
    },
    {
        description: 'We have provided services to top clients in tech industry',
        image: Image,
    },
    {
        description: 'We have provided services to top clients in tech industry',
        image: Image,
    },
    {
        description: 'We have provided services to top clients in tech industry',
        image: Image,
    },
    {
        description: 'We have provided services to top clients in tech industry',
        image: Image,
    },
];

export const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    centeredSlides: true,
    focusOnselect: false,
    accessability: false,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
