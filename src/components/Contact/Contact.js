import React, {useEffect} from 'react';
import {Container, Section} from '../../globalStyles';
import {ContentColumn, ContentRow, Img, ImgWrapper,} from './ContactStyles.js';

import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import Form from "../Form/Form";
import {FormData} from "../../utils/Contents";

export const Contact = ({
                            inverse,
                            ITEM,
                            alt,
                        }) => {
    const initial = {opacity: 0, y: 30};
    const animation = useAnimation();

    const {ref, inView} = useInView({threshold: 0.2});

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });
        }
    }, [inView, animation]);

    return (
        <Section inverse={inverse} ref={ref}>
            <Container>
                <ContentRow>
                    <ContentColumn
                        initial={initial}
                        transition={{delay: 0.5, duration: 0.6}}
                        animate={animation}
                    >
                        <ImgWrapper>
                            <Img
                                src={ITEM.logo}
                                alt={alt}
                                whileHover={{rotate: 2, scale: 1.02}}
                                transition={{duration: 0.5}}
                            />
                        </ImgWrapper>
                    </ContentColumn>
                    <ContentColumn>
                        <Form {...FormData} />
                    </ContentColumn>
                </ContentRow>
            </Container>
        </Section>
    );
};
