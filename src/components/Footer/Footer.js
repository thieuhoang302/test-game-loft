import React from 'react';
import {
    DividerCustom,
    FooterAddress,
    FooterColumn,
    FooterGrid,
    FooterIcon,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLogo,
    FooterRights,
    FooterSocialIcon,
    FooterWrapper,
} from './FooterStyles';
import {footerData, footerSocialData} from '../../utils/Contents';
import {Container, Row, Section} from '../../globalStyles';
import Logo from "../../assets/images/Gameloft_Logo.png";


function Footer() {
    return (
        <>
            <Section padding="20px 0">
                <Container>
                    <FooterWrapper>
                        <FooterGrid justify="space-between">
                            <FooterColumn id="footerLogo">
                                <FooterLogo to="/">
                                    <FooterIcon src={Logo} alt="logo"/>
                                </FooterLogo>
                                <FooterAddress>
                                    Follow Us
                                </FooterAddress>

                                <Row align="center" gap="1rem">
                                    {footerSocialData.map((social, index) => (
                                        <FooterSocialIcon
                                            key={index}
                                            href="/"
                                            target="_blank"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </FooterSocialIcon>
                                    ))}
                                </Row>
                            </FooterColumn>
                            <FooterLinkContainer>
                                {footerData.map((footerItem, index) => (
                                    <FooterLinkItems key={index}>
                                        <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
                                        {footerItem.links.map((link, linkIndex) => (
                                            <FooterLink key={linkIndex} to="/">
                                                {link}
                                            </FooterLink>
                                        ))}
                                    </FooterLinkItems>
                                ))}
                            </FooterLinkContainer>
                        </FooterGrid>
                    </FooterWrapper>
                </Container>
            </Section>
            <DividerCustom variant="middle"/>
            <Section padding="0.2rem 12.5rem 2rem 12.5rem" smPadding="20px 0">
                <FooterWrapper>
                    <FooterRights>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of
                        Gameloft in the U.S. and/or other countries. <br></br> All other trademarks are the property of
                        their
                        respective owners.</FooterRights>
                </FooterWrapper>
            </Section>
        </>
    );
}

export default Footer;
