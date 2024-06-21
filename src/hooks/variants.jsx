export const fadeInUp = (delay = 0) => {
    return {
      hidden: {
        y: 40,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.1,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  

  export const fadeInLeft = (delay = 0) => {
    return {
      hidden: {
        x: -40,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1], 
        },
      },
    };
  };
  
  export const fadeInRight = (delay = 0) => {
    return {
      hidden: {
        x: 40,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1], 
        },
      },
    };
  };

  export const staggeredFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  export const scaleIn = (delay = 0) => {
    return {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
          delay: delay,
          bounce: 0.25,
        },
      },
    };
  };