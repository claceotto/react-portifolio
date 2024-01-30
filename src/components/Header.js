import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    key: 'email',
  },
  {
    icon: faGithub,
    url: "https://github.com",
    key: 'Github',
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    key: 'Linkedin',
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    key: 'Medium',
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    key: 'StackOverflow',
  },
];

//Creates the icons based on the const socials 
const externalLinks = socials.map(social => {
  return (
    <a className='external-link' href="social.url" key={social.key} >
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  )
})


const Header = () => {

  const [translateYValue, settranslateYValue] = useState(true)

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = (e) => {
      const scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollTopPosition > lastScrollTop) {
        console.log('scrolling down')
        settranslateYValue(-200)


      } else if (scrollTopPosition < lastScrollTop) {
        console.log('scrolling up')
        settranslateYValue(0)
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2}
      transform={'auto'}
      translateY={translateYValue}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      className='header'
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {externalLinks}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                key='nav-projects'
                href="/#projects"
                onClick={handleClick('projects')}>
                Projects
              </a>
              <a
                key="nav-contact-me"
                href="/#contact-me"
                onClick={handleClick('contactme')}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
